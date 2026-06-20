---
title: Crime profiles
hide_title: true
sidebar_position: 3
---

<style>
/* ── Hero — dark intelligence brief ── */
.p3-hero {
  position: relative;
  background: #1E3A5F;
  border-radius: 20px;
  padding: 40px 44px 44px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 8px 40px rgba(0,0,0,0.25);
  margin-top: -26px; /* cancel the layout's top gap so the hero starts at the top */
  margin-bottom: 28px;
}
@media (max-width: 639px) {
  .p3-hero { margin-top: -16px; }
}
.p3-hero-orb-blue {
  width: 380px; height: 380px;
  right: -80px; top: -80px;
  background: #0042A0;
  opacity: 0.1;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(64px);
}
.p3-hero-orb-purple {
  width: 320px; height: 320px;
  left: 34%; bottom: -60px;
  background: #9A67FD;
  opacity: 0.05;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(64px);
}
.p3-hero-inner { position: relative; max-width: 860px; }
.p3-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(154,103,253,0.15);
  border: 1px solid rgba(154,103,253,0.3);
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #B48EFD;
  margin-bottom: 18px;
}
.p3-hero-h1 {
  font-size: clamp(26px, 4.5vw, 44px);
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 16px;
}
.p3-hero-body {
  font-size: 14px;
  line-height: 1.75;
  color: rgba(255,255,255,0.62);
  max-width: 72ch;
  margin: 0;
}
.p3-hero-body strong { color: #fff; font-weight: 600; }
.p3-hero-ribbon {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.p3-hero-kpi {
  background: rgba(15,23,42,0.5);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 0 18px 2px rgba(255,255,255,0.07), 0 2px 8px rgba(255,255,255,0.04);
}
.p3-hero-kpi-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.68);
  margin-bottom: 5px;
  display: block;
}
.p3-hero-kpi-num {
  font-size: 24px;
  font-weight: 900;
  font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 6px;
  display: block;
}
.p3-hero-kpi-num.white  { color: #fff; }
.p3-hero-kpi-num.orange { color: #FF9F43; }
.p3-hero-kpi-num.mint   { color: #3EC58E; }
.p3-hero-kpi-sub {
  font-size: 10px;
  font-weight: 500;
  display: block;
}
.p3-hero-kpi-sub.fuchsia { color: #E879F9; }
.p3-hero-kpi-sub.blue    { color: #60A5FA; }
.p3-hero-kpi-sub.slate   { color: rgba(255,255,255,0.58); }
.p3-hero-kpi-sub.emerald { color: #34D399; }

/* ── Executive KPI profile cards ── */
.p3-kpi-section-head {
  border-left: 4px solid #0042A0;
  padding-left: 14px;
  margin: 0 0 18px;
}
.p3-kpi-section-title {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2D3748;
  margin: 0 0 2px;
}
.p3-kpi-section-sub {
  font-size: 11px;
  color: #718096;
  font-weight: 500;
  margin: 0;
}
.p3-kpi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin: 0 0 48px;
}
.p3-profile-card {
  background: #fff;
  border: 1px solid rgba(226,232,240,0.8);
  border-radius: 18px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}
.p3-profile-card.victim:hover {
  border-color: rgba(154,103,253,0.5);
  box-shadow: 0 8px 28px rgba(154,103,253,0.15), 0 2px 8px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}
.p3-profile-card.perp:hover {
  border-color: rgba(0,66,160,0.5);
  box-shadow: 0 8px 28px rgba(0,66,160,0.15), 0 2px 8px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}
.p3-card-topbar { height: 5px; flex-shrink: 0; }
.p3-profile-card.victim .p3-card-topbar { background: #9A67FD; }
.p3-profile-card.perp   .p3-card-topbar { background: #0042A0; }
.p3-card-inner { padding: 22px 24px 24px; flex: 1; display: flex; flex-direction: column; }
.p3-card-head-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 18px;
  gap: 10px;
}
.p3-card-head-left { display: flex; align-items: center; gap: 12px; }
.p3-icon-box {
  width: 42px; height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.p3-profile-card.victim .p3-icon-box { background: #fdf4ff; border: 1px solid #f0e6ff; color: #C026D3; }
.p3-profile-card.perp   .p3-icon-box { background: #eff6ff; border: 1px solid #dbeafe; color: #0042A0; }
.p3-icon-box svg { width: 20px; height: 20px; }
.p3-card-title { font-size: 13px; font-weight: 700; color: #1a202c; margin: 0 0 2px; }
.p3-card-n { font-size: 10px; color: #9CA3AF; font-weight: 600; margin: 0; letter-spacing: 0.04em; }
.p3-card-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 11px;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
}
.p3-profile-card.victim .p3-card-badge { background: #fdf4ff; border: 1px solid #f0e6ff; color: #C026D3; }
.p3-profile-card.perp   .p3-card-badge { background: #eff6ff; border: 1px solid #dbeafe; color: #0042A0; }
.p3-mini-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 16px;
  flex: 1;
}
.p3-mini-stat {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 12px 10px;
}
.p3-mini-stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #6B7280;
  display: block;
  margin-bottom: 4px;
}
.p3-mini-stat-val {
  font-size: 18px;
  font-weight: 800;
  display: block;
  line-height: 1.1;
  margin-bottom: 3px;
}
.p3-profile-card.victim .p3-mini-stat-val { color: #7C3AED; }
.p3-profile-card.perp   .p3-mini-stat-val { color: #1D4ED8; }
.p3-mini-stat-caption {
  font-size: 9px;
  color: #9CA3AF;
  display: block;
  line-height: 1.3;
}
.p3-card-insight {
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 11px;
  line-height: 1.65;
  color: #374151;
  font-weight: 500;
  margin-top: auto;
}
.p3-profile-card.victim .p3-card-insight { background: rgba(253,244,255,0.6); border: 1px solid #f0e6ff; }
.p3-profile-card.perp   .p3-card-insight { background: rgba(239,246,255,0.6); border: 1px solid #dbeafe; }
.p3-card-insight strong { color: #1a202c; font-weight: 700; }

/* ── Section question header ── */
.p3-section-q { margin: 52px 0 6px; }
.p3-section-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #718096;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.p3-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}
.p3-dot.purple { background: #9A67FD; }
.p3-dot.indigo { background: #0042A0; }
.p3-dot.orange { background: #FF9F43; }
.p3-dot.mint   { background: #3EC58E; }
.p3-section-q h2 {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #2D3748;
  line-height: 1.2;
  margin: 0 0 8px;
}
.p3-section-q .p3-lead {
  font-size: 15px;
  line-height: 1.7;
  color: #4A5568;
  max-width: 72ch;
  margin: 0 0 24px;
}

/* ── Burden panels ── */
.p3-burden {
  border-radius: 12px;
  padding: 32px 44px;
  margin: 0 0 28px;
}
.p3-burden.purple {
  background: rgba(154,103,253,0.07);
  border: 1px solid rgba(154,103,253,0.2);
}
.p3-burden.indigo {
  background: rgba(0,66,160,0.06);
  border: 1px solid rgba(0,66,160,0.15);
}
.p3-burden-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.p3-burden.purple .p3-burden-label { color: #9A67FD; }
.p3-burden.indigo .p3-burden-label { color: #0042A0; }
.p3-burden-headline {
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 10px;
}
.p3-burden.purple .p3-burden-headline { color: #5b21b6; }
.p3-burden.indigo .p3-burden-headline { color: #0042A0; }
.p3-burden-sub {
  font-size: 15px;
  line-height: 1.7;
  color: #4A5568;
  margin: 0;
}
.p3-burden-sub strong { color: #2D3748; }

/* ── Insight note boxes ── */
.p3-insight {
  border-radius: 0 10px 10px 0;
  padding: 18px 24px;
  margin: 20px 0;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
}
.p3-insight.purple { border-left: 4px solid #9A67FD; background: #fff; }
.p3-insight.indigo { border-left: 4px solid #0042A0; background: rgba(0,66,160,0.04); border-radius: 8px; border-left-width: 4px; }
.p3-insight-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.p3-insight.purple .p3-insight-label { color: #9A67FD; }
.p3-insight.indigo .p3-insight-label { color: #0042A0; }
.p3-insight p {
  font-size: 13px;
  line-height: 1.7;
  color: #4A5568;
  margin: 0;
}
.p3-insight p strong { color: #2D3748; }

/* ── Unemployment reveal ── */
.p3-unemp-reveal {
  text-align: center;
  padding: 40px 32px;
  background: #fff;
  border-radius: 12px;
  border: 2px solid #FF9F43;
  margin: 0 0 20px;
  box-shadow: 0 4px 24px rgba(255,159,67,0.12);
}
.p3-big-claim {
  font-size: 22px;
  font-weight: 900;
  color: #2D3748;
  letter-spacing: -0.02em;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 auto 8px;
}
.p3-big-claim em { color: #FF9F43; font-style: normal; }
.p3-sub-claim {
  font-size: 13px;
  color: #718096;
  margin: 0;
}

/* Policy implication box */
.p3-policy-box {
  border-left: 4px solid #FF9F43;
  background: #fff;
  border-radius: 0 10px 10px 0;
  padding: 22px 28px;
  margin: 20px 0;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
}
.p3-policy-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c97a1e;
  margin-bottom: 8px;
}
.p3-policy-box p {
  font-size: 13px;
  line-height: 1.75;
  color: #4A5568;
  margin: 0;
}
.p3-policy-box p strong { color: #2D3748; }

/* ── Relationship split ── */
.p3-relo-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0 0 24px;
}
.p3-relo-panel {
  border-radius: 12px;
  padding: 28px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.p3-relo-panel:hover { transform: translateY(-3px); }
.p3-relo-panel.intimate {
  background: rgba(154,103,253,0.07);
  border: 1px solid rgba(154,103,253,0.2);
}
.p3-relo-panel.intimate:hover { box-shadow: 0 10px 26px rgba(154,103,253,0.18); }
.p3-relo-panel.stranger {
  background: rgba(0,66,160,0.06);
  border: 1px solid rgba(0,66,160,0.16);
}
.p3-relo-panel.stranger:hover { box-shadow: 0 10px 26px rgba(0,66,160,0.15); }
.p3-relo-type {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.p3-relo-panel.intimate .p3-relo-type { color: #9A67FD; }
.p3-relo-panel.stranger .p3-relo-type { color: #0042A0; }
.p3-relo-title {
  font-size: 17px;
  font-weight: 800;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
}
.p3-relo-panel.intimate .p3-relo-title { color: #5b21b6; }
.p3-relo-panel.stranger .p3-relo-title { color: #0042A0; }
.p3-relo-stats { list-style: none; padding: 0; margin: 0 0 18px; display: flex; flex-direction: column; gap: 0; }
.p3-relo-stats li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 12px;
  color: #4A5568;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.p3-relo-stats li:last-child { border-bottom: none; }
.p3-relo-stats li strong { font-weight: 700; font-size: 13px; color: #2D3748; }
.p3-levers-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #718096;
  margin-bottom: 8px;
}
.p3-levers { display: flex; flex-direction: column; gap: 5px; }
.p3-lever {
  font-size: 11px;
  color: #4A5568;
  display: flex;
  align-items: center;
  gap: 8px;
}
.p3-lever::before {
  content: '';
  width: 4px; height: 4px;
  border-radius: 50%;
  flex-shrink: 0;
}
.p3-relo-panel.intimate .p3-lever::before { background: #9A67FD; }
.p3-relo-panel.stranger .p3-lever::before { background: #0042A0; }

/* ── Section divider ── */
.p3-divider {
  height: 1px;
  background: linear-gradient(90deg, #dde2f0 0%, transparent 100%);
  margin: 52px 0;
}

/* ── Gov accountability console ── */
.p3-gov-console {
  position: relative;
  background: #1E3A5F;
  border-radius: 18px;
  padding: 26px 30px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  margin-bottom: 14px;
}
.p3-gov-console::after {
  content: '';
  position: absolute;
  right: -70px; top: -70px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: #3EC58E;
  opacity: 0.08;
  filter: blur(54px);
  pointer-events: none;
}
.p3-gov-console-head {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
}
.p3-gov-console-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(62,197,142,0.12);
  border: 1px solid rgba(62,197,142,0.3);
  border-radius: 8px;
  padding: 5px 11px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6EE7B7;
  margin-bottom: 12px;
}
.p3-gov-console-title {
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.01em;
  margin: 0 0 5px;
}
.p3-gov-console-sub {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
  margin: 0;
}
.p3-gov-chips { display: flex; gap: 10px; flex-wrap: wrap; }
.p3-gov-chip {
  display: flex;
  align-items: center;
  gap: 9px;
  background: rgba(15,23,42,0.5);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 11px;
  padding: 9px 13px;
  font-size: 10.5px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  max-width: 150px;
  line-height: 1.35;
}
.p3-gov-chip-num {
  font-size: 20px;
  font-weight: 900;
  font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;
  line-height: 1;
}
.p3-gov-chip.up    { border-color: rgba(62,197,142,0.4); }
.p3-gov-chip.up    .p3-gov-chip-num { color: #3EC58E; }
.p3-gov-chip.flux  { border-color: rgba(255,159,67,0.4); }
.p3-gov-chip.flux  .p3-gov-chip-num { color: #FF9F43; }
.p3-gov-chip.down  { border-color: rgba(220,38,38,0.5); }
.p3-gov-chip.down  .p3-gov-chip-num { color: #F87171; }

/* ── Framework tabs — segmented control restyle ── */
.p3-fw { margin-bottom: 6px; }
.p3-fw :global(section > nav) {
  display: flex;
  gap: 6px;
  background: #E9EDF6;
  border: 1px solid #dde2f0 !important;
  border-radius: 14px;
  padding: 6px;
  margin: 0 0 22px !important;
}
.p3-fw :global(section > nav > button) {
  flex: 1;
  margin: 0 !important;
  padding: 11px 16px;
  border: none !important;
  border-radius: 10px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #718096;
  background: transparent;
  transition: all 0.18s ease;
}
.p3-fw :global(section > nav > button:hover) {
  color: #2D3748;
  background: rgba(255,255,255,0.65);
}
.p3-fw :global(section > nav > button.border-b-2) {
  background: linear-gradient(135deg, #0042A0 0%, #1E3A5F 100%);
  color: #fff !important;
  box-shadow: 0 6px 18px rgba(0,66,160,0.35);
}

/* ── Indicator pulse cards ── */
.p3-pulse-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
  margin: 18px 0 22px;
}
.p3-pulse-card {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-top: 3px solid #CBD5E1;
  border-radius: 12px;
  padding: 15px 16px 13px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.p3-pulse-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.1);
}
.p3-pulse-card.improving { border-top-color: #3EC58E; }
.p3-pulse-card.worsening { border-top-color: #DC2626; }
.p3-pulse-card.mixed     { border-top-color: #FF9F43; }
.p3-pulse-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}
.p3-pulse-name {
  font-size: 11px;
  font-weight: 700;
  color: #2D3748;
  line-height: 1.35;
}
.p3-pulse-pill {
  flex-shrink: 0;
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 2px 8px;
}
.p3-pulse-card.improving .p3-pulse-pill { background: rgba(62,197,142,0.12); color: #166534; }
.p3-pulse-card.worsening .p3-pulse-pill { background: rgba(220,38,38,0.1);  color: #DC2626; }
.p3-pulse-card.mixed     .p3-pulse-pill { background: rgba(255,159,67,0.15); color: #92400e; }
.p3-pulse-num {
  font-size: 27px;
  font-weight: 900;
  font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;
  letter-spacing: -0.02em;
  color: #1E3A5F;
  line-height: 1;
}
.p3-pulse-unit {
  font-size: 9.5px;
  color: #718096;
  margin: 4px 0 12px;
}
.p3-pulse-delta { font-size: 10.5px; font-weight: 700; }
.p3-pulse-delta.good { color: #166534; }
.p3-pulse-delta.bad  { color: #DC2626; }

/* ── Chart card shell ── */
.p3-chart-card {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 18px 20px 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  margin: 0 0 18px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.p3-chart-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.1);
}

/* ── Custom accountability table ── */
.p3-gtable-wrap {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  overflow-x: auto;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  margin: 0 0 8px;
}
.p3-gtable {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: 12px;
}
.p3-gtable thead th {
  background: #1E3A5F;
  color: rgba(255,255,255,0.85);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: left;
  padding: 11px 16px;
  white-space: nowrap;
}
.p3-gtable thead th.num { text-align: right; }
.p3-gtable tbody tr {
  border-top: 1px solid #EDF2F7;
  transition: background 0.15s ease;
}
.p3-gtable tbody tr:hover { background: #F4F7FE; }
.p3-gtable td { padding: 13px 16px; vertical-align: middle; }
.p3-gt-name {
  display: block;
  font-weight: 800;
  font-size: 12.5px;
  color: #2D3748;
}
.p3-gt-unit {
  display: block;
  font-size: 10px;
  color: #94A3B8;
  margin-top: 2px;
}
.p3-gt-ref {
  display: inline-block;
  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0042A0;
  background: rgba(0,66,160,0.07);
  border: 1px solid rgba(0,66,160,0.15);
  border-radius: 5px;
  padding: 1px 6px;
  margin-top: 5px;
}
.p3-gt-val {
  display: block;
  font-family: ui-monospace, 'Cascadia Code', 'Courier New', monospace;
  font-weight: 700;
  font-size: 12.5px;
  color: #334155;
}
td.p3-gt-now .p3-gt-val {
  font-weight: 900;
  font-size: 13.5px;
  color: #0042A0;
}
.p3-gt-bar {
  display: block;
  width: 68px;
  height: 5px;
  background: #EDF2F7;
  border-radius: 999px;
  margin-top: 5px;
  overflow: hidden;
}
.p3-gt-bar i {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: #94A3B8;
  transition: filter 0.15s ease;
}
td.p3-gt-now .p3-gt-bar i { background: linear-gradient(90deg, #0042A0, #3b82f6); }
.p3-gtable tbody tr:hover .p3-gt-bar i { filter: brightness(1.12); }
.p3-gt-traj-pill {
  display: inline-block;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 3px 9px;
  margin-bottom: 4px;
  white-space: nowrap;
}
.p3-gt-traj-pill.improving { background: rgba(62,197,142,0.12); color: #166534; }
.p3-gt-traj-pill.worsening { background: rgba(220,38,38,0.1);  color: #DC2626; }
.p3-gt-traj-pill.mixed     { background: rgba(255,159,67,0.15); color: #92400e; }
.p3-gt-yoy { display: block; font-size: 10px; color: #94A3B8; white-space: nowrap; }
.p3-gt-chip-cell { text-align: right; }
.p3-gt-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 800;
  font-size: 11.5px;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
}
.p3-gt-chip.good { background: rgba(62,197,142,0.12); color: #166534; border: 1px solid rgba(62,197,142,0.3); }
.p3-gt-chip.bad  { background: rgba(220,38,38,0.08);  color: #DC2626; border: 1px solid rgba(220,38,38,0.25); }

/* ── Table methodology expander ── */
.p3-gt-note { margin: 0 2px 14px; font-size: 11.5px; color: #64748B; }
.p3-gt-note summary {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #475569;
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 6px 11px;
  transition: all 0.15s ease;
}
.p3-gt-note summary::-webkit-details-marker { display: none; }
.p3-gt-note summary::before { content: '+'; font-weight: 900; }
.p3-gt-note[open] summary::before { content: '–'; }
.p3-gt-note summary:hover { border-color: #0042A0; color: #0042A0; }
.p3-gt-note p { margin: 10px 4px 0; line-height: 1.7; }

/* ── Worsening-indicator callout ── */
.p3-gov-alert {
  display: flex;
  gap: 14px;
  background: #fff;
  border: 1px solid rgba(220,38,38,0.25);
  border-left: 4px solid #DC2626;
  border-radius: 0 12px 12px 0;
  padding: 18px 22px;
  margin: 18px 0 6px;
  box-shadow: 0 1px 8px rgba(220,38,38,0.06);
}
.p3-gov-alert-icon {
  flex-shrink: 0;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(220,38,38,0.1);
  color: #DC2626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 15px;
}
.p3-gov-alert-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #DC2626;
  margin-bottom: 6px;
}
.p3-gov-alert p {
  font-size: 13px;
  line-height: 1.7;
  color: #4A5568;
  margin: 0;
}
.p3-gov-alert p strong { color: #2D3748; }

/* ── Finding cards ── */
.p3-findings-legend {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.p3-legend-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  color: #4A5568;
}
.p3-legend-swatch {
  width: 10px; height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}
.p3-findings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 0 0 48px;
}
.p3-finding-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 20px 18px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  display: flex;
  gap: 14px;
  align-items: flex-start;
  border-left: 4px solid #e2e8f0;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.p3-finding-card:hover { transform: translateY(-3px); }
.p3-finding-card.improving  { border-left-color: #3EC58E; }
.p3-finding-card.structural { border-left-color: #FF9F43; }
.p3-finding-card.urgent     { border-left-color: #DC2626; }
.p3-finding-card.insight    { border-left-color: #9A67FD; }
.p3-finding-card.improving:hover  { box-shadow: 0 10px 24px rgba(62,197,142,0.18); }
.p3-finding-card.structural:hover { box-shadow: 0 10px 24px rgba(255,159,67,0.18); }
.p3-finding-card.urgent:hover     { box-shadow: 0 10px 24px rgba(220,38,38,0.15); }
.p3-finding-card.insight:hover    { box-shadow: 0 10px 24px rgba(154,103,253,0.18); }
.p3-finding-num {
  font-size: 26px;
  font-weight: 900;
  line-height: 1;
  flex-shrink: 0;
  width: 30px;
  text-align: right;
}
.p3-finding-card.improving  .p3-finding-num { color: #3EC58E; }
.p3-finding-card.structural .p3-finding-num { color: #FF9F43; }
.p3-finding-card.urgent     .p3-finding-num { color: #DC2626; }
.p3-finding-card.insight    .p3-finding-num { color: #9A67FD; }
.p3-finding-tag {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 999px;
  margin-bottom: 5px;
}
.p3-finding-card.improving  .p3-finding-tag { background: rgba(62,197,142,0.12); color: #166534; }
.p3-finding-card.structural .p3-finding-tag { background: rgba(255,159,67,0.12); color: #92400e; }
.p3-finding-card.urgent     .p3-finding-tag { background: rgba(220,38,38,0.1); color: #DC2626; }
.p3-finding-card.insight    .p3-finding-tag { background: rgba(154,103,253,0.1); color: #5b21b6; }
.p3-finding-headline {
  font-size: 13px;
  font-weight: 800;
  color: #2D3748;
  margin: 0 0 5px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}
.p3-finding-text {
  font-size: 12px;
  line-height: 1.65;
  color: #4A5568;
  margin: 0;
}

/* ── Closing statement ── */
.p3-closing {
  background: #2D3748;
  border-radius: 12px;
  padding: 40px 48px;
  margin: 16px 0 32px;
}
.p3-closing-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-bottom: 14px;
}
.p3-closing p {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255,255,255,0.78);
  max-width: 72ch;
  margin: 0;
}
.p3-closing p strong { color: #fff; }

/* ── Responsive ── */
@media (max-width: 700px) {
  .p3-hero { padding: 24px 20px 28px; }
  .p3-hero-ribbon { grid-template-columns: 1fr 1fr; }
  .p3-hero-h1 { font-size: 24px; }
  .p3-kpi-grid,
  .p3-relo-split,
  .p3-findings-grid { grid-template-columns: 1fr; }
  .p3-section-q h2 { font-size: 20px; }
  .p3-closing { padding: 28px 24px; }
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

```sql profile_summary
SELECT
    SUM(v.total) AS total_victims,
    ( SELECT SUM(p.total) FROM insights.perpetrators_ageoverall p ) AS total_perpetrators,
    ROUND(100.0 * SUM(v.female_count) / NULLIF(SUM(v.total), 0), 1) AS female_victim_pct,
    ROUND(100.0 * (SELECT SUM(p.male_count) FROM insights.perpetrators_ageoverall p)
        / NULLIF((SELECT SUM(p.total) FROM insights.perpetrators_ageoverall p), 0), 1) AS male_perp_pct,
    (SELECT ROUND(100.0 * SUM(count) / NULLIF((SELECT SUM(count) FROM insights.victim_employment), 0), 1)
        FROM insights.victim_employment WHERE employment_status = 'unemployed') AS victim_unemployed_pct,
    (SELECT ROUND(100.0 * SUM(count) / NULLIF((SELECT SUM(count) FROM insights.perpetrator_employment), 0), 1)
        FROM insights.perpetrator_employment WHERE employment_status = 'unemployed') AS perp_unemployed_pct,
    (SELECT percentage FROM insights.relationship_overall WHERE relationship_type = 'romantic_link') AS romantic_link_pct,
    (SELECT percentage FROM insights.relationship_overall WHERE relationship_type = 'stranger') AS stranger_pct,
    (SELECT ROUND(100.0 * SUM(count) / NULLIF((SELECT SUM(count) FROM insights.perpetrator_maritial), 0), 1)
        FROM insights.perpetrator_maritial WHERE marital_status = 'never_married') AS perp_never_married_pct,
    (SELECT ROUND(percentage, 1) FROM insights.victims_ageoverall WHERE age_group = '16-20') AS victim_peak_age_pct,
    (SELECT ROUND(100.0 * SUM(total) / NULLIF((SELECT SUM(total) FROM insights.perpetrators_ageoverall), 0), 1)
        FROM insights.perpetrators_ageoverall WHERE age_group IN ('21-25', '26-30', '31-35')) AS young_perp_pct,
    (SELECT ROUND(percentage, 1) FROM insights.perpetrators_ageoverall WHERE age_group = '26-30') AS perp_peak_age_pct,
    (SELECT ROUND(100.0 * SUM(count) / NULLIF((SELECT SUM(count) FROM insights.victim_maritial), 0), 1)
        FROM insights.victim_maritial WHERE marital_status = 'never_married') AS victim_never_married_pct,
    (SELECT COUNT(*) FROM insights.perpetrator_unemployment WHERE unemployment_rate_pct >= 60) AS unemp_over60_count,
    (SELECT COUNT(*) FROM insights.perpetrator_unemployment) AS total_offence_count
FROM insights.victims_ageoverall v;
```

```sql victim_overall_age
select age_group, male_count, female_count, total, percentage
from insights.victims_ageoverall
order by total desc
limit 7
```

```sql perp_overall_age
select age_group, male_count, female_count, total, percentage
from insights.perpetrators_ageoverall
order by total desc
limit 7
```

```sql female_victims
SELECT
    replace(offence, '_', ' ') AS offence,
    SUM(female_count) AS female_victims,
    SUM(male_count) AS male_victims,
    SUM(total) AS total_victims,
    ROUND(100.0 * SUM(female_count) / NULLIF(SUM(total), 0), 1) AS female_victim_pct
FROM insights.victim_age
GROUP BY 1
ORDER BY female_victim_pct DESC;
```

```sql victim_employment_all
select
  replace(offence, '_', ' ')           as offence,
  replace(employment_status, '_', ' ') as employment_status,
  count, percentage
from insights.victim_employment
order by offence, percentage desc
```

```sql victim_marital_all
select
  replace(offence, '_', ' ')        as offence,
  replace(marital_status, '_', ' ') as marital_status,
  count, percentage
from insights.victim_maritial
order by offence, count desc
```

```sql victim_education_all
select
  replace(offence, '_', ' ')         as offence,
  replace(education_level, '_', ' ') as education_level,
  count, percentage
from insights.victim_education
order by offence, count desc
```

```sql perp_gender_by_offence
select
  replace(offence, '_', ' ') as offence,
  sum(male_count)   as male_total,
  sum(female_count) as female_total,
  sum(total)        as grand_total,
  round(100.0 * sum(male_count) / nullif(sum(total), 0), 1) as male_pct
from insights.perpetrator_age
group by 1
order by male_pct desc
```

```sql perp_employment_all
select
  replace(offence, '_', ' ')           as offence,
  replace(employment_status, '_', ' ') as employment_status,
  count, percentage
from insights.perpetrator_employment
order by offence, percentage desc
```

```sql perp_marital_all
select
  replace(offence, '_', ' ')        as offence,
  replace(marital_status, '_', ' ') as marital_status,
  count, percentage
from insights.perpetrator_maritial
order by offence, count desc
```

```sql perp_education_all
select
  replace(offence, '_', ' ')         as offence,
  replace(education_level, '_', ' ') as education_level,
  count, percentage
from insights.perpetrator_education
order by offence, count desc
```

```sql unemployment_rates
select
  replace(offence, '_', ' ') as offence,
  unemployed, total_perpetrators, unemployment_rate_pct
from insights.perpetrator_unemployment
order by unemployment_rate_pct desc
```

```sql unemp_comparison
select
  replace(pe.offence, '_', ' ') as offence,
  max(case when pe.employment_status = 'unemployed' then pe.percentage end) as perp_unemployed_pct,
  max(case when ve.employment_status = 'unemployed' then ve.percentage end) as victim_unemployed_pct
from insights.perpetrator_employment pe
left join insights.victim_employment ve
  on pe.offence = ve.offence and ve.employment_status = 'unemployed'
group by 1
order by perp_unemployed_pct desc nulls last
```

```sql relationship_overall
select replace(relationship_type, '_', ' ') as relationship_type, cases, percentage
from insights.relationship_overall
order by cases desc
```

```sql relationship_pivot
select
  replace(offence, '_', ' ') as offence,
  max(case when relationship_type = 'romantic_link' then percentage end) as "romantic link",
  max(case when relationship_type = 'stranger'      then percentage end) as stranger,
  max(case when relationship_type = 'acquaintance'  then percentage end) as acquaintance,
  max(case when relationship_type = 'relative'      then percentage end) as relative,
  max(case when relationship_type = 'friend'        then percentage end) as friend
from insights.offence_relationship
group by 1
order by "romantic link" desc nulls last
```

```sql tndp_pivot
with p as (
  select
    indicator_key,
    indicator_description as indicator,
    max(case when year = 2022 then rate end) as rate_2022,
    max(case when year = 2023 then rate end) as rate_2023,
    max(case when year = 2024 then rate end) as rate_2024
  from insights.tndp
  group by 1, 2
)
select
  *,
  case indicator_key
    when 'gbv_rate'                   then 'Gender-Based Violence'
    when 'road_fatality_rate'         then 'Road Fatalities'
    when 'violent_serious_crime_rate' then 'Violent & Serious Crime'
    else indicator end as short_name,
  case when indicator ilike '%100000%' then 'per 100,000 population' else 'per 10,000 population' end as unit,
  'TNDP II' as ref,
  round(100.0 * (rate_2024 - rate_2022) / nullif(rate_2022, 0), 1) as three_yr_change_pct,
  round(100.0 * (rate_2024 - rate_2023) / nullif(rate_2023, 0), 1) as yoy_change_pct,
  round(100.0 * rate_2022 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2022,
  round(100.0 * rate_2023 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2023,
  round(100.0 * rate_2024 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2024,
  case
    when rate_2024 < rate_2022 and rate_2024 < rate_2023 then 'improving'
    when rate_2024 > rate_2022 and rate_2024 >= rate_2023 then 'worsening'
    else 'mixed' end as status
from p
order by three_yr_change_pct
```

```sql sdg_pivot
with p as (
  select
    indicator_key,
    indicator_description as indicator,
    max(case when year = 2022 then rate end) as rate_2022,
    max(case when year = 2023 then rate end) as rate_2023,
    max(case when year = 2024 then rate end) as rate_2024
  from insights.sdg
  group by 1, 2
)
select
  *,
  case indicator_key
    when 'sdg_homicide_rate'                        then 'Intentional Homicide'
    when 'sdg_road_death_rate'                      then 'Road Traffic Deaths'
    when 'population_subjected_to_physical_psychol' then 'Population Subjected to Violence'
    when 'human_trafficking_victims_per_100000_pop' then 'Human Trafficking Victims'
    else indicator end as short_name,
  'per 100,000 population' as unit,
  case indicator_key
    when 'sdg_homicide_rate'                        then 'SDG 16.1.1'
    when 'sdg_road_death_rate'                      then 'SDG 3.6.1'
    when 'population_subjected_to_physical_psychol' then 'SDG 16.1.3'
    when 'human_trafficking_victims_per_100000_pop' then 'SDG 16.2.2'
    else 'SDG' end as ref,
  round(100.0 * (rate_2024 - rate_2022) / nullif(rate_2022, 0), 1) as three_yr_change_pct,
  round(100.0 * (rate_2024 - rate_2023) / nullif(rate_2023, 0), 1) as yoy_change_pct,
  round(100.0 * rate_2022 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2022,
  round(100.0 * rate_2023 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2023,
  round(100.0 * rate_2024 / greatest(rate_2022, rate_2023, rate_2024), 0) as bar_2024,
  case
    when rate_2024 < rate_2022 and rate_2024 < rate_2023 then 'improving'
    when rate_2024 > rate_2022 and rate_2024 >= rate_2023 then 'worsening'
    else 'mixed' end as status
from p
order by three_yr_change_pct
```

<!-- ═══════════════════════════════════════════════════════════════
     HERO — DARK INTELLIGENCE BRIEF
════════════════════════════════════════════════════════════════ -->

<div class="p3-hero">
  <div class="p3-hero-orb-blue"></div>
  <div class="p3-hero-orb-purple"></div>
  <div class="p3-hero-inner">
    <div class="p3-hero-badge">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;flex-shrink:0;"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
      Intelligence Profile &amp; Structural Drivers
    </div>
    <h1 class="p3-hero-h1">Who is affected, who offends, and why?</h1>
    <p class="p3-hero-body">This intelligence synthesis shifts the conversation away from crime counts and towards <strong>people, demographics, and underlying risk factors</strong>. By mapping the profiles of {profile_summary[0]?.total_victims} victims and {profile_summary[0]?.total_perpetrators} perpetrators, this page reveals what unemployment, gender, age, and relationship dynamics look like when the entire 2024 serious crime dataset is viewed as one body of evidence.</p>
    <div class="p3-hero-ribbon">
      <div class="p3-hero-kpi">
        <span class="p3-hero-kpi-label">Victims Analysed</span>
        <span class="p3-hero-kpi-num white">{profile_summary[0]?.total_victims}</span>
        <span class="p3-hero-kpi-sub fuchsia">{profile_summary[0]?.female_victim_pct}% Female Demographics</span>
      </div>
      <div class="p3-hero-kpi">
        <span class="p3-hero-kpi-label">Perpetrators</span>
        <span class="p3-hero-kpi-num white">{profile_summary[0]?.total_perpetrators}</span>
        <span class="p3-hero-kpi-sub blue">{profile_summary[0]?.male_perp_pct}% Male Demographics</span>
      </div>
      <div class="p3-hero-kpi">
        <span class="p3-hero-kpi-label">Main Age Group</span>
        <span class="p3-hero-kpi-num orange">21–35</span>
        <span class="p3-hero-kpi-sub slate">{profile_summary[0]?.young_perp_pct}% of Offenders</span>
      </div>
      <div class="p3-hero-kpi">
        <span class="p3-hero-kpi-label">Employment Bottleneck</span>
        <span class="p3-hero-kpi-num mint">{profile_summary[0]?.unemp_over60_count} of {profile_summary[0]?.total_offence_count}</span>
        <span class="p3-hero-kpi-sub emerald">Over 60% Unemployed</span>
      </div>
    </div>
  </div>
</div>

<!-- ── Executive KPI Snapshot Cards ── -->

<div class="p3-kpi-section-head">
  <div class="p3-kpi-section-title">National Demographic Snapshots</div>
  <p class="p3-kpi-section-sub">Primary indicators derived from cross-crime incident analysis · 2024</p>
</div>

<div class="p3-kpi-grid">

  <div class="p3-profile-card victim">
    <div class="p3-card-topbar"></div>
    <div class="p3-card-inner">
      <div class="p3-card-head-row">
        <div class="p3-card-head-left">
          <div class="p3-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <div class="p3-card-title">Victim Cohort Profile</div>
            <div class="p3-card-n">N = {profile_summary[0]?.total_victims} INDIVIDUALS RECORDED</div>
          </div>
        </div>
        <span class="p3-card-badge">{profile_summary[0]?.female_victim_pct}% Female Rate</span>
      </div>
      <div class="p3-mini-stats">
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">16–20 Cohort</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.victim_peak_age_pct}%</span>
          <span class="p3-mini-stat-caption">National peak risk</span>
        </div>
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">Unemployed</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.victim_unemployed_pct}%</span>
          <span class="p3-mini-stat-caption">Cross-crime avg.</span>
        </div>
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">Never Married</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.victim_never_married_pct}%</span>
          <span class="p3-mini-stat-caption">Underlying bias</span>
        </div>
      </div>
      <div class="p3-card-insight">
        <strong>Intimate Violence Context:</strong> Intimate relations form the primary vulnerability baseline in 10 of 11 serious crimes, with romantic link dominating Threat to Kill (71%) and Defilement (79%).
      </div>
    </div>
  </div>

  <div class="p3-profile-card perp">
    <div class="p3-card-topbar"></div>
    <div class="p3-card-inner">
      <div class="p3-card-head-row">
        <div class="p3-card-head-left">
          <div class="p3-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <div class="p3-card-title">Perpetrator Cohort Profile</div>
            <div class="p3-card-n">N = {profile_summary[0]?.total_perpetrators} INDIVIDUALS RECORDED</div>
          </div>
        </div>
        <span class="p3-card-badge">{profile_summary[0]?.male_perp_pct}% Male Rate</span>
      </div>
      <div class="p3-mini-stats">
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">21–35 Cohort</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.young_perp_pct}%</span>
          <span class="p3-mini-stat-caption">Key committing age</span>
        </div>
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">Unemployed</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.perp_unemployed_pct}%</span>
          <span class="p3-mini-stat-caption">Critical driver</span>
        </div>
        <div class="p3-mini-stat">
          <span class="p3-mini-stat-label">Never Married</span>
          <span class="p3-mini-stat-val">{profile_summary[0]?.perp_never_married_pct}%</span>
          <span class="p3-mini-stat-caption">Social profile</span>
        </div>
      </div>
      <div class="p3-card-insight">
        <strong>Economic Desperation Link:</strong> Over 80% perpetrator unemployment verified in burglary, store-breakings, stock theft, and robbery — the four highest-rate property crime categories.
      </div>
    </div>
  </div>

</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 01 — WHO BECOMES A VICTIM?
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot purple"></span> Victim Intelligence · Section 01</div>
  <h2>Who becomes a victim?</h2>
  <p class="p3-lead">The composite victim is young, female, and economically excluded — a profile that holds with striking consistency across rape, murder, defilement, and threat to kill alike.</p>
</div>

<div class="p3-burden purple">
  <div class="p3-burden-label">The Gender Finding</div>
  <div class="p3-burden-headline">{profile_summary[0]?.female_victim_pct}% of all serious crime victims in Botswana are female.</div>
  <p class="p3-burden-sub"><strong>99.2% of rape victims. 99.9% of defilement victims.</strong> The GBV rate declined from 19.3 to 17.3 per 10,000 in 2024 — a positive direction — but Botswana still recorded more than <strong>12 GBV incidents every single day</strong> of the year.</p>
</div>

<Grid cols=2>

  <div class="p3-chart-card">

  <BarChart
    data={victim_overall_age}
    x=age_group
    y=total
    title="Victim age distribution — top 7 age groups"
    subtitle={`${profile_summary[0]?.total_victims ?? 5929} victims analysed · 2024 · peak: 16–20 years at ${profile_summary[0]?.victim_peak_age_pct ?? 27}%`}
    colorPalette={['#9A67FD']}
    labels=true
    swapXY=true
    downloadableData=false
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={female_victims}
    x=offence
    y=female_victim_pct
    yFmt='0.0"%"'
    title="Female victimisation rate by offence"
    subtitle="Sexual and GBV offences show near-total female victimisation"
    colorPalette={['#9A67FD']}
    labels=true
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

</Grid>

<Grid cols=3>

  <div class="p3-chart-card">

  <BarChart
    data={victim_employment_all}
    x=offence
    y=percentage
    series=employment_status
    yFmt='0.0"%"'
    title="Victim employment status by offence"
    subtitle="65% unemployed across all crimes"
    colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={victim_marital_all}
    x=offence
    y=percentage
    series=marital_status
    yFmt='0.0"%"'
    title="Victim marital status by offence"
    subtitle="Never married dominant across all categories"
    colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={victim_education_all}
    x=offence
    y=percentage
    series=education_level
    yFmt='0.0"%"'
    title="Victim education level by offence"
    subtitle="Secondary education most prevalent"
    colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

</Grid>

<div class="p3-insight purple">
  <div class="p3-insight-label">Robbery victim exception</div>
  <p>Robbery is the only serious crime where employed victims (40.9%) outnumber unemployed victims (22.9%). This reflects the nature of the offence — robbery targets people who have cash or assets, meaning employed and self-employed individuals are disproportionately targeted. <strong>All other crimes show unemployed victims as the majority.</strong></p>
</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 02 — WHO COMMITS SERIOUS CRIME?
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot indigo"></span> Perpetrator Intelligence · Section 02</div>
  <h2>Who commits serious crime?</h2>
  <p class="p3-lead">98% male. Peak age 26–30. Unemployed. Secondary-educated. Never married. The profile is as consistent across crime types as the victim profile — which makes it structurally significant rather than coincidental.</p>
</div>

<div class="p3-burden indigo">
  <div class="p3-burden-label">The Age Finding</div>
  <div class="p3-burden-headline">{profile_summary[0]?.young_perp_pct}% of all perpetrators are aged 21–35.</div>
  <p class="p3-burden-sub">Peak age is <strong>26–30 (20.2%)</strong>, followed closely by 21–25 (19.6%) and 31–35 (17.4%). This is not a random distribution — it is a generation in economic crisis: secondary-educated, overwhelmingly male, and largely excluded from formal employment.</p>
</div>

<Grid cols=2>

  <div class="p3-chart-card">

  <BarChart
    data={perp_overall_age}
    x=age_group
    y=total
    title="Perpetrator age distribution — top 7 age groups"
    subtitle={`${profile_summary[0]?.total_perpetrators ?? 5766} perpetrators · 2024 · peak: 26–30 years at ${profile_summary[0]?.perp_peak_age_pct ?? 20.2}%`}
    colorPalette={['#0042A0']}
    labels=true
    swapXY=true
    downloadableData=false
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={perp_gender_by_offence}
    x=offence
    y=male_pct
    yFmt='0.0"%"'
    title="Male perpetrator percentage by offence"
    subtitle="Human trafficking is the only offence significantly below 98% male"
    colorPalette={['#0042A0']}
    labels=true
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

</Grid>

<Grid cols=2>

  <div class="p3-chart-card">

  <BarChart
    data={perp_education_all}
    x=offence
    y=percentage
    series=education_level
    yFmt='0.0"%"'
    title="Perpetrator education level by offence"
    subtitle="Secondary education most common across all categories"
    colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={perp_marital_all}
    x=offence
    y=percentage
    series=marital_status
    yFmt='0.0"%"'
    title="Perpetrator marital status by offence"
    subtitle="Never married dominant — ranges from 52% (TTK) to 100% (MVT)"
    colorPalette={['#0042A0','#3EC58E','#9A67FD','#FF9F43']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

</Grid>

<div class="p3-insight indigo">
  <div class="p3-insight-label">Secondary education with no economic participation</div>
  <p>Both perpetrators and victims are predominantly secondary-educated. This is a critical structural finding — crime in Botswana is not primarily a product of educational exclusion. <strong>The system is producing secondary graduates who cannot find employment. The gap between educational attainment and economic participation is the structural driver, not education level itself.</strong></p>
</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 03 — THE UNEMPLOYMENT FINDING
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot orange"></span> Structural Driver · Section 03</div>
  <h2>What single factor appears in 10 of 11 crimes?</h2>
  <p class="p3-lead">No other socio-demographic variable correlates as consistently with perpetrator status as unemployment. The rates range from 60.5% to 91.4% — across crimes that differ fundamentally in nature.</p>
</div>

<div class="p3-unemp-reveal">
  <div class="p3-big-claim">In <em>10 of 11</em> serious offences, more than <em>60%</em> of perpetrators are unemployed.</div>
  <p class="p3-sub-claim">60.5% for threat to kill · 91.4% for store breaking · all six property crime categories exceed 77% · Human trafficking at 32% is the lone exception — and that alone proves the structural pattern.</p>
</div>

<div class="p3-chart-card">

  <BarChart
  data={unemployment_rates}
  x=offence
  y=unemployment_rate_pct
  yFmt='0.0"%"'
  title="Perpetrator unemployment rate by offence — 2024"
  subtitle="Percentage of perpetrators who are unemployed · ordered by rate"
  colorPalette={['#FF9F43']}
  labels=true
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

<Grid cols=2>

  <div class="p3-chart-card">

  <BarChart
    data={unemp_comparison}
    x=offence
    y={['perp_unemployed_pct','victim_unemployed_pct']}
    yFmt='0.0"%"'
    title="Unemployment — perpetrators vs victims"
    subtitle="Perpetrators are consistently more unemployed than their victims"
    colorPalette={['#0042A0','#3EC58E']}
    labels=false
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

  <DataTable
    data={unemployment_rates}
    search=false
    downloadable=false
    title="Unemployment rates by offence"
  >
    <Column id="offence" title="Offence" />
    <Column id="unemployed" fmt='#,##0' title="Unemployed" />
    <Column id="total_perpetrators" fmt='#,##0' title="Total perps" />
    <Column id="unemployment_rate_pct" fmt='0.0"%"' title="Rate" contentType=colorscale colorScale=intensity />
  </DataTable>

</Grid>

<div class="p3-policy-box">
  <div class="p3-policy-label">Policy Implication</div>
  <p>Crime prevention strategies focused exclusively on policing and enforcement are addressing the symptom rather than the cause. <strong>Economic inclusion programmes, youth employment initiatives, and vocational training targeting men aged 21–35 are likely to have a direct and measurable impact on serious crime rates.</strong> The data now provides the empirical basis for that argument — and a mandate for inter-ministerial action beyond the Botswana Police Service.</p>
</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 04 — RELATIONSHIP DYNAMICS
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot purple"></span> Relationship Dynamics · Section 04</div>
  <h2>Are perpetrators strangers or known to their victims?</h2>
  <p class="p3-lead">The data reveals two structurally different crime types — requiring two fundamentally different policy responses running simultaneously.</p>
</div>

<div class="p3-relo-split">
  <div class="p3-relo-panel intimate">
    <div class="p3-relo-type">Pattern A</div>
    <div class="p3-relo-title">Intimate &amp; Domestic Violence</div>
    <ul class="p3-relo-stats">
      <li><span>Defilement</span><strong>79.2% romantic link</strong></li>
      <li><span>Threat to kill</span><strong>70.9% romantic link</strong></li>
      <li><span>Murder</span><strong>37.1% romantic link</strong></li>
    </ul>
    <div class="p3-levers-label">Prevention levers</div>
    <div class="p3-levers">
      <div class="p3-lever">Domestic violence intervention</div>
      <div class="p3-lever">Relationship education programmes</div>
      <div class="p3-lever">Crisis mediation services</div>
      <div class="p3-lever">GBV reporting infrastructure</div>
    </div>
  </div>
  <div class="p3-relo-panel stranger">
    <div class="p3-relo-type">Pattern B</div>
    <div class="p3-relo-title">Stranger &amp; Opportunistic Crime</div>
    <ul class="p3-relo-stats">
      <li><span>Rape</span><strong>51.4% stranger</strong></li>
      <li><span>Robbery</span><strong>target-based / opportunistic</strong></li>
      <li><span>Property crime</span><strong>unknown perpetrator</strong></li>
    </ul>
    <div class="p3-levers-label">Prevention levers</div>
    <div class="p3-levers">
      <div class="p3-lever">Environmental design &amp; lighting</div>
      <div class="p3-lever">Community policing presence</div>
      <div class="p3-lever">Situational crime prevention</div>
      <div class="p3-lever">CCTV &amp; public space safety</div>
    </div>
  </div>
</div>

<Grid cols=2>

  <div class="p3-chart-card">

  <BarChart
    data={relationship_overall}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim-perpetrator relationship — overall"
    subtitle="Across all offences where relationship data exists"
    colorPalette={['#0042A0']}
    labels=true
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

  <div class="p3-chart-card">

  <BarChart
    data={relationship_pivot}
    x=offence
    y={['romantic link','stranger','acquaintance','relative','friend']}
    yFmt='0.0"%"'
    title="Relationship type by offence"
    subtitle="Intimate violence vs stranger crime — two distinct structural patterns"
    colorPalette={['#9A67FD','#0042A0','#3EC58E','#FF9F43','#6d28d9']}
    swapXY=true
    downloadableData=false
    echartsOptions={{yAxis: {axisLabel: {overflow: 'break', width: 100}}}}
  />

  </div>

</Grid>

<div class="p3-insight purple">
  <div class="p3-insight-label">Rape stands apart</div>
  <p>51.4% of rape perpetrators are strangers — making rape <strong>fundamentally different in nature</strong> from the other GBV offences where intimate relationships dominate. A unified GBV prevention strategy applied across all offences will be sub-optimal for rape. It requires its own prevention architecture separate from intimate violence programmes.</p>
</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 05 — NATIONAL DEVELOPMENT TARGETS
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot mint"></span> National Accountability · Section 05</div>
  <h2>What does this mean for national development targets?</h2>
  <p class="p3-lead">The Botswana Police Service reports against TNDP II and SDG Agenda 2030. Across the seven indicator series tracked, five improved against the 2022 baseline — and the homicide rate is the one heading consistently in the wrong direction.</p>
</div>

<div class="p3-gov-console">
  <div class="p3-gov-console-head">
    <div>
      <div class="p3-gov-console-badge">National Development Accountability</div>
      <div class="p3-gov-console-title">Botswana Police Service — TNDP II &amp; Agenda 2030 Performance Review</div>
      <p class="p3-gov-console-sub">Rates measured per population base · three-year comparison 2022–2024</p>
    </div>
    <div class="p3-gov-chips">
      <div class="p3-gov-chip up"><span class="p3-gov-chip-num">5</span><span>indicator series improving</span></div>
      <div class="p3-gov-chip flux"><span class="p3-gov-chip-num">1</span><span>volatile — trafficking</span></div>
      <div class="p3-gov-chip down"><span class="p3-gov-chip-num">1</span><span>worsening — homicide</span></div>
    </div>
  </div>
</div>

<div class="p3-fw">
<Tabs color=primary fullWidth=true>
  <Tab label="TNDP II Performance Indicators">

All three TNDP II primary indicators ended 2024 below their 2022 baseline. The GBV and road fatality rates improved in both years; the violent and serious crime rate recovered sharply in 2024 (68.2 to 57.4 per 10,000) after a 2023 increase. **The pressure point sits in the homicide series tracked under the SDG framework** — rising for a fourth consecutive year.

{#if tndp_pivot.ready}
<div class="p3-pulse-row">
{#each tndp_pivot as row}
  <div class="p3-pulse-card {row.status}">
    <div class="p3-pulse-top">
      <span class="p3-pulse-name">{row.short_name}</span>
      <span class="p3-pulse-pill">{row.status === 'mixed' ? 'volatile' : row.status}</span>
    </div>
    <div class="p3-pulse-num">{Number(row.rate_2024).toFixed(1)}</div>
    <div class="p3-pulse-unit">{row.unit} · 2024</div>
    <div class="p3-pulse-delta {row.three_yr_change_pct < 0 ? 'good' : 'bad'}">{row.three_yr_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.three_yr_change_pct).toFixed(1)}% vs 2022</div>
  </div>
{/each}
</div>
{/if}

{#if tndp_pivot.ready}
<div class="p3-gtable-wrap">
  <table class="p3-gtable">
    <thead>
      <tr>
        <th>Indicator</th>
        <th>2022</th>
        <th>2023</th>
        <th>2024</th>
        <th>Trajectory</th>
        <th class="num">3-yr change</th>
      </tr>
    </thead>
    <tbody>
    {#each tndp_pivot as row}
      <tr>
        <td>
          <span class="p3-gt-name">{row.short_name}</span>
          <span class="p3-gt-unit">{row.unit}</span>
          <span class="p3-gt-ref">{row.ref}</span>
        </td>
        <td><span class="p3-gt-val">{Number(row.rate_2022).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2022}%"></i></span></td>
        <td><span class="p3-gt-val">{Number(row.rate_2023).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2023}%"></i></span></td>
        <td class="p3-gt-now"><span class="p3-gt-val">{Number(row.rate_2024).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2024}%"></i></span></td>
        <td>
          <span class="p3-gt-traj-pill {row.status}">{row.status === 'improving' ? '↓ improving' : row.status === 'worsening' ? '↑ worsening' : '↕ volatile'}</span>
          <span class="p3-gt-yoy">{row.yoy_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.yoy_change_pct).toFixed(1)}% vs 2023</span>
        </td>
        <td class="p3-gt-chip-cell"><span class="p3-gt-chip {row.three_yr_change_pct < 0 ? 'good' : 'bad'}">{row.three_yr_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.three_yr_change_pct).toFixed(1)}%</span></td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>
{/if}

<details class="p3-gt-note">
  <summary>How these rates are calculated</summary>
  <p>Each rate is the number of recorded incidents divided by the mid-year population estimate, scaled to the indicator's population base (per 10,000 for crime rates, per 100,000 for road fatalities). The inline bars compare each year against the worst year in the row — a shrinking bar means a falling rate. Lower is better for every indicator.</p>
</details>

  </Tab>
  <Tab label="SDG Indicators — Agenda 2030">

Three of the four SDG-linked indicators improved against the 2022 baseline. The road traffic death rate declined from 16.4 to 13.6 per 100,000 — meaningful progress toward the SDG target of halving road traffic deaths by 2030 — and the proportion of the population subjected to violence declined 21% over three years. Human trafficking is volatile from a very small base (13, then 53, then 22 identified victims). **Intentional homicide is the lone consistently worsening line.**

{#if sdg_pivot.ready}
<div class="p3-pulse-row">
{#each sdg_pivot as row}
  <div class="p3-pulse-card {row.status}">
    <div class="p3-pulse-top">
      <span class="p3-pulse-name">{row.short_name}</span>
      <span class="p3-pulse-pill">{row.status === 'mixed' ? 'volatile' : row.status}</span>
    </div>
    <div class="p3-pulse-num">{Number(row.rate_2024).toFixed(1)}</div>
    <div class="p3-pulse-unit">{row.unit} · 2024</div>
    <div class="p3-pulse-delta {row.three_yr_change_pct < 0 ? 'good' : 'bad'}">{row.three_yr_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.three_yr_change_pct).toFixed(1)}% vs 2022</div>
  </div>
{/each}
</div>
{/if}

{#if sdg_pivot.ready}
<div class="p3-gtable-wrap">
  <table class="p3-gtable">
    <thead>
      <tr>
        <th>Indicator</th>
        <th>2022</th>
        <th>2023</th>
        <th>2024</th>
        <th>Trajectory</th>
        <th class="num">3-yr change</th>
      </tr>
    </thead>
    <tbody>
    {#each sdg_pivot as row}
      <tr>
        <td>
          <span class="p3-gt-name">{row.short_name}</span>
          <span class="p3-gt-unit">{row.unit}</span>
          <span class="p3-gt-ref">{row.ref}</span>
        </td>
        <td><span class="p3-gt-val">{Number(row.rate_2022).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2022}%"></i></span></td>
        <td><span class="p3-gt-val">{Number(row.rate_2023).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2023}%"></i></span></td>
        <td class="p3-gt-now"><span class="p3-gt-val">{Number(row.rate_2024).toFixed(1)}</span><span class="p3-gt-bar"><i style="width:{row.bar_2024}%"></i></span></td>
        <td>
          <span class="p3-gt-traj-pill {row.status}">{row.status === 'improving' ? '↓ improving' : row.status === 'worsening' ? '↑ worsening' : '↕ volatile'}</span>
          <span class="p3-gt-yoy">{row.yoy_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.yoy_change_pct).toFixed(1)}% vs 2023</span>
        </td>
        <td class="p3-gt-chip-cell"><span class="p3-gt-chip {row.three_yr_change_pct < 0 ? 'good' : 'bad'}">{row.three_yr_change_pct < 0 ? '▼' : '▲'} {Math.abs(row.three_yr_change_pct).toFixed(1)}%</span></td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>
{/if}

<details class="p3-gt-note">
  <summary>How these rates are calculated</summary>
  <p>SDG rates are recorded incidents per 100,000 mid-year population. Human trafficking moves from a very small absolute base (13–53 identified victims), so its percentage swings overstate the underlying change — it is flagged volatile rather than worsening. Lower is better for every indicator.</p>
</details>

<div class="p3-gov-alert">
  <div class="p3-gov-alert-icon">!</div>
  <div>
    <div class="p3-gov-alert-label">The one worsening SDG indicator</div>
    <p>Intentional homicide victims per 100,000 population increased from <strong>12.9 in 2023 to 13.3 in 2024</strong> — the fourth consecutive annual increase. This is the primary area of concern for the 2025 reporting cycle and the most urgent challenge for the Botswana Police Service in the coming year.</p>
  </div>
</div>

  </Tab>
</Tabs>
</div>

<div class="p3-divider"></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 06 — TEN KEY FINDINGS
════════════════════════════════════════════════════════════════ -->

<div class="p3-section-q">
  <div class="p3-section-eyebrow"><span class="p3-dot indigo"></span> Synthesis · Section 06</div>
  <h2>Ten structural conclusions from the 2024 data</h2>
  <p class="p3-lead">The most important analytical findings across all three pages — colour-coded by nature. Read the colours before the words.</p>
</div>

<div class="p3-findings-legend">
  <div class="p3-legend-item"><div class="p3-legend-swatch" style="background:#3EC58E;"></div> Improving trend</div>
  <div class="p3-legend-item"><div class="p3-legend-swatch" style="background:#FF9F43;"></div> Structural driver</div>
  <div class="p3-legend-item"><div class="p3-legend-swatch" style="background:#DC2626;"></div> Urgent / worsening</div>
  <div class="p3-legend-item"><div class="p3-legend-swatch" style="background:#9A67FD;"></div> Structural insight</div>
</div>

<div class="p3-findings-grid">

  <div class="p3-finding-card improving">
    <div class="p3-finding-num">01</div>
    <div>
      <span class="p3-finding-tag">Improving</span>
      <div class="p3-finding-headline">Crime is declining broadly</div>
      <p class="p3-finding-text">Total offences fell 8.2% in 2024 — from 159,680 to 146,529 — the largest single-year decline in six years. All five police divisions recorded fewer offences than in 2023.</p>
    </div>
  </div>

  <div class="p3-finding-card urgent">
    <div class="p3-finding-num">02</div>
    <div>
      <span class="p3-finding-tag">Urgent</span>
      <div class="p3-finding-headline">Murder is the critical exception</div>
      <p class="p3-finding-text">337 cases in 2024, up 4.7% for the fourth consecutive year. Murder is the only serious offence trending consistently upward since 2020 — Botswana's most urgent unresolved public safety challenge.</p>
    </div>
  </div>

  <div class="p3-finding-card insight">
    <div class="p3-finding-num">03</div>
    <div>
      <span class="p3-finding-tag">Insight</span>
      <div class="p3-finding-headline">Serious crime is primarily intimate and domestic</div>
      <p class="p3-finding-text">Jealousy and argument account for 60% of murder motives. Romantic relationships account for 37% of murder perpetrator-victim links, 71% for threat to kill, and 79% for defilement.</p>
    </div>
  </div>

  <div class="p3-finding-card structural">
    <div class="p3-finding-num">04</div>
    <div>
      <span class="p3-finding-tag">Structural</span>
      <div class="p3-finding-headline">One third of crime concentrates in two districts</div>
      <p class="p3-finding-text">Mogoditshane (17.7%) and Gaborone (15.6%) together account for 33.3% of national crime — requiring policing resources disproportionate to their geographic area.</p>
    </div>
  </div>

  <div class="p3-finding-card urgent">
    <div class="p3-finding-num">05</div>
    <div>
      <span class="p3-finding-tag">Urgent</span>
      <div class="p3-finding-headline">Women bear a disproportionate burden</div>
      <p class="p3-finding-text">85% of all serious crime victims are female. 99.2% of rape victims. 99.9% of defilement victims. The GBV rate is declining, but Botswana still records over 12 GBV incidents per day.</p>
    </div>
  </div>

  <div class="p3-finding-card structural">
    <div class="p3-finding-num">06</div>
    <div>
      <span class="p3-finding-tag">Structural</span>
      <div class="p3-finding-headline">Unemployment is the strongest cross-crime predictor</div>
      <p class="p3-finding-text">In 10 of 11 serious crime categories, over 60% of perpetrators are unemployed — from 60.5% for threat to kill to 91.4% for store breaking. All six property categories exceed 77%.</p>
    </div>
  </div>

  <div class="p3-finding-card structural">
    <div class="p3-finding-num">07</div>
    <div>
      <span class="p3-finding-tag">Structural</span>
      <div class="p3-finding-headline">Secondary education — but no economic participation</div>
      <p class="p3-finding-text">Crime is not driven by educational exclusion. Both victims and perpetrators are predominantly secondary-educated. The driver is the failure to convert education into economic inclusion.</p>
    </div>
  </div>

  <div class="p3-finding-card urgent">
    <div class="p3-finding-num">08</div>
    <div>
      <span class="p3-finding-tag">Urgent</span>
      <div class="p3-finding-headline">Human trafficking targets children</div>
      <p class="p3-finding-text">46.8% of identified trafficking victims are aged 6 to 10. The unusual employed-perpetrator profile (only 32% unemployed) suggests more organised networks requiring intelligence-led investigation.</p>
    </div>
  </div>

  <div class="p3-finding-card improving">
    <div class="p3-finding-num">09</div>
    <div>
      <span class="p3-finding-tag">Improving</span>
      <div class="p3-finding-headline">Road safety is genuinely improving</div>
      <p class="p3-finding-text">346 road deaths in 2024, down from 396 in 2023. The rate per 100,000 declined from 16.4 (2022) to 13.6 (2024). Concurrent increases in speeding (+33.9%) present a risk to this trend.</p>
    </div>
  </div>

  <div class="p3-finding-card improving">
    <div class="p3-finding-num">10</div>
    <div>
      <span class="p3-finding-tag">Improving</span>
      <div class="p3-finding-headline">Property crime declined sharply</div>
      <p class="p3-finding-text">All six property crime categories declined. Motor vehicle theft fell 34.1% and robbery fell 29.5% — the two sharpest single-year improvements in the serious offences portfolio.</p>
    </div>
  </div>

</div>

<!-- ── Closing statement ── -->

<div class="p3-closing">
  <div class="p3-closing-label">Closing · DATA123 Analysis</div>
  <p>The crime statistics for 2024 tell a story that extends far beyond policing. They describe a young, male, secondary-educated, economically excluded population concentrated in urban corridors — at risk of both victimisation and offending. <strong>Youth employment, economic inclusion, and relationship violence prevention are not social programmes competing with public safety budgets. They are public safety instruments — and the data now says so explicitly.</strong></p>
</div>

<LastRefreshed prefix="Data last updated"/>

<Note>
  Source: Botswana Police Service, Annual Crime Statistics Report 2024 · Analysis: Data 123, insights.data123.online · Published 2025 · All figures drawn directly from BPS source tables · Reported crimes only — actual incidence is higher
</Note>

<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious Offences
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/methodology">
    Page 4: Methodology →
  </LinkButton>
</div>
