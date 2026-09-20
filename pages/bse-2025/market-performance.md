---
title: Market Performance
hide_title: true
sidebar_position: 2
---

<style>
:root{
  --navy-1:#14110A;--navy-2:#2A2312;--blue-1:#C19A2D;--blue-2:#D4AF52;--blue-3:#E3C878;--blue-4:#EEDDAA;
  --text-secondary:#475467;--text-tertiary:#667085;
  --surface:#ffffff;--surface-muted:#F7F4EC;--border:#E8E2D5;
  --positive:#16a34a;--warning:#C2410C;--danger:#dc2626;--purple:#7C4DDA;--slate:#5B6B82;
}
.bse-topbar{background:linear-gradient(120deg,#14110A,#2A2312);color:#fff;border-radius:12px;padding:16px 20px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;margin-top:0}
.bse-topbar .mark{width:34px;height:34px;border-radius:50%;background:#fff;flex:none;object-fit:contain;padding:2px}
.bse-topbar .title{font-size:15px;font-weight:600}
.bse-topbar .sub{font-size:12px;opacity:.75}
.bse-topbar .pills{display:flex;gap:6px;flex-wrap:wrap}
.bse-topbar .pill{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:#DCE4F6;border-radius:999px;padding:2px 10px;font-size:12px;white-space:nowrap}

.bse-hero{background:linear-gradient(120deg,var(--navy-1) 0%,var(--navy-2) 55%,var(--blue-1) 100%);color:#fff;padding:26px 30px 48px;margin-top:12px;border-radius:12px;clip-path:polygon(0 0,100% 0,100% 82%,0 100%);position:relative}
@media(max-width:639px){.bse-hero{padding:22px 20px 40px}}
.bse-hero-top{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.bse-back{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-size:16px;flex:none;color:#fff;text-decoration:none}
.bse-hero h1{font-size:22px;font-weight:700;margin:0;color:#fff}
.bse-hero .sub-line{font-size:12.5px;color:#B9C7E8;margin:2px 0 0}
.bse-hero-pill{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:6px 14px;font-size:12px;white-space:nowrap;color:#fff}
.bse-hero-pill.dim{color:#B9C7E8}

.bse-tabs{display:flex;gap:2px;overflow-x:auto;background:#fff;border:1px solid var(--border);border-radius:12px;padding:4px;margin:-22px 0 20px;position:relative;z-index:2;box-shadow:0 8px 22px rgba(11,31,77,.12)}
.bse-tabs a{padding:8px 12px;font-size:13px;color:var(--text-tertiary);white-space:nowrap;text-decoration:none;border-radius:8px;font-weight:600}
.bse-tabs a.on{color:var(--navy-1);background:var(--blue-4)}

.bse-card{border:1px solid var(--border);border-radius:10px;padding:16px 18px;background:#fff;box-shadow:0 1px 3px rgba(16,24,40,.06),0 1px 2px rgba(16,24,40,.04);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
.bse-card:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(16,24,40,.10),0 4px 8px rgba(16,24,40,.06);border-color:var(--blue-4)}
.bse-secttl{font-size:17px;font-weight:600;margin-bottom:12px}
.bse-lnk{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:var(--navy-2);margin-top:10px;text-decoration:none}
.bse-lnk:hover{text-decoration:underline}
.bse-pill{border:1px solid var(--border);background:#fff;border-radius:999px;padding:5px 12px;font-size:12px;color:var(--navy-2);text-decoration:none;font-weight:600}
.bse-badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 8px;border-radius:6px;font-weight:600;white-space:nowrap}
.bse-badge-ok{background:#E7F5EC;color:#16a34a}
.bse-badge-una{background:var(--surface-muted);color:var(--text-tertiary)}
.bse-delta{font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.bse-delta-up{color:#16a34a}
.bse-delta-dn{color:#dc2626}
.up{color:var(--positive);font-weight:600}
.ghost{color:var(--text-tertiary);text-decoration:line-through;text-decoration-color:#C7CDD8}

.top-row{display:grid;grid-template-columns:220px 1fr;gap:16px;margin-top:4px}
@media(max-width:900px){.top-row{grid-template-columns:1fr}}
.block-stack{display:flex;flex-direction:column;gap:10px}
.kpi-block{border-radius:12px;padding:16px 16px 14px;color:#fff}
.kpi-block .kb-label{font-size:12px;opacity:.85;font-weight:600}
.kpi-block .kb-val{font-size:24px;font-weight:700;margin-top:4px;font-variant-numeric:tabular-nums}
.kpi-block .kb-delta{font-size:12px;margin-top:4px;font-weight:600}
.kpi-block .kb-note{font-size:10.5px;opacity:.8;margin-top:3px}
.kb1{background:#14110A}
.kb2{background:#2A2312}
.kb3{background:#4A3A16}
.kb4{background:#8B6914}
.kb4 .kb-note{color:#F0DFC0}

.badge-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}
@media(max-width:900px){.badge-row{grid-template-columns:1fr}}
.idx-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:18px;text-align:center}
.idx-pill{display:inline-block;background:var(--navy-2);color:#fff;font-size:11.5px;font-weight:700;padding:4px 14px;border-radius:999px;margin-bottom:10px}
.idx-pill.p2{background:var(--purple)}
.idx-pill.p3{background:var(--slate)}
.idx-big{font-size:30px;font-weight:800;color:var(--positive)}
.idx-note{font-size:11.5px;color:var(--text-tertiary);margin-top:4px}

.comp-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:16px}
@media(max-width:900px){.comp-row{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.comp-row{grid-template-columns:1fr}}
.comp-card h3{font-size:13.5px;font-weight:700;margin:0 0 12px}
.donut{width:110px;height:110px;border-radius:50%;margin:0 auto 12px;position:relative}
.donut::after{content:"";position:absolute;inset:20px;background:#fff;border-radius:50%}
.dleg{font-size:11px;color:var(--text-secondary);display:flex;flex-direction:column;gap:5px}
.dleg span{display:flex;align-items:center;gap:6px}
.sw{width:10px;height:10px;border-radius:2px;display:inline-block;flex:none}
.bar100{height:22px;border-radius:6px;overflow:hidden;display:flex;margin-top:4px}

.withheld{border:1.5px dashed #B7BFCE;border-radius:14px;padding:16px;background:#fff}
.callout-dark{background:linear-gradient(135deg,var(--navy-1),var(--navy-2));color:#fff;border-radius:14px;padding:18px}
.callout-dark h4{margin:0 0 6px;font-size:13.5px}
.callout-dark p{margin:0;font-size:12.5px;color:#C7D3EE;line-height:1.55}
.three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:16px}
@media(max-width:900px){.three-col{grid-template-columns:1fr}}

.mkt-table{width:100%;border-collapse:collapse;font-size:13px}
.mkt-table th{text-align:right;font-weight:600;color:var(--text-tertiary);font-size:11px;padding:8px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.mkt-table th:first-child,.mkt-table td:first-child{text-align:left}
.mkt-table td{text-align:right;padding:8px;border-bottom:1px solid var(--border);font-variant-numeric:tabular-nums}
.mkt-table tr:last-child td{border-bottom:none}

.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
@media(max-width:639px){
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}
  .table-container{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .table-container table{display:table;white-space:nowrap;min-width:max-content}
}
</style>

<div class="bse-topbar">
<div style="display:flex;align-items:center;gap:10px">
<img class="mark" src="/bse-logo.png" alt="Botswana Stock Exchange logo" />
<div>
<div class="title">Botswana Stock Exchange: public dashboard</div>
<div class="sub">Integrated Report FY2025 · governed data, evidence-linked</div>
</div>
</div>
<div class="pills">
<span class="pill">Reporting period · FY2025</span>
<span class="pill">Scope · Aggregate market</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<div class="bse-hero">
<div class="bse-hero-top">
<div style="display:flex;align-items:center;gap:14px">
<a class="bse-back" href="/bse-2025/overview" aria-label="Back to Overview">←</a>
<div>
<h1>Market Performance</h1>
<p class="sub-line">Trading activity, market size, liquidity and investor returns</p>
</div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="bse-hero-pill">Report period: FY2025</span>
<span class="bse-hero-pill dim">Comparing to FY2024</span>
<span class="bse-hero-pill dim">Scope: Aggregate market</span>
</div>
</div>
</div>

<div class="bse-tabs">
<a href="/bse-2025/overview">Overview</a>
<a class="on" href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql equity_turnover
select reference_year as year, reported_value_numeric/1000 as turnover_bn, is_provisional
from bse.market where metric_id = 'market.equity.turnover' order by reference_year
```

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

## Trading activity, market size, liquidity and investor returns

<div class="top-row">
<div class="block-stack">
<div class="kpi-block kb1">
<div class="kb-label">Total market turnover</div>
<div class="kb-val">P9.3bn</div>
<div class="kb-delta" style="color:#7BE0A0">▲ +18.1%</div>
</div>
<div class="kpi-block kb2" id="concentration">
<div class="kb-label">Equity turnover</div>
<div class="kb-val">P5.91bn</div>
<div class="kb-delta" style="color:#F5C97B">Record, concentrated</div>
<div class="kb-note">Large Q2 institutional transition mandate</div>
</div>
<div class="kpi-block kb3">
<div class="kb-label">Total equity market cap</div>
<div class="kb-val">P710.0bn</div>
<div class="kb-delta" style="color:#CFEBD9">▲ +3.4%</div>
</div>
<div class="kpi-block kb4">
<div class="kb-label">Avg. daily equity turnover</div>
<div class="kb-val">P24.0m</div>
<div class="kb-delta" style="color:#7BE0A0">▲ +258.2%</div>
<div class="kb-note">FY2024 base confirmed across 4 tables</div>
</div>
</div>

<div class="bse-card" style="padding:20px">
<h3 class="bse-secttl" style="margin-bottom:2px;font-size:16px">How did benchmark indices perform through FY2025?</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0 0 10px">DCI, DCTRI and FCI, year-end index level</p>
<LineChart data={idx_level} x=year y=level series=idx />
<p style="font-size:11px;color:var(--text-tertiary);margin-top:10px"><b>DCI</b> Domestic Company Index (price only) &nbsp;·&nbsp; <b>DCTRI</b> Domestic Company Total Return Index (incl. dividends) &nbsp;·&nbsp; <b>FCI</b> Foreign Company Index</p>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">All three indices have risen every year since FY2022, but the shape of that climb differs. DCI and DCTRI are decelerating: DCI's annual gain has eased from +15.6% (FY2023) to +12.5% (FY2024) to +9.8% (FY2025), and DCTRI shows the same slowing pattern (+25.5% → +22.6% → +16.1%), still compounding, just at a cooling pace. FCI's path is lumpier: a single outsized +57.7% jump in FY2023 does most of the work, followed by two steadier ~+15% years. Since FY2022, DCTRI has gained 78.6% and FCI has more than doubled (+109.6%) against DCI's 42.8%. The total-return and foreign-counter lines are outpacing the plain domestic price index, not just tracking above it.</p>
</div>
</div>

## Benchmark index returns: FY2025

<div class="badge-row">
<div class="idx-card">
<span class="idx-pill">DCI</span>
<div class="idx-big">+9.8%</div>
<div class="idx-note">Price only · nominal</div>
</div>
<div class="idx-card">
<span class="idx-pill p2">DCTRI</span>
<div class="idx-big">+16.1%</div>
<div class="idx-note">Including dividends · nominal</div>
</div>
<div class="idx-card">
<span class="idx-pill p3">FCI</span>
<div class="idx-big">+15.6%</div>
<div class="idx-note">Foreign companies index</div>
</div>
</div>

## Market composition: FY2025

<div class="comp-row">
<div class="bse-card comp-card">
<h3>Total turnover mix</h3>
<div class="donut" style="background:conic-gradient(var(--navy-2) 0% 63.5%, var(--blue-3) 63.5% 69.8%, var(--border) 69.8% 100%)"></div>
<div class="dleg">
<span><span class="sw" style="background:var(--navy-2)"></span>Equity: 63.5%</span>
<span><span class="sw" style="background:var(--blue-3)"></span>ETFs: 6.3%</span>
</div>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:8px">Remaining ~30% (bonds and other instruments) has no published FY2025 turnover figure and is not shown as a slice.</p>
</div>

<div class="bse-card comp-card" style="grid-column:span 2">
<h3>Market-cap composition: domestic vs foreign</h3>
<div class="bar100">
<div style="width:8.4%;background:#0d9488"></div>
<div style="width:91.6%;background:var(--slate)"></div>
</div>
<div class="dleg" style="flex-direction:row;justify-content:space-between;margin-top:8px">
<span><span class="sw" style="background:#0d9488"></span>Domestic: P59.8bn · 8.4%</span>
<span><span class="sw" style="background:var(--slate)"></span>Foreign: P650.2bn · 91.6%</span>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">Foreign dual-listed companies dominate the aggregate. This is not a measure of Botswana's domestic market depth. Shown as a bar, not a donut, since the two parts are this uneven.</p>
</div>

<div class="bse-card comp-card">
<h3>Domestic returns</h3>
<div style="font-size:12px;display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border)"><span>DCI real</span><b class="up">+5.9%</b></div>
<div style="font-size:12px;display:flex;justify-content:space-between;padding:5px 0"><span>DCTRI real</span><b class="up">+12.0%</b></div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">Against December 2025 inflation of 3.9%.</p>
</div>
</div>

## Equity turnover: five-year flow

<div class="bse-card">
<BarChart data={equity_turnover} x=year y=turnover_bn yFmt='"P"0.00" bn"' title="Equity turnover (P bn)" subtitle="Hatched years are provisional, pending backfill verification"/>
</div>

FY2018-FY2021 carry BSE's own provisional / placeholder basis, they appear only in later
comparative tables and remain provisional after visual transcription. Do not read a CAGR across a
provisional point.

## Market activity indicator

<div class="bse-card" style="overflow-x:auto">
<table class="mkt-table">
<tr><th>Indicator</th><th>FY2024</th><th>FY2025</th><th>Movement</th></tr>
<tr><td>Total market turnover</td><td>P7.9bn</td><td>P9.3bn</td><td class="up">+18.1%</td></tr>
<tr><td>Equity turnover <span class="bse-badge bse-badge-una" style="margin-left:4px">Under review</span></td><td>P1.66bn</td><td>P5.91bn</td><td class="up">+256.1%*</td></tr>
<tr><td>Avg. daily equity turnover <span class="bse-badge bse-badge-una" style="margin-left:4px">Under review</span></td><td>P6.7m</td><td>P24.0m</td><td class="up">+258.2%*</td></tr>
<tr><td>Shares traded</td><td>428.6m</td><td>1.38bn</td><td class="up">+222.1%</td></tr>
<tr><td>ETF turnover</td><td>P449.4m</td><td>P582.5m</td><td class="up">+29.6%</td></tr>
<tr><td>Total equity market cap</td><td>P686.8bn</td><td>P710.0bn</td><td class="up">+3.4%</td></tr>
<tr><td>Domestic market cap</td><td>P54.0bn</td><td>P59.8bn</td><td class="up">+10.7%</td></tr>
</table>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">* FY2024 comparison base for equity turnover and average daily turnover reflects the governed
original-year values (R001, R002); see <a href="/bse-2025/data-quality">Data Notes</a>.</p>
</div>

## Liquidity ratio and market-cap detail

<div class="three-col">
<div class="withheld">
<div style="font-size:12px;font-weight:700;margin-bottom:6px">Liquidity ratio</div>
<span class="bse-badge bse-badge-una">Withheld pending reconciliation</span>
<div style="display:flex;gap:16px;margin-top:10px">
<div><div style="font-size:12px;color:var(--text-tertiary)">Scorecards</div><div class="ghost" style="font-size:18px;font-weight:700">8.5%</div></div>
<div><div style="font-size:12px;color:var(--text-tertiary)">5-yr stats</div><div class="ghost" style="font-size:18px;font-weight:700">9.9%</div></div>
</div>
</div>

<div class="withheld">
<div style="font-size:12px;font-weight:700;margin-bottom:6px">Quarterly market cap</div>
<div style="font-size:12px;color:var(--text-tertiary)">Domestic P54.2bn → P59.8bn steady; foreign swings P632.9bn → P650.2bn drive the total (Q1→Q4, FY2025).</div>
</div>

<div class="callout-dark">
<h4>Record ≠ broad liquidity</h4>
<p>A large Q2 institutional transition mandate inflated turnover. It does not indicate broadly improved everyday trading activity across the market.</p>
</div>
</div>

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:13px;margin-bottom:8px">Related pages</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/securities-participation">See individual securities and participation →</a>
<a class="bse-pill" href="#concentration">See market-concentration evidence →</a>
<a class="bse-pill" href="/bse-2025/data-quality">Provisional turnover and liquidity issues →</a>
</div>
</div>

<p class="src">Sources: BSE Integrated Report 2025 and Annual Reports 2022-2024, visually verified.
Canonical release <code>bse_canonical_v1_0_2</code>, database status approved (2026-09-08).
<a class="bse-lnk" style="margin:0" href="/bse-2025/data-quality">Full reconciliation register →</a></p>
