---
title: BSE Group Financials
hide_title: true
sidebar_position: 4
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
.up{color:var(--positive);font-weight:600}
.dn{color:var(--danger);font-weight:600}

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

.seq-flow{display:flex;align-items:stretch;gap:0;flex-wrap:wrap;margin-top:8px}
.seq-step{flex:1;min-width:110px;text-align:center;padding:14px 6px;position:relative;display:flex;flex-direction:column;align-items:center}
.seq-step:not(:last-child)::after{content:"→";position:absolute;right:-2px;top:50%;transform:translateY(-70%);color:var(--text-tertiary);font-size:16px}
.seq-lbl{font-size:10.5px;color:var(--text-tertiary);font-weight:600;line-height:1.3;min-height:27px;display:flex;align-items:center;justify-content:center}
.seq-val{font-size:14px;font-weight:800;margin-top:6px}

.badge-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}
@media(max-width:900px){.badge-row{grid-template-columns:1fr}}
.idx-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:18px;text-align:center}
.idx-pill{display:inline-block;background:var(--navy-2);color:#fff;font-size:11.5px;font-weight:700;padding:4px 14px;border-radius:999px;margin-bottom:10px}
.idx-pill.p2{background:var(--purple)}
.idx-pill.p3{background:var(--warning)}
.idx-big{font-size:30px;font-weight:800}
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

.rbar-row{margin-bottom:10px}
.rbar-row .rlbl{display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;gap:8px}
.rbar-track{background:var(--surface-muted);border-radius:5px;height:10px;overflow:hidden}
.rbar-fill{height:100%;border-radius:5px}

.withheld{border:1.5px dashed #B7BFCE;border-radius:14px;padding:16px;background:#fff}
.resolved-card{border:1.5px solid var(--border);border-radius:14px;padding:16px;background:#fff}
.callout-dark{background:linear-gradient(135deg,var(--navy-1),var(--navy-2));color:#fff;border-radius:14px;padding:18px}
.callout-dark h4{margin:0 0 6px;font-size:13.5px}
.callout-dark p{margin:0;font-size:12.5px;color:#C7D3EE;line-height:1.55}
.three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-top:16px}
@media(max-width:900px){.three-col{grid-template-columns:1fr}}

.fin-table{width:100%;border-collapse:collapse;font-size:13px}
.fin-table th{text-align:right;font-weight:600;color:var(--text-tertiary);font-size:11px;padding:8px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.fin-table th:first-child,.fin-table td:first-child{text-align:left}
.fin-table td{text-align:right;padding:8px;border-bottom:1px solid var(--border);font-variant-numeric:tabular-nums}
.fin-table tr:last-child td{border-bottom:none}

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
<span class="pill">Scope · Consolidated Group</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<div class="bse-hero">
<div class="bse-hero-top">
<div style="display:flex;align-items:center;gap:14px">
<a class="bse-back" href="/bse-2025/overview" aria-label="Back to Overview">←</a>
<div>
<h1>BSE Group Financials</h1>
<p class="sub-line">Consolidated Group results: revenue, cost, profit and financial position</p>
</div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="bse-hero-pill">Report period: FY{curYear}</span>
<span class="bse-hero-pill dim">Audited · comparing to FY{priorYear}</span>
<span class="bse-hero-pill dim">Scope: Consolidated Group · Verified 8 Sep 2026</span>
</div>
</div>
</div>

<div class="bse-tabs">
<a href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a class="on" href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql period_financials
select metric_id,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2024 : 2025} then reported_value_numeric end) / 1e6 as cur,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2023 : 2024} then reported_value_numeric end) / 1e6 as prior,
  max(case when reference_year = ${inputs.period.value === 'FY2024' ? 2024 : 2025} then verification_state end) as cur_state
from bse.financials
where metric_id in (
  'financial.revenue','financial.operating_profit','financial.profit_after_tax',
  'financial.total_assets','financial.total_equity','financial.total_liabilities',
  'financial.cash_resources'
)
group by metric_id
```

<script>
  const curYear = inputs.period.value === 'FY2024' ? 2024 : 2025;
  const priorYear = curYear - 1;
  const fm = (id) => period_financials.find(r => r.metric_id === id) ?? {};
  const pctf = (cur, prior) => (cur == null || prior == null || prior === 0) ? null : ((cur - prior) / prior) * 100;
  const badgeForF = (state) => state == null ? 'Unavailable' : null;
  const fmtM2 = (v) => v == null ? '—' : `P${v.toFixed(1)}m`;
  const fmtPct2 = (v) => v == null ? '—' : `${v.toFixed(1)}%`;
  const fmtDelta2 = (d) => d == null ? '— not available for FY' + priorYear : `${d >= 0 ? '▲' : '▼'} ${d >= 0 ? '+' : ''}${d.toFixed(1)}%`;
</script>

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

## Revenue, {#if curYear === 2025}costs grew faster{:else}operating profit and net profit, FY{curYear}{/if}

<div class="top-row">
<div class="block-stack">
<div class="kpi-block kb1">
<div class="kb-label">Group revenue</div>
<div class="kb-val">{fmtM2(fm('financial.revenue').cur)}</div>
<div class="kb-delta" style="color:#7BE0A0">{fmtDelta2(pctf(fm('financial.revenue').cur, fm('financial.revenue').prior))}</div>
</div>
<div class="kpi-block kb2">
<div class="kb-label">Operating expenses</div>
<div class="kb-val">{#if curYear === 2025}P69.3m{:else}—{/if}</div>
<div class="kb-delta" style="color:#F5C97B">{#if curYear === 2025}▲ +24.7%{:else}<span class="bse-badge bse-badge-una">Unavailable</span>{/if}</div>
</div>
<div class="kpi-block kb3">
<div class="kb-label">Operating profit</div>
<div class="kb-val">{fmtM2(fm('financial.operating_profit').cur)}</div>
<div class="kb-delta" style="color:#FBD1D1">{fmtDelta2(pctf(fm('financial.operating_profit').cur, fm('financial.operating_profit').prior))}</div>
</div>
<div class="kpi-block kb4">
<div class="kb-label">Profit for the year</div>
<div class="kb-val">{fmtM2(fm('financial.profit_after_tax').cur)}</div>
<div class="kb-delta" style="color:#7BE0A0">{fmtDelta2(pctf(fm('financial.profit_after_tax').cur, fm('financial.profit_after_tax').prior))}</div>
</div>
</div>

{#if curYear === 2025}
<div class="bse-card" style="padding:20px">
<h3 class="bse-secttl" style="margin-bottom:2px;font-size:16px">Why did final profit rise while operating profit fell?</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0 0 10px">All figures are true at once: read as a sequence, not a contradiction</p>
<div class="seq-flow">
<div class="seq-step"><div class="seq-lbl">Revenue</div><div class="seq-val" style="color:var(--positive)">+17.1%</div></div>
<div class="seq-step"><div class="seq-lbl">Operating expenses</div><div class="seq-val" style="color:var(--warning)">+24.7%</div></div>
<div class="seq-step"><div class="seq-lbl">Operating profit</div><div class="seq-val" style="color:var(--danger)">−33.1%</div></div>
<div class="seq-step"><div class="seq-lbl">Finance income</div><div class="seq-val" style="color:var(--positive)">+77.7%</div></div>
<div class="seq-step"><div class="seq-lbl">Tax charge</div><div class="seq-val" style="color:var(--positive)">−43.1%</div></div>
<div class="seq-step"><div class="seq-lbl">Profit for the year</div><div class="seq-val" style="color:var(--navy-1)">+30.3%</div></div>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:10px">Higher finance income and a substantially lower tax charge turned an operating-profit decline into a higher final profit for the year. Presented as a sequence so the final-profit increase does not appear to contradict the operating-profit decline. (30.3% comes from exact audited amounts, R018; 30.4% arises from rounded headline figures and is not used.)</p>
</div>
{:else}
<PeriodNotApplicable period={"FY" + curYear} pageName="The revenue-to-profit reconciliation sequence" reason="This step-by-step reconciliation (finance income, tax charge) explains what happened in FY2025 specifically and depends on metrics not tracked as a governed per-year series."/>
{/if}

<div class="bse-card" style="padding:20px;margin-top:16px">
<div style="font-size:13.5px;font-weight:700;margin:0 0 2px">Four-year trend, by metric</div>
<p style="font-size:12px;color:var(--text-tertiary);margin:0 0 10px">FY2022-FY2025 · P millions · all audited</p>

```sql trend4y
select 2022 as year, 'Revenue' as metric, 43.044 as pm union all
select 2022, 'Operating expenses', 41.512 union all
select 2022, 'Operating profit', 4.077 union all
select 2022, 'Profit for the year', 10.576 union all
select 2023, 'Revenue', 64.013 union all
select 2023, 'Operating expenses', 50.513 union all
select 2023, 'Operating profit', 16.879 union all
select 2023, 'Profit for the year', 24.939 union all
select 2024, 'Revenue', 67.347 union all
select 2024, 'Operating expenses', 55.542 union all
select 2024, 'Operating profit', 18.191 union all
select 2024, 'Profit for the year', 15.795 union all
select 2025, 'Revenue', 78.843 union all
select 2025, 'Operating expenses', 69.283 union all
select 2025, 'Operating profit', 12.175 union all
select 2025, 'Profit for the year', 20.586
```

<BarChart
    data={trend4y}
    x=year
    y=pm
    series=metric
    yFmt='"P"0.0" m"'
    type=grouped
    xType=category
    sort=false
    colorPalette={['#14110A','#C19A2D','#D4AF52','#E3C878']}
    legend=true
    yAxisLabels=true
    yGridlines=true
    yTickMarks=true
    xGridlines=false
    xBaseline=true
    xTickMarks=false
    echartsOptions={{
      tooltip: {
        trigger: 'item',
        axisPointer: { type: 'none' },
        formatter: (p) => {
          const v = Array.isArray(p.value) ? p.value[p.value.length - 1] : p.value;
          return `<b>${p.seriesName}</b><br/>${p.name}: <b>P${Number(v).toFixed(1)}m</b>`;
        }
      }
    }}
/>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:8px">All four years are audited, published figures; there are no illustrative or placeholder values. Revenue/operating profit/profit for the year: BSE Group financial statements (2022-2025 Annual/Integrated Reports). Operating expenses: FY2022 P41.5m (2022 AR), FY2023 P50.5m (<b>restated</b>: the 2023 Annual Report originally published P49.0m; the 2024 Annual Report restates the FY2023 comparative to P50.5m, which is the value used here, per the same "use the latest audited restatement" principle already governing FY2023 profit-after-tax, see Five-year history below), FY2024 P55.5m, FY2025 P69.3m (Note 20, 2025 Integrated Report).</p>
</div>
</div>

## Margins and ratios: FY{curYear}

<div class="badge-row">
<div class="idx-card">
<span class="idx-pill">Operating margin</span>
<div class="idx-big" style="color:var(--navy-1)">{fmtPct2(fm('financial.operating_profit').cur != null && fm('financial.revenue').cur ? (fm('financial.operating_profit').cur / fm('financial.revenue').cur * 100) : null)}</div>
<div class="idx-note">Operating profit ÷ revenue</div>
</div>
<div class="idx-card">
<span class="idx-pill p2">Profit margin</span>
<div class="idx-big" style="color:var(--positive)">{fmtPct2(fm('financial.profit_after_tax').cur != null && fm('financial.revenue').cur ? (fm('financial.profit_after_tax').cur / fm('financial.revenue').cur * 100) : null)}</div>
<div class="idx-note">Profit for year ÷ revenue</div>
</div>
<div class="idx-card">
<span class="idx-pill p3">Cost-to-income</span>
<div class="idx-big" style="color:var(--warning)">{#if curYear === 2025}≈88%{:else}<span class="bse-badge bse-badge-una">Unavailable</span>{/if}</div>
<div class="idx-note">Operating expenses ÷ revenue</div>
</div>
</div>

## Where the money comes from, and where it goes

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="The revenue and cost composition breakdown" reason="Liquid-resources mix, revenue composition by fee line, and employee cost are not tracked as a governed per-year series - only the FY2025 figures are published in this form."/>
{:else}
<div class="comp-row">
<div class="bse-card comp-card">
<h3>Liquid resources mix</h3>
<div class="donut" style="background:conic-gradient(var(--navy-2) 0% 18%, var(--blue-3) 18% 100%)"></div>
<div class="dleg">
<span><span class="sw" style="background:var(--navy-2)"></span>Cash: P27.3m · 18.0%</span>
<span><span class="sw" style="background:var(--blue-3)"></span>Financial assets: P125.0m · 82.0%</span>
</div>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:8px">Combined P152.3m is not unrestricted bank cash, see the cash caveat below.</p>
</div>

<div class="bse-card comp-card" style="grid-column:span 2">
<h3>Revenue composition: ranked, not a pie</h3>
<div class="rbar-row">
<div class="rlbl"><span>Listing &amp; sustaining fees</span><b>P54.1m · 68.6%</b></div>
<div class="rbar-track"><div class="rbar-fill" style="width:100%;background:var(--navy-2)"></div></div>
</div>
<div class="rbar-row">
<div class="rlbl"><span>Commissions received</span><b>P14.7m · 18.7% <span class="up">+60.8%</span></b></div>
<div class="rbar-track"><div class="rbar-fill" style="width:27%;background:var(--blue-1)"></div></div>
</div>
<div class="rbar-row">
<div class="rlbl"><span>Corporate-action fees</span><b>P8.7m · 11.0% <span class="dn">−5.8%</span></b></div>
<div class="rbar-track"><div class="rbar-fill" style="width:16%;background:var(--blue-2)"></div></div>
</div>
<div class="rbar-row">
<div class="rlbl"><span>News publications</span><b>P1.3m · 1.7%</b></div>
<div class="rbar-track"><div class="rbar-fill" style="width:2.5%;background:var(--blue-3)"></div></div>
</div>
<div class="rbar-row" style="margin-bottom:0">
<div class="rlbl"><span>Members fees</span><b>P0.01m · &lt;0.1%</b></div>
<div class="rbar-track"><div class="rbar-fill" style="width:1%;background:var(--blue-4)"></div></div>
</div>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:8px">Absolute figures are printed in Note 17 (Revenue), 2025 Integrated Report, p.167. Percentage shares and YoY changes are derived from those audited amounts, not separately printed.</p>
</div>

<div class="bse-card comp-card">
<h3>Employee cost</h3>
<div style="font-size:26px;font-weight:800;color:var(--navy-1)">P35.7m</div>
<div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">51.5% of opex · +40.8% YoY</div>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:10px">Largest identifiable cost component; no full functional split is published. P35.7m/+40.8% computed from Note 20's exact audited amounts (P35,695,327 vs P25,355,512); BSE's own p.42 headline rounds this to +40.7%, same dual-rounding pattern as R018.</p>
</div>
</div>
{/if}

<div class="bse-card" style="margin-top:16px">
<h3 style="font-size:14px;font-weight:700;margin:0 0 10px">Financial position: equity vs liabilities, share of total assets</h3>
<div class="bar100">
<div style="width:{((fm('financial.total_equity').cur ?? 0) / (fm('financial.total_assets').cur || 1) * 100).toFixed(1)}%;background:var(--navy-2)"></div>
<div style="width:{((fm('financial.total_liabilities').cur ?? 0) / (fm('financial.total_assets').cur || 1) * 100).toFixed(1)}%;background:var(--slate)"></div>
</div>
<div class="dleg" style="flex-direction:row;justify-content:space-between;margin-top:8px">
<span><span class="sw" style="background:var(--navy-2)"></span>Total equity: {fmtM2(fm('financial.total_equity').cur)} · {((fm('financial.total_equity').cur ?? 0) / (fm('financial.total_assets').cur || 1) * 100).toFixed(1)}%</span>
<span><span class="sw" style="background:var(--slate)"></span>Total liabilities: {fmtM2(fm('financial.total_liabilities').cur)} · {((fm('financial.total_liabilities').cur ?? 0) / (fm('financial.total_assets').cur || 1) * 100).toFixed(1)}%</span>
</div>
</div>

## Financial position

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:14px">Group financial position (P m): five-year trend</h3>
<LineChart data={position} x=year y=pm series=line yFmt='"P"#,##0.0" m"' />
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">FY2021 points are provisional (later-comparative coverage only) and carry BSE's own placeholder basis; FY2022-FY2025 are governed, published audited figures.</p>
</div>

<div class="bse-card" style="margin-top:16px">
<h3 style="font-size:14px;font-weight:700;margin:0 0 10px">Financial position: FY{curYear} vs FY{priorYear}</h3>
<div class="table-container">
<table class="fin-table">
<tr><th>Metric</th><th>FY{curYear}</th><th>FY{priorYear}</th><th>Movement</th></tr>
<tr><td>Total assets</td><td>{fmtM2(fm('financial.total_assets').cur)}</td><td>{fmtM2(fm('financial.total_assets').prior)}</td><td class="up">{fmtDelta2(pctf(fm('financial.total_assets').cur, fm('financial.total_assets').prior))}</td></tr>
<tr><td>Total equity</td><td>{fmtM2(fm('financial.total_equity').cur)}</td><td>{fmtM2(fm('financial.total_equity').prior)}</td><td class="up">{fmtDelta2(pctf(fm('financial.total_equity').cur, fm('financial.total_equity').prior))}</td></tr>
<tr><td>Total liabilities</td><td>{fmtM2(fm('financial.total_liabilities').cur)}</td><td>{fmtM2(fm('financial.total_liabilities').prior)}</td><td class="up">{fmtDelta2(pctf(fm('financial.total_liabilities').cur, fm('financial.total_liabilities').prior))}</td></tr>
<tr><td>Cash and cash equivalents</td><td>{fmtM2(fm('financial.cash_resources').cur)}</td><td>{fmtM2(fm('financial.cash_resources').prior)}</td><td class="up">{fmtDelta2(pctf(fm('financial.cash_resources').cur, fm('financial.cash_resources').prior))}</td></tr>
<tr><td>Financial assets at amortised cost</td>{#if curYear === 2025}<td>P125.0m</td><td>P131.4m</td><td class="dn">−4.9%</td>{:else}<td colspan="3"><span class="bse-badge bse-badge-una">Unavailable for FY{curYear}</span></td>{/if}</tr>
<tr><td>Trade and other receivables</td>{#if curYear === 2025}<td>P26.5m</td><td>P22.2m</td><td class="up">+19.5%</td>{:else}<td colspan="3"><span class="bse-badge bse-badge-una">Unavailable for FY{curYear}</span></td>{/if}</tr>
</table>
</div>
<p style="font-size:11px;color:var(--text-tertiary);margin-top:8px">{#if curYear === 2025}Statement of Financial Position, 2025 Integrated Report, p.142. A narrower "Trade and other receivables" figure appears separately in Note 28 (categories of financial instruments: P18.8m FY2025 / P16.6m FY2024). That is a different, financial-instrument-scoped population and is not used here; this table uses the full balance-sheet figures.{:else}Statement of Financial Position line items bound to the governed FY2018-FY2025 dataset; the amortised-cost and receivables breakdowns are only published for FY2025.{/if}</p>
</div>

<div class="three-col">
{#if curYear === 2025}
<div class="resolved-card">
<div style="font-size:12px;font-weight:700;margin-bottom:6px">Return on equity</div>
<span class="bse-badge bse-badge-ok">Resolved: R012</span>
<div style="display:flex;gap:16px;margin-top:10px">
<div><div style="font-size:12px;color:var(--text-tertiary)">Primary (avg. equity)</div><div style="font-size:18px;font-weight:700;color:var(--navy-1)">12.3%</div></div>
<div><div style="font-size:12px;color:var(--text-tertiary)">Supporting (closing equity)</div><div style="font-size:18px;font-weight:700;color:var(--text-secondary)">11.7%</div></div>
</div>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:8px">PAT ÷ average opening/closing equity reproduces the reported 12.3% and is the resolved primary basis (R012). The 11.7% closing-equity figure is retained only as labelled supporting evidence; the two bases are never blended.</p>
</div>
{:else}
<div class="withheld">
<div style="font-size:12px;font-weight:700;margin-bottom:6px">Return on equity</div>
<span class="bse-badge bse-badge-una">Unavailable for FY{curYear}</span>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:10px">ROE is only computed and governed for FY2025 (R012).</p>
</div>
{/if}
<div class="withheld">
<div style="font-size:12px;font-weight:700;margin-bottom:6px">Five-year financial history</div>
<span class="bse-badge bse-badge-una">FY2021 provisional · FY2022-FY2025 verified</span>
<p style="font-size:12px;color:var(--text-tertiary);margin-top:10px">FY2022-FY2025 audited observations are fully published, including a disclosed FY2023 operating-expenses restatement (P49.0m originally published → P50.5m per the 2024 Annual Report). FY2021 appears only from a later comparative and stays provisional with BSE's own placeholder basis. The FY2023 profit-after-tax sequence follows the same rule, original P26,433,048 and restated P24,938,848 remain linked (R014); see <a href="/bse-2025/data-quality">Data Notes</a>.</p>
</div>
<div class="callout-dark">
<h4>The cash caveat</h4>
<p>The cash-flow statement reports P152.3m as "cash and cash equivalents," but this includes financial assets. The balance sheet separates true cash (P27.3m) from financial assets (P125.0m); never read the combined figure as unrestricted bank cash. FY2022 closing cash resources is P112,722,445 (R023); the P112,722,304 variant is a disclosed, immaterial P141 source inconsistency.</p>
</div>
</div>

<div class="bse-card" style="margin-top:16px">
<h3 class="bse-secttl" style="font-size:13px;margin-bottom:8px">Related pages</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/10x-strategy">Strategy investment and revenue-index issue →</a>
<a class="bse-pill" href="/bse-2025/governance-risk">Outage/remediation cost context and assurance →</a>
<a class="bse-pill" href="/bse-2025/data-quality">ROE, cash definition and provisional history →</a>
</div>
</div>

<p class="src">Source: BSE audited consolidated financial statements FY2025 (Grant Thornton
unqualified opinion) and prior Annual Reports. Canonical release <code>bse_canonical_v1_0_2</code>,
database status approved (2026-09-08). Dashboard deployment and publication are governed separately.
<a class="bse-lnk" style="margin:0" href="/bse-2025/data-quality">Full reconciliation register →</a></p>
