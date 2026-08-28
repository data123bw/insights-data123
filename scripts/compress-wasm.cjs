const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BUILD_DIR = path.resolve('build');

function findWasmFiles(dir) {
  const results = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...findWasmFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.wasm')) {
      results.push(fullPath);
    }
  }

  return results;
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error('Build directory not found:', BUILD_DIR);
  process.exit(1);
}

const wasmFiles = findWasmFiles(BUILD_DIR);

if (wasmFiles.length === 0) {
  console.error('No WASM files found in build/');
  process.exit(1);
}

console.log(`Found ${wasmFiles.length} WASM file(s).`);

for (const wasmFile of wasmFiles) {
  const outputFile = `${wasmFile}.br`;
  const input = fs.readFileSync(wasmFile);

  const compressed = zlib.brotliCompressSync(input, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 9
    }
  });

  fs.writeFileSync(outputFile, compressed);

  const reduction = (1 - compressed.length / input.length) * 100;

  console.log(
    `${path.relative(BUILD_DIR, wasmFile)}: ` +
    `${input.length.toLocaleString()} → ` +
    `${compressed.length.toLocaleString()} bytes ` +
    `(${reduction.toFixed(2)}% reduction)`
  );
}
