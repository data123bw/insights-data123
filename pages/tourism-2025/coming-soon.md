---
title: Tourism & Hospitality — Coming Soon
sidebar_position: 1
---

<style>
/* ── Coming-soon hero ── */
.cs-hero {
  position: relative;
  background: #1E3A5F;
  border-radius: 20px;
  padding: 64px 48px 56px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 8px 40px rgba(0,0,0,0.25);
  margin-bottom: 28px;
  text-align: center;
}
.cs-orb-a {
  position: absolute;
  width: 420px; height: 420px;
  right: -100px; top: -120px;
  background: #3EC58E;
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}
.cs-orb-b {
  position: absolute;
  width: 340px; height: 340px;
  left: -80px; bottom: -100px;
  background: #0042A0;
  opacity: 0.15;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}
.cs-inner { position: relative; max-width: 720px; margin: 0 auto; }
.cs-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(62,197,142,0.12);
  border: 1px solid rgba(62,197,142,0.35);
  border-radius: 999px;
  padding: 7px 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6EE7B7;
  margin-bottom: 22px;
}
.cs-pill .dot {
  width: 7px; height: 7px;
  background: #3EC58E;
  border-radius: 50%;
  animation: cs-pulse 1.6s ease-in-out infinite;
}
@keyframes cs-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(0.7); }
}
.cs-icon { font-size: 44px; margin-bottom: 14px; }
.cs-hero h1 {
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 16px;
}
.cs-hero h1 em { color: #3EC58E; font-style: normal; }
.cs-sub {
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255,255,255,0.65);
  max-width: 58ch;
  margin: 0 auto 30px;
}
.cs-eta {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  background: rgba(15,23,42,0.5);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 12px 22px;
}
.cs-eta-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
}
.cs-eta-value {
  font-size: 18px;
  font-weight: 900;
  font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;
  color: #3EC58E;
}

