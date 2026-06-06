---
title: Profile and Performance
sidebar_position: 3
---
Cross-crime victim and perpetrator demographic profiles, unemployment analysis, relationship patterns, TNDP II indicators, SDG alignment, and summary of key findings — Botswana 2024.
<Note>
  This page synthesises demographic patterns across all 11 serious offences. Rather than examining each crime in isolation, it identifies the structural characteristics that cut across crime types — revealing what unemployment, gender, age, and relationship dynamics look like when the entire serious crime dataset is viewed as one body of evidence.
</Note>


---

## Victim and perpetrator profiles

```sql profile_summary
SELECT
    SUM(v.total) AS total_victims,

    (
        SELECT SUM(p.total)
        FROM insights.perpetrators_ageoverall p
    ) AS total_perpetrators,

    ROUND(
        100.0 * SUM(v.female_count)
        / NULLIF(SUM(v.total), 0),
        1
    ) AS female_victim_pct,

    ROUND(
        100.0 * (
            SELECT SUM(p.male_count)
            FROM insights.perpetrators_ageoverall p
        )
        /
        NULLIF(
            (
                SELECT SUM(p.total)
                FROM insights.perpetrators_ageoverall p
            ),
            0
        ),
        1
    ) AS male_perp_pct,

    (
        SELECT ROUND(
            100.0 * SUM(count)
            /
            NULLIF(
                (
                    SELECT SUM(count)
                    FROM insights.victim_employment
                ),
                0
            ),
            1
        )
        FROM insights.victim_employment
        WHERE employment_status = 'unemployed'
    ) AS victim_unemployed_pct,

    (
        SELECT ROUND(
            100.0 * SUM(count)
            /
            NULLIF(
                (
                    SELECT SUM(count)
                    FROM insights.perpetrator_employment
                ),
                0
            ),
            1
        )
        FROM insights.perpetrator_employment
        WHERE employment_status = 'unemployed'
    ) AS perp_unemployed_pct,

    (
        SELECT percentage
        FROM insights.relationship_overall
        WHERE relationship_type = 'romantic_link'
    ) AS romantic_link_pct,

    (
        SELECT percentage
        FROM insights.relationship_overall
        WHERE relationship_type = 'stranger'
    ) AS stranger_pct,

    (
        SELECT ROUND(
            100.0 * SUM(count)
            /
            NULLIF(
                (
                    SELECT SUM(count)
                    FROM insights.perpetrator_maritial
                ),
                0
            ),
            1
        )
        FROM insights.perpetrator_maritial
        WHERE marital_status = 'never_married'
    ) AS perp_never_married_pct

FROM  insights.victims_ageoverall v;
```

```sql victim_overall_age
select
  age_group,
  male_count,
  female_count,
  total,
  percentage
from insights.victims_ageoverall
order by age_group
```

```sql perp_overall_age
select
  age_group,
  male_count,
  female_count,
  total,
  percentage
from insights.perpetrators_ageoverall
order by age_group
```

Across all 11 serious offences, **5,929 victims and 5,766 perpetrators were analysed** in 2024. The demographic patterns are remarkably consistent regardless of crime type — suggesting structural rather than incidental drivers of victimisation and offending.



  <BigValue
    data={profile_summary}
    value=total_victims
    title="Total victims analysed"
    fmt='#,##0'
  />

<Grid cols=4>


    <BigValue data={profile_summary} value=female_victim_pct title="Female" fmt='0.0"%"' />
    <BigValue data={profile_summary} value=victim_unemployed_pct title="Unemployed" fmt='0.0"%"' />
    <BigValue data={profile_summary} value=romantic_link_pct title="Romantic link perpetrator" fmt='0.0"%"' />
    <BigValue data={profile_summary} value=stranger_pct title="Stranger perpetrator" fmt='0.0"%"' />

</Grid>
  
  

  
  <BigValue
    data={profile_summary}
    value=total_perpetrators
    title="Total perpetrators analysed"
    fmt='#,##0'
  />


    <BigValue data={profile_summary} value=male_perp_pct title="Male" fmt='0.0"%"' />
    <BigValue data={profile_summary} value=perp_unemployed_pct title="unemployed" fmt='0.0"%"' />
    <BigValue data={profile_summary} value=perp_never_married_pct title="Never married" fmt='0.0"%"' />


---

