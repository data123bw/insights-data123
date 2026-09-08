---
title: Securities & Participation
hide_title: true
sidebar_position: 3
---

<style>
.bse-hero{background:linear-gradient(140deg,#1E3A5F,#0042A0);color:#fff;padding:40px 34px 92px;border-radius:12px;margin-top:-26px}
@media(max-width:639px){.bse-hero{margin-top:-16px;padding:30px 18px 88px}}
.bse-hero .kick{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin:0 0 6px}
.bse-hero h1{color:#fff;font-size:26px;font-weight:800;letter-spacing:-.03em;margin:2px 0 10px}
.bse-hero p{color:rgba(255,255,255,.85);font-size:15px;line-height:1.6;max-width:74ch;margin:0}
.bse-nav{display:flex;flex-wrap:wrap;gap:6px;font-size:13px;margin:-52px 0 34px;position:relative}
.bse-nav a{background:#fff;border:1px solid #e2e8f0;border-radius:999px;padding:6px 14px;color:#1E3A5F;text-decoration:none;font-weight:600}
.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
@media(max-width:639px){
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}
  .table-container{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .table-container table{display:table;white-space:nowrap;min-width:max-content}
}
</style>

<div class="bse-hero">
<p class="kick">Instruments &amp; investors · FY2025</p>
<h1>Listed products, issuer performance and investor participation</h1>
<p>BSE expanded its product range through two secondary listings, while the listed universe
stayed small and trading remained institutionally concentrated. The report's retail-participation
figures are unresolved. This page is report-bounded exploration, not a live stock screener.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

## Product universe — FY2025

<Grid cols=4>
<BigValue data={[{a:33}]} value=a title="Equity counters *" />
<BigValue data={[{a:5}]} value=a title="Listed ETFs" />
<BigValue data={[{a:40.0}]} value=a fmt='"P"0.0" bn"' title="Listed-bond nominal value" />
<BigValue data={[{a:2}]} value=a title="New listed products" />
</Grid>

<Alert status=info>
<b>*</b> 33 is the report's <b>price-movement classification population</b>, not an issuer count.
R009 governs the separate issuer / counter / product-inclusive populations — each carries its own
scope label and is never merged into a generic "listed companies" total.
</Alert>

## Counter price movement — FY2025

Reported classification of the 33-counter population: **21 positive · 8 unchanged · 4 negative.**

```sql named_counters
select scope_label as counter, reported_value_numeric as pct
from bse.securities
where metric_id = 'counter.return' and reference_year = 2024
  and reported_value_numeric is not null
order by pct desc
```

<DataTable data={named_counters} rows=8 title="Named counter movements identified in the report (partial list)" subtitle="Not all stock performance — only counters the report names">
  <Column id=counter title="Counter" />
  <Column id=pct title="Price movement %" fmt='+0.0;-0.0' />
</DataTable>

Unlabelled counter charts are shown as **direction only** — the report does not support visual
estimation of exact returns for the full universe.

## Debt-market scope

Safe measures: **P40.0bn** nominal value (+4.7%), **54** admitted instruments in 2025, and the
matured Absa sustainable bond.

```sql debt_scope
select 'Bond narrative' as section, 95 as corporate_bonds, 20 as commercial_paper, 7 as government_bonds, 122 as implied_total
union all select 'CSDB narrative', 96, 18, 7, 121
union all select 'Supplementary table', 93, 17, 7, 117
```

<DataTable data={debt_scope} rows=3 title="Year-end listed debt instruments — three separately scoped counts (R007)">
  <Column id=section title="Report section" />
  <Column id=corporate_bonds title="Corporate bonds" />
  <Column id=commercial_paper title="Commercial paper" />
  <Column id=government_bonds title="Government bonds" />
  <Column id=implied_total title="Implied total" />
</DataTable>

<Alert status=warning>
The 117 / 121 / 122 counts refer to different source contexts. They stay as separate restricted
evidence variants — no single definitive total or composition chart. 56 vs 57 maturities also
require reconciliation (R008). See <a href="/bse-2025/data-quality">Data Notes</a>.
</Alert>

## Investor participation

<Alert status=warning>
<b>Retail-participation share withheld.</b> The 10X scorecard reports 15.1% for FY2025 while the
supplementary statistics report 4.5% — opposite stories, no reconciled definition (R005). Only
this is stated: BSE itself identifies institutional concentration as a material concern.
</Alert>

```sql participation_hist
select reference_year as year,
  case metric_id
    when 'participation.local.individuals' then 'Local individuals'
    when 'participation.local.companies' then 'Local companies'
    when 'participation.foreign.companies' then 'Foreign companies'
    when 'participation.foreign.individuals' then 'Foreign individuals'
    when 'participation.brokers' then 'Brokers' end as category,
  reported_value_numeric as pct
from bse.securities where metric_id like 'participation.%' order by year
```

<LineChart data={participation_hist} x=year y=pct series=category title="Investor contribution to equity turnover (%) — verified years only" />
<Alert status=info>Investor-mix percentages published to FY2024. The FY2024 components sum to 99.1%, not 100.0% (R025) — the printed components are preserved, not renormalised. FY2025 is withheld under R005.</Alert>

## CSD access &amp; outreach

- More than **100,000** cumulative CSD accounts (cumulative, not active investors).
- At least **169** accounts opened at outreach events.
- More than **10** outreach engagements.

## Issuer valuation history

Verified FY2018–FY2024 P/E, price-to-book and dividend-yield observations are available where
definitions align. **FY2025 issuer valuation ratios are not tabulated** in the Integrated Report —
shown as an explicit unavailable state, never zero.

<p class="src">Source: BSE Integrated Report 2025 and Annual Reports 2022–2024. Canonical release
<code>bse_canonical_v1_0_2</code> — database status approved (2026-09-08). Dashboard deployment and publication are governed separately.</p>
