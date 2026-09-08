---
title: Data Quality, Methodology & Downloads
hide_title: true
sidebar_position: 7
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
.src{font-size:12px;color:#64748b;border-top:1px solid #edf0f4;margin-top:26px;padding-top:12px}
@media(max-width:639px){
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}
  .table-container{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .table-container table{display:table;white-space:nowrap;min-width:max-content}
}
</style>

<div class="bse-hero">
<p class="kick">Evidence layer for the whole dashboard</p>
<h1>Uncertainty travels with the data</h1>
<p>Every metric here has a source page, a verification status and — where sources disagree — a
governed decision. This is a public product feature, not a hidden disclaimer.</p>
</div>

<div class="bse-nav">
<a href="/bse-2025/overview">Overview</a><a href="/bse-2025/market-performance">Market</a><a href="/bse-2025/securities-participation">Securities</a><a href="/bse-2025/group-financials">Financials</a><a href="/bse-2025/10x-strategy">Strategy</a><a href="/bse-2025/governance-risk">Governance &amp; Risk</a><a href="/bse-2025/data-quality">Data Notes</a>
</div>

```sql counts
select
  (select count(*) from bse.mart_evidence) as catalogued,
  (select count(*) from bse.mart_canonical) as canonical,
  (select count(*) from bse.mart_public) as public,
  (select count(*) from bse.mart_evidence where is_provisional) as provisional,
  (select count(*) from bse.mart_withheld) as withheld
```

<Grid cols=5>
<BigValue data={counts} value=catalogued title="Governed observations" />
<BigValue data={counts} value=canonical title="Canonical (selected value)" />
<BigValue data={counts} value=public title="Public (approved for display)" />
<BigValue data={counts} value=provisional title="Provisional" />
<BigValue data={counts} value=withheld title="Restricted / withheld" />
</Grid>

## Release status

<Alert status=warning>
Canonical release <b><code>bse_canonical_v1_0_2</code></b> — database status <b>approved</b>,
<b>approved_by = "Thegreat P. Malema"</b> (approved 2026-09-08). The release was moved to
<code>approved</code> in Phase 9B, after the full <code>bse</code> stack was loaded to the
production database and <b>independently verified there</b>. The batch-05 / batch-06
structured disclosures behind Pages 5 &amp; 6 <b>passed the GATE A2 evidence review on
2026-09-07</b> — 186 substantive rows visually verified against the source report, 13 control /
staging / manifest rows accepted as <code>NOT_APPLICABLE</code>, 0 findings.
<code>bse_disc_release.status</code> is now <code>A2_VERIFIED</code> (formerly
<code>VISUAL_FIRST_PASS</code>) and was not given a separate production approval beyond GATE A2.
Publishing this dashboard still requires <b>GATE B</b> deployment authorisation, which remains
<b>outstanding</b> pending an independent Phase 10 readiness review and written owner sign-off —
deployment is not authorised.
</Alert>

## Canonical vs public — what the two views mean

Two different questions, and **neither view contains the other**:

| View | Rows | Means |
|---|--:|---|
| **Canonical** | 247 | the single observation **explicitly selected** as the analytical value for a metric / period / scope |
| **Public** | 340 | every observation **approved for public display** (any `PUBLISH*` status) |

`public − canonical = 93 rows` — **provisional historical comparatives** for FY2018–FY2021. BSE
reports these pre-2022 points only in later five-year / comparative tables, so the dashboard
shows them (hollow / hatched, dashed connectors, provisional badge) but they are not canonical
selections. They are **not** rejected conflicts, restricted rows or duplicate keys.

## Verification-status legend

| Status | Meaning |
|---|---|
| Verified | original PDF page, value, unit, period, entity and scope checked (per year) |
| Provisional | source calls it provisional / placeholder, or original-year coverage is outside the project — visual transcription does not remove this |
| Under review | two sources conflict, or scope / period / definition is unclear — withheld from headline cards |
| Derived | dashboard calculation — formula, inputs and rounding exposed; no more reliable than its least reliable input |
| Unavailable | not reported / not loaded / unsafe to calculate — shown as an explicit state, never zero |
| Forward-looking | targets and plans — never combined with achieved results |

## Governed reconciliation register (R001–R026)

```sql recon
select reconciliation_id as id, decision_state as state, canonical_decision as decision,
  public_treatment as treatment, remaining_action
from bse.reconciliation_cases order by reconciliation_id
```
<DataTable data={recon} rows=26 search=true>
  <Column id=id title="ID" />
  <Column id=state title="Decision state" />
  <Column id=decision title="Canonical decision" wrap=true />
  <Column id=treatment title="Public treatment" />
</DataTable>

Every case reflects completed Phase A blind review, Phase B full-population verification and
project-owner release approval. New cases begin as *hypothesis — not yet established as fact*.

### The cases carried on every affected chart

| ID | Metric | Governed outcome |
|---|---|---|
| **R023** | FY2022 closing cash resources | Use **P112,722,445**. Retain P112,722,304 as a disclosed, immaterial P141 source inconsistency. |
| **R026** | FY2022 DCI | Use **7,726.4** (2022 &amp; 2023 Annual Reports agree). The 2025 five-year table's **7,710.06** is excluded from the trend and kept only in the evidence layer. |
| **R025** | FY2024 investor mix | Printed components sum to **99.1%**, not the printed 100.0%. Components are **preserved, not renormalised**; the 0.9-point gap is published as a data-quality note. |
| R003 / R005 | FY2025 velocity / retail share | No canonical value — **withheld** from ordinary trends. |
| R007 | Year-end listed debt instruments | 117 / 121 / 122 kept as **separate** scoped variants — never one total. |

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

```sql avail
select metric_family, year, canonical_n, provisional_n
from bse.availability order by metric_family, year
```
<DataTable data={avail} rows=60 groupBy=metric_family>
  <Column id=year title="Year" />
  <Column id=canonical_n title="Canonical obs" />
  <Column id=provisional_n title="Provisional obs" />
</DataTable>

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
<DataTable data={hier} rows=8>
  <Column id=rank title="Rank" />
  <Column id=source_type title="Source type" wrap=true />
  <Column id=decision_rule title="Decision rule" />
</DataTable>

Hierarchy sets precedence before values are compared; it does not automatically resolve
differently-defined measures.

## Downloads

Two datasets are specified. **They are not built or published in this local development stage.**

1. **Verified dashboard dataset** — publication-ready observations only (`bse_mart_download_public`, 340 rows).
2. **Complete flagged dataset** — every observation with status, reconciliation ID, caveat and publication treatment (`bse_mart_download_flagged`, 357 rows).

Provisional and verified data are never mixed without row-level flags.

## Revision history of this release

- **v1.0** — approved canonical release (4 Sep 2026).
- **v1.0.1** — metadata correction (5 Sep 2026): seven `MISSING` rows set non-provisional; generic conflict wording removed. No numeric change.
- **v1.0.2** — controlled augmentation (6 Sep 2026, owner-approved): three directly-reported page-40 total-market-turnover observations added (FY2025 P9.3bn, FY2024 P7.9bn, +18.1%). The 354 v1.0.1 rows are unchanged; v1.0.1 is retained as audit history.

<p class="src">Canonical release <code>bse_canonical_v1_0_2</code> · database status <b>approved</b> ·
<code>approved_by = "Thegreat P. Malema"</code> (2026-09-08). Disclosure layer <code>A2_VERIFIED</code>.
GATE B deployment authorisation outstanding — <b>not deployed</b>; dashboard publication pending an
independent Phase 10 readiness review and written owner sign-off.</p>
