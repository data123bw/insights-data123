import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 * Durable patch: de-duplicate identical Arrow hash fetches inside
 * getPrerenderedQueries() in Evidence's root +layout.js.
 *
 * Written against @evidence-dev/evidence 40.1.8.
 *
 * Before: one fetch()/tableFromIPC() per entry in all-queries.json
 *         (~39 fetches for /crime-statistics-2024/overview, 30 unique hashes).
 * After:  one fetch()/tableFromIPC() per UNIQUE hash, results reused per
 *         query name. arrowTableToJSON(table) is still called once per query
 *         name, so the returned object shape is byte-identical.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const EXPECTED_EVIDENCE_VERSION = '40.1.8';
const MARKER = '[dedupe-arrow]';

// Normalise line endings so matching works regardless of whether the checked-out
// patch script or the npm-installed Evidence target uses CRLF or LF.
const lf = (s) => s.replace(/\r\n/g, '\n');

const REQUIRED_TARGET = resolve(
	root,
	'node_modules/@evidence-dev/evidence/template/src/pages/+layout.js'
);
const MIRROR_TARGET = resolve(root, '.evidence/template/src/pages/+layout.js');

// Exact original fragment (tabs, LF, blank lines). Must match verbatim.
const ORIGINAL = `	const resolved_entries = await Promise.all(
		Object.entries(sql_cache_with_hashed_query_strings).map(async ([query_name, query_hash]) => {
			const res = await fetch(addBasePath(\`/api/prerendered_queries/\${query_hash}.arrow\`));
			if (!res.ok) return null;

			const table = await tableFromIPC(res);
			return [query_name, arrowTableToJSON(table)];
		})
	);

	return Object.fromEntries(resolved_entries.filter(Boolean));`;

const REPLACEMENT = `	// ${MARKER} Fetch + parse each unique Arrow hash once, then reuse the
	// parsed table for every query name that maps to that hash.
	const unique_hashes = [...new Set(Object.values(sql_cache_with_hashed_query_strings))];
	const tables_by_hash = new Map(
		await Promise.all(
			unique_hashes.map(async (query_hash) => {
				const res = await fetch(addBasePath(\`/api/prerendered_queries/\${query_hash}.arrow\`));
				if (!res.ok) return [query_hash, null];
				return [query_hash, await tableFromIPC(res)];
			})
		)
	);

	const resolved_entries = Object.entries(sql_cache_with_hashed_query_strings).map(
		([query_name, query_hash]) => {
			const table = tables_by_hash.get(query_hash);
			if (!table) return null;
			return [query_name, arrowTableToJSON(table)];
		}
	);

	return Object.fromEntries(resolved_entries.filter(Boolean));`;

function installedEvidenceVersion() {
	try {
		const pkg = JSON.parse(
			readFileSync(
				resolve(root, 'node_modules/@evidence-dev/evidence/package.json'),
				'utf8'
			)
		);
		return pkg.version ?? 'unknown';
	} catch {
		return 'unknown';
	}
}

/**
 * @param {string} target
 * @param {boolean} required
 * @returns {boolean} true if the file is patched (now or already), false otherwise
 */
function patchFile(target, required) {
	const label = required ? 'required' : 'mirror';

	if (!existsSync(target)) {
		if (required) {
			console.error(`[patch-dedupe-arrow] ERROR: ${label} target not found: ${target}`);
			return false;
		}
		console.log(`[patch-dedupe-arrow] ${label} target absent (ok): ${target}`);
		return true;
	}

	const original = lf(readFileSync(target, 'utf8'));
	const ORIGINAL_LF = lf(ORIGINAL);
	const REPLACEMENT_LF = lf(REPLACEMENT);

	if (original.includes(MARKER)) {
		console.log(`[patch-dedupe-arrow] already patched: ${target}`);
		return true;
	}

	const occurrences = original.split(ORIGINAL_LF).length - 1;

	if (occurrences === 0) {
		const msg =
			`[patch-dedupe-arrow] ${label.toUpperCase()}: expected source fragment not found in\n` +
			`  ${target}\n` +
			`  Installed @evidence-dev/evidence: ${installedEvidenceVersion()} ` +
			`(patch written for ${EXPECTED_EVIDENCE_VERSION})\n` +
			`  getPrerenderedQueries() may have changed upstream. Patch NOT applied.\n` +
			`  Review the new source and update scripts/patch-dedupe-arrow.js.`;
		if (required) {
			console.error(msg);
			return false;
		}
		console.warn(msg);
		return true; // mirror is best-effort; build regenerates it from node_modules
	}

	if (occurrences > 1) {
		console.error(
			`[patch-dedupe-arrow] ${label.toUpperCase()}: expected fragment occurs ${occurrences} ` +
				`times in\n  ${target}\n  Refusing to patch ambiguously.`
		);
		return !required;
	}

	writeFileSync(target, original.replace(ORIGINAL_LF, REPLACEMENT_LF), 'utf8');
	console.log(`[patch-dedupe-arrow] patched: ${target}`);
	return true;
}

const requiredOk = patchFile(REQUIRED_TARGET, true);
patchFile(MIRROR_TARGET, false);

if (!requiredOk) {
	console.error('[patch-dedupe-arrow] FAILED: required node_modules target not patched.');
	process.exit(1);
}

console.log('[patch-dedupe-arrow] done.');
