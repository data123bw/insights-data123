---
title: 10X Strategy & Public Value
hide_title: true
sidebar_position: 5
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
.bse-pill.plain{color:var(--text-secondary);text-decoration:none;cursor:default}
.bse-badge{display:inline-block;font-size:11px;font-weight:700;padding:3px 9px;border-radius:6px;white-space:nowrap}
.bse-badge-ok{background:#E7F5EC;color:var(--positive)}
.bse-badge-una{background:var(--surface-muted);color:var(--text-tertiary)}
.bse-badge-rev{background:#FCEAEA;color:var(--danger)}
.up{color:var(--positive);font-weight:600}
.dn{color:var(--danger);font-weight:600}

/* Status mega-bar */
.status-hero{margin-top:8px}
.status-hero-top{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:10px;margin-bottom:14px}
.status-hero-top h2{font-size:16px;font-weight:800;margin:0;color:var(--navy-1)}
.mega-bar{display:flex;height:46px;border-radius:10px;overflow:hidden}
.mega-seg{display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff;white-space:nowrap;padding:0 4px}
.mega-legend{display:flex;justify-content:space-between;margin-top:10px;font-size:12.5px;color:var(--text-secondary);flex-wrap:wrap;gap:8px}
.mega-legend b{color:var(--text-secondary)}

/* Pillar stacked-card carousel */
.pillar-carousel{position:relative;margin-top:20px}
.pillar-radio{position:absolute;opacity:0;pointer-events:none}
.pillar-dots{display:flex;justify-content:center;gap:8px;margin-bottom:14px}
.pdot{width:30px;height:30px;border-radius:50%;background:var(--surface-muted);color:var(--text-tertiary);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s ease}
.pillar-stack{position:relative;height:440px}
@media(max-width:640px){.pillar-stack{height:520px}}
.pillar-card{position:absolute;top:0;left:50%;width:min(560px,92vw);background:#fff;border:1px solid var(--border);border-radius:16px;padding:20px 22px;box-shadow:0 12px 28px rgba(16,24,40,.10);cursor:default;transition:transform .35s cubic-bezier(.22,.9,.32,1),opacity .35s ease,box-shadow .35s ease;overflow-y:auto;max-height:440px}
@media(max-width:640px){.pillar-card{max-height:520px}}
.pillar-tag{display:inline-block;background:var(--navy-2);color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:3px 10px;border-radius:999px;margin-bottom:8px}
.pillar-card h3{font-size:16px;font-weight:800;margin:0 0 6px;color:var(--navy-1)}
.pillar-aspiration{font-size:12px;color:var(--text-tertiary);line-height:1.5;margin:0 0 8px}
.pillar-kpis{font-size:11px;color:var(--navy-2);font-weight:600;margin:0 0 12px;padding-bottom:10px;border-bottom:1px dashed var(--border)}
.commit-row{display:flex;gap:8px;font-size:12.5px;color:var(--text-secondary);margin-bottom:11px;line-height:1.45}
.commit-row .dot{width:9px;height:9px;border-radius:50%;flex:none;margin-top:5px}
.dot.ach{background:var(--positive)}
.dot.prog{background:var(--warning)}
.dot.def{background:var(--danger)}
.commit-text{display:block;font-weight:600;color:var(--text-secondary)}
.commit-evidence{display:block;font-size:11px;color:var(--text-tertiary);margin-top:2px}
.pillar-arrow{position:absolute;top:50%;margin-top:-19px;width:38px;height:38px;border-radius:50%;background:#fff;border:1px solid var(--border);box-shadow:0 4px 10px rgba(16,24,40,.14);display:none;align-items:center;justify-content:center;font-size:17px;color:var(--navy-1);cursor:pointer;z-index:6;transition:background .15s ease}
.pillar-arrow:hover{background:var(--blue-4)}
.pillar-arrow.prev{left:6px}
.pillar-arrow.next{right:6px}
@media(max-width:640px){.pillar-arrow{width:32px;height:32px;font-size:14px;margin-top:-16px}.pillar-arrow.prev{left:0}.pillar-arrow.next{right:0}}

/* cards: default = collapsed far ahead, overridden below per active radio */
.pillar-card{transform:translateX(calc(-50% + 170px)) scale(.78);opacity:0;z-index:1;pointer-events:none}

/* active card (offset 0) */
#pillar-r1:checked ~ .pillar-stack .pillar-card-1,
#pillar-r2:checked ~ .pillar-stack .pillar-card-2,
#pillar-r3:checked ~ .pillar-stack .pillar-card-3,
#pillar-r4:checked ~ .pillar-stack .pillar-card-4,
#pillar-r5:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(-50%) scale(1);opacity:1;z-index:5;pointer-events:auto;box-shadow:0 18px 36px rgba(16,24,40,.16)}

/* next card, offset +1 (peeking right, clickable) */
#pillar-r1:checked ~ .pillar-stack .pillar-card-2,
#pillar-r2:checked ~ .pillar-stack .pillar-card-3,
#pillar-r3:checked ~ .pillar-stack .pillar-card-4,
#pillar-r4:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(calc(-50% + 78px)) scale(.93);opacity:.92;z-index:4;pointer-events:auto;cursor:pointer}
@media(max-width:640px){
#pillar-r1:checked ~ .pillar-stack .pillar-card-2,
#pillar-r2:checked ~ .pillar-stack .pillar-card-3,
#pillar-r3:checked ~ .pillar-stack .pillar-card-4,
#pillar-r4:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(calc(-50% + 34px)) scale(.93)}
}

/* offset +2 (further peek) */
#pillar-r1:checked ~ .pillar-stack .pillar-card-3,
#pillar-r2:checked ~ .pillar-stack .pillar-card-4,
#pillar-r3:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(calc(-50% + 130px)) scale(.86);opacity:.55;z-index:3;pointer-events:none}

/* offset +3 */
#pillar-r1:checked ~ .pillar-stack .pillar-card-4,
#pillar-r2:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(calc(-50% + 165px)) scale(.8);opacity:.2;z-index:2;pointer-events:none}

/* offset +4 */
#pillar-r1:checked ~ .pillar-stack .pillar-card-5
{transform:translateX(calc(-50% + 185px)) scale(.76);opacity:0;z-index:1;pointer-events:none}

/* previous card, offset -1 (peeking left, clickable) */
#pillar-r2:checked ~ .pillar-stack .pillar-card-1,
#pillar-r3:checked ~ .pillar-stack .pillar-card-2,
#pillar-r4:checked ~ .pillar-stack .pillar-card-3,
#pillar-r5:checked ~ .pillar-stack .pillar-card-4
{transform:translateX(calc(-50% - 78px)) scale(.93);opacity:.92;z-index:4;pointer-events:auto;cursor:pointer}
@media(max-width:640px){
#pillar-r2:checked ~ .pillar-stack .pillar-card-1,
#pillar-r3:checked ~ .pillar-stack .pillar-card-2,
#pillar-r4:checked ~ .pillar-stack .pillar-card-3,
#pillar-r5:checked ~ .pillar-stack .pillar-card-4
{transform:translateX(calc(-50% - 34px)) scale(.93)}
}

/* offset -2 */
#pillar-r3:checked ~ .pillar-stack .pillar-card-1,
#pillar-r4:checked ~ .pillar-stack .pillar-card-2,
#pillar-r5:checked ~ .pillar-stack .pillar-card-3
{transform:translateX(calc(-50% - 130px)) scale(.86);opacity:.55;z-index:3;pointer-events:none}

/* offset -3 */
#pillar-r4:checked ~ .pillar-stack .pillar-card-1,
#pillar-r5:checked ~ .pillar-stack .pillar-card-2
{transform:translateX(calc(-50% - 165px)) scale(.8);opacity:.2;z-index:2;pointer-events:none}

/* offset -4 */
#pillar-r5:checked ~ .pillar-stack .pillar-card-1
{transform:translateX(calc(-50% - 185px)) scale(.76);opacity:0;z-index:1;pointer-events:none}

/* prev/next arrow buttons, shown only for the direction that has a valid target */
#pillar-r1:checked ~ .pillar-arrow-next-1,
#pillar-r2:checked ~ .pillar-arrow-prev-2,
#pillar-r2:checked ~ .pillar-arrow-next-2,
#pillar-r3:checked ~ .pillar-arrow-prev-3,
#pillar-r3:checked ~ .pillar-arrow-next-3,
#pillar-r4:checked ~ .pillar-arrow-prev-4,
#pillar-r4:checked ~ .pillar-arrow-next-4,
#pillar-r5:checked ~ .pillar-arrow-prev-5
{display:flex}

/* active dot indicator */
#pillar-r1:checked ~ .pillar-dots label[for="pillar-r1"],
#pillar-r2:checked ~ .pillar-dots label[for="pillar-r2"],
#pillar-r3:checked ~ .pillar-dots label[for="pillar-r3"],
#pillar-r4:checked ~ .pillar-dots label[for="pillar-r4"],
#pillar-r5:checked ~ .pillar-dots label[for="pillar-r5"]
{background:var(--navy-1);color:#fff;border-color:var(--navy-1)}

/* Scorecard */
.fin-table{width:100%;border-collapse:collapse;font-size:13px}
.fin-table th{text-align:right;font-weight:600;color:var(--text-tertiary);font-size:11px;padding:8px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.fin-table th:first-child,.fin-table td:first-child{text-align:left}
.fin-table td{text-align:right;padding:8px;border-bottom:1px solid var(--border);font-variant-numeric:tabular-nums}
.fin-table tr:last-child td{border-bottom:none}
.fin-table .kpi-recon{display:block;font-size:10px;color:var(--text-tertiary);font-weight:400;margin-top:2px}

.callout-dark{background:linear-gradient(135deg,var(--navy-1),var(--navy-2));color:#fff;border-radius:14px;padding:18px}
.callout-dark h4{margin:0 0 8px;font-size:13.5px}
.callout-dark ul{margin:0;padding-left:18px;font-size:12px;color:#C7D3EE;line-height:1.7}

/* Public value ladder */
.ladder{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:16px}
@media(max-width:1000px){.ladder{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.ladder{grid-template-columns:1fr}}
.ladder-card{border-radius:14px;padding:16px;background:#fff;border:1px solid var(--border)}
.ladder-card.delivered{border-left:4px solid var(--positive)}
.ladder-card.foundation{border-left:4px solid var(--warning)}
.ladder-card.gap{border-left:4px dashed var(--danger)}
.ladder-card.future{border-left:4px dashed var(--slate)}
.ladder-card h4{font-size:12.5px;font-weight:800;margin:0 0 10px}
.ladder-card ul{margin:0;padding-left:16px;font-size:11.5px;color:var(--text-secondary);line-height:1.7}
.ladder-card .lstat{color:var(--text-tertiary);font-size:10px}

/* Horizons */
.horizon-track{position:relative;height:110px;margin-top:16px}
.h-axis{position:absolute;left:0;right:0;top:96px;height:1px;background:var(--border)}
.h-bar{position:absolute;height:20px;border-radius:10px;display:flex;align-items:center;padding:0 10px;font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
.h-label{position:absolute;top:-18px;font-size:10.5px;color:var(--text-tertiary)}
.horizon-detail{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}
@media(max-width:900px){.horizon-detail{grid-template-columns:1fr}}
.horizon-col h5{font-size:12px;font-weight:700;margin:0 0 8px;color:var(--navy-1)}
.horizon-item{font-size:11px;color:var(--text-secondary);margin-bottom:7px;line-height:1.4}
.horizon-item .htype{display:inline-block;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;color:var(--text-tertiary);margin-right:4px}
.horizon-item .htarget{color:var(--navy-2);font-weight:600}

/* Forward commitments */
.fwd-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}

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
<span class="pill">Scope · BSE self-assessment</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<script>
  const curYear = inputs.period.value === 'FY2024' ? 2024 : 2025;
</script>

<div class="bse-hero">
<div class="bse-hero-top">
<div style="display:flex;align-items:center;gap:14px">
<a class="bse-back" href="/bse-2025/overview" aria-label="Back to Overview">←</a>
<div>
<h1>10X by 2030: BSE's Growth Strategy</h1>
<p class="sub-line">A long-term plan to modernise the Exchange, broaden its products and reach,
strengthen its people and technology, and increase its contribution to Botswana's capital
markets.</p>
</div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="bse-hero-pill">Strategy approved 2025</span>
<span class="bse-hero-pill dim">Baseline year FY2025</span>
<span class="bse-hero-pill dim">Scope: BSE self-assessment · Verified 8 Sep 2026</span>
</div>
</div>
</div>

<div class="bse-tabs">
<a href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a class="on" href="/bse-2025/10x-strategy">Strategy</a>
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="The 10X Strategy & Public Value page" reason="The 10X strategy launched in June 2025. There is no FY2024 (or earlier) 10X data because the strategy did not exist yet - this is a fact about when the programme began, not a data gap to backfill."/>
{:else}

## Commitment status: BSE self-assessment

```sql status_counts
select reported_status as status,
  count(*) as n,
  round(100.0 * count(*) / sum(count(*)) over (), 1) as pct,
  case reported_status when 'Achieved' then 1 when 'In progress' then 2 when 'Deferred' then 3 else 4 end as sort_order,
  case reported_status when 'Achieved' then '#16a34a' when 'In progress' then '#C2410C' when 'Deferred' then '#dc2626' else '#5B6B82' end as color
from bse.strategy_commitments
where commitment_year = 2025
group by reported_status
order by sort_order
```

<div class="bse-card status-hero">
<div class="status-hero-top">
<h2>15 self-reported 2025 commitments</h2>
<span class="bse-badge bse-badge-una">BSE self-assessment · no weighted score calculated</span>
</div>
{#if status_counts.ready}
<div class="mega-bar">
{#each status_counts as row}
  <div class="mega-seg" style="background:{row.color};flex:{row.n}">{row.n} {row.status}</div>
{/each}
</div>
<div class="mega-legend">
{#each status_counts as row}
  <span>{row.status}: <b>{row.pct}%</b></span>
{/each}
</div>
{/if}
<p style="font-size:12px;color:var(--text-tertiary);margin-top:10px">No single weighted "strategy
score" exists; the report provides no basis for weighting commitments. Most completed items
established foundations. Market availability above 99% and a planned sustainable-bond listing
were deferred. Completing an activity is not the same as achieving a long-term outcome.</p>
</div>

## Five pillars &amp; 2025 commitments by pillar

```sql pillars
select name as pillar, definition, lead_kpis from bse.strategy_pillars order by pillar_id
```

```sql commit
select pillar, commitment_text as commitment, reported_status as status, outcome_commentary as evidence,
  case reported_status when 'Achieved' then 'ach' when 'In progress' then 'prog' when 'Deferred' then 'def' else 'una' end as dot_class
from bse.strategy_commitments where commitment_year = 2025 order by commitment_id
```

{#if pillars.ready && commit.ready}
<div class="pillar-carousel">
{#each pillars as p, i}
<input type="radio" name="pillarnav" id="pillar-r{i+1}" class="pillar-radio" checked={i === 0} />
{/each}

<div class="pillar-dots">
{#each pillars as p, i}
<label for="pillar-r{i+1}" class="pdot" title="{p.pillar}">{i+1}</label>
{/each}
</div>

<div class="pillar-stack">
{#each pillars as p, i}
<label for="pillar-r{i+1}" class="pillar-card pillar-card-{i+1}">
  <span class="pillar-tag">Pillar {i+1} of {pillars.length}</span>
  <h3>{p.pillar}</h3>
  <p class="pillar-aspiration">{p.definition}</p>
  <p class="pillar-kpis">Lead KPIs: {p.lead_kpis}</p>
  {#each commit.filter(c => c.pillar === p.pillar) as c}
    <div class="commit-row">
      <span class="dot {c.dot_class}"></span>
      <span>
        <span class="commit-text">{c.commitment}</span>
        <span class="commit-evidence">{c.status}: {c.evidence}</span>
      </span>
    </div>
  {/each}
</label>
{/each}
</div>

{#each pillars as p, i}
{#if i > 0}<label for="pillar-r{i}" class="pillar-arrow prev pillar-arrow-prev-{i+1}" aria-label="Previous: {pillars[i-1].pillar}" title="Previous: {pillars[i-1].pillar}">‹</label>{/if}
{#if i < pillars.length - 1}<label for="pillar-r{i+2}" class="pillar-arrow next pillar-arrow-next-{i+1}" aria-label="Next: {pillars[i+1].pillar}" title="Next: {pillars[i+1].pillar}">›</label>{/if}
{/each}
</div>
{/if}

Two deferrals: **maintain market availability above 99%** (October outage) and
**admit a sustainable bond** (high interest-rate environment).

## Formal 10X scorecard

```sql scorecard
select kpi, unit_scale as unit, baseline_2024, current_2025, target_2027, target_2030, treatment, reconciliation_ids,
  case treatment
    when 'DISPLAY' then 'Display'
    when 'UNDER RECONCILIATION' then 'Reconcile'
    when 'DISPLAY WITH DEFINITION' then 'Define/display'
    when 'DISPLAY AS THRESHOLD' then 'Threshold'
    when 'DISPLAY AS QUALITATIVE' then 'Qualitative'
    else treatment
  end as treatment_label,
  case treatment
    when 'UNDER RECONCILIATION' then 'rev'
    when 'DISPLAY' then 'ok'
    else 'una'
  end as treatment_class
from bse.strategy_scorecard order by scorecard_id
```

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:14px;margin-bottom:2px">A table, not eight gauges</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0 0 12px">Units and scales are
incompatible across KPIs, so this is shown as one table, not a dashboard of gauges.</p>
<div class="table-container">
{#if scorecard.ready}
<table class="fin-table">
<tr><th>KPI</th><th>2024</th><th>2025</th><th>2027</th><th>2030</th><th>Treatment</th></tr>
{#each scorecard as row}
<tr>
  <td>{row.kpi}{#if row.reconciliation_ids}<span class="kpi-recon">Reconciliation: {row.reconciliation_ids}</span>{/if}</td>
  <td>{row.baseline_2024}</td>
  <td>{row.current_2025}</td>
  <td>{row.target_2027}</td>
  <td>{row.target_2030}</td>
  <td><span class="bse-badge bse-badge-{row.treatment_class}">{row.treatment_label}</span></td>
</tr>
{/each}
</table>
{/if}
</div>
</div>

<div class="callout-dark" style="margin-top:16px">
<h4>Scorecard caveats</h4>
<ul>
<li><b>Revenue index:</b> 2025 shown as 85, while audited revenue grew 17.1%; a direct 2024=100
index would read ~117. Never combined with audited Group revenue (R010).</li>
<li><b>Retail share:</b> 15.1% conflicts with 4.5% in supplementary statistics (R005), so it is
withheld from ordinary KPI/trend views and retained only in this scorecard context.</li>
<li><b>Turnover ratio:</b> 8.5% conflicts with 9.9% (R003), same treatment as retail share.</li>
<li><b>2030 liquidity target:</b> formal scorecard says 10%, horizon graphic says 25% (R011);
both labels are preserved, not merged.</li>
</ul>
</div>

## Public value: delivered outputs, foundations, and intended outcomes

```sql pv
select evidence_level, measure_label as measure, coalesce(reported_text, cast(numeric_floor as varchar)) as reported, status,
  case evidence_level
    when 'Delivered output' then 1
    when 'Foundation' then 2
    when 'Gap' then 3
    when 'Intended future outcome' then 4
    else 5
  end as sort_order
from bse.strategy_public_value order by sort_order, public_value_id
```

{#if pv.ready}
<div class="ladder">
<div class="ladder-card delivered">
<h4>Delivered outputs</h4>
<ul>
{#each pv.filter(r => r.evidence_level === 'Delivered output') as row}
<li>{row.measure}: <b>{row.reported}</b></li>
{/each}
</ul>
</div>
<div class="ladder-card foundation">
<h4>Foundations established</h4>
<ul>
{#each pv.filter(r => r.evidence_level === 'Foundation') as row}
<li>{row.measure}: <b>{row.reported}</b> <span class="lstat">({row.status})</span></li>
{/each}
</ul>
</div>
<div class="ladder-card gap">
<h4>Gaps: not yet reported</h4>
<ul>
{#each pv.filter(r => r.evidence_level === 'Gap') as row}
<li>{row.measure}: <b>{row.reported}</b> <span class="lstat">({row.status})</span></li>
{/each}
</ul>
</div>
<div class="ladder-card future">
<h4>Intended future outcomes</h4>
<ul>
{#each pv.filter(r => r.evidence_level === 'Intended future outcome') as row}
<li>{row.measure}: <b>{row.reported}</b></li>
{/each}
</ul>
</div>
</div>
{/if}

Lower-bound values (`10+`, `169+`) keep both the numeric floor and the reported text. Future
outcomes are **not** counted as FY2025 achievements. The two "Gap" items above are real,
governed data points the source report does not yet resolve; they are shown here rather than dropped.

## Execution horizons

```sql horizons
select horizon, item_type, action_indicator as item, coalesce(cast(numeric_target as varchar), target_text) as target
from bse.execution_horizons order by horizon_item_id
```

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:14px;margin-bottom:2px">Overlapping by design</h3>
<p style="font-size:12px;color:var(--text-tertiary);margin:0">Not strictly sequential phases:
positions below are illustrative sequencing only, not calendar-accurate. The source data has no
start/end date for any horizon, only a name, an ordered set of actions, and success indicators.</p>
<div class="horizon-track">
<div class="h-label" style="left:2%">2025</div>
<div class="h-label" style="left:96%">2030</div>
<div class="h-bar" style="left:2%;width:34%;top:10px;background:var(--navy-1)">Horizon 1 · Build the foundation</div>
<div class="h-bar" style="left:24%;width:26%;top:38px;background:var(--blue-1)">Horizon 2 · Secure funding &amp; partnerships</div>
<div class="h-bar" style="left:34%;width:64%;top:66px;background:var(--blue-2)">Horizon 3 · Launch products &amp; scale</div>
<div class="h-axis"></div>
</div>
{#if horizons.ready}
<div class="horizon-detail">
<div class="horizon-col">
<h5>Horizon 1 · Build the foundation</h5>
{#each horizons.filter(h => h.horizon === 'Horizon 1') as row}
<div class="horizon-item"><span class="htype">{row.item_type}</span>{row.item}{#if row.target}: <span class="htarget">{row.target}</span>{/if}</div>
{/each}
</div>
<div class="horizon-col">
<h5>Horizon 2 · Secure funding &amp; partnerships</h5>
{#each horizons.filter(h => h.horizon === 'Horizon 2') as row}
<div class="horizon-item"><span class="htype">{row.item_type}</span>{row.item}{#if row.target}: <span class="htarget">{row.target}</span>{/if}</div>
{/each}
</div>
<div class="horizon-col">
<h5>Horizon 3 · Launch products &amp; scale</h5>
{#each horizons.filter(h => h.horizon === 'Horizon 3') as row}
<div class="horizon-item"><span class="htype">{row.item_type}</span>{row.item}{#if row.target}: <span class="htarget">{row.target}</span>{/if}</div>
{/each}
</div>
</div>
{/if}
</div>

## 2026 forward commitments

```sql fwd
select commitment_id as id, pillar, commitment_text as commitment, kpi_to_report as kpi
from bse.commitments_2026 order by commitment_id
```

<div class="bse-card" style="border:1.5px dashed #B7BFCE">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
<h3 class="bse-secttl" style="margin-bottom:0;font-size:14px">2026 forward-looking commitments</h3>
<span class="bse-badge bse-badge-una">Management expectations, not FY2025 results</span>
</div>
{#if fwd.ready}
<div class="fwd-pills">
{#each fwd as row}
<span class="bse-pill plain" title="{row.commitment}">{row.kpi}</span>
{/each}
</div>
{/if}
<p style="font-size:11px;color:var(--text-tertiary);margin-top:12px">All 14 commitments below,
with pillar and full commitment text (pill labels above are the KPI to be reported, shortened
for display).</p>
<div class="table-container">
<DataTable data={fwd} rows=14>
  <Column id=id title="ID" />
  <Column id=pillar title="Pillar" />
  <Column id=commitment title="2026 commitment" wrap=true />
  <Column id=kpi title="KPI to be reported" wrap=true />
</DataTable>
</div>
</div>

## Related pages

<div class="bse-card">
<h3 class="bse-secttl" style="font-size:13px;margin-bottom:8px">Related pages</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/market-performance">Underlying market performance →</a>
<a class="bse-pill" href="/bse-2025/securities-participation">Underlying participation evidence →</a>
<a class="bse-pill" href="/bse-2025/group-financials">Underlying financial outcomes →</a>
<a class="bse-pill" href="/bse-2025/governance-risk">Technology/outage and governance oversight →</a>
<a class="bse-pill" href="/bse-2025/data-quality">Disputed scorecard values →</a>
</div>
</div>

<p class="src"><span class="a2v" style="display:inline-block;max-width:100%;white-space:normal;overflow-wrap:break-word;line-height:1.35;background:#DCFCE7;border:1px solid #16A34A;color:#166534;font-size:11px;font-weight:700;letter-spacing:.06em;padding:3px 10px;border-radius:6px">GATE A2 EVIDENCE VERIFIED: CORE DATA RELEASE APPROVED</span>
Source: BSE Integrated Report 2025, batch-05 structured extraction (`bse_disc_*`). GATE A2
evidence review completed 2026-09-07 (186 rows verified, 13 <code>NOT_APPLICABLE</code>, 0
findings); <code>bse_disc_release.status</code> = <code>A2_VERIFIED</code>
(<i>historical: formerly <code>VISUAL_FIRST_PASS</code></i>). The disclosure layer was not given
a separate production approval beyond GATE A2. Numeric governed model:
<code>bse_canonical_v1_0_2</code>, database release approved 2026-09-08. Dashboard deployment
and publication are governed separately (GATE B, Phase 10-11).
<a class="bse-lnk" style="margin:0" href="/bse-2025/data-quality">Full reconciliation register →</a></p>
{/if}
