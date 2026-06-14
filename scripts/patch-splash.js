import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const TARGETS = [
	resolve(root, 'node_modules/@evidence-dev/evidence/template/src/app.html'),
	resolve(root, '.evidence/template/src/app.html')
];

const SPLASH_DIV = `\t\t\t\t<div style="text-align:center;">
\t\t\t\t\t<img src="/icons.svg" alt="DATA123" style="width:120px;height:120px;" />
\t\t\t\t</div>`;

const SVG_RE = /<svg[\s\S]*?<\/svg>/;
const OLD_IMG_RE = /<img src="\/icon\.svg"[^>]*>/;

let patched = 0;

for (const target of TARGETS) {
	try {
		const original = readFileSync(target, 'utf8');
		let updated = original;

		if (SVG_RE.test(original)) {
			updated = original.replace(SVG_RE, SPLASH_DIV);
		} else if (OLD_IMG_RE.test(original)) {
			updated = original.replace(OLD_IMG_RE, `<img src="/icons.svg" alt="DATA123" style="width:120px;height:120px;" />`);
		} else {
			console.log(`[patch-splash] already patched: ${target}`);
			continue;
		}

		writeFileSync(target, updated, 'utf8');
		console.log(`[patch-splash] patched: ${target}`);
		patched++;
	} catch (err) {
		console.warn(`[patch-splash] could not patch ${target}: ${err.message}`);
	}
}

console.log(`[patch-splash] done (${patched} file(s) updated)`);
