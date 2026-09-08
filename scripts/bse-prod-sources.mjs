#!/usr/bin/env node
/**
 * BSE production-source compilation wrapper (Phase 10 preparation, 2026-09-08).
 *
 * The `bse` Evidence source is `type: motherduck` -> md:insights, schema `bse`
 * (loaded + independently verified in Phase 9B). The ONLY sanctioned BSE
 * source-compilation command is:
 *   npx evidence sources --sources bse --strict
 *   npx evidence build:strict
 *
 * Token handling — why this wrapper is needed
 * ------------------------------------------
 * The Evidence motherduck connector (@evidence-dev/motherduck) builds its
 * connection string purely from the *resolved source options*:
 *     md:${opts.database}?motherduck_token=${opts.token}
 * `opts.token` comes only from `connection.yaml` `options.token` OR the env
 * override `EVIDENCE_SOURCE__bse__token`. It does NOT read `MOTHERDUCK_TOKEN`.
 * With no token option set, `opts.token` is '' and DuckDB's motherduck extension
 * rejects the empty JWT ("not in the form Header.Payload.Signature").
 *
 * The read-only token lives out-of-tree at %LOCALAPPDATA%\data123\.env
 * (MOTHERDUCK_TOKEN=...). This wrapper reads that file and injects it as
 * `EVIDENCE_SOURCE__bse__token` for the child process only — never printed,
 * never written into the repo. sources/insights/ is untouched.
 *
 * Scope lock: refuses any argument that would broaden source scope past
 * `--sources bse` (exit 2). Issues SELECTs only — never loads, writes, deploys,
 * pushes or merges. For OFFLINE review against a local bse_stack.duckdb, use
 * `npm run bse:local-review` instead.
 */
import { spawnSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const extra = process.argv.slice(2);
const broadens = extra.some(
  (a) => a === "--sources" || a === "--all" || a === "-a" || a.startsWith("--source")
);
if (broadens) {
  console.error(
    "bse:prod-sources: refusing arguments that would broaden source scope — " +
    "the scope is fixed to `--sources bse`."
  );
  process.exit(2);
}
if (extra.length) {
  console.error("bse:prod-sources takes no arguments; ignoring:", extra.join(" "));
}

// --- source-directory hygiene ------------------------------------------------
// The motherduck connector is a "simple connector": Evidence runs EVERY file in
// sources/bse/ as a query (no .sql filter). A stray README.md / *.duckdb / etc.
// would be parsed as SQL and break the strict build. Refuse to compile if the
// directory holds anything other than connection.yaml + *.sql.
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const BSE_SOURCE_DIR = path.join(SCRIPT_DIR, "..", "sources", "bse");
{
  const allowed = new Set(["connection.yaml", "connection.options.yaml"]);
  const bad = readdirSync(BSE_SOURCE_DIR, { withFileTypes: true })
    .filter((d) => d.isFile() && !allowed.has(d.name) && !d.name.endsWith(".sql"))
    .map((d) => d.name);
  if (bad.length) {
    console.error(
      "bse:prod-sources: sources/bse/ must contain only connection.yaml + *.sql. " +
      "Remove: " + bad.join(", ") + " (source docs belong in evidence/docs/; the " +
      "offline fixture belongs in evidence/.bse-local-fixture/)."
    );
    process.exit(4);
  }
}

// --- resolve the read-only MotherDuck token from the out-of-tree .env ---------
function readMotherduckToken() {
  // 1) already provided as the Evidence per-source override -> use as-is
  if (process.env.EVIDENCE_SOURCE__bse__token) return process.env.EVIDENCE_SOURCE__bse__token;

  const localAppData =
    process.env.LOCALAPPDATA ||
    (process.env.USERPROFILE && path.join(process.env.USERPROFILE, "AppData", "Local"));
  if (!localAppData) return process.env.MOTHERDUCK_TOKEN || null;

  const envPath = path.join(localAppData, "data123", ".env");
  let text;
  try {
    text = readFileSync(envPath, "utf-8");
  } catch {
    return process.env.MOTHERDUCK_TOKEN || null;
  }
  for (const line of text.split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith("#")) continue;
    const m = s.match(/^MOTHERDUCK_TOKEN\s*=\s*(.*)$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  return process.env.MOTHERDUCK_TOKEN || null;
}

const token = readMotherduckToken();
if (!token) {
  console.error(
    "bse:prod-sources: no MotherDuck token found. Set EVIDENCE_SOURCE__bse__token, " +
    "or put MOTHERDUCK_TOKEN=<read token> in %LOCALAPPDATA%\\data123\\.env."
  );
  process.exit(3);
}

const env = { ...process.env };
env.EVIDENCE_SOURCE__bse__token = token; // Evidence per-source override (read-only)
delete env.MOTHERDUCK_TOKEN;             // avoid ambiguity; the connector ignores it anyway
console.log("+ bse source: md:insights schema bse (read-only); token via EVIDENCE_SOURCE__bse__token");

const steps = [
  ["evidence", ["sources", "--sources", "bse", "--strict"]],
  ["evidence", ["build:strict"]],
];

for (const [bin, args] of steps) {
  console.log("+", "npx", bin, args.join(" "));
  const r = spawnSync("npx", [bin, ...args], { stdio: "inherit", env, shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
