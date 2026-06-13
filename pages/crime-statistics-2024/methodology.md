---
sidebar_position: 4
---

<style>
/* ── Hero ── */
.hero {
    background: #1E3A5F;
    color: white;
    padding: 40px 32px 120px;
    border-radius: 12px;
    margin-top: -26px; /* cancel the layout's top gap so the hero starts at the top */
    margin-bottom: 0px;
}
@media (max-width: 639px) {
    .hero { margin-top: -16px; }
}

.hero-meta {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin: 0 0 8px;
}

.hero h1 {
    color: white;
    font-size: 28px;
    font-weight: 800;
    margin: 4px 0 12px;
    letter-spacing: -0.03em;
    line-height: 1.2;
}

.hero-summary {
    color: rgba(255,255,255,0.82);
    font-size: 16px;
    line-height: 1.65;
    margin: 0 0 20px;
    max-width: 72ch;
}

.hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.hero-tag {
    background: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.78);
    font-size: 12px;
    font-weight: 500;
    padding: 4px 11px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.18);
}

/* ── Section Label ── */
.section-label {
    display: block;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0042A0;
    padding-left: 16px;
    border-left: 3px solid #0042A0;
    margin: 40px 0 8px;
}

/* ── Snapshot cards (overlapping hero) ── */
.snapshot-section {
    position: relative;
    margin-top: -90px;
    z-index: 10;
    padding: 0 24px;
}

.snapshot-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
}

.snapshot-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 28px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.04),
        0 18px 32px rgba(0,0,0,.05);
    transition: all .25s ease;
}

.snapshot-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.snapshot-value {
    font-size: 30px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1;
}

.snapshot-label {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    color: #334155;
    white-space: nowrap;
}

/* ── Section heading / tag ── */
.section-heading {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 16px;
}

.section-tag {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 999px;
    background: #dce8ff;
    color: #0042A0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

/* ── Generic white card ── */
.method-section {
    padding: 20px;
}

.method-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 30px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.method-card h3 {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 12px;
}

.method-card p {
    font-size: 14px;
    line-height: 1.75;
    color: #475569;
    margin: 0 0 12px;
}

.method-card p:last-child {
    margin-bottom: 0;
}

/* ── Source fact stats (left-border accent cards) ── */
.source-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 16px;
}

.source-stat {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 14px 18px;
    border-left: 4px solid #e2e8f0;
}

.source-stat.blue   { border-left-color: #0042A0; }
.source-stat.orange { border-left-color: #FF9F43; }
.source-stat.purple { border-left-color: #9A67FD; }
.source-stat.green  { border-left-color: #3EC58E; }

.source-stat-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
}

.source-stat-value {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 700;
    color: #10213d;
    line-height: 1.45;
}

/* ── Collection flow (docket → register → report) ── */
.flow-grid {
    display: grid;
    grid-template-columns: 1fr 28px 1fr 28px 1fr 28px 1fr;
    gap: 0;
    align-items: stretch;
    margin-top: 16px;
}

.flow-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 18px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
}

.flow-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.flow-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: #eff6ff;
    color: #0042A0;
    margin-bottom: 10px;
}

.flow-step {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0042A0;
    margin-bottom: 4px;
}

.flow-title {
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 6px;
}

.flow-desc {
    font-size: 11px;
    line-height: 1.55;
    color: #64748b;
}

.flow-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 16px;
    font-weight: 700;
}

/* ── Insight cards (limitations grid) ── */
.insights-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.insight-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 14px 16px;
    display: grid;
    grid-template-columns: 36px 1fr;
    grid-template-rows: auto auto;
    column-gap: 10px;
    row-gap: 6px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
}

