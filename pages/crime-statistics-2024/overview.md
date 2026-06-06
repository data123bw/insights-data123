---
title: Overview and National Trends
sidebar_position: 1
---
National crime statistics for Botswana 2024 showing total offences, geographic distribution, penal code categories, road traffic, and performance indicators.

```sql pub_header
select
  'Annual Crime Statistics Report 2024' as title,
  'Botswana Police Service' as source,
  '1 January – 31 December 2024' as period,
  2024 as report_year
from insights.national_trend
limit 1
```
<Note>
  Annual Crime Statistics Report 2024 · Botswana Police Service · Reference period: 1 Jan – 31 Dec 2024 · Published 2025 · A Data 123 Intelligence Publication
</Note>


## Six headline findings for 2024

```sql key_findings
select
  146529   as total_offences,
  -8.2     as yoy_change_pct,
  14560    as serious_crimes,
  337      as murder_cases,
  4.7      as murder_change_pct,
  85       as female_victim_pct,
  70       as perp_unemployed_pct_floor
from insights.national_trend
where year = 2024
limit 1
```

<Grid cols=3>
  <BigValue
    data={key_findings}
    value=total_offences
    title="Total offences 2024"
    fmt='#,##0'
  />
  <BigValue
    data={key_findings}
    value=yoy_change_pct
    title="Year-on-year change"
    fmt='0.0"%"'
    downIsGood=true
  />
  <BigValue
    data={key_findings}
    value=serious_crimes
    title="Serious crimes 2024"
    fmt='#,##0'
  />
  <BigValue
    data={key_findings}
    value=murder_cases
    title="Murder cases"
    fmt='#,##0'
  />
  <BigValue
    data={key_findings}
    value=female_victim_pct
    title="Victims — female"
    fmt='0"%"'
  />
  <BigValue
    data={key_findings}
    value=perp_unemployed_pct_floor
    title="Perpetrators unemployed"
    fmt='0"%+"'
  />
</Grid>

The 2024 report marks a significant turning point. Following the surge of 2022 — when total offences reached a six-year peak of 173,140 — crime has declined for two consecutive years, with 2024 registering the sharpest year-on-year reduction since the post-pandemic drop of 2020. **The decline was broad-based: all five police divisions recorded fewer offences than in 2023.**

<Alert status=error>
  **The exception that demands attention:** While most serious crimes declined significantly, murder increased by 4.7% — from 322 cases in 2023 to 337 in 2024. This is the fourth consecutive year in which murder has risen. The trend is examined in detail on Page 2.
</Alert>

## National crime trend — 2019 to 2024

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

  <LineChart
    data={crime_trend}
    x=year
    y={['total','penal_code']}
    yFmt='#,##0'
    title="Total offences 2019–2024"
    subtitle="All categories including traffic"
    labels=true
    colorPalette={['#1a3260','#0e7490']}
  />

  <Note>
    The Penal Code is Botswana's official rulebook that clearly explains what actions are considered crimes against people, property, or the public. It also states the exact punishments people will face if they break these laws to keep the country safe and fair
  </Note>
  
  

Botswana's crime trend over the past six years tells a story in three chapters. The **pre-pandemic baseline** of 2019 recorded 160,517 offences. The **sharp contraction of 2020** — driven by lockdown restrictions — reduced total offences to 123,901, a 22.8% decline. The **post-pandemic surge** peaked in 2022 at 173,140 offences, a 20% increase. Since then crime has declined for two consecutive years.

  <BarChart
    data={growth_rates}
    x=period
    y=growth_pct
    yFmt='0.0"%"'
    title="Year-on-year growth rate"
    subtitle="Negative = crime reduction"
    colorPalette={['#1a3260']}
    labels=true
  />

  The 2024 decline of 8.2% — reducing total offences from 159,680 to 146,529 — was primarily driven by a **10.6% fall in Penal Code offences**. Other Statutes (excluding traffic) declined marginally by 0.8%, from 39,098 to 38,772. The sustained improvement suggests structural rather than seasonal change.

<Alert status=info>
  **Data note on 2020:** The 22.8% decline in 2020 should be interpreted with caution. Reduced movement, court closures, and reduced reporting capacity during the COVID-19 pandemic almost certainly suppressed reported crime below actual incidence. The 2021 and 2022 increases partly reflect reporting catch-up.
</Alert>


## Geographic distribution


Crime in Botswana is **not evenly distributed**. The South-Central Division accounts for 36.9% of all national offences. At the district level, Mogoditshane (17.7%) and Gaborone (15.6%) together account for one third of all crime nationally.

