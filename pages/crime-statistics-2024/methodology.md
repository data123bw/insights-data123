---
title: Methodology and Notes
sidebar_position: 4
---
ata source, collection methodology, analytical approach, known limitations, and citation guidance for the Botswana Annual Crime Statistics Report 2024 — Data 123 Intelligence Publication.

<Note>
  This page documents how the data in this publication was collected, processed, and analysed. Reading this section before drawing policy conclusions is strongly recommended. Every dataset has limitations — understanding them is part of understanding the findings.
</Note>

---

## About this publication

```sql pub_facts
select
  146529  as total_offences,
  14560   as serious_offences,
  5929    as victims_analysed,
  5766    as perpetrators_analysed,
  17      as police_districts,
  11      as serious_offences_analysed,
  2540215 as population_2024
from insights.crime_totals  
where year = 2024
limit 1
```

This publication — **Annual Crime Statistics Report 2024** — is produced by Data 123 as part of the open intelligence series at insights.data123.online. It is an independent analytical publication based entirely on data released by the Botswana Police Service in their official Annual Crime Statistics Report 2024.

Data 123 did not collect, verify, or audit the underlying crime data. All figures in this publication are drawn directly and exclusively from BPS source tables. Data 123's contribution is the extraction, structuring, visualisation, and analytical commentary — not the primary data itself.

<Grid cols=4>
  <BigValue data={pub_facts} value=total_offences title="Total offences covered" fmt='#,##0' />
  <BigValue data={pub_facts} value=serious_offences title="Serious offences analysed" fmt='#,##0' />
  <BigValue data={pub_facts} value=victims_analysed title="Victims profiled" fmt='#,##0' />
  <BigValue data={pub_facts} value=perpetrators_analysed title="Perpetrators profiled" fmt='#,##0' />
</Grid>

---

## Primary data source

**Publisher:** Botswana Police Service (BPS)

**Publication:** Annual Crime Statistics Report 2024

**Reference period:** 1 January 2024 to 31 December 2024

**Geographic coverage:** All 17 police districts across 5 police divisions — national coverage

**Population estimates:** Statistics Botswana, Population Projections 2011–2026 (published November 2015). 2024 estimate: 2,540,215.

The BPS Annual Crime Statistics Report is an official government publication produced annually under the Police Sector Statistics Plan. It has been published consistently for over eight years and represents the authoritative source of crime data for Botswana.

---

## How the data was collected

Primary data is collected by the Botswana Police Service from victims and perpetrators using the Case Docket system. The Case Docket consists of:

- **Form BP 19** — the Complaint Form completed at the time of reporting
- **Statements** — written accounts from victims, witnesses, and perpetrators
- **Diaries** — investigative records updated as cases progress

Data from completed Case Dockets is transferred to the Crime Register, where updates are made regularly as investigations progress. The Crime Register is then analysed through the BPS Crime Statistics Data Collection Tool to produce the aggregate tables that form the basis of the Annual Report.

---

## Scope of the 2024 report

The report covers two broad categories of offence:

**Penal Code offences** — crimes defined under the Botswana Penal Code (Cap. 08:01), the primary statute defining criminal offences and their punishments. Penal Code offences account for 73.5% of all recorded crime in 2024 (107,757 cases). The Penal Code is organised into ten categories covering offences against persons, property, public order, and the administration of lawful authority.

**Other Statutes (excluding traffic)** — offences defined in legislation outside the Penal Code, primarily regulatory violations. These account for 26.5% of recorded crime (38,772 cases).

Road traffic offences are reported separately and total 345,857 in 2024. They are covered in the national overview but excluded from the serious offences analysis.

The report provides deep analysis of **eleven selected serious offences** — these are the crimes examined with full demographic breakdowns of victims and perpetrators:

```sql offence_list
SELECT
    offence,
    cases_2024
FROM insights.offence_list2024
ORDER BY cases_2024 DESC;
```

<DataTable data={offence_list} search=false rows=11>
  <Column id="offence" title="Offence" />
  <Column id="cases_2024" fmt='#,##0' title="Cases 2024" />
</DataTable>

---

## What is analysed for each serious offence

For each of the eleven selected offences, the BPS report provides analysis across three dimensions:

**Event description** — the circumstances of the incident:
- Time of day and day of week (in 2-hour bands across 7 days)
- Month of year
- Location type
- Weapon or implement used (where applicable)
- Motive (murder and threat to kill only)
- Point of entry (breaking offences only)

**Victim description** — characteristics of the person harmed:
- Age group and sex
- Marital status
- Education level attained
- Employment status
- Relationship to the perpetrator (selected offences)

**Perpetrator description** — characteristics of the person who committed the offence:
- Age group and sex
- Marital status
- Education level attained
- Employment status

