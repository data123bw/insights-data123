select m.*, count(o.observation_id) as observation_count from bse.bse_core_metric m left join bse.bse_core_observation o using(metric_id) group by all order by m.primary_page_id, m.metric_id
