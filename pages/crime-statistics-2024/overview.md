---
title: Overview
hide_title: true
sidebar_position: 1
---

<style>
/* ── Hero ── */
.hero {
    background: #1E3A5F;
    color: white;
    padding: 40px 32px 120px;
    border-radius: 12px;
    margin-top: -26px; /* cancel the layout's top gap so the hero starts at the top */
    margin-bottom: 0px;
}
@media (max-width: 639px) {
    .hero { margin-top: -16px; }
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
    color: #3EC58E;
}

.danger .snapshot-value {
    color: #dc2626;
}

/* ── Data Currency Note ── */
.currency-note {
    margin: 24px 24px 0;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 5px solid #FF9F43;
    border-radius: 18px;
    padding: 16px 20px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
}

.currency-note .cn-icon {
    font-size: 22px;
    flex-shrink: 0;
    margin-top: 2px;
}

.currency-note h4 {
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 4px;
}

.currency-note p {
    font-size: 12.5px;
    line-height: 1.65;
    color: #64748b;
    margin: 0;
}

.currency-note a {
    color: #0042A0;
    font-weight: 600;
}

/* ── Section 3 — Executive Summary ── */
.executive-summary {
    padding: 20px;
}

.section-heading {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 16px;
}

.section-tag {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 999px;
    background: #dce8ff;
    color: #0042A0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.section-heading h2 {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 8px;
}