Perpetrator data covers only individuals who had been dealt with by the police at the time of reporting. The perpetrator counts in this publication are therefore lower than case counts — not every identified offender had been processed by the time the report was compiled.

---

## How Data 123 processed the data
 
<style>
.d123-wrap{padding:4px 0 8px;font-family:inherit}
.d123-flow{display:flex;align-items:stretch;gap:0;margin-bottom:20px}
.d123-step{flex:1;position:relative}
.d123-inner{
  background:var(--color-background-secondary);
  border:0.5px solid var(--color-border-tertiary);
  padding:12px 14px;
  height:100%
}
.d123-step:first-child .d123-inner{border-radius:8px 0 0 8px}
.d123-step:last-child .d123-inner{border-radius:0 8px 8px 0}
.d123-step:not(:first-child) .d123-inner{border-left:none}
.d123-arrow{
  display:flex;align-items:center;justify-content:center;
  width:22px;flex-shrink:0;
  color:var(--color-text-tertiary);
  font-size:13px
}
.d123-icon{font-size:18px;margin-bottom:6px}
.d123-lbl{
  font-size:10px;font-weight:600;
  color:var(--color-text-tertiary);
  letter-spacing:0.08em;text-transform:uppercase;margin-bottom:3px
}
.d123-title{font-size:13px;font-weight:500;color:var(--color-text-primary)}
.d123-cards{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin-bottom:18px
}
.d123-card{
  background:var(--color-background-primary);
  border:0.5px solid var(--color-border-tertiary);
  border-radius:10px;
  padding:14px
}
.d123-cicon{font-size:20px;margin-bottom:8px}
.d123-ctitle{font-size:12px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px}
.d123-cbody{font-size:11px;color:var(--color-text-secondary);line-height:1.55}
.d123-note{
  border-left:2px solid var(--color-border-secondary);
  padding:10px 14px;
  font-size:12px;
  color:var(--color-text-secondary);
  line-height:1.6
}
.d123-note strong{font-weight:500;color:var(--color-text-primary)}
.d123-section{
  font-size:10px;font-weight:600;
  color:var(--color-text-tertiary);
  letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px
}
</style>

<div class="d123-wrap">
  <div class="d123-section">Pipeline architecture</div>
  <div class="d123-flow">
    <div class="d123-step">
      <div class="d123-inner">
        <div class="d123-icon">📄</div>
        <div class="d123-lbl">Extract</div>
        <div class="d123-title">PDF → structured tables</div>
      </div>
    </div>
    <div class="d123-arrow">→</div>
    <div class="d123-step">
      <div class="d123-inner">
        <div class="d123-icon">⚙️</div>
        <div class="d123-lbl">Transform</div>
        <div class="d123-title">Clean, normalise, validate</div>
      </div>
    </div>
    <div class="d123-arrow">→</div>
    <div class="d123-step">
      <div class="d123-inner">
        <div class="d123-icon">🗄️</div>
        <div class="d123-lbl">Load</div>
        <div class="d123-title">Cloud data warehouse</div>
      </div>
    </div>
    <div class="d123-arrow">→</div>
    <div class="d123-step">
      <div class="d123-inner">
        <div class="d123-icon">📊</div>
        <div class="d123-lbl">Publish</div>
        <div class="d123-title">Live queries at build time</div>
      </div>
    </div>
  </div>
  <div class="d123-section">What the pipeline handles</div>
  <div class="d123-cards">
    <div class="d123-card">
      <div class="d123-cicon">💻</div>
      <div class="d123-ctitle">In-house ETL</div>
      <div class="d123-cbody">Pipeline designed and built entirely by the Data 123 engineering team — no off-the-shelf tools</div>
    </div>
    <div class="d123-card">
      <div class="d123-cicon">🗂️</div>
      <div class="d123-ctitle">Schema design</div>
      <div class="d123-cbody">26-table normalised schema with views, handling three incompatible source taxonomies</div>
    </div>
    <div class="d123-card">
      <div class="d123-cicon">✅</div>
      <div class="d123-ctitle">Validation</div>
      <div class="d123-cbody">Automated quality checks on every table — schema, uniqueness, completeness, and range</div>
    </div>
    <div class="d123-card">
      <div class="d123-cicon">🔄</div>
      <div class="d123-ctitle">Repeatable</div>
      <div class="d123-cbody">Pipeline re-runs annually when new BPS data is published — no manual rework required</div>
    </div>
  </div>
  <div class="d123-note">
    <strong>Same architecture, every sector.</strong> The infrastructure powering this publication is the same platform Data 123 deploys across education, tourism, and labour market intelligence. Contact <strong>info@data123.online</strong> for data engineering and analytics services.
  </div>
