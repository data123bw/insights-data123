# crime sources — report-edition filter

Every `.sql` in this folder filters `where report_year = 2024`.

`report_year` is the **report edition** (the Botswana Police Service *Annual
Crime Statistics Report 2024*), not the data year. It was added to every
`crime.*` table and view by `etl/crime/migrations/01_add_report_year.sql` so
that a future edition (2025, …) can be loaded alongside 2024 instead of
colliding on the primary key. Without this filter, once a second edition
lands, every chart on the crime pages would blend both editions.

## Deploy ordering — important

These queries **require the ETL migration to have already run** against
`md:insights`. `report_year` does not exist on the live tables until then, so
deploying this branch before the migration makes every crime query error and
takes the crime section of the dashboard down.

Correct sequence: run the crime migration → verify → **then** merge/deploy
this branch. See `etl/CRIME_PRODUCTION_MIGRATION.md`.

## View-backed sources

`offence_list2024.sql` and `perpetrator_unemployment.sql` read
`crime.v_serious_offences_2024` and `crime.v_perpetrator_unemployment`. The
migration recreates both views to expose a `report_year` column, so the
`where report_year = 2024` filter works on them too. (The third crime view,
`crime.v_victim_gender_ratio`, has no dashboard source and is not used here.)

## When the 2025 edition is loaded

Bump the filter in all 31 files to the new edition, or parameterise it
(Evidence input / a single `report_year` source other queries join to). The
downstream page queries in `pages/crime-statistics-2024/` all read
`insights.<source>` — they operate on these filtered results and need no
change.
