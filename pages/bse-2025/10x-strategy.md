---
title: 10X Strategy & Public Value
hide_title: true
sidebar_position: 5
---

<style>
.bse-hero{background:linear-gradient(140deg,#1E3A5F,#0042A0);color:#fff;padding:40px 34px 92px;border-radius:12px;margin-top:-26px}
@media(max-width:639px){.bse-hero{margin-top:-16px;padding:30px 18px 88px}}
.bse-hero .kick{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin:0 0 6px}
.bse-hero h1{color:#fff;font-size:26px;font-weight:800;letter-spacing:-.03em;margin:2px 0 10px}
.bse-hero p{color:rgba(255,255,255,.85);font-size:15px;line-height:1.6;max-width:74ch;margin:0}
.bse-nav{display:flex;flex-wrap:wrap;gap:6px;font-size:13px;margin:-52px 0 34px;position:relative}
.bse-nav a{background:#fff;border:1px solid #e2e8f0;border-radius:999px;padding:6px 14px;color:#1E3A5F;text-decoration:none;font-weight:600}
.vfp{display:inline-block;background:#FEF3C7;border:1px solid #F59E0B;color:#92400E;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 10px;border-radius:6px}
.a2v{display:inline-block;max-width:100%;white-space:normal;overflow-wrap:break-word;line-height:1.35;background:#DCFCE7;border:1px solid #16A34A;color:#166534;font-size:11px;font-weight:700;letter-spacing:.06em;padding:3px 10px;border-radius:6px}
@media(max-width:639px){.a2v{display:block;font-size:10px;letter-spacing:.02em;padding:4px 8px}}
.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
@media(max-width:639px){
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}
  .table-container{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .table-container table{display:table;white-space:nowrap;min-width:max-content}
}
</style>

<div class="bse-hero">
<p class="kick">10X by 2030 · baseline year FY2025</p>
<h1>First year of execution against a new strategic framework</h1>
<p>BSE completed 10 of its 15 self-reported 2025 commitments. Most completed items established
foundations; market availability and a planned sustainable-bond listing were deferred. A
completed activity is not the same as a long-term outcome.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

<Alert status=warning>
<span class="a2v">GATE A2 EVIDENCE VERIFIED — NOT PRODUCTION APPROVED</span> &nbsp; The strategy
register, scorecard, pillars, public-value items, execution horizons and strategy identity on
this page were <b>visually verified against the source Integrated Report</b> in the GATE A2
evidence review, completed <b>2026-09-07</b>: 186 substantive disclosure rows verified across
Pages 5 &amp; 6, 13 control / staging / manifest rows accepted as <code>NOT_APPLICABLE</code>,
0 findings. <b>GATE B and production authorisation remain outstanding</b> — this layer is not
yet production-approved. Numeric market / financial figures elsewhere come from the governed
canonical model.
</Alert>

## Commitment status — BSE self-assessment

<Grid cols=4>
<BigValue data={[{a:15}]} value=a title="Commitments" />
<BigValue data={[{a:10}]} value=a title="Achieved" />
<BigValue data={[{a:3}]} value=a title="In progress" />
<BigValue data={[{a:2}]} value=a title="Deferred" />
</Grid>

No single weighted "strategy score" — the report provides no basis for weighting commitments.

## Five pillars

```sql pillars
select name as pillar, definition, lead_kpis from bse.strategy_pillars order by pillar_id
```
<DataTable data={pillars} rows=5>
  <Column id=pillar title="Pillar" />
  <Column id=definition title="Aspiration" wrap=true />
  <Column id=lead_kpis title="Lead KPIs" wrap=true />
</DataTable>

## 2025 commitments by pillar

```sql commit
select pillar, commitment_text as commitment, reported_status as status, outcome_commentary as evidence
from bse.strategy_commitments where commitment_year = 2025 order by commitment_id
```
<DataTable data={commit} rows=15 groupBy=pillar>
  <Column id=commitment title="Commitment" wrap=true />
  <Column id=status title="Status" />
  <Column id=evidence title="Reported evidence" wrap=true />
</DataTable>

Two deferrals: **maintain market availability above 99%** (October outage) and
**admit a sustainable bond** (high interest-rate environment).

## Formal 10X scorecard

```sql scorecard
select kpi, unit_scale as unit, baseline_2024, current_2025, target_2027, target_2030, treatment, reconciliation_ids
from bse.strategy_scorecard order by scorecard_id
```
<DataTable data={scorecard} rows=8>
  <Column id=kpi title="KPI" />
  <Column id=unit title="Unit / scale" />
  <Column id=baseline_2024 title="2024" />
  <Column id=current_2025 title="2025" />
  <Column id=target_2027 title="2027" />
  <Column id=target_2030 title="2030" />
  <Column id=treatment title="Treatment" wrap=true />
</DataTable>

A table, not gauges — units and scales are incompatible.

<Alert status=warning>
<b>Scorecard caveats.</b> <b>Revenue index</b> (100 → 85) is published only as the formal
scorecard construct with a method note; never combined with audited Group revenue (R010).
<b>Retail share</b> (15.1% vs 4.5%, R005) and <b>turnover ratio</b> (8.5% vs 9.9%, R003) are
withheld from ordinary KPI/trend views and retained only in this scorecard context.
The 2030 liquidity target reads 10% in the scorecard and 25% in the horizon graphic (R011) —
both labels preserved, not merged.
</Alert>

## Public value — delivered outputs, foundations, and intended outcomes

```sql pv
select evidence_level, measure_label as measure, coalesce(reported_text, cast(numeric_floor as varchar)) as reported, status
from bse.strategy_public_value order by public_value_id
```
<DataTable data={pv} rows=15 groupBy=evidence_level>
  <Column id=measure title="Measure" wrap=true />
  <Column id=reported title="Reported" />
  <Column id=status title="Status" />
</DataTable>

Lower-bound values (`10+`, `169+`) keep both the numeric floor and the reported text. Future
outcomes are **not** counted as FY2025 achievements.

## Execution horizons

```sql horizons
select horizon, item_type, action_indicator as item, coalesce(cast(numeric_target as varchar), target_text) as target
from bse.execution_horizons order by horizon_item_id
```
<DataTable data={horizons} rows=25 groupBy=horizon>
  <Column id=item_type title="Type" />
  <Column id=item title="Action / indicator" wrap=true />
  <Column id=target title="Target" />
</DataTable>

The three horizons overlap in time; they are shown as published, not as strict phases.

## 2026 forward commitments

```sql fwd
select commitment_id as id, pillar, commitment_text as commitment, kpi_to_report as kpi
from bse.commitments_2026 order by commitment_id
```
<DataTable data={fwd} rows=14>
  <Column id=id title="ID" />
  <Column id=pillar title="Pillar" />
  <Column id=commitment title="2026 commitment" wrap=true />
  <Column id=kpi title="KPI to be reported" wrap=true />
</DataTable>

Management expectations — clearly separated from FY2025 results.

<p class="src"><span class="a2v">GATE A2 EVIDENCE VERIFIED — NOT PRODUCTION APPROVED</span>
Source: BSE Integrated Report 2025, batch-05 structured extraction (`bse_disc_*`). GATE A2
evidence review completed 2026-09-07 (186 rows verified, 13 <code>NOT_APPLICABLE</code>, 0
findings); <code>bse_disc_release.status</code> = <code>A2_VERIFIED</code>
(<i>historical: formerly <code>VISUAL_FIRST_PASS</code></i>). GATE B / production authorisation
outstanding. Numeric governed model: <code>bse_canonical_v1_0_2</code> (status: review).</p>