<Tabs color=primary fullWidth=true>
    <Tab label="Victime Profile">
              
      <Grid cols=2>

        <BarChart
          data={victim_overall_age}
          x=age_group
          y=total
          title="Victim age distribution — all serious crimes"
          subtitle="5,929 victims analysed 2024"
          colorPalette={['#9d174d']}
          labels=true
        />

      <BarChart
          data={female_victims}
          x=offence
          y=female_victim_pct
          yFmt='0.0"%"'
          title="Female Victim Percentage by Offence"
          subtitle="Sexual and gender-based offences show the highest female victimisation rates"
          horizontal=true
          colorPalette={['#be185d']}
          labels=true
      />

      </Grid>

      <Grid cols=3>

        <BarChart
          data={victim_employment_all}
          x=offence
          y=percentage
          series=employment_status
          yFmt='0.0"%"'
          title="Victim employment status by offence"
          subtitle="65% unemployed across all crimes"
          colorPalette={['#1a3260','#0e7490','#b45309']}
        />

        <BarChart
          data={victim_marital_all}
          x=offence
          y=percentage
          series=marital_status
          yFmt='0.0"%"'
          title="Victim marital status by offence"
          subtitle="Never married dominant across all categories"
          colorPalette={['#1a3260','#0e7490','#b45309','#166534','#6d28d9','#9d174d']}
        />

        <BarChart
          data={victim_education_all}
          x=offence
          y=percentage
          series=education_level
          yFmt='0.0"%"'
          title="Victim education level by offence"
          subtitle="Secondary education most prevalent"
          colorPalette={['#9ca3af','#1a3260','#0e7490','#b45309']}
        />

      </Grid>

      <Alert status=info>
        **Robbery victim exception:** Robbery is the only serious crime where employed victims (40.9%) outnumber unemployed victims (22.9%). This reflects the nature of the offence — robbery targets people who have cash or assets, meaning employed and self-employed individuals are disproportionately targeted. All other crimes show unemployed victims as the majority.
      </Alert>

      The 16 to 20 age group is the single most vulnerable — accounting for 27% of all serious crime victims nationally. This concentration of young female victims across rape, defilement, and threat to kill points to a structural vulnerability in adolescent and young adult populations that cross-cuts crime categories.

    </Tab>
    <Tab label="Perpetrator profiles">
              
      **98% of all perpetrators across all serious crimes are male.** The peak age group is 26 to 30 years at 20.2%, followed closely by 21 to 25 years (19.6%) and 31 to 35 years (17.4%). Together the 21 to 35 age bracket accounts for 57.2% of all perpetrators.


      <Grid cols=2>

        <BarChart
          data={perp_overall_age}
          x=age_group
          y=total
          title="Perpetrator age distribution — all crimes"
          subtitle="5,766 perpetrators 2024 — peak 26–30 years"
          colorPalette={['#1a3260']}
          labels=true
        />

        <BarChart
          data={perp_gender_by_offence}
          x=offence
          y=male_pct
          yFmt='0.0"%"'
          title="Male perpetrator percentage by offence"
          subtitle="Human trafficking is the only offence under 70% male"
          horizontal=true
          colorPalette={['#1a3260']}
          labels=true
        />

      </Grid>

      <Grid cols=2>

        <BarChart
          data={perp_education_all}
          x=offence
          y=percentage
          series=education_level
          yFmt='0.0"%"'
          title="Perpetrator education level by offence"
          subtitle="Secondary education most common across all categories"
          colorPalette={['#9ca3af','#1a3260','#0e7490','#b45309']}
        />

        <BarChart
          data={perp_marital_all}
          x=offence
          y=percentage
          series=marital_status
          yFmt='0.0"%"'
          title="Perpetrator marital status by offence"
          subtitle="Never married 88%+ across virtually all offences"
          colorPalette={['#1a3260','#0e7490','#b45309','#166534','#6d28d9','#9d174d']}
        />

      </Grid>

      <Alert status=info>
        **Secondary education with no economic participation:** Both perpetrators and victims are predominantly secondary-educated. This is a critical finding — crime in Botswana is not primarily a product of educational exclusion. The system is producing secondary graduates who cannot find employment. The gap between educational attainment and economic participation is the structural driver, not education level itself.
      </Alert>


    </Tab>
</Tabs>

<!-- Victim profiles -->

```sql victim_gender_by_offence
select * from insights.victim_relo
```
```sql female_victims
SELECT
    offence,

    SUM(female_count) AS female_victims,

    SUM(male_count) AS male_victims,

    SUM(total) AS total_victims,

    ROUND(
        100.0 * SUM(female_count)
        / NULLIF(SUM(total), 0),
        1
    ) AS female_victim_pct

FROM insights.victim_age

GROUP BY offence

ORDER BY female_victim_pct DESC;
```

```sql victim_employment_all
select
  offence,
  employment_status,
  count,
  percentage
from insights.victim_employment
order by offence, percentage desc
```

