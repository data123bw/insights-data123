# BSE — local-development datasource

`bse_stack.duckdb` is a **local, gitignored** DuckDB file holding the full
`bse.*` stack (raw → core → disc → mart) built from `etl/bse/`. It is the
Phase-7 target: the BSE Evidence pages are developed against it **without any
MotherDuck connection**.

## Rebuild

```
cd insights-data123/etl
python bse/pipeline.py --year 2025
python bse/build_disclosures.py
python bse/build_local.py --db ../evidence/sources/bse/bse_stack.duckdb
```

Then `npx evidence sources --sources bse` (from `evidence/`) to materialise the
parquet.

## Production cutover (Phase 10, after GATE B)

Re-point these sources at the `insights` MotherDuck connection (schema `bse`),
exactly as the crime sources read `crime.*` — see
`governance/BSE phase1/12_Production_Execution_Guide.md` Phase 10.

## Governed-model semantics

`bse_mart_canonical` (247) is NOT a superset of `bse_mart_public` (340) — the
93-row difference is permitted provisional pre-2022 history. See
`governance/BSE phase1/10_Production_Readiness/BSE_mart_semantics.md`.
Every disclosure table (`bse_disc_*`, Pages 5 & 6) is `VISUAL_FIRST_PASS`.
