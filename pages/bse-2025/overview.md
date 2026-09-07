---
title: BSE Overview
hide_title: true
sidebar_position: 1
---

<style>
.bse-hero{background:linear-gradient(140deg,#1E3A5F 0%,#0042A0 100%);color:#fff;padding:44px 36px 96px;border-radius:12px;margin-top:-26px;margin-bottom:0}
@media(max-width:639px){.bse-hero{margin-top:-16px;padding:32px 20px 96px}}
.bse-hero .kick{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin:0 0 8px}
.bse-hero h1{color:#fff;font-size:30px;font-weight:800;letter-spacing:-.03em;line-height:1.15;margin:2px 0 12px}
.bse-hero p{color:rgba(255,255,255,.85);font-size:15px;line-height:1.6;max-width:74ch;margin:0 0 8px}
.bse-hero .meta{font-size:12px;color:rgba(255,255,255,.6);margin-top:14px}
.bse-nav{display:flex;flex-wrap:wrap;gap:6px;font-size:13px;margin:-56px 0 34px;position:relative}
.bse-nav a{background:#fff;border:1px solid #e2e8f0;border-radius:999px;padding:6px 14px;color:#1E3A5F;text-decoration:none;font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.bse-card{border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;background:#fff}
.bse-card .lbl{font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#64748b;margin:0 0 6px}
.bse-card .v{font-size:26px;font-weight:800;color:#0f172a;letter-spacing:-.02em}
.bse-card .d{font-size:13px;margin-top:4px}
.up{color:#0e7a4f}.down{color:#b42318}
.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
@media(max-width:639px){
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}
  .table-container{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .table-container table{display:table;white-space:nowrap;min-width:max-content}
}
</style>

<div class="bse-hero">
<p class="kick">Botswana Stock Exchange · Integrated Report FY2025</p>
<h1>Market growth alongside investment cost and operational risk</h1>
<p>Botswana's capital market expanded sharply and BSE Group revenue grew, while operating profit
declined as the Group invested in technology, people and its new strategy. A four-day market
outage in October made operational resilience a Board-level priority.</p>
<p class="meta">Reporting period: year ended 31 December 2025 · Data status: published results with governed reconciliation notes · Release: <em>bse_canonical_v1_0_2</em> (under review — not production-approved)</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql headline
select
  metric_id,
  max(case when reference_year = 2025 then reported_value_numeric end) as v2025,
  max(case when reference_year = 2024 then reported_value_numeric end) as v2024,
  max(reported_unit_code) as unit,
  max(source_document_title) as source, max(source_pdf_page) as pdf_page
from bse.overview
where section = 'headline'
group by metric_id
```

```sql turnover_move
select reported_value_numeric as pct, display_note from bse.overview where section = 'turnover_movement'
```
```sql pat_move
select reported_value_numeric as pct from bse.overview where section = 'profit_movement'
```

## What happened in FY2025

<Grid cols=4>
<div class="bse-card">
<p class="lbl">Total market turnover</p>
<div class="v">P9.3<span style="font-size:16px">bn</span></div>
<p class="d up">+<Value data={turnover_move} column=pct fmt='0.0'/>% vs FY2024 (P7.9bn)</p>
</div>
<div class="bse-card">
<p class="lbl">Equity market capitalisation</p>
<div class="v">P710.0<span style="font-size:16px">bn</span></div>
<p class="d up">+3.4% vs FY2024 (P686.8bn)</p>
</div>
<div class="bse-card">
<p class="lbl">Group revenue</p>
<div class="v">P78.8<span style="font-size:16px">m</span></div>
<p class="d up">+17.1% vs FY2024 (P67.3m)</p>
</div>
<div class="bse-card">
<p class="lbl">Operating profit</p>
<div class="v">P12.2<span style="font-size:16px">m</span></div>
<p class="d down">−33.1% vs FY2024 (P18.2m)</p>
</div>
</Grid>

<Alert status=info>
<b>Record turnover is not the same as broad liquidity.</b> A large institutional transition
mandate in Q2 materially inflated equity turnover. Revenue grew but operating profit fell as
costs grew faster — see <a href="/bse-2025/group-financials">Group Financials</a>.
</Alert>

## Financial trade-off

| Measure | FY2024 | FY2025 | Movement |
|---|--:|--:|--:|
| Group revenue | P67.3m | P78.8m | **+17.1%** |
| Operating profit | P18.2m | P12.2m | **−33.1%** |
| Profit for the year | P15.8m | P20.6m | **+30.3%** (governed treatment) |

Displaying revenue and final profit without the operating-profit decline would over-state the
year. The final-profit movement follows the governed canonical treatment (R018 — rounding
resolved to 30.3%). Complete analysis on <a href="/bse-2025/group-financials">Group Financials</a>.

## 10X by 2030 — first year of execution

<Grid cols=3>
<BigValue data={[{a:10}]} value=a title="Achieved" />
<BigValue data={[{a:3}]} value=a title="In progress" />
<BigValue data={[{a:2}]} value=a title="Deferred" />
</Grid>

15 commitments, self-assessed by BSE. The full scorecard and the disputed
turnover-ratio / retail-share definitions stay on
<a href="/bse-2025/10x-strategy">Strategy</a> and <a href="/bse-2025/data-quality">Data Notes</a>.
Velocity and retail-participation figures are withheld from ordinary overview components.

## Material developments

- **New Group CEO** — Aobakwe Monyatsi appointed 12 March 2025.
- **Group expansion** — BMX and BSE Impact Funds Company incorporated in 2025.
- **October market outage** — four trading days lost; full account on the [Governance &amp; Risk](/bse-2025/governance-risk) page.

## Reconciliation notes carried on this page

| Metric | Canonical | Retained as evidence |
|---|---|---|
| FY2024 equity turnover | P1.66bn (R001) | conflicting P2.2bn |
| FY2024 average daily equity turnover | P6.7m (R002) | conflicting P9.1m |
| Year-end listed debt instruments | separately scoped 117 / 121 / 122 (R007) | never one total |
| FY2025 velocity ratio | none (R003 — withheld) | 8.5% vs 9.9% |
| FY2025 retail share | none (R005 — withheld) | 15.1% vs 4.5% |

Do not combine values whose scope or definition differs.
<a href="/bse-2025/data-quality">Data Notes</a> carries the complete resolution record.

<p class="src">Sources: BSE Integrated Report 2025 and Annual Reports 2022–2024, visually verified.
Canonical release <code>bse_canonical_v1_0_2</code> · status <b>review</b> · independent sign-off
pending. This is a public analytical dashboard, not a trading terminal or investment advice.</p>