```sql victim_marital_all
select
  offence,
  marital_status,
  count,
  percentage
from insights.victim_maritial 
order by offence, count desc
```

```sql victim_education_all
select
  offence,
  education_level,
  count,
  percentage
from insights.victim_education
order by offence, count desc
```


<!-- Perpetrator profiles -->

```sql perp_gender_by_offence
select
  offence,
  sum(male_count)   as male_total,
  sum(female_count) as female_total,
  sum(total)        as grand_total,
  round(100.0 * sum(male_count) / nullif(sum(total), 0), 1) as male_pct
from insights.perpetrator_age
group by offence
order by male_pct desc
```

```sql perp_employment_all
select
  offence,
  employment_status,
  count,
  percentage
from insights.perpetrator_employment
order by offence, percentage desc
```

```sql perp_marital_all
select
  offence,
  marital_status,
  count,
  percentage
from insights.perpetrator_maritial
order by offence, count desc
```

```sql perp_education_all
select
  offence,
  education_level,
  count,
  percentage
from insights.perpetrator_education
order by offence, count desc
```

---

## The unemployment finding

```sql unemployment_rates
select * from insights.perpetrator_unemployment
order by unemployment_rate_pct desc
```

```sql unemp_comparison
select
  pe.offence,
  max(case when pe.employment_status = 'unemployed' then pe.percentage end) as perp_unemployed_pct,
  max(case when ve.employment_status = 'unemployed' then ve.percentage end) as victim_unemployed_pct
from insights.perpetrator_employment pe
left join insights.victim_employment ve
  on pe.offence = ve.offence
  and ve.employment_status = 'unemployed'
group by pe.offence
order by perp_unemployed_pct desc nulls last
```

No other socio-demographic variable correlates as consistently with perpetrator status as unemployment. **In 10 of the 11 serious offences, more than 60% of perpetrators are unemployed.** The rates range from 60.5% for threat to kill to 91.4% for store breaking. This consistency across crime types that differ fundamentally in nature — from intimate partner violence to stock theft to property breaking — makes the correlation impossible to explain away as coincidental.


<BarChart
  data={unemployment_rates}
  x=offence
  y=unemployment_rate_pct
  yFmt='0.0"%"'
  title="Perpetrator unemployment rate by offence — 2024"
  subtitle="Percentage of perpetrators who are unemployed across all 11 serious offences"
  horizontal=true
  colorPalette={['#1a3260']}
  labels=true
/>

<Grid cols=2>

  <BarChart
    data={unemp_comparison}
    x=offence
    y={['perp_unemployed_pct','victim_unemployed_pct']}
    yFmt='0.0"%"'
    title="Unemployment — perpetrators vs victims"
    subtitle="Perpetrators consistently more unemployed than victims"
    colorPalette={['#1a3260','#9d174d']}
    labels=false
  />

  <DataTable
    data={unemployment_rates}
    search=false
    title="Unemployment rates by offence"
  >
    <Column id="offence" title="Offence" />
    <Column id="unemployed" fmt='#,##0' title="Unemployed" />
    <Column id="total_perpetrators" fmt='#,##0' title="Total perps" />
    <Column id="unemployment_rate_pct" fmt='0.0"%"' title="Rate" contentType=colorscale colorScale=intensity />
  </DataTable>

</Grid>

<Alert status=warning>
  **The policy implication:** If unemployment is the strongest cross-crime predictor, then crime prevention strategies focused exclusively on policing and enforcement are addressing the symptom rather than the cause. **Economic inclusion programmes, youth employment initiatives, and vocational training targeting the 21–35 male age group are likely to have a measurable impact on serious crime rates.** The data provides the empirical basis for this argument — 77% or more of perpetrators across the most prevalent crime categories are unemployed. The correlation is too consistent to be coincidental.
</Alert>


---

## Victim-perpetrator relationship analysis

```sql relationship_overall
select
  relationship_type,
  cases,
  percentage
from insights.relationship_overall
order by cases desc
```

```sql relationship_by_offence
select
  offence,
  relationship_type,
  count,
  percentage
from insights.victim_relo
order by offence, count desc
```

```sql relationship_pivot
select
  offence,
  max(case when relationship_type = 'romantic_link'  then percentage end) as romantic_link,
  max(case when relationship_type = 'stranger'       then percentage end) as stranger,
  max(case when relationship_type = 'acquaintance'   then percentage end) as acquaintance,
  max(case when relationship_type = 'relative'       then percentage end) as relative,
  max(case when relationship_type = 'friend'         then percentage end) as friend
from insights.victim_relo
group by offence
order by romantic_link desc nulls last
```