```sql crime_by_division
select
  division,
  sum(total) as total_offences,
  round(100.0 * sum(total) / sum(sum(total)) over (), 1) as share_pct
from insights.division_totals
where year = 2024
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

  <BarChart
    data={crime_by_division}
    x=division
    y=total_offences
    yFmt='#,##0'
    title="Crime by police division — 2024"
    subtitle="Total offences, share of national total"
    labels=true
    horizontal=true
    colorPalette={['#1a3260']}
  />

  <BarChart
    data={crime_by_district}
    x=district_name
    y=relative_value_pct
    yFmt='0.0"%"'
    title="Crime by district — relative share 2024"
    subtitle="17 police districts ranked by share of national total"
    horizontal=true
    colorPalette={['#1a3260']}
  />



The geographic improvement was near-universal. **14 of 17 districts recorded fewer total offences in 2024 than in 2023.** The most significant improvement was in Mahalapye (−19.9%). Letlhakane (−16.7%) and Maun (−16.8%) also recorded substantial declines.

<Alert status=info>
  **The urban corridor concern:** Despite improving, Mogoditshane and Gaborone together still account for 33.3% of all national crime — one third of the country's offences in two adjacent districts. Sustained dedicated policing focus is required regardless of the improving trend.
</Alert>



### All 17 police districts — 2024

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

<DataTable
  data={district_table}
  rows=17
  search=false
>
  <Column id="#" width=40 />
  <Column id="District" />
  <Column id="Penal Code" fmt='#,##0' />
  <Column id="Other statutes" fmt='#,##0' />
  <Column id="Total" fmt='#,##0' contentType=colorscale colorScale=intensity />
  <Column id="Share %" fmt='0.0"%"' />
</DataTable>

---

## Penal Code categories

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

Penal Code offences totalled 107,757 in 2024 — a 10.6% decline from 120,582 in 2023. **Offences relating to property remain the largest single category at exactly 50% of all Penal Code crime**, followed by Offences Against the Person at 26.6%. Both categories declined — property crime by 13.3% and crimes against persons by 6.8%.

<Grid cols=2>

  <BarChart
    data={penal_categories}
    x=crime_category
    y=cases
    yFmt='#,##0'
    title="Penal Code by category — 2024"
    subtitle="107,757 total Penal Code offences"
    horizontal=true
    colorPalette={['#1a3260']}
    labels=true
  />

  <BarChart
    data={penal_categories}
    x=crime_category
    y=growth_pct
    yFmt='0.0"%"'
    title="Category growth rates 2023→2024"
    subtitle="Negative = improvement"
    horizontal=true
    colorPalette={['#0e7490']}
    labels=true
  />

</Grid>

 
<Alert status=info>
  **Two anomalies that warrant attention:** While most Penal Code categories declined, Offences Relating to Corrupt Practices increased by 53.8% (from 13 to 20 cases) and Attempts and Conspiracies to Commit Crimes increased by 171.4% (from 7 to 19 cases). The absolute numbers are small but the growth rates signal an emerging pattern.
</Alert>

---

## Road traffic offences

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

Road traffic offences declined from 356,872 in 2023 to 345,857 in 2024 — a reduction of 11,015 cases or 3.1%. However this headline figure conceals significant variations. **Speeding increased sharply by 33.9%**, suggesting increased motorist speeds may be offsetting improvements in other areas. Most significantly, **PSV offences surged by 124.5%** — from 4,254 to 9,550 cases.

  <DataTable
    data={road_traffic}
    rows=12
    search=false
    title="Road traffic offences — 2024 vs 2023"
  >
    <Column id="traffic_offence" title="Offence" />
    <Column id="cases" fmt='#,##0' title="Cases 2024" />
    <Column id="change_pct" fmt='0.0"%"' title="Change" contentType=delta downIsGood=true />
  </DataTable>

  <BarChart
    data={road_traffic}
    x=traffic_offence
    y=change_pct
    yFmt='0.0"%"'
    title="Traffic offence change rates"
    subtitle="2023 vs 2024 — percentage change"
    horizontal=true
    colorPalette={['#0e7490']}
  />


---

## Performance indicators — TNDP II and SDG alignment



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
group by indicator_description
```

```sql sdg_2024
select
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
group by indicator_description
```



The Botswana Police Service reports against the Transitional National Development Plan II (TNDP II) and the United Nations Sustainable Development Goals. **Three of the four primary performance indicators improved in 2024**, and all have improved consistently since 2022. The most significant improvement is in the GBV rate, which has declined 21% over three years.

<LineChart
  data={tndp}
  x=year
  y=rate
  series=indicator_key
  title="TNDP II indicators — 2022 to 2024"
  subtitle="Rates per defined population base — all three primary indicators improving"
  colorPalette={['#1a3260','#0e7490','#b45309','#dc2626']}
  labels=true
/>


### TNDP II indicators — three-year summary

<DataTable data={tndp_2024} search=false>
  <Column id="indicator" title="Indicator" />
  <Column id="rate_2022" fmt='0.0' title="2022" />
  <Column id="rate_2023" fmt='0.0' title="2023" />
  <Column id="rate_2024" fmt='0.0' title="2024" />
  <Column id="three_year_change_pct" fmt='0.0"%"' title="3-yr change" contentType=delta downIsGood=true />
</DataTable>

### SDG indicators — Agenda 2030 alignment

<DataTable data={sdg_2024} search=false>
  <Column id="indicator" title="SDG indicator" />
  <Column id="rate_2022" fmt='0.0' title="2022" />
  <Column id="rate_2023" fmt='0.0' title="2023" />
  <Column id="rate_2024" fmt='0.0' title="2024" />
  <Column id="three_year_change_pct" fmt='0.0"%"' title="3-yr change" contentType=delta downIsGood=true />
</DataTable>

<Alert status=error>
  **SDG alignment note:** The number of victims of intentional homicide per 100,000 population increased from 12.9 in 2023 to 13.3 in 2024 — the only SDG-linked indicator that worsened. This reflects the 4.7% increase in murder cases. See Page 2 for the full murder analysis.
</Alert>

---

<LastRefreshed prefix="Data last updated"/>

<Note>
  Source: Botswana Police Service, Annual Crime Statistics Report 2024. Analysis: Data 123, insights.data123.online. All figures drawn directly from BPS source tables. Reported crimes only — actual incidence is higher.
</Note>

<Grid cols=2>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    Page 2: Serious offences →
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/profiles">
    Page 3: Profiles and performance →
  </LinkButton>
</Grid>
