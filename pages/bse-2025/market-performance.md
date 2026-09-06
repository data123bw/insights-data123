---
title: Market Performance
hide_title: true
sidebar_position: 2
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
</style>

<div class="bse-hero">
<p class="kick">BSE market · FY2025</p>
<h1>Trading activity, market size, liquidity and investor returns</h1>
<p>Equity turnover reached a record P5.91 billion and all three benchmark indices produced
positive nominal returns. A large institutional transition mandate materially inflated turnover,
while foreign-listed companies continued to dominate aggregate market capitalisation.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql kpi
select metric_id, reference_year, reported_value_numeric v, reported_unit_code unit
from bse.market
where metric_id in ('market.total.turnover','market.equity.turnover','market.total.market.capitalisation',
                    'index.domestic.company.index.change','index.domestic.company.total.return.index.change')
  and reference_year = 2025
```

## Headline metrics — FY2025

<Grid cols=5>
<BigValue data={[{a:9.3}]} value=a fmt='"P"0.0" bn"' title="Total market turnover" />
<BigValue data={[{a:5.91}]} value=a fmt='"P"0.00" bn"' title="Equity turnover" />
<BigValue data={[{a:710.0}]} value=a fmt='"P"0.0" bn"' title="Equity market cap" />
<BigValue data={[{a:9.8}]} value=a fmt='0.0"%"' title="DCI return (price)" />
<BigValue data={[{a:16.1}]} value=a fmt='0.0"%"' title="DCTRI return (incl. div.)" />
</Grid>

<Alert status=warning>
Record equity turnover reflects a large Q2 institutional transition mandate. It is not presented
as a positive performance signal on its own.
</Alert>

## Equity turnover — five-year flow

```sql equity_turnover
select reference_year as year, reported_value_numeric/1000 as turnover_bn, is_provisional
from bse.market where metric_id = 'market.equity.turnover' order by reference_year
```

<BarChart data={equity_turnover} x=year y=turnover_bn yFmt='"P"0.00" bn"' title="Equity turnover (P bn)" subtitle="FY2018–FY2021 are provisional (later-comparative source only)"/>

FY2018–FY2021 carry BSE's own provisional / placeholder basis — they appear only in later
comparative tables and remain provisional after visual transcription. Do not read a CAGR across a
provisional point.

## Benchmark indices — annual

```sql idx_level
select reference_year as year, metric_id,
  case metric_id when 'index.domestic.company.index.level' then 'DCI'
       when 'index.domestic.company.total.return.index.level' then 'DCTRI'
       when 'index.foreign.company.index.level' then 'FCI' end as idx,
  reported_value_numeric as level
from bse.market
where metric_id in ('index.domestic.company.index.level','index.domestic.company.total.return.index.level','index.foreign.company.index.level')
order by year
```

<LineChart data={idx_level} x=year y=level series=idx title="Index level — year-end" />

Quarterly index paths are **not tabulated** in the FY2025 Integrated Report at the grain this
dashboard governs; only year-end levels and published annual returns are shown.

## Market-capitalisation composition — FY2025

| Component | FY2025 | Share |
|---|--:|--:|
| Domestic companies | ≈ P59.8bn | 8.4% |
| Foreign companies | ≈ P650.2bn | 91.6% |
| **Total** | **≈ P710.0bn** | 100% |

Foreign dual-listed companies dominate the aggregate; it does not represent the depth of
Botswana's domestic listed market.

## Market-activity table

```sql activity
select
  case metric_id
    when 'market.total.turnover' then 'Total market turnover (P bn)'
    when 'market.equity.turnover' then 'Equity turnover (P m)'
    when 'market.average.daily.turnover' then 'Average daily equity turnover (P m)'
    when 'market.shares.traded' then 'Shares traded (m)'
    when 'market.total.market.capitalisation' then 'Total equity market cap (P m)'
    when 'market.domestic.market.capitalisation' then 'Domestic market cap (P m)'
  end as indicator,
  max(case when reference_year=2024 then reported_value_numeric end) as fy2024,
  max(case when reference_year=2025 then reported_value_numeric end) as fy2025
from bse.market
where metric_id in ('market.total.turnover','market.equity.turnover','market.average.daily.turnover',
                    'market.shares.traded','market.total.market.capitalisation','market.domestic.market.capitalisation')
group by metric_id order by indicator
```

<DataTable data={activity} rows=10>
  <Column id=indicator title="Indicator" />
  <Column id=fy2024 title="FY2024" fmt='#,##0.0' />
  <Column id=fy2025 title="FY2025" fmt='#,##0.0' />
</DataTable>

FY2024 equity turnover uses the approved original-year value P1,660.1m (R001); the conflicting
later comparative P2.2bn is retained only in the evidence layer. FY2024 average daily turnover
uses P6.7m (R002).

## Liquidity ratio — withheld

<Alert status=warning>
<b>No canonical FY2025 velocity / turnover ratio.</b> The report presents 8.5% (strategy
scorecard) and 9.9% (five-year statistics) with no reconcilable definition (R003). Neither
appears as an ordinary trend point. See <a href="/bse-2025/data-quality">Data Notes</a>.
</Alert>

<p class="src">Source: BSE Integrated Report 2025 and Annual Reports 2022–2024, visually verified.
Canonical release <code>bse_canonical_v1_0_2</code> (status: review).</p>