/* ── Build progress ── */
.cs-progress {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 0 0 40px;
}
.cs-step {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-top: 3px solid #CBD5E1;
  border-radius: 12px;
  padding: 14px 16px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.cs-step:hover { transform: translateY(-3px); box-shadow: 0 8px 22px rgba(0,0,0,0.08); }
.cs-step.active  { border-top-color: #3EC58E; }
.cs-step.pending { opacity: 0.65; }
.cs-step-num {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94A3B8;
  margin-bottom: 4px;
}
.cs-step.active .cs-step-num { color: #166534; }
.cs-step-name { font-size: 13px; font-weight: 800; color: #2D3748; }
.cs-step-state { font-size: 10.5px; color: #718096; margin-top: 3px; }
.cs-step.active .cs-step-state { color: #166534; font-weight: 700; }

/* ── Coverage cards ── */
.cs-section-label {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #0042A0;
  padding-left: 14px;
  border-left: 3px solid #0042A0;
  margin: 0 0 18px;
}
.cs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 40px;
}
.cs-card {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-left: 4px solid #E2E8F0;
  border-radius: 12px;
  padding: 20px 22px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.cs-card:hover { transform: translateY(-3px); }
.cs-card.blue   { border-left-color: #0042A0; }
.cs-card.green  { border-left-color: #3EC58E; }
.cs-card.purple { border-left-color: #9A67FD; }
.cs-card.orange { border-left-color: #FF9F43; }
.cs-card.blue:hover   { box-shadow: 0 10px 24px rgba(0,66,160,0.15); }
.cs-card.green:hover  { box-shadow: 0 10px 24px rgba(62,197,142,0.18); }
.cs-card.purple:hover { box-shadow: 0 10px 24px rgba(154,103,253,0.18); }
.cs-card.orange:hover { box-shadow: 0 10px 24px rgba(255,159,67,0.18); }
.cs-card-icon { font-size: 22px; margin-bottom: 8px; }
.cs-card h3 {
  font-size: 14px;
  font-weight: 800;
  color: #2D3748;
  letter-spacing: -0.01em;
  margin: 0 0 6px;
}
.cs-card p {
  font-size: 12.5px;
  line-height: 1.65;
  color: #4A5568;
  margin: 0;
}

/* ── Notify CTA ── */
.cs-cta {
  background: #2D3748;
  border-radius: 14px;
  padding: 32px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.cs-cta-title { font-size: 17px; font-weight: 800; color: #fff; margin: 0 0 4px; }
.cs-cta-sub { font-size: 13px; color: rgba(255,255,255,0.6); margin: 0; }
.cs-cta-btn {
  display: inline-block;
  background: #3EC58E;
  color: #0B2545;
  font-size: 13px;
  font-weight: 800;
  padding: 12px 22px;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  white-space: nowrap;
}
.cs-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(62,197,142,0.4);
  text-decoration: none;
}

@media (max-width: 700px) {
  .cs-hero { padding: 40px 22px 36px; }
  .cs-progress { grid-template-columns: 1fr 1fr; }
  .cs-grid { grid-template-columns: 1fr; }
  .cs-cta { padding: 24px 22px; }
}
.page-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
}
@media (max-width: 768px) {
    .page-nav { flex-direction: column; align-items: stretch; }
    .page-nav a {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        text-align: center;
    }
}
</style>

<div class="cs-hero">
  <div class="cs-orb-a"></div>
  <div class="cs-orb-b"></div>
  <div class="cs-inner">
    <div class="cs-pill"><span class="dot"></span> In the Pipeline · DATA123 Insights Hub</div>
    <div class="cs-icon">🏨</div>
    <h1>Tourism &amp; Hospitality <em>Intelligence Report</em></h1>
    <p class="cs-sub">Arrivals, occupancy, seasonality, and the economic footprint of Botswana's tourism sector — from the Okavango Delta to the Kgalagadi. The full interactive report is currently in production.</p>
    <div class="cs-eta">
      <span class="cs-eta-label">Expected release</span>
      <span class="cs-eta-value">2026</span>
    </div>
  </div>
</div>

<div class="cs-progress">
  <div class="cs-step active">
    <div class="cs-step-num">Stage 01</div>
    <div class="cs-step-name">Data Sourcing</div>
    <div class="cs-step-state">In progress</div>
  </div>
  <div class="cs-step pending">
    <div class="cs-step-num">Stage 02</div>
    <div class="cs-step-name">Modelling</div>
    <div class="cs-step-state">Up next</div>
  </div>
  <div class="cs-step pending">
    <div class="cs-step-num">Stage 03</div>
    <div class="cs-step-name">Report Design</div>
    <div class="cs-step-state">Planned</div>
  </div>
  <div class="cs-step pending">
    <div class="cs-step-num">Stage 04</div>
    <div class="cs-step-name">Publication</div>
    <div class="cs-step-state">Planned</div>
  </div>
</div>

<span class="cs-section-label">What this report will cover</span>

<div class="cs-grid">
  <div class="cs-card blue">
    <div class="cs-card-icon">✈️</div>
    <h3>International Arrivals &amp; Source Markets</h3>
    <p>Visitor volumes by origin country, port of entry, and purpose of visit — with year-on-year trends and seasonality patterns.</p>
  </div>
  <div class="cs-card green">
    <div class="cs-card-icon">🛏️</div>
    <h3>Accommodation &amp; Occupancy</h3>
    <p>Hotel, lodge, and camp occupancy rates, bed-night trends, and capacity distribution across tourism regions.</p>
  </div>
  <div class="cs-card purple">
    <div class="cs-card-icon">🐘</div>
    <h3>Parks, Reserves &amp; Visitation</h3>
    <p>Visitation across protected areas — from the Delta and Chobe to the Kgalagadi — and what it means for conservation-led tourism.</p>
  </div>
  <div class="cs-card orange">
    <div class="cs-card-icon">💰</div>
    <h3>Economic Footprint</h3>
    <p>Tourism receipts, employment, and the sector's contribution to GDP — benchmarked against regional peers.</p>
  </div>
</div>

<div class="cs-cta">
  <div>
    <p class="cs-cta-title">Want to know the moment it goes live?</p>
    <p class="cs-cta-sub">Get notified on release, or commission a custom intelligence publication for your sector.</p>
  </div>
  <a class="cs-cta-btn" href="mailto:info@data123.online?subject=Notify%20me%20—%20Tourism%20Intelligence%20Report">Notify me →</a>
</div>

<div class="page-nav">
  <LinkButton url="/">← Back to the Insights Hub</LinkButton>
  <LinkButton url="/crime-statistics-2024/overview">Explore the Crime Report →</LinkButton>
</div>
