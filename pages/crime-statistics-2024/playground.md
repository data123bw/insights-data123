
<style>
/* ── Hero ── */
.hero {
    background: #1E3A5F;
    color: white;
    padding: 40px 32px 120px;
    border-radius: 12px;
    margin-bottom: 32px;
}

.hero-meta {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin: 0 0 8px;
}

.hero h1 {
    color: white;
    font-size: 28px;
    font-weight: 800;
    margin: 4px 0 12px;
    letter-spacing: -0.03em;
    line-height: 1.2;
}

.hero-summary {
    color: rgba(255,255,255,0.82);
    font-size: 16px;
    line-height: 1.65;
    margin: 0 0 20px;
    max-width: 72ch;
}

.hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.hero-tag {
    background: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.78);
    font-size: 12px;
    font-weight: 500;
    padding: 4px 11px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.18);
}

/* ── Section Label ── */
.section-label {
    display: block;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0042A0;
    padding-left: 16px;
    border-left: 3px solid #0042A0;
    margin: 40px 0 8px;
}

/* ── KPI Strip ── */
.kpi-strip {
    margin: 0 0 32px;
}

/* ── Section 2 — National Snapshot ── */
.snapshot-section {
    position: relative;
    margin-top: -90px;
    z-index: 10;
    padding: 0 24px;
}

.snapshot-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
}

.snapshot-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 28px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.04),
        0 18px 32px rgba(0,0,0,.05);
    transition: all .25s ease;
}

.snapshot-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.snapshot-value {
    font-size: 30px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1;
}

.snapshot-trend {
    font-size: 30px;
    font-weight: 800;
    line-height: 1;
}

.snapshot-label {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    color: #334155;
    white-space: nowrap;
}


.positive .snapshot-value,
.positive .snapshot-trend {
    color: #10b981;
}

.danger .snapshot-value {
    color: #dc2626;
}

/* ── Section 3 — Executive Summary ── */
.executive-summary {
    padding: 16px 80px 24px;
}

.section-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 16px;
}

.section-tag {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4338ca;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.section-header h2 {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 8px;
}

.section-header p {
    font-size: 16px;
    line-height: 1.65;
    color: #64748b;
    max-width: 72ch;
    margin: 0 auto;
}

.insights-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.insight-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 14px 16px;
    display: grid;
    grid-template-columns: 36px 1fr;
    grid-template-rows: auto auto;
    column-gap: 10px;
    row-gap: 6px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
}