.section-heading p {
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

.insight-icon.success { background: #ecfdf5; color: #3EC58E; }
.insight-icon.danger  { background: #fef2f2; color: #dc2626; }
.insight-icon.primary { background: #eff6ff; color: #0042A0; }
.insight-icon.warning { background: #fffbeb; color: #FF9F43; }

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
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.trend-chart-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,.05), 0 24px 44px rgba(0,0,0,.08);
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
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.findings-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,.05), 0 24px 44px rgba(0,0,0,.08);
}

.finding-item {
    display: flex;
    gap: 16px;
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

    padding: 20px;
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

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.map-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,.05), 0 24px 44px rgba(0,0,0,.08);
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

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.geo-highlight:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 26px rgba(0,66,160,0.3);
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

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.geo-stat:hover { transform: translateY(-3px); }
.geo-stat.orange:hover { box-shadow: 0 8px 20px rgba(255,159,67,0.2); }
.geo-stat.purple:hover { box-shadow: 0 8px 20px rgba(154,103,253,0.2); }
.geo-stat.green:hover  { box-shadow: 0 8px 20px rgba(62,197,142,0.2); }

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

    border-left: 4px solid #3EC58E;

    border-radius: 16px;

    padding: 12px 16px;

    font-size: 12px;

    line-height: 1.6;

    color: #475569;

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.geo-story:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(62,197,142,0.15);
}

/* =====================================================
SECTION 6 — CRIME STRUCTURE
===================================================== */

.crime-structure {

    padding: 20px 20px 20px;
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

    margin-top: 15px;

    background: #f8fafc;

    border-left: 5px solid #3EC58E;

    border-radius: 18px;

    padding: 15px;

    display: flex;

    gap: 18px;
}

.si-icon {
    font-size: 26px;
}

.structure-insight h4 {

    margin-bottom: 8px;

    font-size: 15px;

    font-weight: 700;

    text-align: left;
}

.structure-insight p {

    color: #64748b;
    line-height: 1.8;
    font-size: 15px;

}

/* =====================================================
SECTION 8 — NATIONAL DEVELOPMENT INDICATORS
===================================================== */

.indicator-section{
    padding:20px;
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
    text-align:left;
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

.progress-card{

    background:white;

    border:1px solid #e2e8f0;

    border-radius:16px;

    padding:18px;

    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.progress-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,.05), 0 24px 44px rgba(0,0,0,.08);
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
    color:#3EC58E;
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
    text-align:left;
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

    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.sdg-card:hover { transform: translateY(-3px); }

.sdg-card.positive{
    border-top:4px solid #3EC58E;
}
.sdg-card.positive:hover { box-shadow: 0 10px 26px rgba(62,197,142,0.18); }

.sdg-card.negative{
    border-top:4px solid #DC2626;
}
.sdg-card.negative:hover { box-shadow: 0 10px 26px rgba(220,38,38,0.15); }

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
    color:#3EC58E;
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

    color:#3EC58E;
}

/* ── Indicator tabs — segmented control ── */
.ov-tabs :global(section > nav) {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    background: #E9EDF6;
    border: 1px solid #dde2f0 !important;
    border-radius: 14px;
    padding: 6px;
    margin: 0 0 24px !important;
}
.ov-tabs :global(section > nav > button) {
    flex: 1;
    margin: 0 !important;
    padding: 11px 14px;
    border: none !important;
    border-radius: 10px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #718096;
    background: transparent;
    transition: all 0.18s ease;
    white-space: nowrap;
}
.ov-tabs :global(section > nav > button:hover) {
    color: #2D3748;
    background: rgba(255,255,255,0.65);
}
.ov-tabs :global(section > nav > button.border-b-2) {
    background: linear-gradient(135deg, #0042A0 0%, #1E3A5F 100%);
    color: #fff !important;
    box-shadow: 0 6px 18px rgba(0,66,160,0.35);
}

/* =====================================================
SECTION 9 — EXECUTIVE CONCLUSION
===================================================== */

.conclusion-section{

    padding:20px;
}

.conclusion-card{

    background:
    linear-gradient(
        135deg,
        #10213D,
        #183153
    );

    border-radius:32px;

    padding:30px 30px 20px;

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

    font-size:32px;

    font-weight:800;

    line-height:1.15;

    max-width:900px;
}

.conclusion-insight{

    margin-top:32px;

    max-width:1000px;

    font-size:15px;

    line-height:2;

    color:rgba(255,255,255,.85);
}

.conclusion-divider{

    height:1px;

    background:rgba(255,255,255,.15);

    margin:10px 0;
}

.policy-panel{

    display:flex;

    gap:20px;

    align-items:flex-start;
}

.policy-tag{

    background:#3EC58E;

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
/* ── Page navigation ── */
.page-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
}

/* =====================================================
MOBILE RESPONSIVENESS
===================================================== */
@media (max-width: 768px) {

    /* ── Hero ── */
    .hero { padding: 32px 20px 110px; }
    .hero h1 { font-size: 24px; }
    .hero-summary { font-size: 14.5px; }

    /* ── Snapshot cards ── */
    .snapshot-section { padding: 0 14px; }
    .snapshot-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    .snapshot-card { padding: 18px 16px; border-radius: 16px; }
    .snapshot-value, .snapshot-trend { font-size: 24px; }
    .snapshot-label { white-space: normal; font-size: 11px; }

    /* ── Key Findings: one card per row, no icons ── */
    .insights-grid { grid-template-columns: 1fr; }
    .executive-summary .insight-icon { display: none; }
    .executive-summary .insight-card { grid-template-columns: 1fr; }
    .executive-summary .insight-card h3 { grid-column: 1; }

    /* ── Plots: no side-by-side grids, every card standalone ── */
    .trend-layout,
    .geo-layout {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .trend-section, .geo-section, .crime-structure,
    .indicator-section, .conclusion-section { padding: 12px 0; }
    .trend-chart-card, .findings-card, .map-card, .structure-card { padding: 20px 16px; }

    /* let the chart card hug its plot — no stretched whitespace below */
    .trend-chart-card { display: block; }
    .chart-container { flex: none; min-height: unset; }

    /* horizontal bar chart: guarantee plot room, swipe sideways if needed */
    .chart-scroll {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    .chart-scroll-inner { min-width: 560px; }

    /* ── National Development Indicators: one card per row ── */
    .indicator-grid.three,
    .indicator-grid.four,
    .sdg-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    /* ── Navigation buttons: full width, centered ── */
    .page-nav { flex-direction: column; align-items: stretch; }
    .page-nav a {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        text-align: center;
    }

    /* ── Conclusion: policy tag on top, text below ── */
    .conclusion-card { padding: 24px 20px 18px; border-radius: 24px; }
    .conclusion-card h2 { font-size: 22px; }
    .policy-panel {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .policy-tag { white-space: normal; }

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

```sql district_count
select
  sum(case when total_growth_pct < 0 then 1 else 0 end)::int as improved,
  count(*)::int                                                as total
from insights.district_trend
where year = 2024
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
    <span class="hero-tag">Latest available official data: 2024</span>
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

<div class="currency-note">
    <div class="cn-icon">📅</div>
    <div>
        <h4>Data Vintage: 2024 — the Latest Official Statistics Available</h4>
        <p>The Annual Crime Statistics Report 2024 is the most recent crime statistics release by the Botswana Police Service. The 2025 statistics report has not yet been published — this dashboard will be updated within weeks of its official release. See the <a href="/crime-statistics-2024/methodology">Methodology</a> page for the full update cycle.</p>
    </div>
</div>


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
                    showAllXAxisLabels=true
                    colorPalette={['#0042A0','#3EC58E']}
                    downloadableData=false
                    />

            </div>
            <h3 style="font-size: 10px; font-weight: 300; color: #0f172a; margin: -5px 0 0;">
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

```sql map_two
select
    case district_name
        when 'Kutlwano' then 'No.01 Kutlwano'
        when 'Palapye' then 'No.02 Palapye'
        when 'Gaborone' then 'No.03 Gaborone'
        when 'Lobatse' then 'No.04 Lobatse'
        when 'Maun' then 'No.05 Maun'
        when 'Gantsi' then 'No.06 Gantsi'
        when 'Kasane' then 'No.07 Kasane'
        when 'Letlhakane' then 'No.08 Letlhakane'
        when 'Tsabong' then 'No.09 Tsabong'
        when 'S/Phikwe' then 'No.10 Selebi Phikwe'
        when 'Molepolole' then 'No.11 Molepolole'
        when 'Mochudi' then 'No.12 Mochudi'
        when 'Mogoditshane' then 'No.13 Mogoditshane'
        when 'Kanye' then 'No.14 Kanye'
        when 'Francistown' then 'No.15 Francistown'
        when 'Mahalapye' then 'No.16 Mahalapye'
        when 'Shakawe' then 'No.17 Shakawe'
    end as district_name,
    sum(total) as total
from insights.district_crime
group by district_name
order by district_name
```


<!-- =====================================================
SECTION 5 — GEOGRAPHIC INTELLIGENCE
===================================================== -->
<span class="section-label">Geographic Intelligence</span>
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

                <h3 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 0px 0;">
                Crime Distribution by Police District
            </h3>

                <span>
                    2024
                </span>

            </div>

            
            {#if map_two.ready}
            <BwpoliceMap
                data={map_two}
                areaCol='district_name'
                value='total'
                height={600}
            />
            {/if}

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
            What Crimes Dominate Botswana?
        </span>

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

        <div class="chart-scroll">
        <div class="chart-scroll-inner">
        <BarChart
            data={penal_categories}
            x=crime_category
            y=cases
            yFmt='#,##0'
            swapXY=true
            showAllXAxisLabels=true
            colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43','#DC2626']}
            labels=false
            downloadableData=false
        />
        </div>
        </div>

    </div>


    <div class="structure-insight">

        <div class="si-icon">
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
            Beyond Crime Counts
        </span>
    </div>

    <div class="ov-tabs">
    <Tabs id="indicators-tabs">

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
            <div class="si-icon">⚡</div>
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
            <div class="si-icon">⚡</div>
            <div>
                <h4>SDG 2030 Summary</h4>
                <p>Road fatalities and violence exposure declined for a third consecutive year, each reaching multi-year lows. Human trafficking fell sharply from a 2023 spike ({sdg_2024.ready ? sdg_2024[0].rate_2023 : '2.1'} → {sdg_2024.ready ? sdg_2024[0].rate_2024 : '0.9'}) but remains above the 2022 baseline, leaving its three-year trend elevated. Intentional homicide is the only indicator to worsen in every year since 2022, rising to {sdg_2024.ready ? sdg_2024[3].rate_2024 : '13.3'} per 100,000 and demanding focused policy intervention to protect SDG 16 targets.</p>
            </div>
        </div>
        {/if}

    </div>

    </Tab>

    </Tabs>
    </div>

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

        <h2 style="font-size: 20px; font-weight: 700; color: #e9edf9; margin: 5px 0 0;">
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

            <p style="font-size: 15px; font-weight: 400; color: #e9edf9; margin: 5px 0 0;">
                Murder has risen every year since 2020 from
                221 to 337 cases and is now at its highest
                recorded level. This is not a spike; it is a trend.
                Botswana Police Service should prioritise
                homicide investigation capacity, domestic violence
                early intervention, and community conflict
                mediation in high-risk areas. <br>
                
                Property crime reductions show that targeted policing works that same resourcing discipline must now shift
                toward violent crime.<br>
                
                Kanye, Lobatse, Shakawe, and Kasane require dedicated district-level reviews before the 2025 planning cycle closes.
            </p>

        </div>

    </div>

</section>
 
<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/serious-offences">Page 2: Serious Offences →</LinkButton>
  <LinkButton url="/crime-statistics-2024/crime-profiles">Page 3: Crime Profiles →</LinkButton>
</div>

