---
title: Insights Hub
hide_title: true
---

<style>
/* =====================================================
HERO
===================================================== */
.hub-hero {
    background:
        radial-gradient(ellipse at 85% 15%, rgba(81,173,223,0.35), transparent 55%),
        radial-gradient(ellipse at 10% 90%, rgba(154,214,225,0.18), transparent 50%),
        linear-gradient(135deg, #3d1b52 0%, #723495 55%, #5a2a78 100%);
    color: white;
    padding: 64px 40px 140px;
    border-radius: 16px;
    margin-top: -26px; /* cancel the layout's top gap so the hero starts at the top */
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
}
@media (max-width: 639px) {
    .hub-hero { margin-top: -16px; }
}

.hub-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E");
    pointer-events: none;
}

.hub-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.22);
    color: #9AD6E1;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 24px;
}

.hub-hero h1 {
    color: white;
    font-size: 46px;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.08;
    margin: 0 0 8px;
    max-width: 18ch;
}

.hub-hero h1 .accent {
    background: linear-gradient(90deg, #9AD6E1, #51ADDF);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hub-hero-summary {
    color: rgba(255,255,255,0.82);
    font-size: 17px;
    line-height: 1.7;
    margin: 20px 0 32px;
    max-width: 62ch;
}

.hub-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
}

.hub-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #51ADDF;
    color: #0f172a !important;
    font-size: 14px;
    font-weight: 700;
    padding: 13px 26px;
    border-radius: 999px;
    text-decoration: none !important;
    transition: all .25s ease;
    box-shadow: 0 8px 24px rgba(81,173,223,0.35);
}

.hub-cta:hover {
    transform: translateY(-2px);
    background: #9AD6E1;
    box-shadow: 0 12px 30px rgba(81,173,223,0.5);
}

.hub-cta-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.85) !important;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 22px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.3);
    text-decoration: none !important;
    transition: all .25s ease;
}

.hub-cta-ghost:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.5);
}

/* =====================================================
STAT STRIP (overlapping hero)
===================================================== */
.hub-stats {
    position: relative;
    margin-top: -70px;
    z-index: 10;
    padding: 0 32px;
}

.hub-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.hub-stat-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 24px 26px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.04),
        0 18px 32px rgba(0,0,0,.05);
    transition: all .25s ease;
}

.hub-stat-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.hub-stat-value {
    font-size: 28px;
    font-weight: 800;
    color: #723495;
    line-height: 1;
}

.hub-stat-label {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: #334155;
}

/* =====================================================
SECTION LABELS
===================================================== */
.section-label {
    display: block;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #723495;
    padding-left: 16px;
    border-left: 3px solid #723495;
    margin: 48px 0 8px;
}

.section-heading {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 20px;
}

.section-tag {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 999px;
    background: #f1e8f7;
    color: #723495;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

/* =====================================================
FEATURED PUBLICATION (LIVE)
===================================================== */
.featured-section {
    padding: 20px;
}

.featured-card {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 28px;
    overflow: hidden;
    box-shadow:
        0 4px 8px rgba(0,0,0,.04),
        0 18px 32px rgba(0,0,0,.06);
    transition: all .25s ease;
}

.featured-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 28px 48px rgba(0,0,0,.1);
}

.featured-body {
    padding: 36px 38px;
    min-width: 0;
}

.featured-body p,
.featured-body h2 {
    overflow-wrap: break-word;
}

.live-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ecfdf5;
    color: #059669;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 999px;
    margin-bottom: 16px;
}

.live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    animation: pulse 1.8s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: .45; transform: scale(.8); }
}

.featured-body h2 {
    font-size: 26px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0 0 12px;
}

.featured-body p {
    font-size: 14px;
    line-height: 1.7;
    color: #64748b;
    margin: 0 0 20px;
}

.featured-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.featured-tag {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 11px;
    border-radius: 999px;
}

.featured-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #723495;
    color: white !important;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 26px;
    border-radius: 999px;
    text-decoration: none !important;
    transition: all .25s ease;
    box-shadow: 0 8px 20px rgba(114,52,149,0.3);
}

.featured-cta:hover {
    transform: translateY(-2px);
    background: #5a2a78;
    box-shadow: 0 12px 28px rgba(114,52,149,0.4);
}

.featured-currency {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 18px;
    background: #faf7fc;
    border-top: 1px solid #ede4f4;
    padding: 13px 38px;
    font-size: 12px;
    color: #64748b;
    line-height: 1.5;
}

.featured-currency .fc-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
}

.featured-currency .fc-item strong {
    color: #0f172a;
    font-weight: 700;
}

.featured-currency .fc-pending {
    color: #b45309;
    background: #fffbeb;
    border: 1px solid #fde68a;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
}

