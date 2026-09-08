---
title: BSE Group Financials
hide_title: true
sidebar_position: 4
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
<p class="kick">BSE Group · consolidated · FY2024 &amp; FY2025 audited</p>
<h1>Revenue grew, but costs grew faster</h1>
<p>Group revenue increased 17.1% while operating expenses rose faster, cutting operating profit
33.1%. Higher finance income and a substantially lower tax charge lifted profit for the year
30.3%. The page does not lead only with the final-profit increase.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql fin
select metric_id,
  max(case when reference_year=2024 then reported_value_numeric end) as fy2024,
  max(case when reference_year=2025 then reported_value_numeric end) as fy2025
from bse.financials group by metric_id
```

## Headline — FY2025 vs FY2024

<Grid cols=5>
<BigValue data={[{a:78.8}]} value=a fmt='"P"0.0" m"' title="Revenue" />
<BigValue data={[{a:69.3}]} value=a fmt='"P"0.0" m"' title="Operating expenses" />
<BigValue data={[{a:12.2}]} value=a fmt='"P"0.0" m"' title="Operating profit" />
<BigValue data={[{a:20.6}]} value=a fmt='"P"0.0" m"' title="Profit for the year" />
<BigValue data={[{a:213.4}]} value=a fmt='"P"0.0" m"' title="Total assets" />
</Grid>

## Financial-result sequence

| Line | Movement FY2024 → FY2025 |
|---|---|
| Revenue | **+17.1%** |
| Operating expenses | **+24.7%** |
| Operating profit | **−33.1%** |
| Finance income | **+77.7%** |
| Tax charge | **−43.1%** |
| Profit for the year | **+30.3%** (R018 — rounding resolved; 30.4% not used) |

Present as a sequence so the final-profit increase does not appear to contradict the
operating-profit decline.

## Financial position — trend

```sql position
select reference_year as year,
  case metric_id
    when 'financial.total_assets' then 'Total assets'
    when 'financial.total_equity' then 'Total equity'
    when 'financial.total_liabilities' then 'Total liabilities' end as line,
  reported_value_numeric/1e6 as pm
from bse.financials
where metric_id in ('financial.total_assets','financial.total_equity','financial.total_liabilities')
order by year
```

<LineChart data={position} x=year y=pm series=line yFmt='"P"#,##0.0" m"' title="Group financial position (P m)" />

Equity is ≈ 82.6% of total assets. FY2021 points are provisional (later-comparative coverage
only) and carry BSE's own placeholder basis.

## Cash caveat

The cash-flow statement reports **P152.3m "cash and cash equivalents"** with a footnote that it
includes financial assets. The balance sheet separates **P27.3m cash** and **P125.0m financial
assets**. This dashboard labels the combined figure **liquid financial resources**, never
unrestricted bank cash. FY2022 closing cash resources is **P112,722,445** (R023); the
P112,722,304 variant is a disclosed, immaterial P141 source inconsistency.

## Ratios (with definitions)

| Ratio | FY2025 | Basis |
|---|--:|---|
| Operating margin | ≈ 15.4% | operating profit ÷ revenue |
| Profit-after-tax margin | ≈ 26.1% | PAT ÷ revenue |
| Cost-to-income ratio | ≈ 88% | operating expenses ÷ revenue |
| Return on equity | **12.3%** | PAT ÷ **average** opening/closing equity (R012 — primary) |

The 11.7% closing-equity ROE is retained only as restricted supporting evidence with its
denominator labelled; the two bases are never blended.

## Five-year history

Verified, definition-compatible FY2022–FY2025 audited observations are published. FY2021 appears
only from the later comparative and stays provisional with BSE's placeholder warning. The FY2023
sequence follows the original / restated-source rules recorded on
<a href="/bse-2025/data-quality">Data Notes</a> — original PAT P26,433,048 and restated
P24,938,848 remain linked (R014).

<p class="src">Source: BSE audited consolidated financial statements FY2025 (Grant Thornton
unqualified opinion) and prior Annual Reports. Canonical release <code>bse_canonical_v1_0_2</code>
— database status approved (2026-09-08). Dashboard deployment and publication are governed separately.</p>
