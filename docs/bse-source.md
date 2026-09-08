# BSE Evidence source — `md:insights` schema `bse`

As of **Phase 10 preparation (2026-09-08)** `evidence/sources/bse/` reads the
**production** MotherDuck database `md:insights`, schema `bse`, loaded and
independently verified in Phase 9B (`EXEC-20260908-BSEP9B01`,
`PHASE_9B_PRODUCTION_LOAD_VERIFIED`).

`sources/bse/connection.yaml`:

```yaml
name: bse
type: motherduck
options:
  database: insights
  schema: bse
```

Every `sources/bse/*.sql` is a read-only `SELECT` against `bse.*`. Evidence
`sources` compilation issues `SELECT`s only — this source never writes.

## Important: `sources/bse/` must contain ONLY `connection.yaml` + `*.sql`

The Evidence **motherduck** connector is a "simple connector": Evidence's
`wrapSimpleConnector` runs **every file** in the source directory as a query
(unlike the `duckdb` connector, which filters to `*.sql`). A stray `README.md`,
`*.duckdb`, `*.txt`, etc. in `sources/bse/` will be parsed as SQL and fail the
strict build. Keep source docs here in `docs/`, not in the source directory.
`npm run bse:prod-sources` asserts this before compiling.

## BSE-scoped compilation (the only sanctioned command)

Never run an unfiltered `evidence sources` — it evaluates every configured
source, including `sources/insights/`. Compile **only** the `bse` source:

```
cd insights-data123/evidence
npm run bse:prod-sources
```

`scripts/bse-prod-sources.mjs`:
- refuses any argument that would broaden source scope beyond `--sources bse`
  (exit 2);
- resolves the **read-only** MotherDuck token from the out-of-tree
  `%LOCALAPPDATA%\data123\.env` (`MOTHERDUCK_TOKEN=…`) and injects it as
  `EVIDENCE_SOURCE__bse__token` for the child process only — never printed, never
  written into the repo (the `@evidence-dev/motherduck` connector reads only its
  `token` option / that env override, not `MOTHERDUCK_TOKEN`);
- asserts `sources/bse/` holds only `connection.yaml` + `*.sql`;
- then runs `evidence sources --sources bse --strict` and `evidence build:strict`.

Expected: 42 BSE sources, exit 0; `bse_mart_evidence` 357 · `bse_mart_public` 340
· `bse_mart_canonical` 247 · `bse_mart_restricted` 5 · `bse_mart_withheld` 12 ·
`bse_core_data_release.release_status` `approved` · `bse_disc_release.status`
`A2_VERIFIED`.

## CI / hosting build

`.github/workflows/deploy.yml` builds the whole hub on push to `main` with
`npm run sources && npm run build`. Both motherduck-backed sources authenticate
with the same protected secret:

```yaml
env:
  EVIDENCE_SOURCE__insights__token: ${{ secrets.MOTHERDUCK_TOKEN }}
  EVIDENCE_SOURCE__bse__token: ${{ secrets.MOTHERDUCK_TOKEN }}
```

A pre-step fails the job closed if `secrets.MOTHERDUCK_TOKEN` is absent. The
secret value is never printed. `sources/insights/` is unchanged.

## Governed-model semantics

`bse_mart_canonical` (247) is NOT a superset of `bse_mart_public` (340) — the
93-row difference is permitted provisional pre-2022 history. See
`governance/BSE phase1/10_Production_Readiness/BSE_mart_semantics.md`.

## Offline page review (`npm run bse:local-review`)

`scripts/bse-local-review.mjs` is retained as the offline scope guard. To use it,
build the local fixture **outside** `sources/bse/` and temporarily point
`connection.yaml` at it:

```
cd insights-data123/etl
python bse/pipeline.py --year 2025
python bse/build_disclosures.py
python bse/build_local.py --db ../evidence/.bse-local-fixture/bse_stack.duckdb
```

Then, in `sources/bse/connection.yaml`, temporarily:

```yaml
name: bse
type: duckdb
options:
  filename: ../../.bse-local-fixture/bse_stack.duckdb
```

run `npm run bse:local-review`, and **restore** the production `connection.yaml`
above. The committed `connection.yaml` is always the production motherduck form.
`.bse-local-fixture/` is gitignored.
