#!/usr/bin/env node
/**
 * BSE local-review wrapper.
 *
 * The BSE local validation command is EXCLUSIVELY:
 *   npx evidence sources --sources bse --strict
 *   npx evidence build:strict
 *
 * An unfiltered `evidence sources` evaluates every configured source, including
 * `sources/insights/` (type: motherduck -> md:insights, a remote endpoint).
 * On 2026-09-07 an unfiltered run hit that remote datasource and timed out
 * (see governance/BSE phase1/10_Production_Readiness/BSE_PRE_GATE_B_REMOTE_ATTEMPT_RECORD.md).
 *
 * This wrapper:
 *   - refuses to run if BSE_LOCAL_REVIEW is set and any arg would broaden scope;
 *   - strips MotherDuck / remote env vars from the child processes;
 *   - always runs the two sanctioned commands, nothing else.
 *
 * It never loads, deploys, pushes or merges.
 */
import { spawnSync } from "node:child_process";

const REMOTE_ENV = [
  "MOTHERDUCK_TOKEN", "MOTHERDUCK_DATABASE", "MOTHERDUCK_DB",
  "MD_TOKEN", "DUCKDB_DATABASE", "motherduck_token",
];

const extra = process.argv.slice(2);
const broadens = extra.some(
  (a) => a === "--sources" || a === "--all" || a.startsWith("--source")
);
if (process.env.BSE_LOCAL_REVIEW && broadens) {
  console.error(
    "BSE local review: refusing extra source arguments — the scope is fixed to " +
    "`--sources bse`. Remove the argument or unset BSE_LOCAL_REVIEW."
  );
  process.exit(2);
}
if (extra.length) {
  console.error("BSE local review takes no arguments; ignoring:", extra.join(" "));
}

const env = { ...process.env };
for (const k of REMOTE_ENV) delete env[k];

const steps = [
  ["evidence", ["sources", "--sources", "bse", "--strict"]],
  ["evidence", ["build:strict"]],
];

for (const [bin, args] of steps) {
  console.log("+", "npx", bin, args.join(" "));
  const r = spawnSync("npx", [bin, ...args], { stdio: "inherit", env, shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
