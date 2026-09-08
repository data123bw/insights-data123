---
title: Governance, Risk & Resilience
hide_title: true
sidebar_position: 6
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
<p class="kick">Governance · risk · resilience · FY2025</p>
<h1>The October outage is the central trust event</h1>
<p>The outage exposed weaknesses in technology architecture and continuity controls. Settlement
continued through manual processes and trading resumed within four business days, after which
resilience became a Board-level priority. Key incident metrics and independent-review findings
remain undisclosed.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

<Alert status=warning>
<span class="a2v">GATE A2 EVIDENCE VERIFIED — NOT PRODUCTION APPROVED</span> &nbsp; The risk register,
emerging risks, opportunities, risk appetite, outage timeline, remediation tracker, board
composition and activity, committees and assurance records on this page were <b>visually
verified against the source Integrated Report</b> in the GATE A2 evidence review, completed
<b>2026-09-07</b>: 186 substantive disclosure rows verified across Pages 5 &amp; 6, 13 control /
staging / manifest rows accepted as <code>NOT_APPLICABLE</code>, 0 findings. <b>GATE B and
production authorisation remain outstanding</b> — this layer is not yet production-approved.
</Alert>

## At a glance

<Grid cols=4>
<BigValue data={[{a:9}]} value=a title="BSE Board members" />
<BigValue data={[{a:6}]} value=a title="Independent NEDs (of 8)" />
<BigValue data={[{a:94.1}]} value=a fmt='0.0"%"' title="Board attendance (derived)" />
<BigValue data={[{a:7}]} value=a title="Selected principal risks" />
</Grid>

"No low principal risks" among the seven **selected** risks does not mean the full Group register
contains none. Board composition changed during FY2025 (CEO appointed 12 Mar; one resignation
2 Apr; one appointment 7 Jul).

## October 2025 outage

```sql outage
select event_seq as step, phase, event, report_text as detail, evidence_class
from bse.governance_outage order by event_seq
```
<DataTable data={outage} rows=7>
  <Column id=phase title="Date / phase" />
  <Column id=event title="Event" />
  <Column id=detail title="What the report says" wrap=true />
  <Column id=evidence_class title="Evidence class" />
</DataTable>

**Supported:** 21 October 2025 · four trading days · firewall failure · trading suspended ·
manual settlement continuity · no settlement failure · emergency firewall migration ·
independent review commissioned · Board-level resilience oversight established.
**Not supplied:** exact availability, timestamps, affected trades/users, revenue loss,
remediation cost, review findings.

## Remediation tracker

```sql remediation
select action_text as action, status, disclosure, dashboard_caveat as caveat
from bse.governance_remediation order by action_id
```
<DataTable data={remediation} rows=9>
  <Column id=action title="Action" wrap=true />
  <Column id=status title="Status" />
  <Column id=caveat title="Dashboard caveat" wrap=true />
</DataTable>

Remediation is not proof the resilience problem is solved.

## Principal &amp; emerging risks

```sql risks
select risk_id, risk_type, published_title as title, working_label, residual_rating, direction_status as direction, reconciliation_ids
from bse.governance_risks order by risk_type, risk_id
```
<DataTable data={risks} rows=14 groupBy=risk_type>
  <Column id=risk_id title="ID" />
  <Column id=title title="Published title" wrap=true />
  <Column id=working_label title="Working label" wrap=true />
  <Column id=residual_rating title="Residual" />
  <Column id=direction title="Direction" />
</DataTable>

<Alert status=info>
<b>R015</b> — the published PR6 title repeats PR3's market-integrity wording even though its
content concerns strategy execution and funding. The <b>published title is preserved</b>; a
descriptive working label is added, not substituted. Emerging risks are monitoring items and do
not inherit principal-risk ratings. A table is used, not a reconstructed 5×5 heat map (no
numeric likelihood/impact coordinates are disclosed).
</Alert>

## Board composition, attendance &amp; fees

```sql board
select board_name as board, member_name as name, role, classification,
  meetings_attended, meetings_possible, attendance_rate,
  sitting_fees_bwp, retainer_bwp
from bse.governance_board order by board_name, member_id
```
<DataTable data={board} rows=20 groupBy=board>
  <Column id=name title="Director" />
  <Column id=classification title="Classification" />
  <Column id=meetings_attended title="Attended" />
  <Column id=meetings_possible title="Possible" />
  <Column id=attendance_rate title="Rate" fmt='0%' />
  <Column id=sitting_fees_bwp title="Sitting fees (P)" fmt='#,##0' />
  <Column id=retainer_bwp title="Retainer (P)" fmt='#,##0' />
</DataTable>

BSE and CSDB populations are kept separate (R019 — the composition table lists seven CSDB
directors; the attendance table includes eight).

## Committees

```sql committees
select published_name as committee, committee_type as type, where_used, mandate, reconciliation_note
from bse.governance_committees order by committee_id
```
<DataTable data={committees} rows=9>
  <Column id=committee title="Published name" />
  <Column id=type title="Type" />
  <Column id=mandate title="Mandate / role" wrap=true />
  <Column id=reconciliation_note title="Nomenclature note" wrap=true />
</DataTable>

<Alert status=warning>
<b>R016</b> — the narrative names five standing committees; the governance map shows six boxes;
other sections refer to "Finance and Audit", "Risk and IT" and a dedicated IT-resilience
committee. All published names are kept in a nomenclature register; none is merged.
</Alert>

## Assurance

```sql assurance
select layer, provider, role_conclusion as role, evidence_class
from bse.governance_assurance order by assurance_id
```
<DataTable data={assurance} rows=5>
  <Column id=layer title="Layer" />
  <Column id=provider title="Provider" />
  <Column id=role title="Role / conclusion" wrap=true />
  <Column id=evidence_class title="Evidence class" />
</DataTable>

Grant Thornton's unqualified opinion covers the **financial statements only** — not every
non-financial metric, risk rating or commitment. King IV is a BSE self-assessment.

<p class="src"><span class="a2v">GATE A2 EVIDENCE VERIFIED — NOT PRODUCTION APPROVED</span>
Source: BSE Integrated Report 2025 pp. 80–99, 110, 114 — batch-06 structured extraction
(`bse_disc_*`). GATE A2 evidence review completed 2026-09-07 (186 rows verified, 13
<code>NOT_APPLICABLE</code>, 0 findings); <code>bse_disc_release.status</code> =
<code>A2_VERIFIED</code> (<i>historical: formerly <code>VISUAL_FIRST_PASS</code></i>).
The disclosure layer was not given a separate production approval beyond GATE A2.
GATE B deployment authorisation remains <b>outstanding</b> — deployment not authorised.
Numeric governed model: <code>bse_canonical_v1_0_2</code> — database release approved 2026-09-08.</p>