</div>


---

## Known limitations

Understanding these limitations is essential for correct interpretation of the findings.

**Reported crimes only.** All figures in this publication reflect crimes that were reported to the police and recorded in the Crime Register. Actual crime incidence is higher than reported incidence for all offence categories. The gap between reported and actual incidence is largest for gender-based violence and human trafficking, where stigma, fear, and lack of awareness create substantial barriers to reporting. All figures in this publication represent a floor, not a ceiling, of actual incidence.

**Ongoing investigations.** The report analyses cases recorded during 2024 whether completed or not. Some facts and descriptions may change once cases progress beyond preliminary investigations. Perpetrator characteristics in particular may be updated as investigations conclude.

**Perpetrator undercounting.** Perpetrator data covers only individuals dealt with by the police at the time of reporting. For most offences, the number of perpetrators recorded is substantially lower than the number of cases — reflecting that many offenders had not yet been identified, arrested, or processed when the report was compiled.

**The 2020 anomaly.** The 22.8% decline in total offences recorded in 2020 reflects the impact of COVID-19 pandemic restrictions on both criminal activity and reporting capacity. Court closures, reduced movement, and reduced police processing capacity all suppressed reported crime below actual incidence in 2020. The 2021 and 2022 increases partially reflect reporting catch-up from the pandemic period. Year-on-year comparisons involving 2020 should be treated with caution.

**Defilement age band incompatibility.** The defilement offence uses a compressed age band of 16–18 years for victims, while all other offences use a standard 5-year band of 16–20 years. Cross-offence age comparisons involving defilement victim data in the 16–18 range are not directly comparable to other offences. This is flagged in the database with an `age_band_note` field.

**North West division historical gap.** The North West Police Division was established in 2022. Data for this division is absent (NULL, not zero) for 2019, 2020, and 2021. National averages and growth rates that include this division over the full six-year period should account for this gap.

**Location taxonomy differences.** Three incompatible location classification systems are used across the eleven serious offences. Robbery uses a four-category system (home invasion, business invasion, street robbery, other). Stock theft uses a five-category rural system (kraal, grazing pasture, farm, pond/stream, other). All other offences use a nine-category standard system. Direct location comparisons across these three groups are not valid.

**Population estimates.** Rates per population (per 10,000 or per 100,000) use population projections from the 2015 Statistics Botswana publication. These are projections, not census counts, and carry their own uncertainty. The 2024 estimate used is 2,540,215.

---

## Analytical approach — Data 123

All analytical commentary in this publication represents the independent interpretation of Data 123 analysts based on the BPS data. Commentary reflects patterns visible in the data and does not represent the views of the Botswana Police Service or any government body.

Where the data shows a clear directional finding — for example, the consistent unemployment correlation across perpetrator profiles — the commentary states this directly. Where findings are ambiguous or require contextual interpretation — for example, the sharp decline in human trafficking cases — the commentary explicitly flags the interpretive uncertainty.

No data has been modelled, interpolated, or estimated beyond what is present in the BPS source tables. Every chart and table in this publication is directly queryable against the `crime_stats` database schema.

---

## How to cite this publication

**Citing the underlying data:**

> Botswana Police Service (2025). *Annual Crime Statistics Report 2024*. Botswana Police Service, Gaborone.

**Citing this publication:**

> Data 123 (2025). *Annual Crime Statistics Report 2024 — Intelligence Publication*. Data 123, Gaborone. insights.data123.online/crime-statistics-2024. Retrieved [date].

**Citing a specific finding:**

> Data 123 (2025), citing Botswana Police Service (2025). [Finding]. *Annual Crime Statistics Report 2024 — Intelligence Publication*. insights.data123.online/crime-statistics-2024.

Reproduction of charts and written analysis from this publication is permitted provided both the Botswana Police Service (as the primary data source) and Data 123 (as the analytical publisher) are attributed.

---

## About Data 123

Data 123 is a Botswana data consultancy providing research, analytics, and intelligence services to organisations across the public and private sectors.

The Insights Hub at insights.data123.online is a series of open intelligence publications — annual reports, data visualisations, and analytical commentary published freely for organisations and individuals across Botswana.

Future publications in this series include Education Statistics 2025, Tourism Intelligence 2025, and Labour Market Intelligence 2025.

**Contact:** info@data123.online · +267 71 965 383 · data123.online

---

<LastRefreshed prefix="Data last updated"/>

<Grid cols=3>
  <LinkButton url="/crime-statistics-2024/overview">
    ← Page 1: Overview
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious offences
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/profiles">
    ← Page 3: Profiles and performance
  </LinkButton>
</Grid>