The data reveals a clear structural divide. **Crimes against persons are overwhelmingly domestic and intimate** — murder (37.1% romantic link), threat to kill (70.9%), and defilement (79.2%) all show intimate partner dynamics as the dominant context. **Rape stands apart** — 51.4% of perpetrators are strangers, making it fundamentally different in nature from the other GBV offences.

<Grid cols=2>

  <BarChart
    data={relationship_overall}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim-perpetrator relationship — overall"
    subtitle="Across all offences where relationship data exists"
    horizontal=true
    colorPalette={['#1a3260']}
    labels=true
  />

  <BarChart
    data={relationship_pivot}
    x=offence
    y={['romantic_link','stranger','acquaintance','relative','friend']}
    yFmt='0.0"%"'
    title="Relationship type by offence"
    subtitle="Intimate violence vs stranger crime — two distinct patterns"
    colorPalette={['#dc2626','#1a3260','#0e7490','#b45309','#6d28d9']}
  />

</Grid>

<Alert status=info>
  **The two-strategy implication:** Botswana's serious crime requires two fundamentally different prevention approaches operating simultaneously. For **intimate violence crimes** (murder, threat to kill, defilement) — domestic violence intervention, relationship education, and conflict mediation are the most effective levers. For **stranger and opportunistic crimes** (rape, robbery, property crime) — environmental design, lighting, community policing, and situational prevention apply. A single unified strategy will be sub-optimal for both.
</Alert>


---
## TNDP II & SDG performance indicators

<!-- TNDP II performance indicators -->

```sql tndp_all
select
  indicator_key,
  indicator_description,
  year,
  incidents,
  population,
  rate
from insights.tndp
order by indicator_key, year
```

```sql tndp_pivot
select
  indicator_description                                           as indicator,
  max(case when year = 2022 then rate end)                       as rate_2022,
  max(case when year = 2023 then rate end)                       as rate_2023,
  max(case when year = 2024 then rate end)                       as rate_2024,
  round(
    100.0 * (
      max(case when year = 2024 then rate end) -
      max(case when year = 2022 then rate end)
    ) / nullif(max(case when year = 2022 then rate end), 0)
  , 1)                                                           as three_yr_change_pct
from insights.tndp
group by indicator_description
```

```sql tndp_normalised
select
  t.indicator_key,
  t.year,
  round(
    100.0 * t.rate / nullif(base.base_rate, 0)
  , 1) as indexed_rate
from insights.tndp t
join (
  select indicator_key, rate as base_rate
  from insights.tndp
  where year = 2022
) base on t.indicator_key = base.indicator_key
order by t.indicator_key, t.year
```


<!-- SDG indicators — Agenda 2030 -->

```sql sdg_pivot
select
  indicator_description                                           as indicator,
  max(case when year = 2022 then rate end)                       as rate_2022,
  max(case when year = 2023 then rate end)                       as rate_2023,
  max(case when year = 2024 then rate end)                       as rate_2024,
  round(
    100.0 * (
      max(case when year = 2024 then rate end) -
      max(case when year = 2022 then rate end)
    ) / nullif(max(case when year = 2022 then rate end), 0)
  , 1)                                                           as three_yr_change_pct
from insights.sdg
group by indicator_description
```

```sql sdg_trend
select
  indicator_key,
  year,
  rate
from insights.sdg
order by indicator_key, year
```