.insight-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.insight-icon {
    grid-column: 1;
    grid-row: 1;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.insight-icon.success { background: #ecfdf5; color: #3EC58E; }
.insight-icon.danger  { background: #fef2f2; color: #dc2626; }
.insight-icon.primary { background: #eff6ff; color: #0042A0; }
.insight-icon.warning { background: #fffbeb; color: #FF9F43; }
.insight-icon.purple  { background: #f5f3ff; color: #9A67FD; }

.insight-card h3 {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    color: #0f172a;
}

.insight-card p {
    grid-column: 1 / -1;
    grid-row: 2;
    font-size: 12px;
    line-height: 1.5;
    color: #64748b;
    margin: 0;
}

/* ── Structure insight (key callout) ── */
.structure-insight {
    margin-top: 15px;
    background: #f8fafc;
    border-left: 5px solid #3EC58E;
    border-radius: 18px;
    padding: 15px;
    display: flex;
    gap: 18px;
}

.structure-insight .si-icon {
    font-size: 26px;
    flex-shrink: 0;
}

.structure-insight h4 {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    color: #0f172a;
}

.structure-insight p {
    color: #64748b;
    line-height: 1.8;
    font-size: 14px;
    margin: 0;
}

/* ── Dimension cards (what is analysed) ── */
.dimension-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;
}

.dimension-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 18px;
    border-top: 4px solid #0042A0;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
}

.dimension-card.green  { border-top-color: #3EC58E; }
.dimension-card.orange { border-top-color: #FF9F43; }

.dimension-card h4 {
    font-size: 14px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 4px;
}

.dimension-card .dim-sub {
    font-size: 11px;
    color: #64748b;
    margin-bottom: 12px;
}

.dimension-card ul {
    margin: 0;
    padding-left: 18px;
}

.dimension-card li {
    font-size: 12px;
    line-height: 1.7;
    color: #475569;
}

/* ── Pipeline cards ── */
.pipeline-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 16px;
}

.pipeline-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 18px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
}

.pipeline-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.pipeline-icon {
    font-size: 20px;
    margin-bottom: 8px;
}

.pipeline-title {
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
}

.pipeline-body {
    font-size: 11px;
    color: #64748b;
    line-height: 1.55;
}

/* ── Citation blocks ── */
.cite-block {
    background: #f8fafc;
    border-left: 4px solid #0042A0;
    border-radius: 14px;
    padding: 14px 18px;
    margin-top: 12px;
}

.cite-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0042A0;
    margin-bottom: 6px;
}

.cite-text {
    font-size: 13px;
    line-height: 1.7;
    color: #475569;
    font-style: italic;
    margin: 0;
}

/* ── Conclusion (About Data 123) ── */
.conclusion-section {
    padding: 20px;
}

.conclusion-card {
    background: linear-gradient(135deg, #10213D, #183153);
    border-radius: 32px;
    padding: 30px 30px 24px;
    color: white;
    position: relative;
    overflow: hidden;
}

.conclusion-label {
    display: inline-flex;
    padding: 8px 16px;
    border-radius: 999px;
    background: rgba(255,255,255,.12);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .1em;
}

.conclusion-card h2 {
    margin-top: 24px;
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
    max-width: 900px;
    color: #e9edf9;
}

.conclusion-insight {
    margin-top: 20px;
    max-width: 1000px;
    font-size: 15px;
    line-height: 2;
    color: rgba(255,255,255,.85);
}

.conclusion-divider {
    height: 1px;
    background: rgba(255,255,255,.15);
    margin: 20px 0;
}

.policy-panel {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.policy-tag {
    background: #3EC58E;
    color: white;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
}

.policy-panel p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.9;
    color: rgba(255,255,255,.9);
    max-width: 900px;
    margin: 0;
}
/* ── Page navigation ── */
.page-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
}

/* =====================================================
MOBILE RESPONSIVENESS
===================================================== */
@media (max-width: 768px) {

    /* ── Hero ── */
    .hero { padding: 32px 20px 110px; }
    .hero h1 { font-size: 24px; }
    .hero-summary { font-size: 14.5px; }

    /* ── Snapshot cards ── */
    .snapshot-section { padding: 0 14px; }
    .snapshot-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .snapshot-card { padding: 18px 16px; border-radius: 16px; }
    .snapshot-value { font-size: 24px; }
    .snapshot-label { white-space: normal; font-size: 11px; }

    /* ── Sections & cards ── */
    .method-section { padding: 12px 0; }
    .method-card { padding: 22px 18px; }

    /* one card per row everywhere */
    .source-grid,
    .insights-grid,
    .dimension-grid,
    .pipeline-cards {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    /* flow steps stack vertically, arrows turn downward */
    .flow-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    .flow-arrow {
        transform: rotate(90deg);
        height: 20px;
        width: 100%;
    }

    /* ── About Data 123: COMING NEXT pill on top, text below ── */
    .conclusion-section { padding: 12px 0; }
    .conclusion-card { padding: 24px 20px 20px; border-radius: 24px; }
    .conclusion-card h2 { font-size: 22px; }
    .policy-panel {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .policy-tag { white-space: normal; }

    /* ── Navigation buttons: full width, centered ── */
    .page-nav { flex-direction: column; align-items: stretch; }
    .page-nav a {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        text-align: center;
    }
}
</style>

```sql pub_facts
select
  146529  as total_offences,
  14560   as serious_offences,
  5929    as victims_analysed,
  5766    as perpetrators_analysed,
  17      as police_districts,
  11      as serious_offences_analysed,
  2540215 as population_2024
from insights.crime_totals
where year = 2024
limit 1
```

```sql offence_list
SELECT
    offence,
    cases_2024
FROM insights.offence_list2024
ORDER BY cases_2024 DESC;
```

<!-- =====================================================
HERO
===================================================== -->

<div class="hero">
  <p class="hero-meta">Botswana Police Service · Annual Crime Statistics Report</p>
  <h1>Methodology &amp; Notes</h1>
  <p class="hero-summary">Data source, collection methodology, analytical approach, known limitations, and citation guidance for the Botswana Annual Crime Statistics Report 2024. Every dataset has limitations — understanding them is part of understanding the findings. Reading this page before drawing policy conclusions is strongly recommended.</p>
  <div class="hero-tags">
    <span class="hero-tag">Reference period: 1 Jan – 31 Dec 2024</span>
    <span class="hero-tag">Population: 2,540,215</span>
    <span class="hero-tag">Source: Botswana Police Service</span>
    <span class="hero-tag">A DATA 123 Intelligence Publication</span>
  </div>
</div>

<div style="margin-bottom: 24px;"></div>

{#if pub_facts.ready}
<section class="snapshot-section">
    <div class="snapshot-grid">

        <!-- Total Offences -->
        <div class="snapshot-card">
            <div class="snapshot-value">{pub_facts[0].total_offences.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Total Offences Covered</div>
        </div>

        <!-- Serious Offences -->
        <div class="snapshot-card">
            <div class="snapshot-value">{pub_facts[0].serious_offences.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Serious Offences Analysed</div>
        </div>

        <!-- Victims -->
        <div class="snapshot-card">
            <div class="snapshot-value">{pub_facts[0].victims_analysed.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Victims Profiled</div>
        </div>

        <!-- Perpetrators -->
        <div class="snapshot-card">
            <div class="snapshot-value">{pub_facts[0].perpetrators_analysed.toLocaleString('en-US')}</div>
            <div class="snapshot-label">Perpetrators Profiled</div>
        </div>

        <!-- Districts -->
        <div class="snapshot-card">
            <div class="snapshot-value">{pub_facts[0].police_districts}</div>
            <div class="snapshot-label">Police Districts</div>
        </div>

    </div>
</section>
{/if}


<!-- =====================================================
SECTION 1 — ABOUT THIS PUBLICATION
===================================================== -->
<span class="section-label">About This Publication</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">Who Produced This Report?</span>
    </div>

    <div class="method-card">
        <h3>An Independent Analytical Publication</h3>
        <p>This publication — <strong>Annual Crime Statistics Report 2024</strong> — is produced by Data 123 as part of the open intelligence series at insights.data123.online. It is an independent analytical publication based entirely on data released by the Botswana Police Service in their official Annual Crime Statistics Report 2024.</p>
        <p>Data 123 did not collect, verify, or audit the underlying crime data. All figures in this publication are drawn directly and exclusively from BPS source tables. Data 123's contribution is the extraction, structuring, visualisation, and analytical commentary — not the primary data itself.</p>
    </div>

</section>


<!-- =====================================================
SECTION 2 — PRIMARY DATA SOURCE
===================================================== -->
<span class="section-label">Primary Data Source</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">Where Does the Data Come From?</span>
    </div>

    <div class="method-card">
        <h3>Botswana Police Service — Annual Crime Statistics Report 2024</h3>
        <p>The BPS Annual Crime Statistics Report is an official government publication produced annually under the Police Sector Statistics Plan. It has been published consistently for over eight years and represents the authoritative source of crime data for Botswana.</p>

        <div class="source-grid">
            <div class="source-stat blue">
                <div class="source-stat-label">Publisher</div>
                <div class="source-stat-value">Botswana Police Service (BPS)</div>
            </div>
            <div class="source-stat orange">
                <div class="source-stat-label">Reference Period</div>
                <div class="source-stat-value">1 January – 31 December 2024</div>
            </div>
            <div class="source-stat purple">
                <div class="source-stat-label">Geographic Coverage</div>
                <div class="source-stat-value">All 17 police districts across 5 police divisions — national coverage</div>
            </div>
            <div class="source-stat green">
                <div class="source-stat-label">Population Estimates</div>
                <div class="source-stat-value">Statistics Botswana, Population Projections 2011–2026 · 2024 estimate: 2,540,215</div>
            </div>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 2B — DATA CURRENCY & UPDATE CYCLE
===================================================== -->
<span class="section-label">Data Currency &amp; Update Cycle</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">How Current Is This Data?</span>
    </div>

    <div class="method-card">
        <h3>Why This Publication Ends at 2024</h3>
        <p>The Botswana Police Service publishes two distinct documents on its official website: the <strong>BPS Annual Report</strong> — a corporate report covering the organisation's operations, of which the latest edition covers 2025 — and the <strong>Annual Crime Statistics Report</strong>, the detailed statistical release that powers this dashboard.</p>
        <p>The Annual Crime Statistics Report is currently available for the years <strong>2022, 2023, and 2024</strong>. The 2024 edition is therefore the most recent official crime statistics release that exists — this publication is not out of date; it reflects the latest data the Botswana Police Service has published.</p>

        <div class="source-grid">
            <div class="source-stat blue">
                <div class="source-stat-label">This Publication's Data Vintage</div>
                <div class="source-stat-value">2024 — the latest available Annual Crime Statistics Report</div>
            </div>
            <div class="source-stat purple">
                <div class="source-stat-label">Crime Statistics Reports Available</div>
                <div class="source-stat-value">2022 · 2023 · 2024 (BPS official website)</div>
            </div>
            <div class="source-stat orange">
                <div class="source-stat-label">2025 Crime Statistics</div>
                <div class="source-stat-value">Pending official release by the Botswana Police Service</div>
            </div>
            <div class="source-stat green">
                <div class="source-stat-label">Update Commitment</div>
                <div class="source-stat-value">This publication is updated within weeks of each new BPS statistics release</div>
            </div>
        </div>
    </div>

    <div class="structure-insight">
        <div class="si-icon">📅</div>
        <div>
            <h4>"Data Last Updated" vs Data Vintage</h4>
            <p>The "Data last updated" timestamp at the bottom of this page reflects when our data warehouse was last refreshed — not the reference period of the underlying statistics, which remains 2024 until the BPS releases its next Annual Crime Statistics Report. To be notified when the 2025 data goes live, contact <strong>info@data123.online</strong>.</p>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 3 — HOW THE DATA WAS COLLECTED
===================================================== -->
<span class="section-label">Data Collection</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">How Was the Data Collected?</span>
    </div>

    <div class="method-card">
        <h3>From Case Docket to Annual Report</h3>
        <p>Primary data is collected by the Botswana Police Service from victims and perpetrators using the Case Docket system. Data from completed Case Dockets is transferred to the Crime Register, where updates are made regularly as investigations progress.</p>

        <div class="flow-grid">
            <div class="flow-card">
                <div class="flow-icon">📋</div>
                <div class="flow-step">Step 1 · Case Docket</div>
                <div class="flow-title">Form BP 19 + Statements + Diaries</div>
                <div class="flow-desc">Complaint Form completed at the time of reporting, written accounts from victims, witnesses and perpetrators, and investigative records updated as cases progress.</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
                <div class="flow-icon">🗃️</div>
                <div class="flow-step">Step 2 · Crime Register</div>
                <div class="flow-title">Central Record of Offences</div>
                <div class="flow-desc">Completed Case Docket data is transferred to the Crime Register and updated regularly as investigations progress.</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
                <div class="flow-icon">🧮</div>
                <div class="flow-step">Step 3 · Analysis</div>
                <div class="flow-title">BPS Data Collection Tool</div>
                <div class="flow-desc">The Crime Register is analysed through the BPS Crime Statistics Data Collection Tool to produce aggregate tables.</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-card">
                <div class="flow-icon">📊</div>
                <div class="flow-step">Step 4 · Publication</div>
                <div class="flow-title">Annual Report Tables</div>
                <div class="flow-desc">Aggregate tables form the basis of the official Annual Crime Statistics Report published by BPS.</div>
            </div>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 4 — SCOPE OF THE 2024 REPORT
===================================================== -->
<span class="section-label">Scope of the 2024 Report</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">What Does the Report Cover?</span>
    </div>

    <div class="insights-grid">

        <div class="insight-card">
            <div class="insight-icon primary">⚖️</div>
            <h3>Penal Code Offences — 73.5% of Recorded Crime</h3>
            <p>Crimes defined under the Botswana Penal Code (Cap. 08:01) — 107,757 cases in 2024. The Penal Code is organised into ten categories covering offences against persons, property, public order, and the administration of lawful authority.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon purple">📜</div>
            <h3>Other Statutes — 26.5% of Recorded Crime</h3>
            <p>Offences defined in legislation outside the Penal Code, primarily regulatory violations — 38,772 cases in 2024. Road traffic offences (345,857 in 2024) are reported separately and excluded from the serious offences analysis.</p>
        </div>

    </div>

    <div style="margin-top: 24px;"></div>

    <div class="method-card">
        <h3>Eleven Selected Serious Offences</h3>
        <p>The report provides deep analysis of eleven selected serious offences — these are the crimes examined with full demographic breakdowns of victims and perpetrators.</p>
        <DataTable data={offence_list} search=false rows=11 downloadable=false>
            <Column id="offence" title="Offence" />
            <Column id="cases_2024" fmt='#,##0' title="Cases 2024" />
        </DataTable>
    </div>  

</section>


<!-- =====================================================
SECTION 5 — WHAT IS ANALYSED
===================================================== -->
<span class="section-label">Analytical Dimensions</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">What Is Analysed for Each Serious Offence?</span>
    </div>

    <div class="dimension-grid">

        <div class="dimension-card">
            <h4>📍 Event Description</h4>
            <div class="dim-sub">The circumstances of the incident</div>
            <ul>
                <li>Time of day and day of week (2-hour bands across 7 days)</li>
                <li>Month of year</li>
                <li>Location type</li>
                <li>Weapon or implement used (where applicable)</li>
                <li>Motive (murder and threat to kill only)</li>
                <li>Point of entry (breaking offences only)</li>
            </ul>
        </div>

        <div class="dimension-card green">
            <h4>🛡️ Victim Description</h4>
            <div class="dim-sub">Characteristics of the person harmed</div>
            <ul>
                <li>Age group and sex</li>
                <li>Marital status</li>
                <li>Education level attained</li>
                <li>Employment status</li>
                <li>Relationship to the perpetrator (selected offences)</li>
            </ul>
        </div>

        <div class="dimension-card orange">
            <h4>👤 Perpetrator Description</h4>
            <div class="dim-sub">Characteristics of the person who offended</div>
            <ul>
                <li>Age group and sex</li>
                <li>Marital status</li>
                <li>Education level attained</li>
                <li>Employment status</li>
            </ul>
        </div>

    </div>

    <div class="structure-insight">
        <div class="si-icon">⚡</div>
        <div>
            <h4>Why Perpetrator Counts Are Lower Than Case Counts</h4>
            <p>Perpetrator data covers only individuals who had been dealt with by the police at the time of reporting. The perpetrator counts in this publication are therefore lower than case counts — not every identified offender had been processed by the time the report was compiled.</p>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 6 — HOW DATA 123 PROCESSED THE DATA
===================================================== -->
<span class="section-label">How Data 123 Processed the Data</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">Pipeline Architecture</span>
    </div>

    <div class="flow-grid">
        <div class="flow-card">
            <div class="flow-icon">📄</div>
            <div class="flow-step">Extract</div>
            <div class="flow-title">PDF → Structured Tables</div>
            <div class="flow-desc">Source tables extracted from the official BPS PDF publication into structured data.</div>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-card">
            <div class="flow-icon">⚙️</div>
            <div class="flow-step">Transform</div>
            <div class="flow-title">Clean, Normalise, Validate</div>
            <div class="flow-desc">Raw tables cleaned and reshaped into a consistent analytical schema.</div>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-card">
            <div class="flow-icon">🗄️</div>
            <div class="flow-step">Load</div>
            <div class="flow-title">Cloud Data Warehouse</div>
            <div class="flow-desc">Validated tables loaded into a cloud warehouse as the single source of truth.</div>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-card">
            <div class="flow-icon">📊</div>
            <div class="flow-step">Publish</div>
            <div class="flow-title">Live Queries at Build Time</div>
            <div class="flow-desc">Every chart and table on this site is queried directly from the warehouse.</div>
        </div>
    </div>

    <div class="pipeline-cards">
        <div class="pipeline-card">
            <div class="pipeline-icon">💻</div>
            <div class="pipeline-title">In-House ETL</div>
            <div class="pipeline-body">Pipeline designed and built entirely by the Data 123 engineering team — no off-the-shelf tools.</div>
        </div>
        <div class="pipeline-card">
            <div class="pipeline-icon">🗂️</div>
            <div class="pipeline-title">Schema Design</div>
            <div class="pipeline-body">26-table normalised schema with views, handling three incompatible source taxonomies.</div>
        </div>
        <div class="pipeline-card">
            <div class="pipeline-icon">✅</div>
            <div class="pipeline-title">Validation</div>
            <div class="pipeline-body">Automated quality checks on every table — schema, uniqueness, completeness, and range.</div>
        </div>
        <div class="pipeline-card">
            <div class="pipeline-icon">🔄</div>
            <div class="pipeline-title">Repeatable</div>
            <div class="pipeline-body">Pipeline re-runs annually when new BPS data is published — no manual rework required.</div>
        </div>
    </div>

    <div class="structure-insight">
        <div class="si-icon">🏗️</div>
        <div>
            <h4>Same Architecture, Every Sector</h4>
            <p>The infrastructure powering this publication is the same platform Data 123 deploys across education, tourism, and labour market intelligence. Contact <strong>info@data123.online</strong> for data engineering and analytics services.</p>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 7 — KNOWN LIMITATIONS
===================================================== -->
<span class="section-label">Known Limitations</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">What Should You Keep in Mind?</span>
    </div>

    <div class="insights-grid">

        <div class="insight-card">
            <div class="insight-icon danger">⚠</div>
            <h3>Reported Crimes Only</h3>
            <p>All figures reflect crimes reported to the police and recorded in the Crime Register. Actual incidence is higher for every category — the gap is largest for gender-based violence and human trafficking, where stigma, fear, and lack of awareness create barriers to reporting. Every figure is a floor, not a ceiling.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon warning">🔍</div>
            <h3>Ongoing Investigations</h3>
            <p>The report analyses cases recorded during 2024 whether completed or not. Some facts and descriptions may change once cases progress beyond preliminary investigations — perpetrator characteristics in particular may be updated as investigations conclude.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon warning">👤</div>
            <h3>Perpetrator Undercounting</h3>
            <p>Perpetrator data covers only individuals dealt with by the police at the time of reporting. For most offences, recorded perpetrators are substantially fewer than cases — many offenders had not yet been identified, arrested, or processed when the report was compiled.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon danger">🦠</div>
            <h3>The 2020 Anomaly</h3>
            <p>The 22.8% decline in 2020 reflects COVID-19 restrictions on both criminal activity and reporting capacity. The 2021–2022 increases partially reflect reporting catch-up. Year-on-year comparisons involving 2020 should be treated with caution.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon purple">📏</div>
            <h3>Defilement Age Band Incompatibility</h3>
            <p>Defilement uses a compressed 16–18 age band for victims, while all other offences use a standard 16–20 band. Cross-offence age comparisons in this range are not directly comparable — flagged in the database with an <code>age_band_note</code> field.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon purple">🗺️</div>
            <h3>North West Division Historical Gap</h3>
            <p>The North West Police Division was established in 2022. Data is absent (NULL, not zero) for 2019–2021. National averages and growth rates spanning the full six-year period should account for this gap.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon primary">📍</div>
            <h3>Location Taxonomy Differences</h3>
            <p>Three incompatible location systems are used: robbery uses four categories, stock theft uses a five-category rural system, and all other offences use a nine-category standard system. Direct location comparisons across these groups are not valid.</p>
        </div>

        <div class="insight-card">
            <div class="insight-icon primary">👥</div>
            <h3>Population Estimates Are Projections</h3>
            <p>Rates per 10,000 or 100,000 use Statistics Botswana projections from 2015, not census counts, and carry their own uncertainty. The 2024 estimate used is 2,540,215.</p>
        </div>

    </div>

</section>


<!-- =====================================================
SECTION 8 — ANALYTICAL APPROACH
===================================================== -->
<span class="section-label">Analytical Approach</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">How Does Data 123 Interpret the Data?</span>
    </div>

    <div class="method-card">
        <h3>Independent Commentary, Grounded in the Source Tables</h3>
        <p>All analytical commentary in this publication represents the independent interpretation of Data 123 analysts based on the BPS data. Commentary reflects patterns visible in the data and does not represent the views of the Botswana Police Service or any government body.</p>
        <p>Where the data shows a clear directional finding — for example, the consistent unemployment correlation across perpetrator profiles — the commentary states this directly. Where findings are ambiguous or require contextual interpretation — for example, the sharp decline in human trafficking cases — the commentary explicitly flags the interpretive uncertainty.</p>
    </div>

    <div class="structure-insight">
        <div class="si-icon">⚡</div>
        <div>
            <h4>No Modelling, No Interpolation</h4>
            <p>No data has been modelled, interpolated, or estimated beyond what is present in the BPS source tables. Every chart and table in this publication is directly queryable against the <code>crime_stats</code> database schema.</p>
        </div>
    </div>

</section>


<!-- =====================================================
SECTION 9 — HOW TO CITE
===================================================== -->
<span class="section-label">How to Cite This Publication</span>

<section class="method-section">

    <div class="section-heading">
        <span class="section-tag">Attribution Guidance</span>
    </div>

    <div class="method-card">

        <div class="cite-block">
            <div class="cite-label">Citing the Underlying Data</div>
            <p class="cite-text">Botswana Police Service (2025). Annual Crime Statistics Report 2024. Botswana Police Service, Gaborone.</p>
        </div>

        <div class="cite-block">
            <div class="cite-label">Citing This Publication</div>
            <p class="cite-text">Data 123 (2025). Annual Crime Statistics Report 2024 — Intelligence Publication. Data 123, Gaborone. insights.data123.online/crime-statistics-2024. Retrieved [date].</p>
        </div>

        <div class="cite-block">
            <div class="cite-label">Citing a Specific Finding</div>
            <p class="cite-text">Data 123 (2025), citing Botswana Police Service (2025). [Finding]. Annual Crime Statistics Report 2024 — Intelligence Publication. insights.data123.online/crime-statistics-2024.</p>
        </div>

        <p style="margin-top: 16px; font-size: 13px; color: #64748b;">Reproduction of charts and written analysis from this publication is permitted provided both the Botswana Police Service (as the primary data source) and Data 123 (as the analytical publisher) are attributed.</p>

    </div>

</section>


<!-- =====================================================
SECTION 10 — ABOUT DATA 123
===================================================== -->
<span class="section-label">About Data 123</span>

<section class="conclusion-section">

    <div class="conclusion-card">

        <div class="conclusion-label">
            ABOUT DATA 123
        </div>

        <h2>
            Open Intelligence for Botswana —
            Built on Official Data
        </h2>

        <p class="conclusion-insight">
            Data 123 is a Botswana data consultancy providing research,
            analytics, and intelligence services to organisations across
            the public and private sectors. The Insights Hub at
            insights.data123.online is a series of open intelligence
            publications — annual reports, data visualisations, and
            analytical commentary published freely for organisations
            and individuals across Botswana.
        </p>

        <div class="conclusion-divider"></div>

        <div class="policy-panel">

            <div class="policy-tag">
                COMING NEXT
            </div>

            <p>
                Future publications in this series include Education Statistics 2025,
                Tourism Intelligence 2025, and Labour Market Intelligence 2025.<br>
                <strong>Contact:</strong> info@data123.online · +267 71 965 383 · data123.online
            </p>

        </div>

    </div>

</section>

<LastRefreshed prefix="Data last updated"/>

<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/overview">
    ← Page 1: National Overview
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious Offences
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/crime-profiles">
    ← Page 3: District Profiles
  </LinkButton>
</div>
