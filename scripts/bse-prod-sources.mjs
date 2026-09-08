#!/usr/bin/env node
/**
 * BSE production-source compilation wrapper (Phase 10 preparation, 2026-09-08).
 *
 * As of Phase 10 the `bse` Evidence source is `type: motherduck` -> md:insights,
 * schema `bse` (loaded + independently verified in Phase 9B). The ONLY sanctioned
 * BSE source-compilation command is:
 *   npx evidence sources --sources bse --strict
 *   npx evidence build:strict
 *
 * An unfiltered `evidence sources` evaluates EVERY configured source (including
 * `sources/insights/`). This wrapper keeps the compilation locked to the single
 * `bse` source so a broad/unfiltered run can never happen by accident. It:
 *   - refuses any argument that would broaden the source scope (exit 2);
 *   - keeps MOTHERDUCK_TOKEN in the child env (the bse source is now remote and
 *     read-only) but touches nothing outside `--sources bse`;
 *   - runs only `sources --sources bse --strict` then `build:strict`.
 *
 * It issues SELECTs only. It never loads, writes, deploys, pushes or merges.
 * For OFFLINE page review against a local bse_stack.duckdb, use
 * `npm run bse:local-review` instead.
 */
import { spawnSync } from "node:child_process";

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

const env = { ...process.env };

const steps = [
  ["evidence", ["sources", "--sources", "bse", "--strict"]],
  ["evidence", ["build:strict"]],
];

for (const [bin, args] of steps) {
  console.log("+", "npx", bin, args.join(" "));
  const r = spawnSync("npx", [bin, ...args], { stdio: "inherit", env, shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
