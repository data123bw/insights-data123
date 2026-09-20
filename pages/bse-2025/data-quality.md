---
title: Data Quality, Methodology & Downloads
hide_title: true
sidebar_position: 7
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
.bse-hero .kick{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.6);margin:0 0 6px}
.bse-hero .sub-line{font-size:12.5px;color:#B9C7E8;margin:2px 0 0;max-width:70ch}
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
.bse-badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;padding:2px 8px;border-radius:6px;font-weight:700;white-space:nowrap}
.bse-badge-ok{background:#E7F5EC;color:#16a34a}
.bse-badge-una{background:var(--surface-muted);color:var(--text-tertiary)}
.bse-badge-hyp{background:#FBF1E1;color:var(--warning)}
.bse-badge-verok{background:#E7F5EC;color:var(--positive)}

/* ---- Meta KPI row ---- */
.meta-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:16px}
.meta-card{background:#fff;border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center}
.meta-card .m-num{font-size:26px;font-weight:800}
.meta-card .m-lbl{font-size:12px;color:var(--text-tertiary);margin-top:4px}

/* ---- Legend strip ---- */
.legend-strip{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.leg-chip{display:flex;align-items:center;gap:7px;background:#fff;border:1px solid var(--border);border-radius:999px;padding:6px 12px;font-size:12px;color:var(--text-secondary)}
.leg-dot{width:9px;height:9px;border-radius:50%;flex:none}

/* ---- Reconciliation table ---- */
.recon-table{width:100%;border-collapse:collapse;font-size:12.5px;margin-top:4px}
.recon-table th{text-align:left;font-weight:600;color:var(--text-tertiary);font-size:10.5px;padding:8px;border-bottom:1px solid var(--border);background:var(--surface-muted)}
.recon-table td{padding:8px;border-bottom:1px solid var(--border);vertical-align:top}
.recon-table tr:last-child td{border-bottom:none}
.recon-table tr:hover td{background:var(--surface-muted)}

/* ---- Availability matrix ---- */
.matrix{width:100%;border-collapse:collapse;font-size:11.5px;margin-top:4px}
.matrix th{background:var(--surface-muted);padding:8px;font-size:10.5px;color:var(--text-tertiary);text-align:center}
.matrix th:first-child{text-align:left}
.matrix td{padding:8px;text-align:center;border:1px solid var(--surface-muted)}
.matrix td:first-child{text-align:left;font-weight:600;color:#101828}
.cell-avail{background:#E7F5EC;color:var(--positive);font-weight:700}
.cell-partial{background:#FBF1E1;color:var(--warning);font-weight:700}
.cell-review{background:#FCEAEA;color:var(--danger);font-weight:700}
.cell-await{background:var(--surface-muted);color:var(--text-tertiary)}
.cell-na{background:#fff;color:var(--text-tertiary);font-style:italic}

/* ---- Hierarchy list ---- */
.hier{margin:0;padding-left:0;list-style:none;counter-reset:h}
.hier li{counter-increment:h;display:flex;gap:10px;font-size:12.5px;color:var(--text-secondary);padding:7px 0;border-bottom:1px solid var(--border)}
.hier li:last-child{border-bottom:none}
.hier li::before{content:counter(h);width:20px;height:20px;border-radius:50%;background:var(--navy-2);color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex:none}

/* ---- Downloads ---- */
.dl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}
.dl-tile{background:var(--surface-muted);border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;opacity:.85;cursor:not-allowed}
.dl-icon{width:34px;height:34px;border-radius:8px;background:var(--blue-4);color:var(--navy-1);display:flex;align-items:center;justify-content:center;font-size:15px;flex:none}
.dl-tile h5{font-size:12.5px;margin:0}
.dl-tile p{font-size:11px;color:var(--text-tertiary);margin:2px 0 0}

.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
@media (max-width:900px){.meta-row{grid-template-columns:repeat(2,1fr)}.dl-grid{grid-template-columns:1fr}.two-col{grid-template-columns:1fr}}

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
<span class="pill">Dashboard version 0.1</span>
<span class="pill">Scope · All pages, evidence layer</span>
<span class="pill">Last verified · 8 Sep 2026</span>
</div>
</div>

<div class="bse-hero">
<div class="bse-hero-top">
<div style="display:flex;align-items:center;gap:14px">
<a class="bse-back" href="/bse-2025/overview" aria-label="Back to Overview">←</a>
<div>
<p class="kick">Evidence layer for the whole dashboard</p>
<h1>Uncertainty travels with the data</h1>
<p class="sub-line">Every metric here has a source page, a verification status and, where sources disagree, a
governed decision. This is a public product feature, not a hidden disclaimer.</p>
</div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="bse-hero-pill">Dashboard version 0.1</span>
<span class="bse-hero-pill dim">Scope: All pages, evidence layer</span>
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
<a href="/bse-2025/governance-risk">Governance &amp; Risk</a>
<a class="on" href="/bse-2025/data-quality">Data Notes</a>
</div>

<Alert status=warning>
Canonical release <b><code>bse_canonical_v1_0_2</code></b>, database status <b>approved</b>,
<b>approved_by = "Thegreat P. Malema"</b> (approved 2026-09-08). The release was moved to
<code>approved</code> in Phase 9B, after the full <code>bse</code> stack was loaded to the
production database and <b>independently verified there</b>. The batch-05 / batch-06
structured disclosures behind Pages 5 &amp; 6 <b>passed the GATE A2 evidence review on
2026-09-07</b>: 186 substantive rows visually verified against the source report, 13 control /
staging / manifest rows accepted as <code>NOT_APPLICABLE</code>, 0 findings.
<code>bse_disc_release.status</code> is now <code>A2_VERIFIED</code> (formerly
<code>VISUAL_FIRST_PASS</code>) and was not given a separate production approval beyond GATE A2.
Dashboard deployment and publication are governed separately, under <b>GATE B</b> (Phase 10-11).
</Alert>

## Reconciliation register at a glance

```sql case_counts
select
  count(*) as total_cases,
  sum(case when decision_state in ('RESOLVED_FOR_CANONICAL','RESOLVED_FOR_CANONICAL_WITH_DISCLOSED_CONFLICT') then 1 else 0 end) as resolved_canonical,
  sum(case when decision_state like 'OPEN%' then 1 else 0 end) as open_cases,
  sum(case when decision_state not like 'OPEN%'
       and decision_state not in ('RESOLVED_FOR_CANONICAL','RESOLVED_FOR_CANONICAL_WITH_DISCLOSED_CONFLICT')
       then 1 else 0 end) as other_resolved
from bse.reconciliation_cases
```

{#if case_counts.ready}
<div class="meta-row">
<div class="meta-card"><div class="m-num" style="color:var(--navy-1)">{case_counts[0].total_cases}</div><div class="m-lbl">Catalogued in register</div></div>
<div class="meta-card"><div class="m-num" style="color:var(--positive)">{case_counts[0].resolved_canonical}</div><div class="m-lbl">Resolved to canonical value</div></div>
<div class="meta-card"><div class="m-num" style="color:var(--danger)">{case_counts[0].open_cases}</div><div class="m-lbl">Open: hypothesis / no canonical value</div></div>
<div class="meta-card"><div class="m-num" style="color:var(--warning)">{case_counts[0].other_resolved}</div><div class="m-lbl">Resolved by policy, scope, rounding or period fix</div></div>
</div>
{/if}
<p class="sub" style="font-size:12px;color:var(--text-tertiary);margin-top:6px">Phase A blind review and Phase B comparison are complete for all 26 cases. This case-level count is different from, and not comparable to, the individual-observation counts below: a single case (e.g. R007) can govern several observations.</p>

## Verification-status legend

<div class="legend-strip">
<span class="leg-chip"><span class="leg-dot" style="background:var(--positive)"></span>Verified</span>
<span class="leg-chip"><span class="leg-dot" style="background:var(--warning)"></span>Provisional</span>
<span class="leg-chip"><span class="leg-dot" style="background:var(--danger)"></span>Under review</span>
<span class="leg-chip"><span class="leg-dot" style="background:var(--blue-2)"></span>Derived</span>
<span class="leg-chip"><span class="leg-dot" style="background:var(--text-tertiary)"></span>Unavailable</span>
<span class="leg-chip"><span class="leg-dot" style="background:var(--purple)"></span>Forward-looking</span>
</div>

| Status | Meaning |
|---|---|
| Verified | original PDF page, value, unit, period, entity and scope checked (per year) |
| Provisional | source calls it provisional / placeholder, or original-year coverage is outside the project; visual transcription does not remove this |
| Under review | two sources conflict, or scope / period / definition is unclear; withheld from headline cards |
| Derived | dashboard calculation: formula, inputs and rounding exposed; no more reliable than its least reliable input |
| Unavailable | not reported / not loaded / unsafe to calculate; shown as an explicit state, never zero |
| Forward-looking | targets and plans, never combined with achieved results |

## Governed observations (individual data points)

```sql counts
select
  (select count(*) from bse.mart_evidence) as catalogued,
  (select count(*) from bse.mart_canonical) as canonical,
  (select count(*) from bse.mart_public) as public,
  (select count(*) from bse.mart_evidence where is_provisional) as provisional,
  (select count(*) from bse.mart_withheld) as withheld,
  (select count(*) from bse.mart_restricted) as restricted
```

<Grid cols=6>
<BigValue data={counts} value=catalogued title="Governed observations" />
<BigValue data={counts} value=canonical title="Canonical (selected value)" />
<BigValue data={counts} value=public title="Public (approved for display)" />
<BigValue data={counts} value=provisional title="Provisional" />
<BigValue data={counts} value=withheld title="Withheld from trend" />
<BigValue data={counts} value=restricted title="Restricted display" />
</Grid>

"Withheld" (`mart_withheld`) and "restricted" (`mart_restricted`) are two separate governed
tables with different treatment: withheld observations are excluded from trends entirely;
restricted observations may still display with a scope/method label. They are not the same
population and are shown as two separate counts, not combined.

## Canonical vs public: what the two views mean

Two different questions, and **neither view contains the other**:

| View | Rows | Means |
|---|--:|---|
| **Canonical** | 247 | the single observation **explicitly selected** as the analytical value for a metric / period / scope |
| **Public** | 340 | every observation **approved for public display** (any `PUBLISH*` status) |

`public − canonical = 93 rows`: **provisional historical comparatives** for FY2018-FY2021. BSE
reports these pre-2022 points only in later five-year / comparative tables, so the dashboard
shows them (hollow / hatched, dashed connectors, provisional badge) but they are not canonical
selections. They are **not** rejected conflicts, restricted rows or duplicate keys.

## Governed reconciliation register (R001-R026)

```sql recon_styled
select reconciliation_id as id, decision_state, canonical_decision as decision, reason,
  public_treatment as treatment, remaining_action,
  case when decision_state like 'OPEN%' then 'bse-badge-hyp'
       when decision_state = 'PARTLY_RESOLVED' then 'bse-badge-hyp'
       else 'bse-badge-verok' end as badge_class,
  case when decision_state like 'OPEN%' then 'Open / hypothesis'
       when decision_state = 'PARTLY_RESOLVED' then 'Partly resolved'
       else 'Resolved' end as status_label
from bse.reconciliation_cases order by reconciliation_id
```

<div class="bse-card">
<span class="sub" style="display:block;margin-bottom:10px;font-size:12px;color:var(--text-tertiary)">All 26 governed cases; new cases begin as "hypothesis, not yet established as fact"</span>
<div class="table-container">
<table class="recon-table">
<tr><th>ID</th><th>Canonical decision</th><th>Reason</th><th>Public treatment</th><th>Status</th></tr>
{#each recon_styled as r}
<tr>
<td>{r.id}</td>
<td>{r.decision}</td>
<td>{r.reason}</td>
<td>{r.treatment}</td>
<td><span class="bse-badge {r.badge_class}">{r.status_label}</span></td>
</tr>
{/each}
</table>
</div>
<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
<div class="sub" style="margin-bottom:6px;font-size:12px;color:var(--text-tertiary)">Jump to the consuming page for each disputed metric</div>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<a class="bse-pill" href="/bse-2025/market-performance">Market Performance (R001-R003) →</a>
<a class="bse-pill" href="/bse-2025/securities-participation">Securities &amp; Participation (R005-R009) →</a>
<a class="bse-pill" href="/bse-2025/group-financials">Group Financials (R010, R012-R014) →</a>
<a class="bse-pill" href="/bse-2025/10x-strategy">10X Strategy (R010, R011, R017) →</a>
<a class="bse-pill" href="/bse-2025/governance-risk">Governance &amp; Risk (R015, R016) →</a>
</div>
</div>
</div>

### The cases carried on every affected chart

| ID | Metric | Governed outcome |
|---|---|---|
| **R023** | FY2022 closing cash resources | Use **P112,722,445**. Retain P112,722,304 as a disclosed, immaterial P141 source inconsistency. |
| **R026** | FY2022 DCI | Use **7,726.4** (2022 &amp; 2023 Annual Reports agree). The 2025 five-year table's **7,710.06** is excluded from the trend and kept only in the evidence layer. |
| **R025** | FY2024 investor mix | Printed components sum to **99.1%**, not the printed 100.0%. Components are **preserved, not renormalised**; the 0.9-point gap is published as a data-quality note. |
| R003 / R005 | FY2025 velocity / retail share | No canonical value; **withheld** from ordinary trends. |
| R007 | Year-end listed debt instruments | 117 / 121 / 122 kept as **separate** scoped variants, never one total. |

## Restatements

```sql rev
select coalesce(period_id, '—') as period, metric, originally_published_text as originally_published,
  restated_text as restated, revision_reason as reason
from bse.revisions order by period_id, metric
```
<DataTable data={rev} rows=9>
  <Column id=period title="Period" />
  <Column id=metric title="Metric" />
  <Column id=originally_published title="Originally published" />
  <Column id=restated title="Restated / later comparative" />
  <Column id=reason title="Reason" wrap=true />
</DataTable>

The FY2023 original PAT (P26,433,048) and restated PAT (P24,938,848) remain linked, not
overwritten.

## Historical availability

```sql availability_matrix
with years as (
  select unnest(['2018','2019','2020','2021','2022','2023','2024','2025']) as year
),
families as (
  select distinct metric_family from bse.availability
),
grid as (
  select f.metric_family, y.year
  from families f cross join years y
),
raw as (
  select metric_family, year,
    case when canonical_n>0 and provisional_n=0 then 'Available'
         when canonical_n>0 and provisional_n>0 then 'Partial'
         when canonical_n=0 and provisional_n>0 then 'Provisional'
         else 'Await source' end as status,
    case when canonical_n>0 and provisional_n=0 then 'cell-avail'
         when canonical_n>0 and provisional_n>0 then 'cell-partial'
         when canonical_n=0 and provisional_n>0 then 'cell-await'
         else 'cell-na' end as cls
  from bse.availability
)
select g.metric_family,
  list(struct_pack(year := g.year, status := coalesce(r.status, 'N/A'), cls := coalesce(r.cls, 'cell-na')) order by g.year) as years
from grid g
left join raw r on r.metric_family = g.metric_family and r.year = g.year
group by g.metric_family
order by g.metric_family
```

<div class="bse-card">
<div class="table-container">
{#if availability_matrix.ready}
<table class="matrix">
<tr><th>Metric family</th><th>2018</th><th>2019</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr>
{#each availability_matrix as fam}
<tr>
<td>{fam.metric_family}</td>
{#each fam.years as y}
<td class="{y.cls}">{y.status}</td>
{/each}
</tr>
{/each}
</table>
{/if}
</div>
<p class="sub" style="margin-top:8px;font-size:12px;color:var(--text-tertiary)">"N/A" marks a family/year with no recorded observation at all; either the metric or programme
did not yet exist for that year, or the year predates this dashboard's extraction scope. It is
never used to mean "missing" for a year the family is otherwise tracked in.</p>
</div>

```sql avail
select metric_family, year, canonical_n, provisional_n
from bse.availability order by metric_family, year
```
<details style="margin-top:12px">
<summary class="bse-lnk" style="cursor:pointer">Full availability detail (canonical/provisional observation counts, all 45 rows) →</summary>
<DataTable data={avail} rows=60 groupBy=metric_family>
  <Column id=year title="Year" />
  <Column id=canonical_n title="Canonical obs" />
  <Column id=provisional_n title="Provisional obs" />
</DataTable>
</details>

Use "not applicable", not "missing", where a series (e.g. the 10X scorecard) did not yet exist.

## Metric dictionary

```sql dict
select metric_id, metric_family, primary_page_id as page, value_kind, default_unit_code as unit,
  historical_start_year as first_year, observation_count as observations
from bse.metric_dictionary order by page, metric_id
```
<DataTable data={dict} rows=20 search=true>
  <Column id=metric_id title="Metric ID" />
  <Column id=page title="Page" />
  <Column id=value_kind title="Kind" />
  <Column id=unit title="Unit" />
  <Column id=first_year title="First year" />
  <Column id=observations title="Obs" />
</DataTable>

## Source register

```sql docs
select source_id, title, report_year, report_format, filename, sha256, verification_state
from bse.source_documents order by report_year
```
<DataTable data={docs} rows=4>
  <Column id=source_id title="ID" />
  <Column id=title title="Document" />
  <Column id=report_year title="Year" />
  <Column id=sha256 title="SHA-256" />
</DataTable>

Every chart and table on this dashboard exposes its source document, PDF page and table label.

## Source hierarchy

```sql hier
select rank, source_type, use, decision_rule from bse.source_hierarchy order by cast(rank as int)
```

<div class="two-col">
<div class="bse-card">
<h3 style="font-size:14px;font-weight:800;margin:0 0 10px">Source hierarchy</h3>
{#if hier.ready}
<ul class="hier">
{#each hier as h}
<li><div><b>{h.source_type}</b>: {h.use}<br><span class="sub" style="font-size:11px">{h.decision_rule}</span></div></li>
{/each}
</ul>
{/if}
<p class="sub" style="margin-top:10px;font-size:12px;color:var(--text-tertiary)">A hierarchy resolves precedence, not differently-defined measures.</p>
</div>
<div class="bse-card">
<h3 style="font-size:14px;font-weight:800;margin:0 0 10px">Known limitations</h3>
<ul style="margin:0;padding-left:16px;font-size:12.5px;color:var(--text-secondary);line-height:1.9">
<li>Text-layer extraction identifies possible issues; it does not verify them</li>
<li>"Both sources verified" confirms transcription, not resolution</li>
<li>A derived value cannot be more reliable than its least reliable input</li>
<li>Hierarchy rank does not override a genuine definition conflict</li>
</ul>
</div>
</div>

<details style="margin-top:12px">
<summary class="bse-lnk" style="cursor:pointer">Full source-hierarchy register (all 7 ranks) →</summary>
<DataTable data={hier} rows=8>
  <Column id=rank title="Rank" />
  <Column id=source_type title="Source type" wrap=true />
  <Column id=decision_rule title="Decision rule" />
</DataTable>
</details>

## Downloads

<div class="bse-card">
<span class="sub" style="font-size:12px;color:var(--text-tertiary)">Verified and provisional data are never mixed without row-level flags</span>
<div class="dl-grid">
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">✓</div><div><h5>Verified dataset</h5><p>Publication-ready observations only</p></div></div>
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">◐</div><div><h5>Complete flagged dataset</h5><p>All data with status &amp; caveats</p></div></div>
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">⚑</div><div><h5>Reconciliation Register</h5><p>Full evidence record</p></div></div>
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">📖</div><div><h5>Metric dictionary</h5><p>Definitions &amp; formulas</p></div></div>
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">🔗</div><div><h5>Source register</h5><p>Document &amp; page mapping</p></div></div>
<div class="dl-tile" aria-disabled="true"><div class="dl-icon">🕘</div><div><h5>Change log</h5><p>Corrections &amp; status transitions</p></div></div>
</div>
</div>

Two datasets are specified. **They are not built or published in this local development stage.**

1. **Verified dashboard dataset**: publication-ready observations only (`bse_mart_download_public`, 340 rows).
2. **Complete flagged dataset**: every observation with status, reconciliation ID, caveat and publication treatment (`bse_mart_download_flagged`, 357 rows).

Provisional and verified data are never mixed without row-level flags.

## Revision history of this release

- **v1.0**: approved canonical release (4 Sep 2026).
- **v1.0.1**: metadata correction (5 Sep 2026): seven `MISSING` rows set non-provisional; generic conflict wording removed. No numeric change.
- **v1.0.2**: controlled augmentation (6 Sep 2026, owner-approved): three directly-reported page-40 total-market-turnover observations added (FY2025 P9.3bn, FY2024 P7.9bn, +18.1%). The 354 v1.0.1 rows are unchanged; v1.0.1 is retained as audit history.

<p class="src">▤&nbsp; This page explains uncertainty; it is not the only place it appears. Chart-level
warnings on Pages 1-6 link back here. Canonical release <code>bse_canonical_v1_0_2</code> ·
database status <b>approved</b> · <code>approved_by = "Thegreat P. Malema"</code> (2026-09-08).
Disclosure layer <code>A2_VERIFIED</code>. Dashboard deployment and publication are governed
separately, under GATE B (Phase 10-11).</p>
