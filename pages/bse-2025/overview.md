---
title: BSE Overview
hide_title: true
sidebar_position: 1
---

<style>
.bse-topbar{background:linear-gradient(120deg,#14110A,#2A2312);color:#fff;border-radius:12px;padding:16px 20px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;margin-top:0}
.bse-topbar .mark{width:34px;height:34px;border-radius:50%;background:#fff;flex:none;object-fit:contain;padding:2px}
.bse-topbar .title{font-size:15px;font-weight:600}
.bse-topbar .sub{font-size:12px;opacity:.75}
.bse-topbar .pills{display:flex;gap:6px;flex-wrap:wrap}
.bse-topbar .pill{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:#DCE4F6;border-radius:999px;padding:2px 10px;font-size:12px;white-space:nowrap}
.bse-hero{background:linear-gradient(140deg,#14110A 0%,#C19A2D 100%);color:#fff;padding:24px 36px 34px;border-radius:12px;margin-top:12px;margin-bottom:0}
@media(max-width:639px){.bse-hero{padding:20px 20px 26px}}
.bse-hero h1{color:#fff;font-size:26px;font-weight:800;letter-spacing:-.03em;line-height:1.15;margin:2px 0 12px}
.bse-hero p{color:rgba(255,255,255,.85);font-size:15px;line-height:1.6;margin:0 0 8px}
.bse-hero .meta{font-size:12px;color:rgba(255,255,255,.6);margin-top:14px}
.bse-nav{display:flex;flex-wrap:wrap;gap:2px;font-size:13px;margin:12px 0 20px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:4px}
.bse-nav a{padding:8px 12px;color:#667085;text-decoration:none;font-weight:600;border-radius:8px;white-space:nowrap}
.bse-nav a.on{color:#14110A;background:#EEDDAA}
.bse-card{border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;background:#fff;box-shadow:0 1px 3px rgba(16,24,40,.06),0 1px 2px rgba(16,24,40,.04);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
.bse-card:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(16,24,40,.10),0 4px 8px rgba(16,24,40,.06);border-color:#EEDDAA}
a.bse-card:hover{text-decoration:none}
.bse-card-kpi{position:relative;padding-top:20px}
.bse-card-kpi::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;border-radius:10px 10px 0 0;background:linear-gradient(90deg,#C19A2D,#EEDDAA 50%,#C19A2D);transition:box-shadow .25s ease,filter .25s ease}
.bse-card-kpi:hover::before{box-shadow:0 0 8px 1px rgba(193,154,45,.9),0 0 18px 5px rgba(238,221,170,.65);filter:brightness(1.2)}
.bse-card .lbl{font-size:13px;font-weight:400;color:#475467;margin:0 0 4px}
.bse-card .v{font-size:26px;font-weight:800;color:#0f172a;letter-spacing:-.02em}
.bse-card .d{font-size:13px;margin-top:4px}
.up{color:#0e7a4f}.down{color:#b42318}
.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
.bse-badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 8px;border-radius:6px;font-weight:600;white-space:nowrap}
.bse-badge-ok{background:#E7F5EC;color:#16a34a}
.bse-badge-una{background:#F3F6FC;color:#667085}
.bse-delta{font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.bse-delta-up{color:#16a34a}
.bse-delta-dn{color:#dc2626}
.bse-pill{border:1px solid #E4E9F2;border-radius:999px;padding:2px 10px;font-size:12px;color:#475467;white-space:nowrap;background:#fff}
.bse-secttl{font-size:17px;font-weight:600;margin-bottom:12px}
.bse-lnk{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#2A2312;margin-top:10px;text-decoration:none}
.bse-lnk:hover{text-decoration:underline}
.bse-honest{border-left:3px solid #98A2B3;padding:10px 12px;font-size:14px;color:#475467;background:#F3F6FC;border-radius:0 8px 8px 0}
.bse-grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:16px}
.bse-grid4{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;margin-top:16px}
.bse-card-link{display:block;text-decoration:none;color:inherit}
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
<span class="pill">Scope · BSE Group</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<div class="bse-nav">
<a class="on" href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

<script>
  const curYear = inputs.period.value === 'FY2024' ? 2024 : 2025;
  const priorYear = curYear - 1;
  const hm = (id) => headline.find(r => r.metric_id === id) ?? {};
  const hDelta = (cur, prior) => (cur == null || prior == null || prior === 0) ? null : ((cur - prior) / prior) * 100;
  const hFmtDelta = (d) => d == null ? null : `${d >= 0 ? '↑' : '↓'} ${d >= 0 ? '+' : ''}${d.toFixed(1)}%`;
</script>

{#if curYear === 2025}
<div class="bse-hero">
<h1>Market growth alongside investment cost and operational risk</h1>
<p>Botswana's capital market expanded strongly in 2025, with record equity activity and higher
BSE Group revenue. Operating profit declined as the Group increased investment in technology,
people and execution of its 10X by 2030 strategy. A four-day trading outage in October sharpened
the focus on operational resilience and elevated technology risk to Board-level attention.</p>
</div>
{:else}
<div class="bse-hero">
<h1>FY{curYear} at a glance</h1>
<p>A lighter, KPI-only view for FY{curYear}. The FY2025 narrative above (hero copy, "Honest
reading", material developments) is specific to that year's events and is not repointed here -
switch back to FY2025 above to see it. Turnover, market cap, revenue and operating profit are
shown below where a governed FY{curYear} figure exists.</p>
</div>
{/if}


```sql headline
select metric_id,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2024 : 2025} then reported_value_numeric end) as v2025,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2023 : 2024} then reported_value_numeric end) as v2024
from bse.market where metric_id in ('market.total.turnover','market.total.market.capitalisation')
group by metric_id
union all
select metric_id,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2024 : 2025} then reported_value_numeric end) / 1e6,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2023 : 2024} then reported_value_numeric end) / 1e6
from bse.financials where metric_id in ('financial.revenue','financial.operating_profit')
group by metric_id
```

```sql turnover_move
select reported_value_numeric as pct, display_note from bse.overview where section = 'turnover_movement'
```
```sql pat_move
select reported_value_numeric as pct from bse.overview where section = 'profit_movement'
```
```sql recon_count
select count(*) as n from bse.reconciliation_cases
```

## What happened in FY{curYear}

<Grid cols=4>
<div class="bse-card bse-card-kpi">
<p class="lbl">Total market turnover</p>
<div class="v">P{hm('market.total.turnover').v2025?.toFixed(1) ?? '—'}<span style="font-size:16px">bn</span></div>
<p class="d">{#if hFmtDelta(hDelta(hm('market.total.turnover').v2025, hm('market.total.turnover').v2024))}<span class="bse-delta bse-delta-up">{hFmtDelta(hDelta(hm('market.total.turnover').v2025, hm('market.total.turnover').v2024))}</span> <span style="color:#667085">FY{priorYear} · P{hm('market.total.turnover').v2024?.toFixed(1) ?? '—'}bn</span>{:else}<span style="color:#667085">FY{priorYear} not available</span>{/if}</p>
<div style="margin-top:8px"><span class="bse-badge bse-badge-ok">✓ Verified</span></div>
</div>
<div class="bse-card bse-card-kpi">
<p class="lbl">Equity market capitalisation</p>
<div class="v">P{(hm('market.total.market.capitalisation').v2025 != null ? hm('market.total.market.capitalisation').v2025/1000 : null)?.toFixed(1) ?? '—'}<span style="font-size:16px">bn</span></div>
<p class="d">{#if hFmtDelta(hDelta(hm('market.total.market.capitalisation').v2025, hm('market.total.market.capitalisation').v2024))}<span class="bse-delta bse-delta-up">{hFmtDelta(hDelta(hm('market.total.market.capitalisation').v2025, hm('market.total.market.capitalisation').v2024))}</span> <span style="color:#667085">FY{priorYear} · P{(hm('market.total.market.capitalisation').v2024 != null ? hm('market.total.market.capitalisation').v2024/1000 : null)?.toFixed(1) ?? '—'}bn</span>{:else}<span style="color:#667085">FY{priorYear} not available</span>{/if}</p>
<div style="margin-top:8px"><span class="bse-badge bse-badge-ok">✓ Verified</span></div>
</div>
<div class="bse-card bse-card-kpi">
<p class="lbl">Group revenue</p>
<div class="v">P{hm('financial.revenue').v2025?.toFixed(1) ?? '—'}<span style="font-size:16px">m</span></div>
<p class="d">{#if hFmtDelta(hDelta(hm('financial.revenue').v2025, hm('financial.revenue').v2024))}<span class="bse-delta bse-delta-up">{hFmtDelta(hDelta(hm('financial.revenue').v2025, hm('financial.revenue').v2024))}</span> <span style="color:#667085">FY{priorYear} · P{hm('financial.revenue').v2024?.toFixed(1) ?? '—'}m</span>{:else}<span style="color:#667085">FY{priorYear} not available</span>{/if}</p>
<div style="margin-top:8px"><span class="bse-badge bse-badge-ok">✓ Audited</span></div>
</div>
<div class="bse-card bse-card-kpi">
<p class="lbl">Operating profit</p>
<div class="v">P{hm('financial.operating_profit').v2025?.toFixed(1) ?? '—'}<span style="font-size:16px">m</span></div>
<p class="d">{#if hFmtDelta(hDelta(hm('financial.operating_profit').v2025, hm('financial.operating_profit').v2024))}<span class="bse-delta bse-delta-dn">{hFmtDelta(hDelta(hm('financial.operating_profit').v2025, hm('financial.operating_profit').v2024))}</span> <span style="color:#667085">FY{priorYear} · P{hm('financial.operating_profit').v2024?.toFixed(1) ?? '—'}m</span>{:else}<span style="color:#667085">FY{priorYear} not available</span>{/if}</p>
<div style="margin-top:8px"><span class="bse-badge bse-badge-ok">✓ Audited</span></div>
</div>
</Grid>

{#if curYear !== 2025}
<p style="font-size:12px;color:#667085;margin-top:16px">This is the lighter FY{curYear} view. Market composition, investor participation, financial detail and strategy/governance narrative live on the individual pages above, where each page's own not-applicable rules apply.</p>
{:else}

<div class="bse-grid2">
<div class="bse-card">
<h3 class="bse-secttl" style="margin-bottom:4px">Market activity snapshot</h3>
<div style="margin-top:10px">
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:#475467">Total market turnover</span><span style="font-variant-numeric:tabular-nums"><span style="color:#667085">P7.9bn → </span><b>P9.3bn</b></span></div>
<svg viewBox="0 0 300 12" style="width:100%;margin-top:4px"><rect x="0" y="0" width="254" height="5" rx="2.5" fill="#EEDDAA"/><rect x="0" y="7" width="300" height="5" rx="2.5" fill="#2A2312"/></svg>
</div>
<div style="margin-top:10px">
<div style="display:flex;justify-content:space-between;font-size:13px"><span style="color:#475467">Equity market capitalisation</span><span style="font-variant-numeric:tabular-nums"><span style="color:#667085">P686.8bn → </span><b>P710.0bn</b></span></div>
<svg viewBox="0 0 300 12" style="width:100%;margin-top:4px"><rect x="0" y="0" width="290" height="5" rx="2.5" fill="#EEDDAA"/><rect x="0" y="7" width="300" height="5" rx="2.5" fill="#2A2312"/></svg>
</div>
<p style="font-size:12px;color:#667085;margin-top:8px">Bars scaled within each indicator.</p>
<a class="bse-lnk" href="/bse-2025/market-performance">Explore market performance →</a>
</div>
<div class="bse-card">
<h3 class="bse-secttl" style="margin-bottom:8px">Honest reading</h3>
<div class="bse-honest">2025 was not simply a record year. A large institutional transition mandate in Q2 inflated
equity turnover. Revenue grew, but operating profit fell as costs grew faster, and a four-day
outage in October exposed resilience weaknesses.</div>
<div style="display:flex;flex-direction:column;gap:2px;margin-top:4px">
<a class="bse-lnk" href="/bse-2025/market-performance">See market concentration evidence →</a>
<a class="bse-lnk" href="/bse-2025/governance-risk">Read the outage account →</a>
</div>
</div>
</div>

## Financial trade-off

<div class="bse-card" style="border-left:3px solid #2A2312;margin-top:0">
<h3 class="bse-secttl" style="margin-bottom:10px;font-size:19px">Financial trade-off: all three facts are true at once</h3>
<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
<span class="bse-pill" style="font-size:15px;padding:6px 14px">Revenue&nbsp; <b class="up">+17.1%</b></span>
<span class="bse-pill" style="font-size:15px;padding:6px 14px">Operating expenses&nbsp; <b class="down">+24.7%</b></span>
<span class="bse-pill" style="font-size:15px;padding:6px 14px">Operating profit&nbsp; <b class="down">−33.1%</b></span>
<span class="bse-pill" style="font-size:15px;padding:6px 14px">Final profit&nbsp; <b class="up">+30.3%*</b></span>
</div>
<p style="font-size:14px;color:#475467;margin-top:10px;line-height:1.5">Finance income up and tax down turned an operating decline into a higher final profit.
*Reported as both 30.3% and 30.4% across sections of the source report, governed treatment
(R018) uses 30.3%; 30.4% arises from rounded headline figures.</p>
<a class="bse-lnk" href="/bse-2025/group-financials" style="font-size:14px">Explore group financials →</a>
</div>

Displaying revenue and final profit without the operating-profit decline would over-state the
year. Complete analysis on <a href="/bse-2025/group-financials">Group Financials</a>.

## 10X by 2030: first year of execution

<div class="bse-card">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
<h3 class="bse-secttl" style="margin:0">10X by 2030: first year of execution</h3>
<span class="bse-badge bse-badge-una">BSE self-assessment</span>
</div>
<svg viewBox="0 0 600 34" style="width:100%;margin-top:12px">
<rect x="0" y="6" width="400" height="22" rx="6" fill="#16a34a"/>
<rect x="400" y="6" width="120" height="22" fill="#C2410C"/>
<rect x="520" y="6" width="80" height="22" rx="6" fill="#dc2626"/>
<text x="200" y="21" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">10 achieved</text>
<text x="460" y="21" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">3 in progress</text>
<text x="560" y="21" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">2 deferred</text>
</svg>
<p style="font-size:12px;color:#667085;margin-top:8px">Most completed items are foundations. Market availability above 99% and a planned
sustainable bond were deferred.</p>
<a class="bse-lnk" href="/bse-2025/10x-strategy">Explore the 10X strategy →</a>
</div>

10X by 2030 is BSE's growth strategy, approved in June 2025. FY2025 marked its first year of
execution, with 15 Board-approved commitments organised across five strategic pillars: Talent
and Culture, Technology Modernisation, Product Innovation, Internationalisation and Force for
Good. Performance is measured against a 2024 KPI baseline, with 2027 and 2030 targets. See the
full scorecard on <a href="/bse-2025/10x-strategy">Strategy</a>.

## Material developments

<div class="bse-grid4">
<div class="bse-card">
<p class="lbl">New leadership</p>
<div style="font-size:15px;font-weight:600">CEO appointed 12 March 2025</div>
<p style="font-size:12px;color:#667085">Aobakwe Monyatsi joins as CEO and Executive Director.</p>
<a class="bse-lnk" href="/bse-2025/governance-risk">Governance →</a>
</div>
<div class="bse-card">
<p class="lbl">New strategy</p>
<div style="font-size:15px;font-weight:600">10X by 2030 approved</div>
<p style="font-size:12px;color:#667085">Approved June 2025 · 15 commitments set for the baseline year.</p>
<a class="bse-lnk" href="/bse-2025/10x-strategy">10X Strategy →</a>
</div>
<div class="bse-card">
<p class="lbl">Group expansion</p>
<div style="font-size:15px;font-weight:600">Two subsidiaries incorporated</div>
<p style="font-size:12px;color:#667085">BMX and BSE Impact Funds Company join the Group in 2025.</p>
<a class="bse-lnk" href="/bse-2025/group-financials">Group financials →</a>
</div>
<div class="bse-card" style="border-left:3px solid #dc2626">
<p class="lbl">Material event</p>
<div style="font-size:15px;font-weight:600">Four-day market outage</div>
<p style="font-size:12px;color:#667085">October 2025 · trading suspended · settlement continuity preserved through manual processes.</p>
<a class="bse-lnk" href="/bse-2025/governance-risk">Failure, response and remediation →</a>
</div>
</div>

## Continue exploring

<div class="bse-grid2" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr))">
<a class="bse-card bse-card-link" style="border-top:3px solid #C19A2D" href="/bse-2025/market-performance">
<p class="lbl">02 · Market Performance</p>
<div style="font-size:14px;font-weight:600">P9.3bn total turnover</div>
<p style="font-size:12px;color:#667085">+<Value data={turnover_move} column=pct fmt='0.0'/>% · record, concentrated</p>
</a>
<a class="bse-card bse-card-link" style="border-top:3px solid #5B6B82" href="/bse-2025/securities-participation">
<p class="lbl">03 · Securities &amp; Participation</p>
<div style="font-size:14px;font-weight:600">33 counters · 21 up / 4 down</div>
<p style="font-size:12px;color:#667085">Retail-share figures under review</p>
</a>
<a class="bse-card bse-card-link" style="border-top:3px solid #2A2312" href="/bse-2025/group-financials">
<p class="lbl">04 · Group Financials</p>
<div style="font-size:14px;font-weight:600">P78.8m revenue</div>
<p style="font-size:12px;color:#667085">P12.2m operating profit · audited</p>
</a>
<a class="bse-card bse-card-link" style="border-top:3px solid #16a34a" href="/bse-2025/10x-strategy">
<p class="lbl">05 · 10X Strategy</p>
<div style="font-size:14px;font-weight:600">10 of 15 achieved</div>
<p style="font-size:12px;color:#667085">2025 is the strategy baseline year</p>
</a>
<a class="bse-card bse-card-link" style="border-top:3px solid #dc2626" href="/bse-2025/governance-risk">
<p class="lbl">06 · Governance &amp; Risk</p>
<div style="font-size:14px;font-weight:600">4-day outage</div>
<p style="font-size:12px;color:#667085">7 principal risks · 2 High</p>
</a>
<a class="bse-card bse-card-link" style="border-top:3px solid #C2410C" href="/bse-2025/data-quality">
<p class="lbl">07 · Data Quality</p>
<div style="font-size:14px;font-weight:600"><Value data={recon_count} column=n/> cases under review</div>
<p style="font-size:12px;color:#667085">Full reconciliation register →</p>
</a>
</div>

<div class="bse-card" style="margin-top:16px">
<p class="lbl">BSE at a glance</p>
<div style="display:flex;gap:18px;flex-wrap:wrap;font-size:13px;color:#475467;margin-top:6px">
<span><b style="color:#0f172a">1989</b> established</span>
<span><b style="color:#0f172a">4</b> group entities</span>
<span><b style="color:#0f172a">30</b> employees</span>
<span>Sole licensed securities exchange in Botswana</span>
</div>
<p class="src" style="margin-top:12px">Sources: BSE Integrated Report 2025 and Annual Reports 2022-2024, visually verified.
Canonical release <code>bse_canonical_v1_0_2</code> · database status <b>approved</b> (Thegreat P. Malema, 2026-09-08).
Dashboard deployment and publication are governed separately. This is a public analytical dashboard,
not a trading terminal or investment advice.</p>
</div>
{/if}