.insight-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.insight-icon {
    grid-column: 1;
    grid-row: 1;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.insight-icon.success { background: #ecfdf5; color: #10b981; }
.insight-icon.danger  { background: #fef2f2; color: #dc2626; }
.insight-icon.primary { background: #eff6ff; color: #2563eb; }
.insight-icon.warning { background: #fffbeb; color: #f59e0b; }

.insight-card h3 {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    color: #0f172a;
}

.insight-card p {
    grid-column: 1 / -1;
    grid-row: 2;
    font-size: 12px;
    line-height: 1.5;
    color: #64748b;
    margin: 0;
}

/* ── Section 4 — National Crime Trend ── */
.trend-section {
    padding: 20px;
}

.trend-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 28px;
    align-items: stretch;
}

.trend-chart-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.chart-header h3 {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
}

.chart-header span {
    font-size: 14px;
    color: #64748b;
}

.chart-container {
    flex: 1;
    min-height: 0;
}

.findings-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow: hidden;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.finding-item {
    display: flex;
    gap: 16px;
}

.finding-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
}

.finding-icon.success {
    background: #ecfdf5;
    color: #10b981;
}

.finding-icon.primary {
    background: #eff6ff;
    color: #2563eb;
}

.finding-icon.warning {
    background: #fffbeb;
    color: #f59e0b;
}

.finding-item h4 {
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #0f172a;
}

.finding-item p {
    font-size: 11px;
    font-weight: 400;
    line-height: 1.6;
    color: #64748b;
}

/* =====================================================
SECTION 5 — GEOGRAPHIC INTELLIGENCE
===================================================== */

.geo-section {

    padding: 80px;
}

.geo-layout {

    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 28px;

    align-items: stretch;
}

.map-card {

    background: white;

    border: 1px solid #e2e8f0;

    border-radius: 24px;

    padding: 28px;

    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.card-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.card-header h3 {

    font-size: 22px;

    font-weight: 700;
}

.card-header span {

    color: #64748b;
}

.geo-insights {

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    height: 100%;

    gap: 10px;
}

.geo-highlight {

    background: #0042A0;

    color: white;

    border-radius: 24px;

    padding: 16px 20px;
}

.geo-rank {

    font-size: 11px;
    font-weight: 400;

    opacity: .9;

    letter-spacing: .1em;
}

.geo-value {

    font-size: 24px;

    font-weight: 800;

    margin-top: 4px;
}

.geo-label {

    font-size: 15px;

    font-weight: 700;
}

.geo-desc {

    margin-top: 4px;

    font-size: 12px;

    color: rgba(255,255,255,.75);
}

.geo-stat {

    background: white;

    border: 1px solid #e2e8f0;

    border-radius: 16px;

    padding: 12px 16px;

    border-left: 4px solid #e2e8f0;
}

.geo-stat.orange { border-left-color: #FF9F43; }

.geo-stat.purple { border-left-color: #9A67FD; }

.geo-stat.green  { border-left-color: #3EC58E; }

.geo-stat-value {

    font-size: 22px;

    font-weight: 800;

    color: #10213d;
}

.geo-stat-label {

    margin-top: 2px;

    font-size: 12px;

    color: #64748b;
}

.geo-story {

    background: #f8fafc;

    border-left: 4px solid #14b8a6;

    border-radius: 16px;

    padding: 12px 16px;

    font-size: 12px;

    line-height: 1.6;

    color: #475569;
}

/* =====================================================
SECTION 6 — CRIME STRUCTURE
===================================================== */

.crime-structure {

    padding: 80px;
}

.structure-card {

    background: white;

    border: 1px solid #e2e8f0;

    border-radius: 24px;

    padding: 30px;

    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.structure-insight {

    margin-top: 24px;

    background: #f8fafc;

    border-left: 5px solid #14B8A6;

    border-radius: 18px;

    padding: 24px;

    display: flex;

    gap: 18px;
}

.insight-icon {

    font-size: 26px;
}

.structure-insight h4 {

    margin-bottom: 8px;

    font-size: 18px;

    font-weight: 700;
}

.structure-insight p {

    color: #64748b;

    line-height: 1.8;
}

/* =====================================================
SECTION 8 — NATIONAL DEVELOPMENT INDICATORS
===================================================== */

.indicator-section{
    padding:80px;
}

.indicator-block{
    margin-top:24px;
}

.block-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:14px;
}

.block-header h3{
    font-size:18px;
    font-weight:700;
}

.block-header span{
    color:#64748b;
    font-size:13px;
}

.indicator-grid.three{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
}

.indicator-grid.four{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:16px;
}

.progress-card{

    background:white;

    border:1px solid #e2e8f0;

    border-radius:16px;

    padding:18px;

    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.indicator-title{
    font-size:13px;
    font-weight:700;
    min-height:32px;
}

.current-value{

    font-size:30px;

    font-weight:800;

    color:#10213D;

    margin-top:8px;
}

.change{

    margin-top:4px;

    font-size:13px;

    font-weight:700;
}

.change.negative{
    color:#10B981;
}

.change.positive{
    color:#DC2626;
}

.sparkline{

    display:flex;

    align-items:center;

    justify-content:space-between;

    margin-top:16px;
}

.year-point{

    text-align:center;
}

.year-point span{

    display:block;

    font-size:12px;

    font-weight:700;

    margin-bottom:6px;
}

.dot{

    width:8px;

    height:8px;

    border-radius:50%;

    background:#10213D;

    margin:auto;
}

.connector{

    flex:1;

    height:2px;

    background:#CBD5E1;

    margin:0 4px;
}

.year-point small{

    display:block;

    margin-top:6px;

    font-size:11px;

    color:#64748b;
}

/* =====================================================
SDG ALIGNMENT
===================================================== */

.sdg-section{
    margin-top:24px;
}

.sdg-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:14px;
}

.sdg-header h3{
    font-size:18px;
    font-weight:700;
}

.sdg-header span{
    color:#64748b;
    font-size:13px;
}

.sdg-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:16px;
}

.sdg-card{

    background:white;

    border:1px solid #e2e8f0;

    border-radius:16px;

    padding:18px;

    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.sdg-card.positive{
    border-top:4px solid #10B981;
}

.sdg-card.negative{
    border-top:4px solid #DC2626;
}

.sdg-top{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    margin-bottom:10px;
}

.sdg-value{

    font-size:26px;

    font-weight:800;

    color:#10213D;
}

.sdg-change{

    font-weight:700;

    font-size:12px;
}

.increase{
    color:#DC2626;
}

.decrease{
    color:#10B981;
}

.sdg-title{

    font-size:13px;

    font-weight:700;

    line-height:1.4;

    min-height:36px;
}

.sdg-subtitle{

    margin-top:4px;

    color:#64748b;

    font-size:11px;

    line-height:1.5;
}

.sdg-trend{

    margin-top:14px;

    display:flex;

    align-items:center;

    justify-content:space-between;

    font-size:11px;

    color:#475569;
}

.line{

    flex:1;

    margin:0 8px;

    height:2px;

    background:#CBD5E1;

    position:relative;
}

.line.up::after{

    content:'↗';

    position:absolute;

    right:-8px;

    top:-10px;

    color:#DC2626;
}

.line.down::after{

    content:'↘';

    position:absolute;

    right:-8px;

    top:-10px;

    color:#10B981;
}

.card-insight{
    margin-top:20px;
    background:#f8fafc;
    border-left:4px solid #14B8A6;
    border-radius:14px;
    padding:14px 16px;
    display:flex;
    gap:12px;
    align-items:flex-start;
}

.card-insight .ci-icon{
    font-size:16px;
    flex-shrink:0;
    margin-top:2px;
}

.card-insight h4{
    font-size:13px;
    font-weight:700;
    margin-bottom:4px;
    color:#0f172a;
}

.card-insight p{
    font-size:12px;
    line-height:1.6;
    color:#64748b;
    margin:0;
}

/* =====================================================
SECTION 9 — EXECUTIVE CONCLUSION
===================================================== */

.conclusion-section{

    padding:80px;
}

.conclusion-card{

    background:
    linear-gradient(
        135deg,
        #10213D,
        #183153
    );

    border-radius:32px;

    padding:60px;

    color:white;

    position:relative;

    overflow:hidden;
}

.conclusion-label{

    display:inline-flex;

    padding:8px 16px;

    border-radius:999px;

    background:rgba(255,255,255,.12);

    font-size:12px;

    font-weight:700;

    letter-spacing:.1em;
}

.conclusion-card h2{

    margin-top:24px;

    font-size:52px;

    font-weight:800;

    line-height:1.15;

    max-width:900px;
}

.conclusion-insight{

    margin-top:32px;

    max-width:1000px;

    font-size:20px;

    line-height:2;

    color:rgba(255,255,255,.85);
}

.conclusion-divider{

    height:1px;

    background:rgba(255,255,255,.15);

    margin:40px 0;
}

.policy-panel{

    display:flex;

    gap:24px;

    align-items:flex-start;
}

.policy-tag{

    background:#14B8A6;

    color:white;

    padding:10px 16px;

    border-radius:999px;

    font-size:12px;

    font-weight:700;

    white-space:nowrap;
}

.policy-panel p{

    font-size:18px;

    line-height:1.9;

    color:rgba(255,255,255,.9);

    max-width:900px;
}
</style>

```sql pub_header
select
  'Annual Crime Statistics Report 2024' as title,
  'Botswana Police Service' as source,
  '1 January – 31 December 2024' as period,
  2024 as report_year
from insights.national_trend
limit 1
```

```sql national_kpi
select
  total       as total_offences,
  growth_pct  as yoy_change_pct
from insights.national_trend
where year = 2024
limit 1
```

```sql serious_kpi
select
  sum(case when year = 2024 then cases end)                               as serious_crimes,
  max(case when offence = 'Murder' and year = 2024 then cases end)        as murder_cases,
  round(100.0 * (
    max(case when offence = 'Murder' and year = 2024 then cases end) -
    max(case when offence = 'Murder' and year = 2023 then cases end)
  ) / nullif(
    max(case when offence = 'Murder' and year = 2023 then cases end), 0
  ), 1)                                                                    as murder_change_pct
from insights.serious_crime
where year in (2023, 2024)
```

```sql victim_kpi
select
  round(100.0 * sum(female_count) / nullif(sum(total), 0), 1) as female_victim_pct
from insights.victims_ageoverall
```

```sql district_kpi
select count(*) as police_districts
from insights.district_crime
```

```sql urban_kpi
select
  max(case when district_name = 'Mogoditshane' then relative_value_pct end) as mogoditshane_pct,
  max(case when district_name = 'Gaborone'     then relative_value_pct end) as gaborone_pct,
  round(sum(relative_value_pct), 1)                                          as combined_pct
from insights.district_crime
where district_name in ('Mogoditshane', 'Gaborone')
```

```sql youth_kpi
select age_group, total, percentage
from insights.victims_ageoverall
order by total desc
limit 1
```

```sql crime_trend
select
  year,
  total,
  penal_code,
  other_statutes,
  growth_pct
from insights.national_trend
where year >= 2019
order by year
```

```sql trend_kpis
select
  max(case when year = 2019 then total end)                           as baseline_2019,
  max(case when year = 2022 then total end)                           as peak_total,
  max(case when year = 2023 then penal_code end)                      as penal_2023,
  max(case when year = 2024 then total end)                           as total_2024,
  max(case when year = 2024 then penal_code end)                      as penal_2024,
  round(abs(100.0 * (
    max(case when year = 2024 then total end) -
    max(case when year = 2019 then total end)
  ) / max(case when year = 2019 then total end)), 1)                  as pct_vs_2019,
  round(abs(100.0 * (
    max(case when year = 2024 then penal_code end) -
    max(case when year = 2023 then penal_code end)
  ) / max(case when year = 2023 then penal_code end)), 1)             as penal_pct_drop
from insights.national_trend
```

```sql growth_rates
select
  case year
    when 2020 then '2019→20'
    when 2021 then '2020→21'
    when 2022 then '2021→22'
    when 2023 then '2022→23'
    when 2024 then '2023→24'
  end as period,
  growth_pct
from insights.national_trend
where year >= 2020
order by year
```

```sql divisions_list
select division, sort_order
from insights.division_filter
order by sort_order, division
```

```sql crime_by_division
select
  division,
  sum(total) as total_offences,
  round(100.0 * sum(total) / sum(sum(total)) over (), 1) as share_pct
from insights.division_totals
where year = 2024
  and (division = '${inputs.selectedDivision}' or '${inputs.selectedDivision}' = 'All Divisions')
group by division
order by total_offences desc
```

```sql crime_by_district
select
  district_number,
  district_name,
  total,
  relative_value_pct,
  penal_code,
  other_statutes
from insights.district_crime
order by total desc
```

```sql district_trend
select
  d.district_name,
  d.year,
  d.total,
  d.total_growth_pct
from insights.district_trend d
where d.year in (2023, 2024)
order by d.district_number, d.year
```

```sql district_count
select
  sum(case when total_growth_pct < 0 then 1 else 0 end)::int as improved,
  count(*)::int                                                as total
from insights.district_trend
where year = 2024
```

```sql district_table
select
  district_number  as "#",
  district_name    as "District",
  penal_code       as "Penal Code",
  other_statutes   as "Other statutes",
  total            as "Total",
  relative_value_pct as "Share %"
from insights.district_crime
order by total desc
```

```sql penal_categories
select
  crime_category,
  cases,
  growth_pct,
  relative_value_pct
from insights.penal_code_cat
where year = 2024
  and crime_category not in ('Total')
order by cases desc
limit 6
```

```sql penal_trend
select
  crime_category,
  year,
  cases
from insights.penal_code_cat
where year in (2022, 2023, 2024)
  and crime_category not in ('Total')
order by year, cases desc
```

```sql road_traffic
select
  traffic_offence,
  cases,
  change_pct
from insights.traffic_offence
where year = 2024
  and traffic_offence != 'Total'
order by cases desc
```

```sql road_totals
select
  year,
  sum(cases) as total_cases
from insights.traffic_offence
where traffic_offence = 'Total'
group by year
order by year
```

```sql tndp
select
  indicator_key,
  indicator_description,
  year,
  rate
from insights.tndp
where year in (2022, 2023, 2024)
order by indicator_key, year
```

```sql tndp_2024
select
  indicator_key,
  indicator_description as indicator,
  max(case when year = 2022 then rate end) as rate_2022,
  max(case when year = 2023 then rate end) as rate_2023,
  max(case when year = 2024 then rate end) as rate_2024,
  round(
    100.0 * (
      max(case when year = 2024 then rate end) -
      max(case when year = 2022 then rate end)
    ) / nullif(max(case when year = 2022 then rate end), 0)
  , 1) as three_year_change_pct
from insights.tndp
group by indicator_key, indicator_description
order by indicator_key
```

```sql sdg_2024
select
  indicator_key,
  indicator_description as indicator,
  max(case when year = 2022 then rate end) as rate_2022,
  max(case when year = 2023 then rate end) as rate_2023,
  max(case when year = 2024 then rate end) as rate_2024,
  round(
    100.0 * (
      max(case when year = 2024 then rate end) -
      max(case when year = 2022 then rate end)
    ) / nullif(max(case when year = 2022 then rate end), 0)
  , 1) as three_year_change_pct
from insights.sdg
group by indicator_key, indicator_description
order by
  case indicator_key
    when 'human_trafficking_victims_per_100000_pop'      then 1
    when 'sdg_road_death_rate'                           then 2
    when 'population_subjected_to_physical_psychol'      then 3
    when 'sdg_homicide_rate'                             then 4
    else 5
  end
```

---

<div class="hero">
  <p class="hero-meta">Botswana Police Service · Annual Crime Statistics Report</p>
  <h1>Crime in Botswana — 2024</h1>
  {#if national_kpi.ready && pub_header.ready}
  <p class="hero-summary">Botswana recorded {national_kpi[0].total_offences.toLocaleString('en-US')} criminal offences in {pub_header[0].report_year} — a {Math.abs(national_kpi[0].yoy_change_pct)}% {national_kpi[0].yoy_change_pct < 0 ? 'decline' : 'increase'} from {pub_header[0].report_year - 1}, the second consecutive annual decline from the 2022 peak. This report presents a full analysis of national trends, geographic distribution, and serious offences.</p>
  {:else}
  <p class="hero-summary">Loading 2024 crime statistics…</p>
  {/if}
  <div class="hero-tags">
    <span class="hero-tag">Reference period: 1 Jan – 31 Dec 2024</span>
    <span class="hero-tag">Population: 2,540,215</span>
    <span class="hero-tag">Source: Botswana Police Service</span>
    <span class="hero-tag">A DATA 123 Intelligence Publication</span>
  </div>
</div>


<div style="margin-bottom: 24px;"></div>

{#if national_kpi.ready && serious_kpi.ready && district_kpi.ready}
<section class="snapshot-section">
    <div class="snapshot-grid">

        <!-- Total Offences -->
        <div class="snapshot-card">
            <div class="snapshot-value">{national_kpi[0].total_offences.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Total Offences</div>
        </div>

        <!-- Annual Change -->
        <div class="snapshot-card {national_kpi[0].yoy_change_pct < 0 ? 'positive' : 'danger'}">
            <div class="snapshot-trend">{national_kpi[0].yoy_change_pct < 0 ? '↓' : '↑'} {Math.abs(national_kpi[0].yoy_change_pct)}%</div>
            <div class="snapshot-label">Year-on-Year Change</div>
        </div>

        <!-- Serious Crime -->
        <div class="snapshot-card">
            <div class="snapshot-value">{serious_kpi[0].serious_crimes.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Serious Offences</div>
        </div>

        <!-- Murders -->
        <div class="snapshot-card danger">
            <div class="snapshot-value">{serious_kpi[0].murder_cases}</div>
            <div class="snapshot-label">Murders</div>
        </div>

        <!-- Districts -->
        <div class="snapshot-card">
            <div class="snapshot-value">{district_kpi[0].police_districts}</div>
            <div class="snapshot-label">Police Districts</div>
        </div>

    </div>
</section>
{/if}


<span class="section-label">Key Findings</span>

{#if national_kpi.ready && serious_kpi.ready && urban_kpi.ready && youth_kpi.ready && pub_header.ready && trend_kpis.ready}
<section class="executive-summary">

    <div class="insights-grid">

        <!-- CARD 1 -->
        <div class="insight-card">
            <div class="insight-icon success">↘</div>
            <h3>Crime Declined {Math.abs(national_kpi[0].yoy_change_pct)}% in {pub_header[0].report_year}</h3>
            <p>Total offences fell to {national_kpi[0].total_offences.toLocaleString('en-US')} — the second consecutive annual decline from the 2022 peak of {trend_kpis[0].peak_total.toLocaleString('en-US')}.</p>
        </div>

        <!-- CARD 2 -->
        <div class="insight-card">
            <div class="insight-icon danger">⚠</div>
            <h3>Murder Up {serious_kpi[0].murder_change_pct}% — Fourth Consecutive Year</h3>
            <p>{serious_kpi[0].murder_cases} murders recorded in {pub_header[0].report_year}. The only major offence category trending consistently upward since 2020.</p>
        </div>

        <!-- CARD 3 -->
        <div class="insight-card">
            <div class="insight-icon primary">📍</div>
            <h3>One Third of Crime in Two Districts</h3>
            <p>Mogoditshane ({urban_kpi[0].mogoditshane_pct}%) and Gaborone ({urban_kpi[0].gaborone_pct}%) together account for {urban_kpi[0].combined_pct}% of all recorded crime nationally.</p>
        </div>

        <!-- CARD 4 -->
        <div class="insight-card">
            <div class="insight-icon warning">👥</div>
            <h3>Ages {youth_kpi[0].age_group} Most at Risk</h3>
            <p>The {youth_kpi[0].age_group} age group accounts for {youth_kpi[0].percentage}% of all serious crime victims — the highest of any age group nationally.</p>
        </div>

    </div>

</section>
{/if}


<span class="section-label">National Crime Trends</span>
<!-- =====================================================
SECTION 4 — NATIONAL CRIME TREND
===================================================== -->

<section class="trend-section">

    <div class="section-heading">

        <span class="section-tag">
            Is Botswana Becoming Safer?
        </span>
 

    </div>

    <div class="trend-layout">

        <!-- LEFT -->

        <div class="trend-chart-card">
            <h3 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 25px 0;">
                Crime Trends in Botswana
            </h3>

            <div class="chart-container">

                <!-- ECHART GOES HERE -->

                <BarChart
                    data={crime_trend}
                    x=year
                    y={['total','penal_code']}
                    type=grouped
                    yFmt='#,##0'
                    title="Total offences 2019–2024"
                    subtitle="All categories including traffic"
                    labels=false
                    colorPalette={['#1E3A5F','#10B981']}
                    />

            </div>
            <Note>
            
            </Note>
            <h3 style="font-size: 10px; font-weight: 300; color: #0f172a; margin: -5 0 0px 0;">
                The Penal Code is Botswana's official rulebook that clearly explains what actions are considered crimes against people, property, or the public. It also states the exact punishments people will face if they break these laws to keep the country safe and fair
            </h3>

        </div>


        <!-- RIGHT -->

        <div class="findings-card">

            <h3 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 0px 0;">
                Key Findings
            </h3>

            {#if trend_kpis.ready && national_kpi.ready}

            <div class="finding-item">

                <div>
                    
                    <h4>
                        Below Pre-Pandemic Levels
                    </h4>

                    <p>
                        At {trend_kpis[0].total_2024.toLocaleString('en-US')} offences, 2024 crime
                        is {trend_kpis[0].pct_vs_2019}% below the 2019 pre-pandemic
                        baseline of {trend_kpis[0].baseline_2019.toLocaleString('en-US')}.
                    </p>

                </div>

            </div>


            <div class="finding-item">

                <div>

                    <h4>
                        Penal Code Decline
                    </h4>

                    <p>
                        Penal Code offences fell {trend_kpis[0].penal_pct_drop}%
                        in 2024 ({trend_kpis[0].penal_2023.toLocaleString('en-US')} → {trend_kpis[0].penal_2024.toLocaleString('en-US')}),
                        driving the overall decline.
                    </p>

                </div>

            </div>


            <div class="finding-item">
                <div>

                    <h4>
                        Second Consecutive Decline
                    </h4>

                    <p>
                        Crime has now declined
                        for two consecutive years.
                    </p>

                </div>

            </div>


            <div class="finding-item">


                <div>

                    <h4>
                        Post-Pandemic Stabilisation
                    </h4>

                    <p>
                        The surge observed after
                        COVID disruptions appears
                        to be easing.
                    </p>

                </div>

            </div>

            {/if}

        </div>

    </div>

</section>




```sql district_map
with district_map as (

    -- Gaborone stands alone
    select 'GABORONE' as district_name,
           sum(total) as total
    from insights.district_crime
    where district_name = 'Gaborone'

    union all

    -- Mogoditshane + Ramotswa (South East)
    select 'SOUTH EAST',
           sum(total)
    from insights.district_crime
    where district_name = 'Mogoditshane'

    union all

    -- Francistown + Kutlwano
    select 'FRANCISTOWN',
           sum(total)
    from insights.district_crime
    where district_name in ('Francistown','Kutlwano')

    union all

    -- Masunga (North East)
    select 'NORTH EAST',
           sum(total)
    from insights.district_crime
    where district_name = 'Francistown'

    union all

    select 'LOBATSE',
           sum(total)
    from insights.district_crime
    where district_name = 'Lobatse'

    union all

    select 'SELIBE PHIKWE',
           sum(total)
    from insights.district_crime
    where district_name = 'S/Phikwe'

    union all

    select 'CHOBE',
           sum(total)
    from insights.district_crime
    where district_name = 'Kasane'

    union all

    select 'GHANZI',
           sum(total)
    from insights.district_crime
    where district_name = 'Gantsi'

    union all

    select 'KGALAGADI',
           sum(total)
    from insights.district_crime
    where district_name = 'Tsabong'

    union all

    select 'KGATLENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Mochudi'

    union all

    select 'KWENENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Molepolole'

    union all

    select 'SOUTHERN',
           sum(total)
    from insights.district_crime
    where district_name = 'Kanye'

    union all

    select 'SOWA TOWN',
           sum(total)
    from insights.district_crime
    where district_name = 'Kanye'

    union all

    select 'NORTH WEST',
           sum(total)
    from insights.district_crime
    where district_name in ('Maun','Shakawe')

    union all

    select 'CENTRAL',
           sum(total)
    from insights.district_crime
    where district_name in ('Palapye','Mahalapye','Letlhakane')

    union all

    select 'JWANENG',
           sum(total)
    from insights.district_crime
    where district_name = 'Letlhakane'

)

select *
from district_map
order by total desc

```


<!-- =====================================================
SECTION 5 — GEOGRAPHIC INTELLIGENCE
===================================================== -->
<span class="section-label">NGEOGRAPHIC INTELLIGENCE</span>
<section class="geo-section">

    <div class="section-heading">

        <span class="section-tag">
            Where Does Crime Occur?
        </span>

    </div>

    <div class="geo-layout">

        <!-- MAP -->

        <div class="map-card">

            <div class="card-header">

                <h3>
                    Crime Distribution by District
                </h3>

                <span>
                    2024
                </span>

            </div>

            <AreaMap
                data={district_map}
                areaCol='district_name'
                geoJsonUrl='/maps/botswana_districts.json'
                geoId='name'
                value='total'
                height={600}
                colorPalette={[
                    ['#2E7D32','#2E7D32'],
                    ['#66BB6A','#66BB6A'],
                    ['#FDD835','#FDD835'],
                    ['#FB8C00','#FB8C00'],
                    ['#C62828','#C62828']
                ]}
            />

        </div>


        <!-- INSIGHTS -->

        <div class="geo-insights">

            {#if urban_kpi.ready && district_count.ready}

            <div class="geo-highlight">

                <span class="geo-rank">
                    #1
                </span>

                <div class="geo-value">
                    {urban_kpi[0].mogoditshane_pct}%
                </div>

                <div class="geo-label">
                    Mogoditshane
                </div>

                <div class="geo-desc">
                    Largest share of recorded crime
                </div>

            </div>


            <div class="geo-stat orange">

                <div class="geo-stat-value">
                    {urban_kpi[0].gaborone_pct}%
                </div>

                <div class="geo-stat-label">
                    Gaborone
                </div>

            </div>


            <div class="geo-stat purple">

                <div class="geo-stat-value">
                    {urban_kpi[0].combined_pct}%
                </div>

                <div class="geo-stat-label">
                    Combined Share
                </div>

            </div>


            <div class="geo-stat green">

                <div class="geo-stat-value">
                    {district_count[0].improved} / {district_count[0].total}
                </div>

                <div class="geo-stat-label">
                    Districts Improved
                </div>

            </div>


            <div class="geo-story">

                Urban districts continue to dominate
                Botswana's crime landscape, accounting
                for {urban_kpi[0].combined_pct}% of all offences.
                {district_count[0].improved} of {district_count[0].total} districts recorded fewer
                offences in 2024 vs 2023; Kanye,
                Lobatse, Shakawe and Kasane were
                the {district_count[0].total - district_count[0].improved} that increased.
            </div>

            {/if}

        </div>

    </div>

</section>

<span class="section-label">CRIME STRUCTURE</span>

<!-- =====================================================
SECTION 6 — CRIME STRUCTURE
===================================================== -->

<section class="crime-structure">

    <div class="section-heading">

        <span class="section-tag">
            hat Crimes Dominate Botswana?
        </span>

        <p>
            Understanding the composition of crime is essential
            for prioritising prevention and resource allocation.
        </p>

    </div>


    <div class="structure-card">

        <div class="card-header">

            <h3>
                Composition of Penal Code Offences
            </h3>

            <span>
                2024
            </span>

        </div>

        <BarChart
            data={penal_categories}
            x=crime_category
            y=cases
            yFmt='#,##0'
            swapXY=true
            colorPalette={['#1E3A5F','#10B981','#FDD835','#FB8C00','#C62828']}
            labels=false
        />

    </div>


    <div class="structure-insight">

        <div class="insight-icon">
            ⚡
        </div>

        <div>

            <h4>
                Key Insight
            </h4>

            <p>
                Property crime remains the dominant category,
                accounting for approximately half of all Penal
                Code offences recorded nationally.
            </p>

        </div>

    </div>

</section>


<!-- =====================================================
SECTION 8 — NATIONAL DEVELOPMENT INDICATORS
===================================================== -->
<span class="section-label">National Development Indicators</span>

<section class="indicator-section">

    <div class="section-heading">

        <span class="section-tag">
            NATIONAL DEVELOPMENT INDICATORS
        </span>

        <h2>
            Beyond Crime Counts
        </h2>

        <p>
            Tracking Botswana's progress against
            TNDP II priorities and Sustainable
            Development Goal indicators.
        </p>

    <Tabs>

    <Tab label="TNDP II Indicators">

    <!-- TNDP II -->

    <div class="indicator-block">

        <div class="block-header">

            <h3>
                TNDP II Indicators
            </h3>

            <span>
                Three-Year Trend (2022–2024)
            </span>

        </div>

        {#if tndp_2024.ready}
        <div class="indicator-grid three">

            <!-- GBV [0] -->

            <div class="progress-card">
                <div class="indicator-title">Gender-Based Violence</div>
                <div class="current-value">{tndp_2024[0].rate_2024}</div>
                <div class="change {tndp_2024[0].three_year_change_pct < 0 ? 'negative' : 'positive'}">
                    {tndp_2024[0].three_year_change_pct < 0 ? '▼' : '▲'} {Math.abs(tndp_2024[0].three_year_change_pct)}%
                </div>
                <div class="sparkline">
                    <div class="year-point high">
                        <span>{tndp_2024[0].rate_2022}</span>
                        <div class="dot"></div>
                        <small>2022</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point medium">
                        <span>{tndp_2024[0].rate_2023}</span>
                        <div class="dot"></div>
                        <small>2023</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point low">
                        <span>{tndp_2024[0].rate_2024}</span>
                        <div class="dot"></div>
                        <small>2024</small>
                    </div>
                </div>
            </div>

            <!-- ROAD [1] -->

            <div class="progress-card">
                <div class="indicator-title">Road Fatalities</div>
                <div class="current-value">{tndp_2024[1].rate_2024}</div>
                <div class="change {tndp_2024[1].three_year_change_pct < 0 ? 'negative' : 'positive'}">
                    {tndp_2024[1].three_year_change_pct < 0 ? '▼' : '▲'} {Math.abs(tndp_2024[1].three_year_change_pct)}%
                </div>
                <div class="sparkline">
                    <div class="year-point high">
                        <span>{tndp_2024[1].rate_2022}</span>
                        <div class="dot"></div>
                        <small>2022</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point medium">
                        <span>{tndp_2024[1].rate_2023}</span>
                        <div class="dot"></div>
                        <small>2023</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point low">
                        <span>{tndp_2024[1].rate_2024}</span>
                        <div class="dot"></div>
                        <small>2024</small>
                    </div>
                </div>
            </div>

            <!-- VIOLENT CRIME [2] -->

            <div class="progress-card">
                <div class="indicator-title">Violent & Serious Crime</div>
                <div class="current-value">{tndp_2024[2].rate_2024}</div>
                <div class="change {tndp_2024[2].three_year_change_pct < 0 ? 'negative' : 'positive'}">
                    {tndp_2024[2].three_year_change_pct < 0 ? '▼' : '▲'} {Math.abs(tndp_2024[2].three_year_change_pct)}%
                </div>
                <div class="sparkline">
                    <div class="year-point high">
                        <span>{tndp_2024[2].rate_2022}</span>
                        <div class="dot"></div>
                        <small>2022</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point medium">
                        <span>{tndp_2024[2].rate_2023}</span>
                        <div class="dot"></div>
                        <small>2023</small>
                    </div>
                    <div class="connector down"></div>
                    <div class="year-point low">
                        <span>{tndp_2024[2].rate_2024}</span>
                        <div class="dot"></div>
                        <small>2024</small>
                    </div>
                </div>
            </div>

        </div>

        <div class="structure-insight">
            <div class="insight-icon">⚡</div>
            <div>
                <h4>TNDP II Summary</h4>
                <p>All three TNDP II indicators improved in 2024. GBV fell {Math.abs(tndp_2024[0].three_year_change_pct)}%, road fatalities declined {Math.abs(tndp_2024[1].three_year_change_pct)}% to a three-year low, and violent crime dropped sharply after a 2023 spike — placing Botswana on track against its national development targets.</p>
            </div>
        </div>
        {/if}

    </div>


    </Tab>

    <Tab label="SDG 2030 Alignment">

    <!-- SDG -->

    <div class="sdg-section">

        <div class="sdg-header">
            <h3>SDG 2030 Alignment</h3>
            <span>Crime & Safety Indicators (2022–2024)</span>
        </div>

        {#if sdg_2024.ready}
        <div class="sdg-grid">

            <!-- Human Trafficking [0] -->
            <div class="sdg-card {sdg_2024[0].three_year_change_pct < 0 ? 'positive' : 'negative'}">
                <div class="sdg-top">
                    <div class="sdg-value">{sdg_2024[0].rate_2024}</div>
                    <div class="sdg-change {sdg_2024[0].three_year_change_pct > 0 ? 'increase' : 'decrease'}">
                        {sdg_2024[0].three_year_change_pct > 0 ? '▲' : '▼'} {Math.abs(sdg_2024[0].three_year_change_pct)}%
                    </div>
                </div>
                <div class="sdg-title">Human Trafficking Victims</div>
                <div class="sdg-subtitle">per 100,000 population</div>
                <div class="sdg-trend">
                    <span>{sdg_2024[0].rate_2022}</span>
                    <div class="line {sdg_2024[0].rate_2023 > sdg_2024[0].rate_2022 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[0].rate_2023}</span>
                    <div class="line {sdg_2024[0].rate_2024 > sdg_2024[0].rate_2023 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[0].rate_2024}</span>
                </div>
            </div>

            <!-- Road Traffic [1] -->
            <div class="sdg-card {sdg_2024[1].three_year_change_pct < 0 ? 'positive' : 'negative'}">
                <div class="sdg-top">
                    <div class="sdg-value">{sdg_2024[1].rate_2024}</div>
                    <div class="sdg-change {sdg_2024[1].three_year_change_pct > 0 ? 'increase' : 'decrease'}">
                        {sdg_2024[1].three_year_change_pct > 0 ? '▲' : '▼'} {Math.abs(sdg_2024[1].three_year_change_pct)}%
                    </div>
                </div>
                <div class="sdg-title">Road Traffic Injury Deaths</div>
                <div class="sdg-subtitle">per 100,000 population</div>
                <div class="sdg-trend">
                    <span>{sdg_2024[1].rate_2022}</span>
                    <div class="line {sdg_2024[1].rate_2023 > sdg_2024[1].rate_2022 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[1].rate_2023}</span>
                    <div class="line {sdg_2024[1].rate_2024 > sdg_2024[1].rate_2023 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[1].rate_2024}</span>
                </div>
            </div>

            <!-- Violence Exposure [2] -->
            <div class="sdg-card {sdg_2024[2].three_year_change_pct < 0 ? 'positive' : 'negative'}">
                <div class="sdg-top">
                    <div class="sdg-value">{sdg_2024[2].rate_2024}</div>
                    <div class="sdg-change {sdg_2024[2].three_year_change_pct > 0 ? 'increase' : 'decrease'}">
                        {sdg_2024[2].three_year_change_pct > 0 ? '▲' : '▼'} {Math.abs(sdg_2024[2].three_year_change_pct)}%
                    </div>
                </div>
                <div class="sdg-title">Violence Exposure</div>
                <div class="sdg-subtitle">per 100,000 population</div>
                <div class="sdg-trend">
                    <span>{sdg_2024[2].rate_2022}</span>
                    <div class="line {sdg_2024[2].rate_2023 > sdg_2024[2].rate_2022 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[2].rate_2023}</span>
                    <div class="line {sdg_2024[2].rate_2024 > sdg_2024[2].rate_2023 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[2].rate_2024}</span>
                </div>
            </div>

            <!-- Intentional Homicide [3] -->
            <div class="sdg-card {sdg_2024[3].three_year_change_pct < 0 ? 'positive' : 'negative'}">
                <div class="sdg-top">
                    <div class="sdg-value">{sdg_2024[3].rate_2024}</div>
                    <div class="sdg-change {sdg_2024[3].three_year_change_pct > 0 ? 'increase' : 'decrease'}">
                        {sdg_2024[3].three_year_change_pct > 0 ? '▲' : '▼'} {Math.abs(sdg_2024[3].three_year_change_pct)}%
                    </div>
                </div>
                <div class="sdg-title">Intentional Homicide Victims</div>
                <div class="sdg-subtitle">per 100,000 population</div>
                <div class="sdg-trend">
                    <span>{sdg_2024[3].rate_2022}</span>
                    <div class="line {sdg_2024[3].rate_2023 > sdg_2024[3].rate_2022 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[3].rate_2023}</span>
                    <div class="line {sdg_2024[3].rate_2024 > sdg_2024[3].rate_2023 ? 'up' : 'down'}"></div>
                    <span>{sdg_2024[3].rate_2024}</span>
                </div>
            </div>

        </div>

        <div class="structure-insight">
            <div class="insight-icon">⚡</div>
            <div>
                <h4>SDG 2030 Summary</h4>
                <p>Road fatalities and violence exposure declined for a third consecutive year, each reaching multi-year lows. Human trafficking fell sharply from a 2023 spike ({sdg_2024.ready ? sdg_2024[0].rate_2023 : '2.1'} → {sdg_2024.ready ? sdg_2024[0].rate_2024 : '0.9'}) but remains above the 2022 baseline, leaving its three-year trend elevated. Intentional homicide is the only indicator to worsen in every year since 2022, rising to {sdg_2024.ready ? sdg_2024[3].rate_2024 : '13.3'} per 100,000 and demanding focused policy intervention to protect SDG 16 targets.</p>
            </div>
        </div>
        {/if}

    </div>

    </Tab>

    </Tabs>

</section>


<!-- =====================================================
SECTION 9 — EXECUTIVE CONCLUSION
===================================================== -->
<span class="section-label">SUMMARY</span>
<section class="conclusion-section">

    <div class="conclusion-card">

        <div class="conclusion-label">
            EXECUTIVE CONCLUSION
        </div>

        <h2>
            Botswana Is Becoming Safer —
            But Not In Every Category
        </h2>

        <p class="conclusion-insight">
            Botswana recorded broad improvements across
            most major crime indicators in 2024.
            National crime declined, serious offences fell,
            most districts improved, and key development
            indicators showed positive movement.
            However, the continued rise in murder remains
            a significant warning signal and suggests that
            violent crime requires targeted intervention.
        </p>

        <div class="conclusion-divider"></div>

        <div class="policy-panel">

            <div class="policy-tag">
                POLICY IMPLICATION
            </div>

            <p>
                Future crime prevention efforts should
                increasingly focus on violent crime drivers,
                relationship conflict and social risk factors,
                while maintaining recent gains in property
                crime reduction.
            </p>

        </div>

    </div>

</section>
 