-- Crime dashboard targets the 2024 report edition.
-- report_year filters the report edition (not the data year); every
-- crime.* table + view carries it after crime/migrations/01_add_report_year.sql.
select *
from crime.tndp_indicators
where report_year = 2024
