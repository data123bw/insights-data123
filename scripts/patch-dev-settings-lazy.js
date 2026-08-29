import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 * Durable patch: load the DEV-ONLY settings panels
 * (DeploySettingsPanel / TelemetrySettingsPanel / SourceConfig) via a
 * dev-gated dynamic import in Evidence's settings/+page.svelte.
 *
 * Written against @evidence-dev/evidence 40.1.8.
 *
 * Why: the whole settings page renders under `{#if dev}`, but the static
 * imports pull SourceConfig -> NewSourceForm / SourceConfigRow, which do
 * `import * as simpleIcons from '@steeze-ui/simple-icons'` and index it by a
 * runtime key. Rollup cannot tree-shake a dynamically-indexed namespace, so
 * the full ~3200-icon @steeze-ui/simple-icons catalogue (~4.7 MB raw /
 * ~1.64 MB brotli) is pinned into a chunk shared with the root layout
 * (Header.svelte also imports from that package) and modulepreloaded on
 * every page, including the chart-free homepage.
 *
 * After: in a production build `dev` is false, the dynamic import is
 * dead-code eliminated, node 13 (/settings) no longer references
 * SourceConfig, and the icon catalogue drops out of the build entirely.
 * FormattingSettingsPanel stays a normal static import (it never reaches
 * simple-icons).
 *
 * Measured effect on this project: homepage JS 7,873,444 -> 2,978,936 bytes
 * raw, ~2392.7 KB -> ~733.5 KB brotli q11.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const EXPECTED_EVIDENCE_VERSION = '40.1.8';
const MARKER = '[dev-settings-lazy]';

// Normalise line endings so matching works regardless of whether the checked-out
// patch script or the npm-installed Evidence target uses CRLF or LF.
const lf = (s) => s.replace(/\r\n/g, '\n');

const REQUIRED_TARGET = resolve(
	root,
	'node_modules/@evidence-dev/evidence/template/src/pages/settings/+page.svelte'
);
const MIRROR_TARGET = resolve(root, '.evidence/template/src/pages/settings/+page.svelte');

/**
 * Exact source fragments (tabs, LF) and their replacements. Each must occur
 * verbatim exactly once. No broad regex.
 * @type {{name: string, original: string, replacement: string}[]}
 */
const EDITS = [
	{
		name: 'script import block',
		original: `<script>
	// @ts-check

	/** @type {import("./$types").PageData} */
	export let data;
	let { settings, customFormattingSettings, sources, plugins } = data;
	$: ({ settings, customFormattingSettings, sources, plugins } = data);

	import { dev } from '$app/environment';
	import {
		DeploySettingsPanel,
		FormattingSettingsPanel,
		TelemetrySettingsPanel,
		SourceConfig
	} from '@evidence-dev/core-components';
</script>`,
		replacement: `<script>
	// @ts-check
	// ${MARKER} The DeploySettingsPanel / TelemetrySettingsPanel / SourceConfig
	// panels are dev-only (this whole page renders under {#if dev}). Loading them
	// via a dev-gated dynamic import keeps SourceConfig's transitive
	// \`import * as simpleIcons\` (the full @steeze-ui/simple-icons catalogue) out
	// of the production bundle graph. FormattingSettingsPanel never reaches
	// simple-icons, so it stays a normal static import.

	/** @type {import("./$types").PageData} */
	export let data;
	let { settings, customFormattingSettings, sources, plugins } = data;
	$: ({ settings, customFormattingSettings, sources, plugins } = data);

	import { dev } from '$app/environment';
	import { FormattingSettingsPanel } from '@evidence-dev/core-components';

	let DeploySettingsPanel;
	let TelemetrySettingsPanel;
	let SourceConfig;
	if (dev) {
		import('@evidence-dev/core-components').then((m) => {
			DeploySettingsPanel = m.DeploySettingsPanel;
			TelemetrySettingsPanel = m.TelemetrySettingsPanel;
			SourceConfig = m.SourceConfig;
		});
	}
</script>`
	},
	{
		name: '<SourceConfig> usage',
		original: `					<SourceConfig availableSourcePlugins={plugins} {sources} />`,
		replacement: `					{#if SourceConfig}
						<svelte:component
							this={SourceConfig}
							availableSourcePlugins={plugins}
							{sources}
						/>
					{/if}`
	},
	{
		name: '<DeploySettingsPanel> usage',
		original: `					<DeploySettingsPanel {settings} {sources} />`,
		replacement: `					{#if DeploySettingsPanel}
						<svelte:component this={DeploySettingsPanel} {settings} {sources} />
					{/if}`
	},
	{
		name: '<TelemetrySettingsPanel> usage',
		original: `					<TelemetrySettingsPanel {settings} />`,
		replacement: `					{#if TelemetrySettingsPanel}
						<svelte:component this={TelemetrySettingsPanel} {settings} />
					{/if}`
	}
];

function installedEvidenceVersion() {
	try {
		const pkg = JSON.parse(
			readFileSync(resolve(root, 'node_modules/@evidence-dev/evidence/package.json'), 'utf8')
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
			console.error(`[patch-dev-settings-lazy] ERROR: ${label} target not found: ${target}`);
			return false;
		}
		console.log(`[patch-dev-settings-lazy] ${label} target absent (ok): ${target}`);
		return true;
	}

	let content = lf(readFileSync(target, 'utf8'));

	if (content.includes(MARKER)) {
		console.log(`[patch-dev-settings-lazy] already patched: ${target}`);
		return true;
	}

	// Verify every fragment occurs exactly once before touching anything.
	for (const edit of EDITS) {
		const original = lf(edit.original);
		const occurrences = content.split(original).length - 1;

		if (occurrences === 0) {
			const msg =
				`[patch-dev-settings-lazy] ${label.toUpperCase()}: expected fragment not found: "${edit.name}"\n` +
				`  ${target}\n` +
				`  Installed @evidence-dev/evidence: ${installedEvidenceVersion()} ` +
				`(patch written for ${EXPECTED_EVIDENCE_VERSION})\n` +
				`  settings/+page.svelte may have changed upstream. Patch NOT applied.\n` +
				`  Review the new source and update scripts/patch-dev-settings-lazy.js.`;
			if (required) {
				console.error(msg);
				return false;
			}
			console.warn(msg);
			return true; // mirror is best-effort; build regenerates it from node_modules
		}

		if (occurrences > 1) {
			const msg =
				`[patch-dev-settings-lazy] ${label.toUpperCase()}: fragment "${edit.name}" occurs ` +
				`${occurrences} times in\n  ${target}\n  Refusing to patch ambiguously.`;
			if (required) {
				console.error(msg);
				return false;
			}
			console.warn(msg);
			return true;
		}
	}

	for (const edit of EDITS) {
		content = content.replace(lf(edit.original), lf(edit.replacement));
	}

	writeFileSync(target, content, 'utf8');
	console.log(`[patch-dev-settings-lazy] patched: ${target}`);
	return true;
}

const requiredOk = patchFile(REQUIRED_TARGET, true);
patchFile(MIRROR_TARGET, false);

if (!requiredOk) {
	console.error(
		'[patch-dev-settings-lazy] FAILED: required node_modules target not patched.'
	);
	process.exit(1);
}

console.log('[patch-dev-settings-lazy] done.');
