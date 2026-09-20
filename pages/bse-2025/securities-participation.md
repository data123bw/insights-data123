---
title: Securities & Participation
hide_title: true
sidebar_position: 3
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

.bse-card{border:1px solid var(--border);border-radius:10px;padding:16px 18px;background:#fff;box-shadow:0 1px 3px rgba(16,24,40,.06),0 1px 2px rgba(16,24,40,.04);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
.bse-card:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(16,24,40,.10),0 4px 8px rgba(16,24,40,.06);border-color:var(--blue-4)}
.bse-secttl{font-size:17px;font-weight:600;margin-bottom:12px}
.bse-lnk{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:var(--navy-2);margin-top:10px;text-decoration:none}
.bse-lnk:hover{text-decoration:underline}
.bse-pill{border:1px solid var(--border);background:#fff;border-radius:999px;padding:5px 12px;font-size:12px;color:var(--navy-2);text-decoration:none;font-weight:600}
.bse-badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 8px;border-radius:6px;font-weight:600;white-space:nowrap}
.bse-badge-ok{background:#E7F5EC;color:#16a34a}
.bse-badge-una{background:var(--surface-muted);color:var(--text-tertiary)}
.bse-badge-rev{background:#FCEAEA;color:var(--danger)}
.bse-delta{font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.bse-delta-up{color:#16a34a}
.bse-delta-dn{color:#dc2626}
.up{color:var(--positive);font-weight:600}

.bse-tabs{display:flex;gap:2px;overflow-x:auto;background:#fff;border:1px solid var(--border);border-radius:12px;padding:4px;margin-top:12px;position:relative;z-index:2}
.bse-tabs a{padding:8px 12px;font-size:13px;color:var(--text-tertiary);white-space:nowrap;text-decoration:none;border-radius:8px;font-weight:600}
.bse-tabs a.on{color:var(--navy-1);background:var(--blue-4)}

.idstrip{background:#fff;border:1px solid var(--border);border-radius:16px;padding:16px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px 14px;border-left:6px solid var(--navy-2);margin-top:12px}
.idstrip>div:first-child{flex:1 1 220px;min-width:0}
.idstrip h1{font-size:19px;font-weight:800;margin:0;color:#0f172a;white-space:nowrap}
.idstrip p{font-size:12px;color:var(--text-tertiary);margin:2px 0 0;white-space:nowrap}
.stat-inline{display:flex;gap:0;flex-wrap:wrap;flex:0 0 auto}
.stat-inline div{padding:0 12px;border-left:1px solid var(--border);text-align:center}
.stat-inline div:first-child{border-left:none;padding-left:0}
.stat-inline .si-num{font-size:19px;font-weight:800;color:var(--navy-1);white-space:nowrap}
.stat-inline .si-lbl{font-size:10.5px;color:var(--text-tertiary);margin-top:2px;white-space:nowrap}
@media(max-width:760px){.idstrip h1,.idstrip p{white-space:normal}}

.capsule{display:flex;height:30px;border-radius:999px;overflow:hidden;margin:14px 0 8px}
.cap-seg{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff}

.div-row{display:grid;grid-template-columns:1fr 90px 1fr;align-items:center;gap:0;margin-bottom:10px}
.div-name{text-align:center;font-size:12.5px;font-weight:700}
.div-bar{height:20px;border-radius:5px 0 0 5px}
.div-bar.pos{border-radius:0 5px 5px 0}
.div-track{width:100%;display:flex;justify-content:flex-end}
.div-track.pos{justify-content:flex-start}
.div-val{font-size:11.5px;font-weight:700;padding:0 6px;align-self:center}

.timeline{position:relative;padding:30px 10px 10px;margin-top:10px}
.timeline::before{content:"";position:absolute;top:44px;left:20px;right:20px;height:2px;background:var(--border)}
.tl-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
.tl-item{flex:1;min-width:120px;text-align:center;position:relative}
.tl-dot{width:14px;height:14px;border-radius:50%;background:var(--navy-2);border:3px solid #fff;box-shadow:0 0 0 2px var(--navy-2);margin:0 auto 10px;position:relative;z-index:1}
.tl-dot.matured{background:var(--slate);box-shadow:0 0 0 2px var(--slate)}
.tl-date{font-size:11px;color:var(--text-tertiary)}
.tl-title{font-size:13px;font-weight:700;margin-top:2px}
.tl-sub{font-size:11.5px;color:var(--text-secondary);margin-top:2px}

.scoreboard{border:1.5px dashed #B7BFCE;border-radius:16px;padding:20px;background:#fff}
.sb-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:14px}
.sb-side{text-align:center}
.sb-side .sb-src{font-size:12px;color:var(--text-tertiary)}
.sb-side .sb-num{font-size:32px;font-weight:800;margin-top:4px}
.sb-vs{width:40px;height:40px;border-radius:50%;background:var(--navy-1);color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800}

.badge-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.circle-badge{text-align:center}
.cb-circle{width:92px;height:92px;border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:800;line-height:1.2}
.cb-label{font-size:12px;color:var(--text-secondary);font-weight:600}

.sec-table{width:100%;border-collapse:collapse;font-size:12.5px}
.sec-table th{text-align:right;font-weight:600;color:var(--text-tertiary);font-size:11px;padding:8px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.sec-table th:first-child,.sec-table td:first-child{text-align:left}
.sec-table td{text-align:right;padding:8px;border-bottom:1px solid var(--border);font-variant-numeric:tabular-nums}
.sec-table tr:last-child td{border-bottom:none}

.two-col{display:grid;grid-template-columns:1.3fr 1fr;gap:16px}
@media (max-width:900px){.two-col{grid-template-columns:1fr}.badge-row{grid-template-columns:1fr}.div-row{grid-template-columns:1fr 70px 1fr}}

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
<PeriodSelector/>
<span class="pill">Scope · Report-bounded issuer universe</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<script>
  const curYear = inputs.period.value === 'FY2024' ? 2024 : 2025;
</script>

<div class="idstrip">
<div>
<h1>Securities &amp; Participation</h1>
<p>Listed products, issuer performance and investor participation</p>
<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
<span class="bse-pill">Scope: Report-bounded issuer universe · Verified 8 Sep 2026</span>
</div>
</div>
{#if curYear === 2025}
<div class="stat-inline">
<div><div class="si-num">33*</div><div class="si-lbl">Equity counters</div></div>
<div><div class="si-num">5</div><div class="si-lbl">Listed ETFs</div></div>
<div><div class="si-num">P40.0bn</div><div class="si-lbl">Bond nominal</div></div>
<div><div class="si-num">2</div><div class="si-lbl">Secondary listings</div></div>
</div>
{:else}
<span class="bse-badge bse-badge-una">Unavailable for FY{curYear}</span>
{/if}
</div>
{#if curYear === 2025}
<p style="font-size:12px;color:var(--text-tertiary);margin:6px 0 0 4px">*Equity counter definition reconciliation pending, see Data Notes (R009).</p>
{:else}
<p style="font-size:12px;color:var(--text-tertiary);margin:6px 0 0 4px">These snapshot counts (equity counters, ETFs, bond nominal, secondary listings) are point-in-time FY2025 facts, not a governed per-year series - not available for FY{curYear}.</p>
{/if}

<div class="bse-tabs">
<a href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a class="on" href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

## Listed products, issuer performance and investor participation

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

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="The counter-movement breakdown" reason="Individual counter performance is only reconciled and narratively described in the FY2025 Integrated Report (BSE-IR-2025 p.111). No equivalent per-counter chart or breakdown exists for other reporting periods in the governed dataset."/>
{:else}
<div class="bse-card">
<h3 class="bse-secttl" style="margin-bottom:2px;font-size:16px">Which counters moved the market in 2025?</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0 0 8px">Of 33 classified counters</p>
<div class="capsule">
<div class="cap-seg" style="width:63.6%;background:var(--navy-2)">21 positive · 63.6%</div>
<div class="cap-seg" style="width:24.2%;background:var(--slate)">8 unchanged</div>
<div class="cap-seg" style="width:12.1%;background:var(--danger)">4 negative</div>
</div>
<p style="font-size:11px;color:var(--text-tertiary);margin:0 0 18px">33 total, 21 positive and 4 negative are printed directly (BSE-IR-2025 p.111); the source says only "the remaining counters showed no change." The 8 and the percentages shown are the arithmetic remainder, not separately printed figures.</p>

<div class="div-row">
<div></div><div class="div-name">Choppies</div><div class="div-track pos"><div class="div-bar pos" style="width:99.9%;background:var(--navy-2)"></div><span class="div-val" style="color:var(--navy-2)">+230.8%</span></div>
</div>
<div class="div-row">
<div></div><div class="div-name">BBS</div><div class="div-track pos"><div class="div-bar pos" style="width:17.3%;background:var(--blue-2)"></div><span class="div-val" style="color:var(--blue-2)">+40.0%</span></div>
</div>
<div class="div-row">
<div></div><div class="div-name">BTCL</div><div class="div-track pos"><div class="div-bar pos" style="width:11.4%;background:var(--blue-3)"></div><span class="div-val" style="color:var(--blue-1)">+26.4%</span></div>
</div>
<div class="div-row">
<div class="div-track" style="justify-content:flex-end"><span class="div-val" style="color:var(--danger)">-7.1%</span><div class="div-bar" style="width:3.1%;background:#F3B3B3"></div></div><div class="div-name">Cresta</div><div></div>
</div>
<div class="div-row">
<div class="div-track" style="justify-content:flex-end"><span class="div-val" style="color:var(--danger)">-7.2%</span><div class="div-bar" style="width:3.1%;background:#F3B3B3"></div></div><div class="div-name">Turnstar</div><div></div>
</div>
<div class="div-row">
<div class="div-track" style="justify-content:flex-end"><span class="div-val" style="color:var(--danger)">-21.7%</span><div class="div-bar" style="width:9.4%;background:#E88989"></div></div><div class="div-name">Letshego</div><div></div>
</div>
<div class="div-row">
<div class="div-track" style="justify-content:flex-end"><span class="div-val" style="color:var(--danger)">-62.9%</span><div class="div-bar" style="width:27.2%;background:var(--danger)"></div></div><div class="div-name">G4S</div><div></div>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:10px">These 7 counters are the complete set individually named in the report (BSE-IR-2025 p.111). It is not a full stock screener, and no 2025 chart exists from which additional counters could be visually estimated. Choppies' outsized move dominates the scale; the remaining named counters are far smaller in magnitude.</p>
</div>
{/if}

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:15px">Issuer valuation history</h3>
<p style="font-size:13px;color:var(--text-secondary)">Verified FY2018-FY2024 P/E, price-to-book and dividend-yield observations are available where
definitions align. <b>FY2025 issuer valuation ratios are not tabulated</b> in the Integrated Report.
This is shown as an explicit unavailable state, never zero.</p>
</div>

## Listed-product developments &amp; access

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="Listed-product developments and access & outreach" reason="Product-universe changes and CSD access/outreach counts are FY2025 events and cumulative-to-date snapshots, not a governed per-year series."/>
{:else}
<div class="two-col" style="margin-top:16px">
<div class="bse-card">
<h3 class="bse-secttl" style="font-size:14px;margin-bottom:4px">Listed-product developments</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0">2025 product-universe changes</p>
<div class="timeline">
<div class="tl-row">
<div class="tl-item">
<div class="tl-dot"></div>
<div class="tl-date">24 Apr 2025</div>
<div class="tl-title">GAIA Renewables 1 Class B</div>
<div class="tl-sub">Preference shares · secondary listing</div>
</div>
<div class="tl-item">
<div class="tl-dot"></div>
<div class="tl-date">2 Dec 2025</div>
<div class="tl-title">Vunani Global Equity ETF</div>
<div class="tl-sub">Actively managed · secondary listing (VGEETF)</div>
</div>
<div class="tl-item">
<div class="tl-dot matured"></div>
<div class="tl-date">During 2025</div>
<div class="tl-title">Absa sustainable bond</div>
<div class="tl-sub">Listed Dec 2023 · matured</div>
</div>
</div>
</div>
</div>

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:14px;margin-bottom:12px">Access &amp; outreach</h3>
<div class="badge-row">
<div class="circle-badge">
<div class="cb-circle" style="background:var(--navy-1)">100,000+</div>
<div class="cb-label">Cumulative CSD accounts</div>
</div>
<div class="circle-badge">
<div class="cb-circle" style="background:var(--blue-1)">169+</div>
<div class="cb-label">Accounts opened at events</div>
</div>
<div class="circle-badge">
<div class="cb-circle" style="background:var(--blue-3);color:var(--navy-1)">10+</div>
<div class="cb-label">Outreach engagements</div>
</div>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:12px">Cumulative accounts, not a count of active or retail investors, and not limited to 2025.</p>
</div>
</div>
{/if}

## Investor participation

{#if curYear === 2025}
<div class="scoreboard" style="margin-top:16px">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
<h3 class="bse-secttl" style="margin:0;font-size:14px">FY2025 retail participation, two sources disagree</h3>
<span class="bse-badge bse-badge-rev">Under review</span>
</div>
<div class="sb-row">
<div class="sb-side">
<div class="sb-src">10X strategy scorecard</div>
<div class="sb-num" style="color:var(--navy-2)">15.1%</div>
<p style="font-size:12px;color:var(--text-tertiary);margin:0">FY2024: 11.6%</p>
</div>
<div class="sb-vs">VS</div>
<div class="sb-side">
<div class="sb-src">Supplementary statistics</div>
<div class="sb-num" style="color:var(--slate)">4.5%</div>
<p style="font-size:12px;color:var(--text-tertiary);margin:0">FY2024: 8.6%</p>
</div>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:14px;text-align:center">These figures tell opposite stories (R005). Until resolved, the only established fact is that
institutional concentration is a material concern BSE itself has identified.</p>
</div>
{:else}
<PeriodNotApplicable period={"FY" + curYear} pageName="The FY2025 retail-participation reconciliation" reason="This scoreboard compares two FY2025-specific sources (10X scorecard vs supplementary statistics, R005). It is a live reconciliation for the current reporting period, not a per-year series."/>
{/if}

<div class="bse-card" style="margin-top:16px">
<h3 class="bse-secttl" style="font-size:14px">Investor contribution to equity turnover, verified years</h3>
<LineChart data={participation_hist} x=year y=pct series=category />
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">Investor-mix percentages published to FY2024. The FY2024 components sum to 99.1%, not 100.0%
(R025), the printed components are preserved, not renormalised. FY2025 is withheld under R005.</p>
</div>

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="The debt-market activity breakdown" reason="This section mixes a current-period snapshot (nominal value, instruments admitted) with a FY2024-referenced five-year statistics table (BSE-IR-2025 p.128); it is not a clean governed per-year series that can be repointed to another single period."/>
{:else}
<div class="bse-card" style="margin-top:16px">
<h3 class="bse-secttl" style="font-size:14px">Debt-market activity</h3>
<div class="stat-inline" style="justify-content:space-between">
<div style="flex:1"><div class="si-num" style="font-size:18px">P40.0bn</div><div class="si-lbl">Nominal value</div></div>
<div style="flex:1"><div class="si-num" style="font-size:18px;color:var(--positive)">+4.7%</div><div class="si-lbl">vs FY2024</div></div>
<div style="flex:1"><div class="si-num" style="font-size:18px">54</div><div class="si-lbl">Instruments admitted</div></div>
<div style="flex:1"><div class="si-num" style="font-size:18px">1</div><div class="si-lbl">Bond matured (Absa)</div></div>
</div>
<div class="table-container" style="margin-top:16px">
<table class="sec-table">
<tr><th>Section</th><th>Corporate bonds</th><th>Commercial paper</th><th>Government bonds</th><th>Total</th></tr>
<tr><td>Five-year market statistics (p.128)</td><td>93</td><td>17</td><td>7</td><td>117*</td></tr>
<tr><td>Bond Market Activity narrative (p.111)</td><td>95</td><td>20</td><td>7</td><td>122</td></tr>
</table>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px"><span class="bse-badge bse-badge-una">Governed · not collapsed</span>&nbsp; 117 and 122 are retained
as two separate restricted evidence variants per the reconciliation register (R007). This is not a
conflict to resolve into one number, and neither figure should be averaged or picked between. *117 is a derived
sum of three published component rows (p.128), not itself a printed total; 122 is stated directly
as a total in the p.111 narrative. A third, CSDB-register-scoped reading (121 = 96 corporate + 18
commercial paper + 7 government) exists but is not shown here; see <a href="/bse-2025/data-quality">Data Notes</a>.
Maturities are also given as 56 or 57 across sections (R008), no composition chart is published
until that is separately reconciled.</p>
</div>
{/if}

<div class="bse-card" style="margin-top:16px">
<h3 class="bse-secttl" style="font-size:13px;margin-bottom:8px">Related pages</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/market-performance">Return to aggregate market performance →</a>
<a class="bse-pill" href="/bse-2025/10x-strategy">Product-innovation commitments →</a>
<a class="bse-pill" href="/bse-2025/data-quality">Retail-share, debt-count and universe definitions →</a>
</div>
</div>

<p class="src">Sources: BSE Integrated Report 2025 and Annual Reports 2022-2024. Canonical release
<code>bse_canonical_v1_0_2</code>, database status approved (2026-09-08).
<a class="bse-lnk" style="margin:0" href="/bse-2025/data-quality">Full reconciliation register →</a></p>