.featured-visual {
    min-width: 0;
    background:
        radial-gradient(ellipse at 20% 20%, rgba(154,214,225,0.3), transparent 60%),
        linear-gradient(160deg, #723495, #51ADDF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
    gap: 14px;
}

.mini-kpi {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(4px);
    border-radius: 16px;
    padding: 14px 18px;
    color: white;
}

.mini-kpi-value {
    font-size: 22px;
    font-weight: 800;
    line-height: 1;
}

.mini-kpi-label {
    margin-top: 6px;
    font-size: 11px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

/* =====================================================
COMING SOON GRID
===================================================== */
.pipeline-section {
    padding: 20px;
}

.pubs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.pub-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 26px;
    position: relative;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
    border-top: 4px solid #CDD6D8;
}

.pub-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.pub-card.c-blue   { border-top-color: #51ADDF; }
.pub-card.c-purple { border-top-color: #723495; }
.pub-card.c-teal   { border-top-color: #9AD6E1; }

.pub-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 14px;
    background: #f1e8f7;
}

.pub-card.c-blue .pub-icon { background: #e8f4fb; }
.pub-card.c-teal .pub-icon { background: #eef9fb; }

.soon-pill {
    position: absolute;
    top: 22px;
    right: 22px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
}

.pub-card h3 {
    font-size: 15px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
    margin: 0 0 8px;
}

.pub-card p {
    font-size: 12.5px;
    line-height: 1.6;
    color: #64748b;
    margin: 0;
}

.pub-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    background: #723495;
    color: white !important;
    font-size: 12.5px;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 999px;
    text-decoration: none !important;
    transition: all .25s ease;
    box-shadow: 0 6px 16px rgba(114,52,149,0.25);
    max-width: 100%;
    overflow-wrap: anywhere;
}

.pub-cta:hover {
    background: #5a2a78;
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(114,52,149,0.35);
}

/* =====================================================
HOW IT WORKS
===================================================== */
.how-section {
    padding: 20px;
}

.how-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.how-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 26px;
    box-shadow:
        0 4px 8px rgba(0,0,0,.03),
        0 18px 30px rgba(0,0,0,.04);
    transition: all .25s ease;
}

.how-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0,0,0,.08),
        0 25px 40px rgba(0,0,0,.08);
}

.how-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: #723495;
    color: white;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 14px;
}

