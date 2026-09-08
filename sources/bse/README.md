# BSE — production datasource (`md:insights`, schema `bse`)

As of **Phase 10 preparation (2026-09-08)** this source reads the **production**
MotherDuck database `md:insights`, schema `bse`, which was loaded and
independently verified in Phase 9B (`EXEC-20260908-BSEP9B01`,
`PHASE_9B_PRODUCTION_LOAD_VERIFIED`). `connection.yaml`:

```yaml
name: bse
type: motherduck
options:
  database: insights
  schema: bse
```

Every `*.sql` in this folder is a read-only `SELECT` against `bse.*`. Evidence
`sources` compilation only ever issues `SELECT`s — this source never writes.

## BSE-scoped compilation (the only sanctioned command)

Never run an unfiltered `evidence sources` — it evaluates every configured
source. Compile **only** the `bse` source:

```
cd insights-data123/evidence
export MOTHERDUCK_TOKEN=<read token>      # from %LOCALAPPDATA%\data123\.env
npm run bse:prod-sources                  # == evidence sources --sources bse --strict, scope-locked
npm run build:strict
```

`scripts/bse-prod-sources.mjs` refuses any argument that would broaden the source
scope beyond `--sources bse` (exit 2), exactly like the local-review wrapper.

`npm run bse:local-review` (`scripts/bse-local-review.mjs`) is retained as the
scope guard for offline page review. To use it against the local fixture,
temporarily point `connection.yaml` back to `type: duckdb` /
`filename: ./bse_stack.duckdb`, run the review, then restore the production
`connection.yaml` above. The committed `connection.yaml` is always the production
motherduck form.

## Governed-model semantics

`bse_mart_canonical` (247) is NOT a superset of `bse_mart_public` (340) — the
93-row difference is permitted provisional pre-2022 history. See
`governance/BSE phase1/10_Production_Readiness/BSE_mart_semantics.md`.

## Rebuild the offline local fixture (for `bse:local-review`)

```
cd insights-data123/etl
python bse/pipeline.py --year 2025
python bse/build_disclosures.py
python bse/build_local.py --db ../evidence/sources/bse/bse_stack.duckdb
```
