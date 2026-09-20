---
title: Governance, Risk & Resilience
hide_title: true
sidebar_position: 6
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
.bse-badge-hi{background:#FCEAEA;color:var(--danger)}
.bse-badge-med{background:#FBF1E1;color:var(--warning)}
.up{color:var(--positive);font-weight:600}
.dn{color:var(--danger);font-weight:600}
.a2v{display:inline-block;max-width:100%;white-space:normal;overflow-wrap:break-word;line-height:1.35;background:#DCFCE7;border:1px solid #16A34A;color:#166534;font-size:11px;font-weight:700;letter-spacing:.06em;padding:3px 10px;border-radius:6px}
@media(max-width:639px){.a2v{display:block;font-size:10px;letter-spacing:.02em;padding:4px 8px}}

/* ---- Incident hero timeline ---- */
.incident{background:linear-gradient(135deg,var(--navy-1),#3a1414 140%);color:#fff;border-radius:16px;padding:22px 24px;margin-top:16px}
.incident-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px}
.incident-top h2{font-size:16px;font-weight:800;margin:0}
.incident-tag{background:rgba(220,38,38,0.25);border:1px solid rgba(220,38,38,0.5);color:#FCA5A5;font-size:11px;font-weight:700;padding:4px 10px;border-radius:6px}
.itl{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative}
.itl::before{content:"";position:absolute;top:15px;left:6%;right:6%;height:2px;background:rgba(255,255,255,0.25)}
.itl-step{text-align:center;position:relative;padding:0 8px}
.itl-dot{width:14px;height:14px;border-radius:50%;margin:0 auto 10px;position:relative;z-index:1;border:3px solid var(--navy-1)}
.itl-step h5{font-size:12.5px;margin:0 0 4px;color:#fff}
.itl-step p{font-size:11px;color:#C7D3EE;margin:0;line-height:1.5}
.incident-foot{font-size:12px;color:#C7D3EE;margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.15)}

/* ---- Stat strip ---- */
.stat-strip{display:flex;background:#fff;border:1px solid var(--border);border-radius:14px;margin-top:16px;overflow:hidden}
.stat-strip div{flex:1;padding:16px;text-align:center;border-left:1px solid var(--border)}
.stat-strip div:first-child{border-left:none}
.stat-strip .s-num{font-size:22px;font-weight:800;color:var(--navy-1)}
.stat-strip .s-lbl{font-size:11.5px;color:var(--text-tertiary);margin-top:3px}

/* ---- Two-col compare ---- */
.compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
.compare .bse-card{padding:16px}
.compare .bse-card.bad{border-left:4px solid var(--danger)}
.compare .bse-card.good{border-left:4px solid var(--positive)}
.compare ul{margin:0;padding-left:16px;font-size:12.5px;color:var(--text-secondary);line-height:1.8}

/* ---- Remediation tracker ---- */
.tracker-row{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);font-size:12.5px;gap:10px}
.tracker-row:last-child{border-bottom:none}

/* ---- Risk table ---- */
.risk-table{width:100%;border-collapse:collapse;font-size:13px;margin-top:4px}
.risk-table th{text-align:left;font-weight:600;color:var(--text-tertiary);font-size:11px;padding:10px 10px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.risk-table th:first-child{border-top-left-radius:8px}
.risk-table th:last-child{border-top-right-radius:8px}
.risk-table td{padding:12px 10px;border-bottom:1px solid var(--border);vertical-align:middle;color:var(--text-secondary)}
.risk-table tr:last-child td{border-bottom:none}
.risk-table tr.risk-row td:first-child{font-weight:600;color:#101828;padding-left:14px}
.risk-table tr.risk-row:hover td{background:var(--surface-muted)}

/* ---- Donuts ---- */
.donut{width:110px;height:110px;border-radius:50%;margin:0 auto 12px;position:relative}
.donut::after{content:"";position:absolute;inset:20px;background:#fff;border-radius:50%}
.dleg{font-size:11px;color:var(--text-secondary);display:flex;flex-direction:column;gap:5px}
.dleg span{display:flex;align-items:center;gap:6px}
.sw{width:10px;height:10px;border-radius:2px;display:inline-block;flex:none}

/* ---- Assurance steps ---- */
.assure{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.assure-step{flex:1;min-width:110px;background:var(--surface-muted);border-radius:10px;padding:12px;text-align:center;font-size:11.5px;color:var(--text-secondary);position:relative}
.assure-step:not(:last-child)::after{content:"→";position:absolute;right:-14px;top:50%;transform:translateY(-50%);color:var(--text-tertiary)}
.assure-step.ext{background:#E7F5EC}
.assure-step.self{background:#FBF1E1}

.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
@media (max-width:900px){.compare{grid-template-columns:1fr}.two-col{grid-template-columns:1fr}.itl{grid-template-columns:repeat(2,1fr);row-gap:20px}.itl::before{display:none}}

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
<div class="title">Botswana Stock Exchange — public dashboard</div>
<div class="sub">Integrated Report FY2025 · governed data, evidence-linked</div>
</div>
</div>
<div class="pills">
<PeriodSelector/>
<span class="pill">Scope · BSE/CSDB Board</span>
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
<h1>BSE Governance, Risk &amp; Resilience</h1>
<p class="sub-line">Board oversight, principal risks and the October 2025 trading outage</p>
</div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="bse-hero-pill">FY2025 · during-year composition</span>
<span class="bse-hero-pill dim">Scope: BSE/CSDB Board</span>
<span class="bse-hero-pill dim">Verified 8 Sep 2026</span>
</div>
</div>
</div>

<div class="bse-tabs">
<a href="/bse-2025/overview">Overview</a>
<a href="/bse-2025/market-performance">Market</a>
<a href="/bse-2025/securities-participation">Securities</a>
<a href="/bse-2025/group-financials">Financials</a>
<a href="/bse-2025/10x-strategy">Strategy</a>
<a class="on" href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a href="/bse-2025/data-quality">Data Notes</a>
</div>

{#if curYear !== 2025}
<PeriodNotApplicable period={"FY" + curYear} pageName="The Governance, Risk & Resilience page" reason="Governance disclosures (principal risks, board committees, the outage timeline, assurance, remediation) were never extracted for prior years and carry no year column at all in the governed dataset."/>
{:else}

## October 2025 outage

```sql outage_timeline
select
  case when event_seq=1 then 1 when event_seq in (2,3) then 2 when event_seq=4 then 3 else 4 end as step,
  case when event_seq=1 then 'Failure' when event_seq in (2,3) then 'Continuity response' when event_seq=4 then 'Restoration' else 'Remediation' end as label,
  case when event_seq=1 then '#dc2626' when event_seq in (2,3) then '#C2410C' when event_seq=4 then '#C19A2D' else '#16a34a' end as dot_color,
  string_agg(report_text, ' · ' order by event_seq) as detail
from bse.governance_outage
group by 1,2,3
order by 1
```

<div class="incident">
<div class="incident-top">
<h2>Material event — 21 October 2025 trading outage</h2>
<span class="incident-tag">Four trading days lost</span>
</div>
{#if outage_timeline.ready}
<div class="itl">
{#each outage_timeline as step}
<div class="itl-step">
<div class="itl-dot" style="background:{step.dot_color}"></div>
<h5>{step.label}</h5>
<p>{step.detail}</p>
</div>
{/each}
</div>
{/if}
<div class="incident-foot">Not disclosed: exact availability, timestamps, affected trades/users, revenue loss, remediation cost, independent-review findings. Remediation is not proof the resilience problem is already solved.</div>
</div>

```sql outage
select event_seq as step, phase, event, report_text as detail, evidence_class
from bse.governance_outage order by event_seq
```
<details>
<summary class="bse-lnk" style="cursor:pointer">Full outage evidence log (all 7 rows) →</summary>
<DataTable data={outage} rows=7>
  <Column id=phase title="Date / phase" />
  <Column id=event title="Event" />
  <Column id=detail title="What the report says" wrap=true />
  <Column id=evidence_class title="Evidence class" />
</DataTable>
</details>

## What failed vs. what happened afterwards

<div class="compare">
<div class="bse-card bad">
<h4 style="margin:0 0 8px;font-size:13.5px">What failed</h4>
<ul>
<li>Network firewall (outage cause)</li>
<li>Legacy technology architecture — component and network-architecture dependence (PR1 drivers)</li>
<li>Disaster-recovery readiness — DR testing gaps (PR1/PR5 drivers)</li>
</ul>
</div>
<div class="bse-card good">
<h4 style="margin:0 0 8px;font-size:13.5px">What happened afterwards</h4>
<ul>
<li>Emergency firewall migration (REM01, completed)</li>
<li>Independent review commissioned (REM08)</li>
<li>Board-level resilience oversight established</li>
<li>Active-active disaster-recovery programme underway (REM04, in progress)</li>
</ul>
</div>
</div>
<p class="sub" style="font-size:12px;color:var(--text-tertiary);margin-top:8px">Both lists are drawn directly from the governed outage cause, the PR1/PR5 principal-risk driver text, and the remediation-tracker action text below — not a separate disclosure.</p>

## At a glance

```sql stat_strip
select
  (select count(*) from bse.governance_board where board_name='BSE') as board_members,
  (select count(*) from bse.governance_board where board_name='BSE' and classification='Executive Director') as executive_directors,
  (select count(*) from bse.governance_board where board_name='BSE' and classification in ('Independent NED','NED')) as total_neds,
  (select count(*) from bse.governance_board where board_name='BSE' and classification='Independent NED') as independent_neds,
  (select round(100.0*sum(meetings_attended)/sum(meetings_possible),1) from bse.governance_board where board_name='BSE') as attendance_rate,
  (select count(*) from bse.governance_risks where risk_type='principal') as principal_risks,
  (select count(*) from bse.governance_risks where risk_type='principal' and residual_rating='High') as high_risks,
  (select count(*) from bse.governance_risks where risk_type='principal' and residual_rating='Medium') as medium_risks
```

{#if stat_strip.ready}
<div class="stat-strip">
<div><div class="s-num">{stat_strip[0].board_members}</div><div class="s-lbl">Board members · {stat_strip[0].total_neds} NED, {stat_strip[0].executive_directors} ED</div></div>
<div><div class="s-num">{stat_strip[0].independent_neds} of {stat_strip[0].total_neds}</div><div class="s-lbl">Non-Executive Directors independent</div></div>
<div><div class="s-num">{stat_strip[0].attendance_rate}%*</div><div class="s-lbl">Attendance · dashboard-derived</div></div>
<div><div class="s-num">{stat_strip[0].principal_risks}</div><div class="s-lbl">Principal risks · {stat_strip[0].high_risks} high, {stat_strip[0].medium_risks} medium</div></div>
</div>
{/if}

"No low principal risks" among the seven **selected** risks does not mean the full Group register
contains none. Board composition changed during FY2025: Aobakwe Monyatsi was appointed on 12
March, Davies Tele resigned on 2 April, and Gregory Matsake was appointed on 7 July.

## Remediation tracker

```sql remediation
select action_id, action_text as action, status, disclosure, dashboard_caveat as caveat,
  case when status='Completed as reported' then 'bse-badge-ok'
       when status in ('In progress','Ongoing') then 'bse-badge-med'
       else 'bse-badge-una' end as badge_class,
  case when status='Completed as reported' then 'Completed'
       when status='Reported / unquantified' then 'Reported, not quantified'
       when status='Forward-looking' then 'Forward-looking · 2026'
       else status end as status_label
from bse.governance_remediation order by action_id
```

<div class="bse-card">
{#each remediation as r}
<div class="tracker-row"><span>{r.action}</span><span class="bse-badge {r.badge_class}">{r.status_label}</span></div>
{/each}
</div>

Remediation is not proof the resilience problem is solved.

## Principal &amp; emerging risks

```sql risks_principal
select risk_id, published_title as title, residual_rating as rating, direction_status as direction, reconciliation_ids,
  case residual_rating when 'High' then 'bse-badge-hi' when 'Medium' then 'bse-badge-med' else 'bse-badge-una' end as badge_class,
  case residual_rating when 'High' then '#dc2626' when 'Medium' then '#C2410C' else '#667085' end as risk_color
from bse.governance_risks where risk_type='principal' order by risk_id
```

<div class="bse-card">
<h3 style="font-size:14px;font-weight:800;margin:0 0 4px">Principal risks</h3>
<span class="sub" style="display:block;margin-bottom:10px;font-size:12px;color:var(--text-tertiary)">A table, not a reconstructed heat map — numeric coordinates aren't consistently disclosed</span>
<table class="risk-table">
<tr><th>Risk</th><th>Rating</th><th>Direction</th></tr>
{#each risks_principal as r}
<tr class="risk-row">
<td style="border-left:4px solid {r.risk_color}">{r.title}{#if r.reconciliation_ids} <span class="bse-badge bse-badge-una">{r.reconciliation_ids} — see notes</span>{/if}</td>
<td><span class="bse-badge {r.badge_class}">{r.rating}</span></td>
<td>{r.direction}</td>
</tr>
{/each}
</table>
</div>

```sql risks_emerging
select risk_id, published_title as title from bse.governance_risks where risk_type='emerging' order by risk_id
```

<div class="bse-card" style="margin-top:16px">
<h3 style="font-size:14px;font-weight:800;margin:0 0 10px">Emerging risks — monitoring, not scored</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
{#each risks_emerging as e}
<span class="bse-pill" style="cursor:default">{e.title}</span>
{/each}
</div>
</div>

```sql risks
select risk_id, risk_type, published_title as title, working_label, residual_rating, direction_status as direction, reconciliation_ids
from bse.governance_risks order by risk_type, risk_id
```
<details>
<summary class="bse-lnk" style="cursor:pointer">Full risk register (principal + emerging, all 14 rows, with working labels) →</summary>
<DataTable data={risks} rows=14 groupBy=risk_type>
  <Column id=risk_id title="ID" />
  <Column id=title title="Published title" wrap=true />
  <Column id=working_label title="Working label" wrap=true />
  <Column id=residual_rating title="Residual" />
  <Column id=direction title="Direction" />
</DataTable>
</details>

## Board composition, attendance &amp; fees

```sql board_composition
with c as (
  select classification,
    case classification when 'Independent NED' then 1 when 'NED' then 2 else 3 end as sort_order,
    case classification when 'Independent NED' then 'var(--navy-2)' when 'NED' then 'var(--blue-2)' else 'var(--blue-4)' end as color,
    count(*) as n
  from bse.governance_board
  where board_name='BSE' and classification is not null
  group by classification
),
cum as (
  select *,
    sum(n) over () as total,
    sum(n) over (order by sort_order rows between unbounded preceding and current row) as running,
    sum(n) over (order by sort_order rows between unbounded preceding and 1 preceding) as running_prev
  from c
)
select classification, color, n, sort_order,
  round(100.0*n/total,1) as pct,
  round(100.0*coalesce(running_prev,0)/total,1) as from_pct,
  round(100.0*running/total,1) as to_pct,
  string_agg(color || ' ' || round(100.0*coalesce(running_prev,0)/total,1) || '% ' || round(100.0*running/total,1) || '%', ', ') over (order by sort_order rows between unbounded preceding and unbounded following) as gradient
from cum
order by sort_order
```

```sql board
select board_name as board, member_name as name, role, classification,
  meetings_attended, meetings_possible, attendance_rate,
  sitting_fees_bwp, retainer_bwp
from bse.governance_board order by board_name, member_id
```

```sql committees_pills
select published_name from bse.governance_committees where where_used in ('Five-committee narrative','Both') order by committee_id
```

<div class="two-col">
<div class="bse-card">
<h3 style="font-size:13.5px;font-weight:800;margin:0 0 10px">Board composition (BSE)</h3>
{#if board_composition.ready}
<div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
<div>
<div class="donut" style="background:conic-gradient({board_composition[0].gradient})"></div>
</div>
<div class="dleg">
{#each board_composition as b}
<span><span class="sw" style="background:{b.color}"></span>{b.classification} — {b.n}</span>
{/each}
</div>
</div>
{/if}
<p class="sub" style="margin-top:12px;font-size:12px;color:var(--text-tertiary)">Aobakwe Monyatsi appointed CEO 12 Mar 2025 · Davies Tele resigned 2 Apr 2025 · Gregory Matsake appointed 7 Jul 2025 — composition varied during the year. CSDB has a separate 8-member board (see the full table below).</p>
</div>
<div class="bse-card">
<h3 style="font-size:13.5px;font-weight:800;margin:0 0 10px">Committees — nomenclature warning</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
{#each committees_pills as c}
<span class="bse-pill" style="cursor:default">{c.published_name}</span>
{/each}
</div>
<p class="sub" style="margin-top:12px;font-size:12px;color:var(--text-tertiary)"><span class="bse-badge bse-badge-una">Unresolved</span>&nbsp; Other sections refer to "Finance and Audit," "Risk and IT" and a dedicated resilience committee. It's unclear whether these are renamed, new, or temporary bodies.</p>
</div>
</div>

<details style="margin-top:16px">
<summary class="bse-lnk" style="cursor:pointer">Full board, attendance &amp; fees table — BSE and CSDB, all 17 directors →</summary>
<DataTable data={board} rows=20 groupBy=board>
  <Column id=name title="Director" />
  <Column id=classification title="Classification" />
  <Column id=meetings_attended title="Attended" />
  <Column id=meetings_possible title="Possible" />
  <Column id=attendance_rate title="Rate" fmt='0%' />
  <Column id=sitting_fees_bwp title="Sitting fees (P)" fmt='#,##0' />
  <Column id=retainer_bwp title="Retainer (P)" fmt='#,##0' />
</DataTable>
</details>

BSE and CSDB populations are kept separate (R020 — the composition table lists seven CSDB
directors; the attendance table includes eight).

## Assurance

```sql assurance
select assurance_id, layer, provider, role_conclusion as role, evidence_class from bse.governance_assurance order by assurance_id
```

<div class="bse-card">
<h3 style="font-size:14px;font-weight:800;margin:0 0 4px">Three lines of assurance</h3>
{#if assurance.ready}
<div class="assure">
{#each assurance as a}
<div class="assure-step {a.assurance_id === 'AS04' ? 'ext' : ''}{a.assurance_id === 'AS05' ? 'self' : ''}"><b>{a.layer}</b><br>{a.provider} — {a.role}</div>
{/each}
</div>
{/if}
<p class="sub" style="margin-top:12px;font-size:12px;color:var(--text-tertiary)">The financial audit opinion does not assure every non-financial metric, risk rating or commitment. King IV is a self-assessment, not independent certification.</p>
</div>

<details style="margin-top:12px">
<summary class="bse-lnk" style="cursor:pointer">Full assurance register (all 5 layers) →</summary>
<DataTable data={assurance} rows=5>
  <Column id=layer title="Layer" />
  <Column id=provider title="Provider" />
  <Column id=role title="Role / conclusion" wrap=true />
  <Column id=evidence_class title="Evidence class" />
</DataTable>
</details>

Grant Thornton's unqualified opinion covers the **financial statements only** — not every
non-financial metric, risk rating or commitment. King IV is a BSE self-assessment.

<div class="bse-card" style="margin-top:16px">
<h3 class="bse-secttl" style="font-size:13px;margin-bottom:8px">Related pages</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/market-performance">Evidence for market-concentration risk →</a>
<a class="bse-pill" href="/bse-2025/group-financials">Evidence for financial impact of the outage →</a>
<a class="bse-pill" href="/bse-2025/10x-strategy">Evidence for strategy execution risk →</a>
<a class="bse-pill" href="/bse-2025/data-quality">Committee/title inconsistencies →</a>
</div>
</div>

<p class="src"><span class="a2v">GATE A2 EVIDENCE VERIFIED — CORE DATA RELEASE APPROVED</span>
Source: BSE Integrated Report 2025 pp. 80–99, 110, 114 — batch-06 structured extraction
(`bse_disc_*`). GATE A2 evidence review completed 2026-09-07 (186 rows verified, 13
<code>NOT_APPLICABLE</code>, 0 findings); <code>bse_disc_release.status</code> =
<code>A2_VERIFIED</code> (<i>historical: formerly <code>VISUAL_FIRST_PASS</code></i>).
The disclosure layer was not given a separate production approval beyond GATE A2.
Numeric governed model: <code>bse_canonical_v1_0_2</code> — database release approved 2026-09-08.
Dashboard deployment and publication are governed separately (GATE B, Phase 10–11).
<a class="bse-lnk" style="margin:0" href="/bse-2025/data-quality">Full reconciliation register →</a></p>
{/if}