.how-card:nth-child(2) .how-num { background: #51ADDF; }
.how-card:nth-child(3) .how-num { background: #9AD6E1; color: #0f172a; }

.how-card h3 {
    font-size: 15px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 8px;
}

.how-card p {
    font-size: 13px;
    line-height: 1.65;
    color: #64748b;
    margin: 0;
}

/* =====================================================
ABOUT / VISION
===================================================== */
.about-section {
    padding: 20px;
}

.about-card {
    background:
        radial-gradient(ellipse at 90% 10%, rgba(81,173,223,0.25), transparent 55%),
        linear-gradient(135deg, #2a1238, #4a1f63);
    border-radius: 32px;
    padding: 40px 40px 32px;
    color: white;
    position: relative;
    overflow: hidden;
}

.about-label {
    display: inline-flex;
    padding: 8px 16px;
    border-radius: 999px;
    background: rgba(255,255,255,.12);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .1em;
    color: #9AD6E1;
}

.about-card h2 {
    margin-top: 24px;
    font-size: 28px;
    font-weight: 800;
    line-height: 1.2;
    max-width: 800px;
    color: white;
    letter-spacing: -0.02em;
}

.about-text {
    margin-top: 20px;
    max-width: 1000px;
    font-size: 15px;
    line-height: 1.95;
    color: rgba(255,255,255,.85);
}

.about-divider {
    height: 1px;
    background: rgba(255,255,255,.15);
    margin: 28px 0;
}

.vision-panel {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.vision-tag {
    background: #51ADDF;
    color: #0f172a;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
}

.vision-panel p {
    font-size: 14.5px;
    line-height: 1.9;
    color: rgba(255,255,255,.9);
    max-width: 900px;
    margin: 0;
}

.about-footer {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.about-chip {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.18);
    color: rgba(255,255,255,0.8);
    font-size: 12px;
    font-weight: 500;
    padding: 5px 13px;
    border-radius: 999px;
}

/* =====================================================
RESPONSIVE
===================================================== */
@media (max-width: 900px) {
    .hub-hero h1 { font-size: 34px; }
    .hub-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .featured-card { grid-template-columns: 1fr; }
    .pubs-grid, .how-grid { grid-template-columns: 1fr; }

    /* Vision: pill on top, text on the row below */
    .vision-panel {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .vision-tag { white-space: normal; }
}

@media (max-width: 640px) {
    .hub-hero { padding: 44px 22px 116px; }
    .hub-hero h1 { font-size: 29px; }
    .hub-hero-summary { font-size: 15px; }

    .hub-stats { padding: 0 14px; }
    .hub-stats-grid { gap: 12px; }
    .hub-stat-card { padding: 18px 16px; border-radius: 16px; }
    .hub-stat-value { font-size: 22px; }
    .hub-stat-label { font-size: 11px; }

    .featured-section,
    .pipeline-section,
    .how-section,
    .about-section { padding: 12px 0; }

    .featured-body { padding: 26px 20px; }
    .featured-body h2 { font-size: 21px; }
    .featured-visual { padding: 24px 20px; }
    .featured-currency { padding: 13px 20px; gap: 8px 14px; }

    .about-card { padding: 28px 22px 26px; border-radius: 24px; }
    .about-card h2 { font-size: 22px; }
}
</style>


<!-- =====================================================
HERO
===================================================== -->

<div class="hub-hero">
    <div class="hub-hero-badge">⬡ &nbsp;Insights Hub · Open Intelligence Series</div>
    <h1>Intelligence for <span class="accent">decision-makers</span> in Botswana.</h1>
    <p class="hub-hero-summary">Annual reports, live dashboards, and analytical commentary — published openly so that organisations across Botswana can make better decisions.</p>
    <div class="hub-hero-actions">
        <a class="hub-cta" href="/crime-statistics-2024/overview">Explore the 2024 Crime Intelligence Dashboard →</a>
        <a class="hub-cta-ghost" href="https://www.data123.online">About Data 123</a>
    </div>
</div>

<div style="margin-bottom: 24px;"></div>

<!-- =====================================================
STAT STRIP
===================================================== -->

<section class="hub-stats">
    <div class="hub-stats-grid">
        <div class="hub-stat-card">
            <div class="hub-stat-value">1</div>
            <div class="hub-stat-label">Live Intelligence Dashboard</div>
        </div>
        <div class="hub-stat-card">
            <div class="hub-stat-value">5</div>
            <div class="hub-stat-label">Publications in the Pipeline</div>
        </div>
        <div class="hub-stat-card">
            <div class="hub-stat-value">100%</div>
            <div class="hub-stat-label">Open &amp; Free to Access</div>
        </div>
        <div class="hub-stat-card">
            <div class="hub-stat-value">🇧🇼</div>
            <div class="hub-stat-label">Built in Botswana, for Botswana</div>
        </div>
    </div>
</section>


<!-- =====================================================
LIVE NOW
===================================================== -->
<span class="section-label">Live Now</span>

<section class="featured-section">

    <div class="section-heading">
        <span class="section-tag">Our Flagship Publication</span>
    </div>

    <div class="featured-card">

        <div class="featured-body">
            <span class="live-pill"><span class="live-dot"></span> Live</span>
            <h2>Crime &amp; Public Safety Intelligence 2024</h2>
            <p>A complete interactive analysis of Botswana's national crime landscape — national trends since 2019, geographic distribution across all 17 police districts, deep profiles of 11 serious offences, and alignment with TNDP II and SDG 2030 development indicators. Built on official Botswana Police Service data.</p>
            <div class="featured-meta">
                <span class="featured-tag">4 interactive pages</span>
                <span class="featured-tag">17 police districts</span>
                <span class="featured-tag">11 serious offences profiled</span>
                <span class="featured-tag">Source: Botswana Police Service</span>
            </div>
            <a class="featured-cta" href="/crime-statistics-2024/overview">Open the Dashboard →</a>
        </div>

        <div class="featured-visual">
            <div class="mini-kpi">
                <div class="mini-kpi-value">146,529</div>
                <div class="mini-kpi-label">Offences Analysed</div>
            </div>
            <div class="mini-kpi">
                <div class="mini-kpi-value">↓ 6 Years</div>
                <div class="mini-kpi-label">of National Trend Data</div>
            </div>
            <div class="mini-kpi">
                <div class="mini-kpi-value">5,929</div>
                <div class="mini-kpi-label">Victim Profiles Examined</div>
            </div>
        </div>

        <div class="featured-currency">
            <span class="fc-item">📅 <strong>Data vintage: 2024</strong> — the latest official BPS crime statistics release</span>
            <span class="fc-pending">2025 statistics: pending BPS release</span>
            <span class="fc-item">Updated within weeks of each new release</span>
        </div>

    </div>

</section>


<!-- =====================================================
COMING SOON
===================================================== -->
<span class="section-label">In the Pipeline</span>

<section class="pipeline-section">

    <div class="section-heading">
        <span class="section-tag">Coming Soon to the Insights Hub</span>
    </div>

    <div class="pubs-grid">

        <div class="pub-card c-blue">
            <span class="soon-pill">Coming Soon</span>
            <div class="pub-icon">🏨</div>
            <h3>Tourism &amp; Hospitality Intelligence Report</h3>
            <p>Arrivals, occupancy, seasonality, and the economic footprint of Botswana's tourism sector — from the Delta to the Kgalagadi.</p>
        </div>

        <div class="pub-card c-purple">
            <span class="soon-pill">Coming Soon</span>
            <div class="pub-icon">📡</div>
            <h3>State of Digital Botswana — ICT &amp; Telecommunications</h3>
            <p>Connectivity, mobile penetration, internet adoption, and the digital infrastructure shaping Botswana's economy.</p>
        </div>

        <div class="pub-card c-teal">
            <span class="soon-pill">Coming Soon</span>
            <div class="pub-icon">💼</div>
            <h3>Labour Market &amp; Employment Intelligence Report</h3>
            <p>Employment, unemployment, wages, and workforce trends across sectors, regions, and demographics.</p>
        </div>

        <div class="pub-card c-purple">
            <span class="soon-pill">Coming Soon</span>
            <div class="pub-icon">🎓</div>
            <h3>Education Sector Intelligence Report</h3>
            <p>Enrolment, attainment, performance, and resourcing across Botswana's primary, secondary, and tertiary education system.</p>
        </div>

        <div class="pub-card c-blue">
            <span class="soon-pill">Coming Soon</span>
            <div class="pub-icon">🌾</div>
            <h3>Agriculture Intelligence Report</h3>
            <p>Production, livestock, rainfall patterns, and food security indicators for Botswana's agricultural sector.</p>
        </div>

        <div class="pub-card c-teal">
            <span class="soon-pill">Your Sector?</span>
            <div class="pub-icon">✉️</div>
            <h3>Commission a Custom Intelligence Publication</h3>
            <p>The platform behind this hub can power intelligence for any sector — tell us about your data.</p>
            <a class="pub-cta" href="mailto:info@data123.online">Contact Us</a>
        </div>

    </div>

</section>


<!-- =====================================================
HOW IT WORKS
===================================================== -->
<span class="section-label">How It Works</span>

<section class="how-section">

    <div class="section-heading">
        <span class="section-tag">From Official Data to Open Intelligence</span>
    </div>

    <div class="how-grid">

        <div class="how-card">
            <div class="how-num">1</div>
            <h3>Official Sources</h3>
            <p>Every publication is built exclusively on official data — government statistical releases, sector regulators, and national surveys. No estimates, no modelling beyond the source tables.</p>
        </div>

        <div class="how-card">
            <div class="how-num">2</div>
            <h3>Engineered Pipelines</h3>
            <p>Source documents are extracted, validated, and loaded into a cloud data warehouse through pipelines built in-house — every chart queries live, versioned data.</p>
        </div>

        <div class="how-card">
            <div class="how-num">3</div>
            <h3>Published Openly</h3>
            <p>Interactive dashboards and analytical commentary, free to access and free to cite — so the same intelligence is available to every organisation in Botswana.</p>
        </div>

    </div>

</section>


<!-- =====================================================
ABOUT DATA 123
===================================================== -->
<span class="section-label">About Data 123</span>

<section class="about-section">

    <div class="about-card">

        <span class="about-label">WHO WE ARE</span>

        <h2>Precise, actionable insights that fuel growth and empower data-driven decisions.</h2>

        <p class="about-text">
            At Data 123, we stand out as a premier provider of data analytics,
            business intelligence, and market research services in Botswana.
            Our expertise lies in delivering precise and actionable insights
            that fuel growth and empower well-informed, data-driven decisions.
            With our dedicated focus on accuracy and excellence, we help
            businesses unlock their true potential and stay ahead in a rapidly
            evolving market landscape.
        </p>

        <div class="about-divider"></div>

        <div class="vision-panel">
            <div class="vision-tag">OUR VISION</div>
            <p>
                To be the trusted partner for businesses seeking to leverage data
                analytics and market research to gain a competitive advantage.
                We strive to deliver tailored solutions that enable our clients
                to optimise their strategies, innovate with confidence, and
                achieve their business objectives.
            </p>
        </div>

        <div class="about-footer">
            <span class="about-chip">🌐 www.data123.online</span>
            <span class="about-chip">✉️ info@data123.online</span>
            <span class="about-chip">📞 +267 71 965 383</span>
            <span class="about-chip">📍 Gaborone, Botswana</span>
        </div>

    </div>

</section>