<Tabs color=primary fullWidth=true>
    <Tab label="TNDP II performance indicators">
        The Botswana Police Service reports against the Transitional National Development Plan II (TNDP II). **Three of the four primary indicators improved in 2024**, continuing a trend established in 2023. The only worsening indicator is the intentional homicide rate — reflecting the sustained increase in murder cases.

        <LineChart
          data={tndp_normalised}
          x=year
          y=indexed_rate
          series=indicator_key
          yFmt='0.0"%"'
          title="TNDP II indicators — indexed to 2022 baseline"
          subtitle="2022 = 100% for all indicators — homicide is the only rising line"
          colorPalette={['#1a3260','#0e7490','#9d174d','#dc2626']}
          labels=true
        />
        <DataTable data={tndp_pivot} search=false title="Three-year summary — rates per population base">
          <Column id="indicator" title="Indicator" />
          <Column id="rate_2022" fmt='0.0' title="2022" />
          <Column id="rate_2023" fmt='0.0' title="2023" />
          <Column id="rate_2024" fmt='0.0' title="2024" />
          <Column id="three_yr_change_pct" fmt='0.0"%"' title="3yr change" contentType=delta downIsGood=true />
        </DataTable>
    </Tab>

    <Tab label="SDG indicators — Agenda 2030">
        
      Botswana's SDG-linked crime indicators show improvement in three of four categories. The road traffic death rate declined from 16.4 to 13.6 per 100,000 — meaningful progress toward the SDG target of halving road traffic deaths by 2030. The proportion of the population subjected to violence declined 21% over three years.


        <LineChart
          data={sdg_trend}
          x=year
          y=rate
          series=indicator_key
          title="SDG indicators — 2022 to 2024"
          subtitle="Three of four indicators improving"
          colorPalette={['#1a3260','#0e7490','#9d174d','#dc2626']}
          labels=true
        />

        <DataTable data={sdg_pivot} search=false title="SDG indicators — three-year summary">
          <Column id="indicator" title="SDG indicator" />
          <Column id="rate_2022" fmt='0.0' title="2022" />
          <Column id="rate_2023" fmt='0.0' title="2023" />
          <Column id="rate_2024" fmt='0.0' title="2024" />
          <Column id="three_yr_change_pct" fmt='0.0"%"' title="3yr change" contentType=delta downIsGood=true /> 
          </DataTable>

        <Alert status=error>
          **The one worsening SDG indicator:** Intentional homicide victims per 100,000 population increased from 12.9 in 2023 to 13.3 in 2024 — the fourth consecutive annual increase. This is the primary area of concern for the 2025 reporting cycle and the most urgent challenge for the Botswana Police Service in the coming year.
        </Alert>

    </Tab>
</Tabs>



 

---


## Ten key findings — 2024

The most important analytical conclusions from the Annual Crime Statistics Report 2024, synthesised across all three pages of this publication.

```sql findings_check
select 146529 as total, 2024 as year
from insights.crime_totals
where year = 2024
limit 1
```

**1 — Crime is declining broadly.** Total offences fell 8.2% in 2024 — from 159,680 to 146,529 — the largest single-year decline in six years. All five police divisions recorded fewer offences than in 2023.

**2 — Murder is the critical exception.** 337 cases in 2024, up 4.7% for the fourth consecutive year. Murder is the only serious offence trending consistently upward since 2020 and represents Botswana's most urgent unresolved public safety challenge.

**3 — Serious crime is primarily intimate and domestic.** Jealousy and argument account for 60% of murder motives. Romantic relationships account for 37% of murder perpetrator-victim relationships, 71% of threat to kill, and 79% of defilement. Most of Botswana's serious violence occurs between people who know each other well.

**4 — One third of all crime is concentrated in two adjacent districts.** Mogoditshane (17.7%) and Gaborone (15.6%) together account for 33.3% of national crime. The Gaborone metropolitan corridor requires sustained dedicated policing resources disproportionate to its geographic area.

**5 — Women bear a disproportionate burden.** 85% of all serious crime victims are female. 99.2% of rape victims are female. 99.9% of defilement victims are female. The GBV rate declined from 19.3 to 17.3 per 10,000 in 2024 — a positive trend, but still over 12 GBV incidents per day.

**6 — Unemployment is the strongest cross-crime predictor.** Over 70% of perpetrators are unemployed in every serious crime category except human trafficking. This consistency points to economic exclusion as a structural driver that policing alone cannot address.

**7 — Secondary-educated individuals dominate both profiles.** Both victims and perpetrators are predominantly secondary-educated. Crime is not driven by educational exclusion — it is driven by the failure to translate education into economic participation.

**8 — Human trafficking targets children.** 46.8% of identified trafficking victims are aged 6 to 10. The unusual employed-perpetrator profile suggests more organised networks requiring intelligence-led investigation.

**9 — Road safety is genuinely improving.** 346 road deaths in 2024 — down from 396 in 2023. The rate per 100,000 declined from 16.4 in 2022 to 13.6 in 2024. Concurrent increases in speeding (+33.9%) and mobile phone use while driving (+45.9%) present a risk to this trend.

**10 — Property crime declined sharply.** All six property crime categories declined. Motor vehicle theft fell 34.1% and robbery fell 29.5% — the two sharpest single-year improvements in the serious offences portfolio.

---

<LastRefreshed prefix="Data last updated"/>

<Note>
  Source: Botswana Police Service, Annual Crime Statistics Report 2024 · Analysis: Data 123, insights.data123.online · Published 2025 · All figures drawn directly from BPS source tables · Reported crimes only — actual incidence is higher
</Note>

<Grid cols=2>
  <LinkButton url="/crime-statistics-2024/overview">
    ← Page 1: Overview
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious offences
  </LinkButton>
</Grid>
