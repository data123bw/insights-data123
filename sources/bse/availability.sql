select metric_family, cast(cast(reference_year as integer) as varchar) as year,
  count(*) filter (where selection_role='canonical') as canonical_n,
  count(*) filter (where is_provisional) as provisional_n
from bse.bse_mart_evidence where reference_year is not null
group by 1,2 order by 1,2
