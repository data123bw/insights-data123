---
sidebar_position: 2
description: Intelligence analysis of 11 serious offences in Botswana 2024 — patterns, drivers, and policy implications
---

<style>
/* ── Hero ─────────────────────────────────────────────────── */
.report-hero {
    background: linear-gradient(140deg, #1E3A5F 0%, #0042A0 100%);
    color: #fff;
    padding: 52px 40px 140px;
    border-radius: 12px;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
}
.report-hero::after {
    content: '';
    position: absolute;
    bottom: -80px; right: -100px;
    width: 460px; height: 460px;
    background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}
.hero-eyebrow {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.hero-eyebrow::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.12);
}
.report-hero h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin: 0 0 22px;
    max-width: 680px;
    color: #fff;
}

.hero-alert {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(220,38,38,0.2);
    border: 1px solid rgba(220,38,38,0.45);
    border-radius: 6px;
    padding: 9px 15px;
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #fca5a5;
}
.hero-alert .pulse {
    width: 7px;
    height: 7px;
    background: #DC2626;
    border-radius: 50%;
    flex-shrink: 0;
}
.hero-summary {
    font-size: 15px;
    line-height: 1.75;
    color: rgba(255,255,255,0.72);
    max-width: 68ch;
    margin-bottom: 28px;
}
.hero-meta-row { display: flex; flex-wrap: wrap; gap: 8px; }
.hero-tag {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 999px;
    padding: 5px 13px;
    font-size: 11px;
    font-weight: 500;
    color: rgba(255,255,255,0.55);
}

/* ── KPI Zone ─────────────────────────────────────────────── */
.kpi-zone {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 16px;
    margin-top: -90px;
    position: relative;
    z-index: 10;
    margin-bottom: 60px;
}
.murder-card {
    background: #fff;
    border-radius: 16px;
    padding: 26px 28px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.08);
    position: relative;
    overflow: hidden;
}
.murder-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 5px; height: 100%;
    background: #DC2626;
    border-radius: 16px 0 0 16px;
}
.murder-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #DC2626; margin-bottom: 8px; }
.murder-number { font-size: 64px; font-weight: 900; color: #DC2626; line-height: 1; letter-spacing: -0.05em; margin-bottom: 4px; }
.murder-title { font-size: 14px; font-weight: 600; color: #334155; margin-bottom: 14px; }
.murder-badge { display: inline-flex; align-items: center; gap: 6px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 700; color: #DC2626; }
.murder-note { font-size: 11px; color: #94a3b8; margin-top: 8px; font-style: italic; }
.kpi-secondary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    padding: 0 0 0 16px;
}
.kpi-item {
    border-radius: 12px;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
.kpi-item:not(.orange):not(.mint):not(.purple) {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05);
    border-color: #cbd5e1;
}
.kpi-item.orange { background: #FF9F43; border-color: #FF9F43; }
.kpi-item.mint   { background: #3EC58E; border-color: #3EC58E; }
.kpi-item.purple { background: #9A67FD; border-color: #9A67FD; }
.kpi-item.orange .kpi-num,
.kpi-item.orange .kpi-desc,
.kpi-item.mint .kpi-num,
.kpi-item.mint .kpi-desc,
.kpi-item.purple .kpi-num,
.kpi-item.purple .kpi-desc { color: #fff; }
.kpi-num { font-size: 32px; font-weight: 900; letter-spacing: -0.04em; color: #0f172a; line-height: 1; }
.kpi-num.green { color: #3EC58E; }
.kpi-desc { font-size: 12px; color: #64748b; font-weight: 500; margin-top: 4px; line-height: 1.4; }

/* ── Section Label ─────────────────────────────────────────── */
.so-section-label {
    display: block;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #0042A0;
    padding-left: 14px;
    border-left: 3px solid #0042A0;
    margin: 56px 0 20px;
}

/* ── Key Findings ─────────────────────────────────────────── */
.findings-list { display: grid; grid-template-columns: 1fr 1fr; margin-bottom: 56px; }
.finding-row { padding: 22px 32px 22px 0; border-bottom: 1px solid #e2e8f0; display: flex; gap: 18px; align-items: flex-start; }
.finding-row:nth-child(odd) { padding-right: 36px; border-right: 1px solid #e2e8f0; }
.finding-row:nth-child(even) { padding-left: 36px; padding-right: 0; }
.finding-row:nth-child(n+3) { border-bottom: none; padding-top: 22px; }
.finding-accent { width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; }
.fa-danger  { background: #fef2f2; color: #DC2626; }
.fa-green   { background: #ecfdf5; color: #3EC58E; }
.fa-amber   { background: #fffbeb; color: #FF9F43; }
.fa-primary { background: #eff6ff; color: #0042A0; }
.finding-body { flex: 1; }
.finding-head { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 6px; line-height: 1.3; }
.finding-text { font-size: 13px; color: #64748b; line-height: 1.65; }
.findings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 48px; }
.finding-card { background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,.07), 0 1px 3px rgba(0,0,0,.04); overflow: hidden; transition: transform 0.18s ease, box-shadow 0.18s ease; cursor: default; }
.finding-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.11); }
.fc-strip { height: 5px; }
.fc-strip-danger  { background: #DC2626; }
.fc-strip-green   { background: #3EC58E; }
.fc-strip-amber   { background: #FF9F43; }
.fc-strip-primary { background: #0042A0; }
.finding-card-body { padding: 20px 24px 22px; display: flex; gap: 14px; align-items: flex-start; }

/* ── Treemap ─────────────────────────────────────────────── */
.landscape-card { background: #fff; border-radius: 14px; box-shadow: 0 2px 14px rgba(0,0,0,.07), 0 1px 3px rgba(0,0,0,.04); padding: 28px 32px 24px; margin-bottom: 56px; }
.treemap-section { margin-bottom: 0; }
.treemap-hdr { margin-bottom: 16px; }
.treemap-hdr-title { font-size: 18px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; }
.treemap-hdr-sub { font-size: 13px; color: #94a3b8; margin-top: 3px; }
.treemap { display: flex; height: 300px; gap: 3px; border-radius: 12px; overflow: hidden; }
.tm-col { display: flex; flex-direction: column; gap: 3px; }
.tm-cell {
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 10px 12px; cursor: pointer; overflow: hidden;
    position: relative;
    transition: filter 0.2s ease, transform 0.2s ease;
    z-index: 1;
}
.tm-cell::before {
    content: '';
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.32);
    opacity: 0;
    transition: opacity 0.18s ease;
    pointer-events: none;
}
.tm-cell::after {
    content: attr(data-pct);
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%) scale(0.85);
    font-size: 26px; font-weight: 900;
    color: #fff; letter-spacing: -0.03em;
    text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease;
    pointer-events: none;
}
.tm-cell:hover {
    filter: brightness(1.14);
    transform: scale(1.04);
    z-index: 10;
}
.tm-cell:hover::before { opacity: 1; }
.tm-cell:hover::after  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
.tm-name { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); line-height: 1.3; position: relative; z-index: 1; }
.tm-val  { font-size: 17px; font-weight: 900; color: #fff; line-height: 1; margin-top: 2px; position: relative; z-index: 1; }
.tm-legend { display: flex; gap: 20px; margin-top: 12px; flex-wrap: wrap; }
.tm-legend-item { display: flex; align-items: center; gap: 7px; font-size: 11px; color: #64748b; }
.tm-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
.treemap-insight { margin-top: 14px; padding: 14px 20px; border-left: 3px solid #0042A0; font-size: 13px; color: #334155; line-height: 1.7; }

/* ── Offence Profile (inside tabs) ──────────────────────── */
.offence-hed { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 24px; border-bottom: 1px solid #e2e8f0; margin: 8px 0 28px; }
.offence-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #94a3b8; margin-bottom: 6px; }
.offence-num { font-size: 56px; font-weight: 900; letter-spacing: -0.05em; line-height: 1; color: #0f172a; margin-bottom: 6px; }
.offence-sub { font-size: 15px; font-weight: 600; color: #334155; }
.offence-right { text-align: right; }
.offence-delta { font-size: 20px; font-weight: 900; }
.offence-delta.up { color: #DC2626; }
.offence-delta.dn { color: #3EC58E; }
.offence-delta-note { font-size: 12px; color: #94a3b8; margin-top: 4px; line-height: 1.5; }

/* ── KPI Row ─────────────────────────────────────────────── */
.o-kpis { display: grid; grid-template-columns: repeat(5,1fr); gap: 10px; margin-bottom: 28px; }
.o-kpi { border-radius: 10px; padding: 14px 16px; border: 1px solid transparent; }
.o-kpi.s-red    { background: #fff5f5; border-color: #fecaca; }
.o-kpi.s-amber  { background: #fffbf0; border-color: #fed7aa; }
.o-kpi.s-purple { background: #f5f3ff; border-color: #ddd6fe; }
.o-kpi.s-blue   { background: #eff6ff; border-color: #bfdbfe; }
.o-kpi.s-green  { background: #f0fdf8; border-color: #a7f3d0; }
.o-kpi-val { font-size: 22px; font-weight: 800; color: #0f172a; line-height: 1; }
.o-kpi-lbl { font-size: 11px; color: #64748b; margin-top: 5px; line-height: 1.45; }

/* ── Intel Block ─────────────────────────────────────────── */
.intel-block { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
.intel-dark { background: #1E3A5F; border-radius: 12px; padding: 26px 28px; }
.intel-blue { background: #0042A0; border-radius: 12px; padding: 26px 28px; }
.intel-light { background: #fff; border-radius: 12px; padding: 26px 28px; border: 1px solid #e2e8f0; border-top: 4px solid #0042A0; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
.intel-eye { font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 14px; }
.intel-dark .intel-eye { color: #3EC58E; }
.intel-blue .intel-eye { color: rgba(255,255,255,0.5); }
.intel-light .intel-eye { color: #0042A0; }
.intel-pt { font-size: 13px; line-height: 1.7; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
.intel-dark .intel-pt, .intel-blue .intel-pt { color: rgba(255,255,255,0.72); }
.intel-light .intel-pt { color: #334155; border-bottom-color: #e2e8f0; }
.intel-pt:last-child { border-bottom: none; }
.intel-insight { font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.75; }
.intel-insight strong { color: #fff; }

/* ── Policy Strip ────────────────────────────────────────── */
.policy-strip { border-left: 4px solid #FF9F43; padding: 18px 22px; background: rgba(255,159,67,0.06); border-radius: 0 10px 10px 0; margin-top: 20px; margin-bottom: 8px; }
.policy-eye { font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #FF9F43; margin-bottom: 8px; }
.policy-txt { font-size: 13px; color: #334155; line-height: 1.75; }
.policy-txt strong { color: #0f172a; }

/* ── Trafficking Special Report ──────────────────────────── */
.trafficking-card {
    background: linear-gradient(150deg, #0042A0 0%, #1A66D4 55%, #0B2545 90%);
    border-radius: 16px;
    padding: 36px 40px 32px;
    color: #fff;
    border: 1px solid rgba(154,103,253,0.22);
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}
.trafficking-card::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(0, 66, 160,0.10) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}
.tc-eyebrow {
    font-size: 10px; font-weight: 400; letter-spacing: 0.22em;
    text-transform: uppercase; color: #f7f6f9;
    margin-bottom: 28px;
    display: flex; align-items: center; gap: 10px;
}
.tc-eyebrow::after {
    content: ''; flex: 1; height: 1px;
    background: rgba(154,103,253,0.22);
}
.tc-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    gap: 0;
    margin-bottom: 28px;
    align-items: end;
}
.tc-stat {
    padding: 0 36px 0 0;
    border-right: 1px solid rgba(255,255,255,0.07);
}
.tc-stat + .tc-stat { padding-left: 36px; }
.tc-stat:last-child { border-right: none; }
.tc-accent-chip {
    display: inline-block;
    background: rgba(154,103,253,0.18);
    border: 1px solid rgba(154,103,253,0.35);
    border-radius: 4px; padding: 3px 8px;
    font-size: 9px; font-weight: 700; color: #c4a6fd;
    letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 10px;
}
.tc-num {
    font-size: 76px; font-weight: 900;
    letter-spacing: -0.05em; line-height: 1;
    color: rgba(255,255,255,0.88); margin-bottom: 8px;
}
.tc-num-accent { color: #9A67FD; font-size: 84px; }
.tc-lbl {
    font-size: 10px; font-weight: 700;
    color: rgba(255,255,255,0.78);
    letter-spacing: 0.12em; text-transform: uppercase;
}
.tc-sub {
    font-size: 12px; color: rgba(255,255,255,0.62);
    margin-top: 5px; font-style: italic;
}
.tc-caution {
    display: flex; gap: 14px; align-items: flex-start;
    background: rgba(255,159,67,0.10);
    border: 1px solid rgba(255,159,67,0.28);
    border-radius: 10px; padding: 16px 20px;
    font-size: 13px; color: rgba(255,255,255,0.82);
    line-height: 1.75;
}
.tc-caution-icon {
    width: 30px; height: 30px; flex-shrink: 0;
    background: rgba(255,159,67,0.20); border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; color: #FF9F43; margin-top: 1px;
}
.tc-caution strong { color: #fff; }

/* ── Trafficking Key Insight Card ────────────────────────── */
.tc-insight-card {
    background: #fff;
    border-radius: 14px;
    padding: 28px 30px;
    border: 1px solid #e2e8f0;
    border-top: 4px solid #9A67FD;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
}
.tc-insight-eye {
    font-size: 9px; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: #9A67FD; margin-bottom: 16px;
}
.tc-insight-stat {
    font-size: 58px; font-weight: 900;
    color: #9A67FD; letter-spacing: -0.04em;
    line-height: 1; margin-bottom: 4px;
}
.tc-insight-stat-lbl {
    font-size: 12px; font-weight: 600;
    color: #64748b; margin-bottom: 18px;
    padding-bottom: 18px; border-bottom: 1px solid #e2e8f0;
}
.tc-insight-body {
    font-size: 13px; color: #475569; line-height: 1.8;
}
.tc-insight-body strong { color: #0f172a; }

/* ── Cross-Crime ─────────────────────────────────────────── */
.cross-hdr { margin-bottom: 28px; }
.cross-title { font-size: 22px; font-weight: 900; letter-spacing: -0.03em; color: #0f172a; }
.cross-sub { font-size: 14px; color: #64748b; margin-top: 4px; line-height: 1.6; max-width: 72ch; }

/* ── Bold tab headings ───────────────────────────────────── */
:global([role="tab"]) { font-weight: 700; }

/* ── Ring KPI cards ──────────────────────────────────────── */
.o-ring-card {
    border-radius: 14px;
    padding: 8px 4px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.o-ring-red    { background: #ffffff; border: 1px solid #fecaca; }
.o-ring-amber  { background: #ffffff; border: 1px solid #fed7aa; }
.o-ring-purple { background: #ffffff; border: 1px solid #ddd6fe; }
.o-ring-blue   { background: #ffffff; border: 1px solid #bfdbfe; }
.o-ring-green  { background: #ffffff; border: 1px solid #a7f3d0; }
.o-text-card {
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    min-height: 196px;
}
.o-text-val { font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1; text-align: center; }
.o-text-lbl { font-size: 11px; color: #64748b; margin-top: 8px; line-height: 1.4; text-align: center; }

/* ── Takeaway ────────────────────────────────────────────── */
.takeaway { background: linear-gradient(140deg, #1E3A5F, #0d2040); border-radius: 16px; padding: 44px 52px; color: #fff; margin-bottom: 48px; }
.takeaway-eye { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #3EC58E; margin-bottom: 6px; }
.takeaway-title { font-size: 26px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 36px; color: #fff; }
.t-items { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 44px; }
.t-item { display: flex; gap: 18px; align-items: flex-start; }
.t-item.wide { grid-column: 1 / -1; }
.t-num { font-size: 36px; font-weight: 900; color: rgba(154, 103, 253,0.6); line-height: 1; flex-shrink: 0; width: 40px; }
.t-txt { font-size: 13px; color: rgba(255,255,255,0.72); line-height: 1.7; padding-top: 4px; }
.t-txt strong { color: #fff; }

/* ── Hover Effects ───────────────────────────────────────── */
.murder-card,
.kpi-item,
.o-ring-card,
.o-text-card,
.o-kpi {
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    cursor: default;
}
.intel-dark,
.intel-blue,
.intel-light {
    transition: filter 0.18s ease;
}

/* KPI snapshot cards */
.murder-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.10), 0 28px 52px rgba(0,0,0,0.12);
}
.kpi-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.13);
}
.kpi-item.orange:hover { filter: brightness(1.07); }
.kpi-item.mint:hover   { filter: brightness(1.07); }
.kpi-item.purple:hover { filter: brightness(1.07); }

/* Offence profile gauge + text cards */
.o-ring-card:hover,
.o-text-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 22px rgba(0,0,0,0.10);
}

/* o-kpi tinted chips */
.o-kpi:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}

/* Intel panels */
.intel-dark:hover { filter: brightness(1.09); }
.intel-blue:hover { filter: brightness(1.09); }
.intel-light:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.10); }
</style>

```sql serious_summary
select
  sum(cases_2024) as total_2024,
  sum(cases_2023) as total_2023,
  round(100.0*(sum(cases_2024)-sum(cases_2023))/nullif(sum(cases_2023),0),1) as change_pct
from (
  select
    max(case when year=2023 then cases end) as cases_2023,
    max(case when year=2024 then cases end) as cases_2024
  from insights.serious_crime
  where year in (2023,2024)
  group by offence
) t
```

```sql serious_2024
select
  offence,
  max(case when year=2023 then cases end) as cases_2023,
  max(case when year=2024 then cases end) as cases_2024,
  round(100.0*(max(case when year=2024 then cases end)-max(case when year=2023 then cases end))/nullif(max(case when year=2023 then cases end),0),1) as change_pct
from insights.serious_crime
where year in (2023,2024)
group by offence
order by cases_2024 desc
```

```sql perpetrator_count
select sum(count) as total from insights.perpetrator_employment
```

```sql murder_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  round(100.0 * n.night_count   / nullif(t.total_cases, 0), 1)               as night_pct,
  round(100.0 * w.weekend_count / nullif(t.total_cases, 0), 1)               as weekend_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence = 'Murder'
) t
cross join (
  select sum(count) as night_count
  from insights.offence_day
  where offence = 'murder'
    and time_band in ('1801-2000','2001-2200','2201-0000','0001-0200','0201-0400','0401-0600')
) n
cross join (
  select sum(count) as weekend_count
  from insights.offence_day
  where offence = 'murder'
    and lower(day_of_week) in ('friday','saturday','sunday')
) w
```

```sql murder_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='murder' order by month_number
```

```sql murder_time_day
select time_band, day_of_week, count
from insights.offence_day where offence='murder' order by time_band, day_of_week
```

```sql murder_motive
select motive, cases, percentage
from insights.offence_motive where offence='murder' order by cases desc
```

```sql murder_relationship
select relationship_type, count, percentage
from insights.offence_relationship where offence='murder' order by count desc
```

```sql murder_victim_age
select age_group, male_count, female_count, total, percentage
from insights.victim_age where offence='murder' order by age_group
```

```sql murder_perp_employment
select employment_status, count, percentage
from insights.perpetrator_employment where offence='murder' order by count desc
```

```sql ttk_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  round(100.0 * g.female_count  / nullif(g.total_count, 0), 1)               as female_victim_pct,
  r.percentage                                                                 as romantic_link_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence = 'Threat to Kill'
) t
cross join (
  select sum(female_count) as female_count, sum(total) as total_count
  from insights.victim_age where offence = 'threat_to_kill'
) g
cross join (
  select percentage
  from insights.offence_relationship
  where offence = 'threat_to_kill' and relationship_type = 'romantic_link'
) r
```

```sql ttk_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='threat_to_kill' order by month_number
```

```sql ttk_relationship
select relationship_type, count, percentage
from insights.offence_relationship where offence='threat_to_kill' order by count desc
```

```sql ttk_motive
select motive, cases, percentage
from insights.offence_motive where offence='threat_to_kill' order by cases desc
```

```sql rape_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  round(100.0 * g.female_count  / nullif(g.total_count, 0), 1)               as female_victim_pct,
  s.percentage                                                                 as stranger_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence = 'Rape'
) t
cross join (
  select sum(female_count) as female_count, sum(total) as total_count
  from insights.victim_age where offence = 'rape'
) g
cross join (
  select percentage
  from insights.victim_relo
  where offence = 'rape' and lower(relationship_type) = 'stranger'
) s
```

```sql rape_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='rape' order by month_number
```

```sql rape_relationship
select relationship_type, count, percentage
from insights.victim_relo where offence='rape' order by count desc
```

```sql rape_victim_age
select age_group, female_count, total, percentage
from insights.victim_age where offence='rape' order by age_group
```

```sql defilement_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  l.percentage                                                                  as perp_home_pct,
  r.percentage                                                                  as romantic_link_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence like 'Defilement%'
) t
cross join (
  select percentage
  from insights.offence_location
  where offence = 'defilement' and taxonomy = 'standard'
    and lower(location_label) like '%perpetrator%'
) l
cross join (
  select percentage
  from insights.offence_relationship
  where offence = 'defilement' and relationship_type = 'romantic_link'
) r
```

```sql defilement_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='defilement' order by month_number
```

```sql defilement_relationship
select relationship_type, count, percentage
from insights.offence_relationship where offence='defilement' order by count desc
```

```sql defilement_perp_age
select age_group, male_count, total, percentage
from insights.perpetrator_age where offence='defilement' order by age_group
```

```sql robbery_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  l.percentage                                                                  as street_pct,
  round(k.percentage + s.percentage, 1)                                         as edge_weapon_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence = 'Robbery'
) t
cross join (
  select percentage
  from insights.offence_location
  where offence = 'robbery' and taxonomy = 'robbery'
    and lower(location_label) like '%street%'
) l
cross join (
  select percentage from insights.offence_weapon
  where offence = 'robbery' and weapon_type = 'knives'
) k
cross join (
  select percentage from insights.offence_weapon
  where offence = 'robbery' and weapon_type = 'sharp_instrument'
) s
```

```sql robbery_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='robbery' order by month_number
```

```sql robbery_weapon
select weapon_type, cases, percentage
from insights.offence_weapon where offence='robbery' order by cases desc
```

```sql robbery_location
select location_label, cases, percentage
from insights.offence_location where offence='robbery' and taxonomy='robbery' order by cases desc
```

```sql stock_metrics
select
  t.total_cases,
  round(100.0 * (t.total_cases - t.prev_cases) / nullif(t.prev_cases, 0), 1) as change_pct,
  l.percentage                                                                  as grazing_pct,
  e.percentage                                                                  as unemployed_pct
from (
  select
    max(case when year = 2024 then cases end) as total_cases,
    max(case when year = 2023 then cases end) as prev_cases
  from insights.serious_crime where offence = 'Stock Theft'
) t
cross join (
  select percentage
  from insights.offence_location
  where offence = 'stock_theft' and taxonomy = 'stock_theft'
    and lower(location_label) like '%grazing%'
) l
cross join (
  select percentage
  from insights.perpetrator_employment
  where offence = 'stock_theft' and employment_status = 'unemployed'
) e
```

```sql stock_month
select month_name, month_number, cases, percentage
from insights.offence_month where offence='stock_theft' order by month_number
```

```sql stock_by_division
select division, cases from insights.serious_crime_div where offence='Stock Theft' order by cases desc
```

```sql stock_location
select location_label, cases, percentage
from insights.offence_location where offence='stock_theft' and taxonomy='stock_theft' order by cases desc
```

```sql trafficking_metrics
select
  c.total_cases,
  -58.5                                                                        as change_pct,
  v.total_victims,
  v.children_6_10_pct
from (
  select sum(cases) as total_cases
  from insights.offence_month where offence = 'human_trafficking'
) c
cross join (
  select
    sum(total)                                                                 as total_victims,
    max(case when age_group = '06-10' then percentage end)                     as children_6_10_pct
  from insights.victim_age where offence = 'human_trafficking'
) v
```

```sql trafficking_victim_age
select age_group, male_count, female_count, total, percentage
from insights.victim_age where offence='human_trafficking' order by age_group
```

```sql unemployment_cross
select offence, percentage as pct_unemployed
from insights.perpetrator_employment
where lower(employment_status)='unemployed'
order by percentage desc
```

```sql relationship_cross
select offence, sum(percentage) as known_pct
from insights.offence_relationship
where lower(relationship_type) not in ('unknown','stranger','not applicable')
group by offence
order by known_pct desc
```

<!-- ═══════════════════════════════════════════════════════════
     HERO
════════════════════════════════════════════════════════════ -->
<div class="report-hero">
<div class="hero-eyebrow">DATA123 Insights Hub &nbsp;·&nbsp; Botswana Police Service &nbsp;·&nbsp; Annual Crime Statistics 2024</div>
<h1>Serious Offences<br>Intelligence Report</h1>
<div class="hero-alert"><span class="pulse"></span>Murder increased for the fourth consecutive year — the only serious offence worsening nationally</div>
<p class="hero-summary">14,560 serious offences were recorded in 2024 — a 14.6% decline from 17,054 in 2023 and the lowest total since 2020. The decline was broad-based across property and public-order categories. One exception stands: murder continued its upward trajectory for a fourth consecutive year. This report examines eleven serious offence categories across event patterns, demographics, motives, and structural drivers.</p>
<div class="hero-meta-row">
<span class="hero-tag">1 Jan – 31 Dec 2024</span>
<span class="hero-tag">11 offence categories</span>
<span class="hero-tag">Source: Botswana Police Service</span>
<span class="hero-tag">A DATA123 Intelligence Publication</span>
</div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     KPI ZONE — Murder dominant
════════════════════════════════════════════════════════════ -->
{#if serious_summary.ready && murder_metrics.ready}
<div class="kpi-zone">
<div class="murder-card">
<div class="murder-label">Critical Alert</div>
<div class="murder-number">{murder_metrics[0].total_cases}</div>
<div class="murder-title">Murder Cases Recorded</div>
<div class="murder-badge">▲ +{murder_metrics[0].change_pct}% from 2023</div>
<div class="murder-note">Fourth consecutive annual increase since 2020</div>
</div>
<div class="kpi-secondary">
<div class="kpi-item orange">
<div class="kpi-num">{serious_summary[0].total_2024.toLocaleString('en-US')}</div>
<div class="kpi-desc">Serious Offences</div>
</div>
<div class="kpi-item mint">
<div class="kpi-num">{perpetrator_count[0].total.toLocaleString('en-US')}</div>
<div class="kpi-desc">Perpetrators profiled</div>
</div>
<div class="kpi-item purple">
<div class="kpi-num">11</div>
<div class="kpi-desc">Categories analysed</div>
</div>
<div class="kpi-item">
<div class="kpi-num green">↓ {Math.abs(serious_summary[0].change_pct)}%</div>
<div class="kpi-desc">Annual change</div>
</div>
</div>
</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════
     KEY INTELLIGENCE FINDINGS
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Key Intelligence Findings</span>
<div class="findings-grid">
<div class="finding-card">
<div class="fc-strip fc-strip-danger"></div>
<div class="finding-card-body">
<div class="finding-accent fa-danger">⚠</div>
<div class="finding-body">
<div class="finding-head">Murder increased 4.7% — the fourth consecutive year</div>
<div class="finding-text">The only serious offence category moving in the wrong direction. 337 cases recorded — the highest level since 2018, running counter to every other trend.</div>
</div>
</div>
</div>
<div class="finding-card">
<div class="fc-strip fc-strip-green"></div>
<div class="finding-card-body">
<div class="finding-accent fa-green">↓</div>
<div class="finding-body">
<div class="finding-head">Serious offences at their lowest level since 2020</div>
<div class="finding-text">The 14.6% decline was broad-based — property crime down 17.6%, public-order offences down 9.0%. The second consecutive annual improvement from the 2022 peak.</div>
</div>
</div>
</div>
<div class="finding-card">
<div class="fc-strip fc-strip-amber"></div>
<div class="finding-card-body">
<div class="finding-accent fa-amber">%</div>
<div class="finding-body">
<div class="finding-head">Unemployment is the dominant perpetrator characteristic</div>
<div class="finding-text">Over 70% of profiled perpetrators across all serious offence categories were unemployed at time of offence — appearing consistently across property, violent, and sexual crime.</div>
</div>
</div>
</div>
<div class="finding-card">
<div class="fc-strip fc-strip-primary"></div>
<div class="finding-card-body">
<div class="finding-accent fa-primary">↔</div>
<div class="finding-body">
<div class="finding-head">Relationship violence dominates crimes against persons</div>
<div class="finding-text">Intimate partner, romantic, and family dynamics account for the majority of violent crime. These are not stranger-danger incidents — they are relationship failures with fatal consequences.</div>
</div>
</div>
</div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     CRIME LANDSCAPE — TREEMAP
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Serious Crime Landscape — 2024</span>
<div class="landscape-card">
<div class="treemap-section">
<div class="treemap-hdr">
<div class="treemap-hdr-title">Where serious crime concentrates</div>
<div class="treemap-hdr-sub">Area proportional to case volume · All 11 categories · 2024</div>
</div>
<div class="treemap">
<div class="tm-col" style="flex:19">
<div class="tm-cell" style="flex:1;background:#0042A0" data-pct="19.3%">
<div class="tm-name">House Breaking &amp; Theft</div>
<div class="tm-val">2,816</div>
</div>
</div>
<div class="tm-col" style="flex:23">
<div class="tm-cell" style="flex:10;background:#1458bb" data-pct="11.7%">
<div class="tm-name">Burglary &amp; Theft</div>
<div class="tm-val">1,714</div>
</div>
<div class="tm-cell" style="flex:10;background:#2266cc" data-pct="11.6%">
<div class="tm-name">Store Breaking &amp; Theft</div>
<div class="tm-val">1,687</div>
</div>
</div>
<div class="tm-col" style="flex:30">
<div class="tm-cell" style="flex:11;background:#FF9F43" data-pct="15.7%">
<div class="tm-name">Stock Theft</div>
<div class="tm-val">2,291</div>
</div>
<div class="tm-cell" style="flex:10;background:#9A67FD" data-pct="13.8%">
<div class="tm-name">Rape</div>
<div class="tm-val">2,018</div>
</div>
</div>
<div class="tm-col" style="flex:17">
<div class="tm-cell" style="flex:13;background:#7b4dd4" data-pct="11.4%">
<div class="tm-name">Defilement</div>
<div class="tm-val">1,666</div>
</div>
<div class="tm-cell" style="flex:7;background:#4a8fe6" data-pct="5.8%">
<div class="tm-name">Threat to Kill</div>
<div class="tm-val">845</div>
</div>
</div>
<div class="tm-col" style="flex:11">
<div class="tm-cell" style="flex:6;background:#3d7dd8" data-pct="6.7%">
<div class="tm-name">Robbery</div>
<div class="tm-val">981</div>
</div>
<div class="tm-cell" style="flex:2;background:#DC2626" data-pct="2.3%">
<div class="tm-name" style="font-size:9px">Murder</div>
<div class="tm-val" style="font-size:13px">337</div>
</div>
<div class="tm-cell" style="flex:1;background:#3370cc" data-pct="1.4%">
<div class="tm-name" style="font-size:9px">Motor Vehicle</div>
<div class="tm-val" style="font-size:13px">205</div>
</div>
<div class="tm-cell" style="flex:1;background:#94a3b8;justify-content:center" data-pct="0.2%">
<div class="tm-name" style="font-size:8px">HT 22</div>
</div>
</div>
</div>
<div class="tm-legend">
<div class="tm-legend-item"><div class="tm-dot" style="background:#0042A0"></div>Property crime (breaking &amp; entry)</div>
<div class="tm-legend-item"><div class="tm-dot" style="background:#9A67FD"></div>Gender-based / sexual violence</div>
<div class="tm-legend-item"><div class="tm-dot" style="background:#FF9F43"></div>Stock theft</div>
<div class="tm-legend-item"><div class="tm-dot" style="background:#DC2626"></div>Murder</div>
</div>
<div class="treemap-insight"><strong>Property crime accounts for 67% of all serious offences</strong> — yet recorded the steepest declines in 2024, with individual categories falling 12–34%. The red square is small in area but carries the greatest policy urgency: murder's footprint is tiny, its trajectory is not.</div>
</div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     OFFENCE INTELLIGENCE PROFILES
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Offence Intelligence Profiles</span>

<Tabs color=primary>

<Tab label="Murder">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Murder</div>
<div class="offence-num">{murder_metrics[0].total_cases}</div>
<div class="offence-sub">Murder cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta up">▲ +{murder_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Fourth consecutive annual increase<br>Highest level since 2018</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:murder_metrics[0]?.night_pct??0,name:'Night incidents'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-amber">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#FF9F43'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fed7aa']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:murder_metrics[0]?.weekend_pct??0,name:'Weekend incidents'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-purple">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#9A67FD'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#ede9fe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:37.1,name:'Romantic link'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:33.8,name:'Jealousy motive'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-blue">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#0042A0'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#bfdbfe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:26.4,name:'Arguments motive'}]}]}} height=180px />
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">Most murders occur during weekends and at night — a concentrated risk window accounting for over 60% of all incidents.</div>
<div class="intel-pt">Jealousy and arguments account for 60.2% of all recorded motives. This is relationship violence, not random stranger violence.</div>
<div class="intel-pt">Victims and perpetrators are most frequently aged 21–35, the same cohort carrying the highest national unemployment rates.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">The majority of murders occur between people already known to each other — in domestic and romantic contexts, concentrated on weekends. <strong>Traditional enforcement responses alone are unlikely to change this pattern.</strong> The evidence points toward conflict resolution, domestic violence intervention, and community-level prevention as the primary levers.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={murder_month}
    x=month_name
    y=cases
    title="Murder by month — 2024"
    subtitle="Seasonal distribution across 12 months"
    colorPalette={['#0042A0']}
    labels=true
  />

  <Heatmap
    data={murder_time_day}
    x=day_of_week
    y=time_band
    value=count
    title="Time and day of incident"
    subtitle="When murders concentrate — by hour band and day of week"
    colorScale={['#f0f5ff','#0042A0']}
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={murder_motive}
    x=motive
    y=percentage
    yFmt='0.0"%"'
    title="Motive breakdown"
    subtitle="Recorded motives — 337 murder cases"
    swapXY=true
    colorPalette={['#DC2626']}
    labels=true
  />

  <BarChart
    data={murder_relationship}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim–perpetrator relationship"
    subtitle="Nature of relationship at time of offence"
    swapXY=true
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={murder_victim_age}
    x=age_group
    y={['male_count','female_count']}
    title="Victim age and sex"
    subtitle="Age group distribution — murder 2024"
    colorPalette={['#0042A0','#9A67FD']}
    labels=false
  />

  <BarChart
    data={murder_perp_employment}
    x=employment_status
    y=percentage
    yFmt='0.0"%"'
    title="Perpetrator employment status"
    subtitle="Employment profile at time of offence"
    swapXY=true
    colorPalette={['#FF9F43']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">The concentration of murders around jealousy, arguments and intimate partner relationships suggests that <strong>domestic violence interventions, conflict resolution programmes and community-level prevention strategies</strong> may deliver greater impact than enforcement-focused responses alone. The Friday–Sunday night concentration provides a clear operational window for targeted patrol deployment.</p>
</div>

</Tab>

<Tab label="Threat to Kill">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Threat to Kill</div>
<div class="offence-num">{ttk_metrics[0].total_cases}</div>
<div class="offence-sub">Threat to Kill cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta dn">↓ {ttk_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Declined from 913 in 2023<br>GBV indicator — 87% female victims</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-purple">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#9A67FD'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#ede9fe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:ttk_metrics[0]?.female_victim_pct??0,name:'Female victims'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:ttk_metrics[0]?.romantic_link_pct??0,name:'Romantic link'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',clockwise:false,startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>'↓ '+v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:Math.abs(ttk_metrics[0]?.change_pct??0),name:'YoY change'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-blue">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#0042A0'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#bfdbfe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:64.4,name:'Jealousy motive'}]}]}} height=180px />
</div>

<div class="o-text-card">
<div class="o-text-val">26–30</div>
<div class="o-text-lbl">Peak victim age group</div>
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">87% of victims are female — the highest female-victim concentration of any offence category. This is overwhelmingly a gendered crime.</div>
<div class="intel-pt">70.9% of cases are linked to romantic relationships. Jealousy dominates as a recorded motive at 64.4% — significantly higher than murder's jealousy rate.</div>
<div class="intel-pt">The 26–30 female age group is the most affected. The pattern points to intimate partner violence as the primary context.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">Threat to Kill is primarily a <strong>gender-based violence indicator</strong>, not a general public-safety concern. It requires a GBV-specific response framework rather than conventional policing approaches. <strong>Early warning systems, restraining order enforcement, and survivor support infrastructure</strong> are the most targeted interventions available.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={ttk_month}
    x=month_name
    y=cases
    title="Threat to Kill by month — 2024"
    subtitle="845 cases — seasonal distribution"
    colorPalette={['#0042A0']}
    labels=true
  />

  <BarChart
    data={ttk_motive}
    x=motive
    y=percentage
    yFmt='0.0"%"'
    title="Motive breakdown"
    subtitle="Jealousy dominant at 64.4%"
    swapXY=true
    colorPalette={['#DC2626']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={ttk_relationship}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim–perpetrator relationship"
    subtitle="845 cases — romantic link dominant at 70.9%"
    swapXY=true
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">With 87% of victims female and over 70% of cases linked to romantic relationships, Threat to Kill is primarily a gender-based violence indicator. <strong>Early warning systems, civil protection order enforcement, counselling services, and survivor support infrastructure</strong> are the most effective interventions. Enforcement-only responses miss the structural driver entirely.</p>
</div>

</Tab>

<Tab label="Rape">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Rape</div>
<div class="offence-num">{rape_metrics[0].total_cases.toLocaleString('en-US')}</div>
<div class="offence-sub">Rape cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta dn">↓ {rape_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Declined from 2,296 in 2023<br>99.2% of victims are female</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-purple">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#9A67FD'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#ede9fe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:rape_metrics[0]?.female_victim_pct??0,name:'Female victims'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:rape_metrics[0]?.stranger_pct??0,name:'Stranger perp'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',clockwise:false,startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>'↓ '+v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:Math.abs(rape_metrics[0]?.change_pct??0),name:'YoY change'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-blue">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#0042A0'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#bfdbfe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:40,name:'Bushy area or perp home'}]}]}} height=180px />
</div>

<div class="o-text-card">
<div class="o-text-val">0–20</div>
<div class="o-text-lbl">Highest victim age concentration</div>
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">51.4% of perpetrators are strangers to the victim — a sharp contrast with murder and threat to kill, where the perpetrator is almost always known.</div>
<div class="intel-pt">Bushy areas and the perpetrator's home together account for approximately 40% of all incidents. Location pattern differs fundamentally from other violent crimes.</div>
<div class="intel-pt">Victims are concentrated in the 0–20 age range, pointing to specific vulnerability in younger female populations.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">Rape requires a <strong>different prevention framework than murder or threat to kill</strong>. The dominant stranger-perpetrator profile means relationship-based interventions will miss most cases. Situational prevention — <strong>public space safety, lighting, community patrol, and bystander intervention</strong> — is more appropriate than the domestic-violence response framework applied to other violent crimes.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={rape_month}
    x=month_name
    y=cases
    title="Rape by month — 2024"
    subtitle="2,018 cases — seasonal distribution"
    colorPalette={['#9A67FD']}
    labels=true
  />

  <BarChart
    data={rape_relationship}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim–perpetrator relationship"
    subtitle="Rape 2024 — stranger perpetrator dominant"
    swapXY=true
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={rape_victim_age}
    x=age_group
    y=total
    title="Victim age distribution"
    subtitle="2,018 victims — 99.2% female"
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">The dominant stranger-perpetrator profile and outdoor/public location pattern suggest that rape prevention requires a <strong>situational and public-space focused strategy</strong>. School-based awareness, environmental design in high-risk areas, survivor support pathways, and accessible reporting systems are the priority interventions. These figures represent a floor — GBV is consistently under-reported nationally.</p>
</div>

</Tab>

<Tab label="Defilement">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Defilement</div>
<div class="offence-num">{defilement_metrics[0].total_cases.toLocaleString('en-US')}</div>
<div class="offence-sub">Defilement cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta dn">↓ {defilement_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Declined from 1,754 in 2023<br>99.8% perpetrators are male</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:defilement_metrics[0]?.romantic_link_pct??0,name:'Romantic link'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-amber">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#FF9F43'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fed7aa']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:defilement_metrics[0]?.perp_home_pct??0,name:"At perp's home"}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',clockwise:false,startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>'↓ '+v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:Math.abs(defilement_metrics[0]?.change_pct??0),name:'YoY change'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-purple">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#9A67FD'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#ede9fe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:99.8,name:'Male perpetrators'}]}]}} height=180px />
</div>

<div class="o-text-card">
<div class="o-text-val">16–30</div>
<div class="o-text-lbl">Dominant perpetrator age</div>
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">67.5% of incidents occur at the perpetrator's home — vs 19% for rape. These are fundamentally different location profiles despite being related offence types.</div>
<div class="intel-pt">79.2% of perpetrators had a romantic relationship with the victim. Combined with the domestic location pattern, this points to a known-perpetrator, home-based offence profile.</div>
<div class="intel-pt">Perpetrators are predominantly male, aged 16–30. This age and gender concentration offers a targeted intervention opportunity.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">Defilement is fundamentally different from rape in its context and prevention requirements. The domestic, known-perpetrator profile requires <strong>school-based relationship education, child protection programmes, and community-level prevention targeting young male perpetrators</strong>. The overlap with romantic relationship dynamics suggests early relationship education is the highest-leverage intervention point.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={defilement_month}
    x=month_name
    y=cases
    title="Defilement by month — 2024"
    subtitle="1,666 cases — seasonal distribution"
    colorPalette={['#7b4dd4']}
    labels=true
  />

  <BarChart
    data={defilement_relationship}
    x=relationship_type
    y=percentage
    yFmt='0.0"%"'
    title="Victim–perpetrator relationship"
    subtitle="Defilement 2024 — romantic link dominant at 79.2%"
    swapXY=true
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={defilement_perp_age}
    x=age_group
    y=total
    title="Perpetrator age — defilement"
    subtitle="1,059 perpetrators — 99.8% male"
    colorPalette={['#7b4dd4']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">The domestic, known-perpetrator profile of defilement points unambiguously to the need for <strong>school-based relationship and consent education, child protection outreach, and community-level early warning systems</strong> targeting young males aged 16–30. This is a preventable offence type with predictable risk patterns. The 5% year-on-year decline indicates policy-responsive potential.</p>
</div>

</Tab>

<Tab label="Robbery">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Robbery</div>
<div class="offence-num">{robbery_metrics[0].total_cases}</div>
<div class="offence-sub">Robbery cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta dn">↓ {robbery_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Strongest single-year decline in series<br>Edge weapons in 77.3% of cases</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',clockwise:false,startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>'↓ '+v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:Math.abs(robbery_metrics[0]?.change_pct??0),name:'YoY change'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:robbery_metrics[0]?.street_pct??0,name:'Street robbery'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-amber">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#FF9F43'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fed7aa']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:robbery_metrics[0]?.edge_weapon_pct??0,name:'Edge weapons'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-blue">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#0042A0'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#bfdbfe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:44.9,name:'Knives specifically'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-purple">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#9A67FD'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#ede9fe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(0)+'%+',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:70,name:'Perps unemployed'}]}]}} height=180px />
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">Street robbery accounts for 46.8% of all cases — the dominant context. This is an outdoor, public-space offence, unlike the domestic profile of violent crimes.</div>
<div class="intel-pt">Edge weapons (knives and sharp instruments) feature in 77.3% of all robberies. This is an armed crime type requiring situational prevention responses.</div>
<div class="intel-pt">The 29.5% decline is the strongest improvement of any offence in 2024 — suggesting existing interventions are working.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">The street-robbery concentration and edge-weapon dominance point to <strong>environmental design and situational prevention</strong> as the primary levers. Lighting, surveillance, and public awareness in high-pedestrian areas address the dominant offence context. <strong>The strong year-on-year decline should be studied</strong> — understanding what drove the improvement will be as valuable as the statistic itself.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={robbery_month}
    x=month_name
    y=cases
    title="Robbery by month — 2024"
    subtitle="981 cases — seasonal distribution"
    colorPalette={['#0042A0']}
    labels=true
  />

  <BarChart
    data={robbery_weapon}
    x=weapon_type
    y=percentage
    yFmt='0.0"%"'
    title="Weapon type"
    subtitle="Knives dominant at 44.9% — edge weapons 77.3% total"
    swapXY=true
    colorPalette={['#FF9F43']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={robbery_location}
    x=location_label
    y=cases
    title="Location of robberies"
    subtitle="Street robbery — 46.8% of all cases"
    swapXY=true
    colorPalette={['#0042A0']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">Street robbery prevention should prioritise <strong>situational prevention in high-pedestrian areas — improved lighting, CCTV coverage, and targeted patrol in peak locations</strong>. The strong 2024 decline provides a positive trajectory to reinforce. Knife crime specifically warrants a focused community-safety response addressing the combination of unemployment and weapon accessibility among the at-risk population.</p>
</div>

</Tab>

<Tab label="Stock Theft">

<div class="offence-hed">
<div>
<div class="offence-lbl">Crime Intelligence Profile · Stock Theft</div>
<div class="offence-num">{stock_metrics[0].total_cases.toLocaleString('en-US')}</div>
<div class="offence-sub">Stock Theft cases recorded in 2024</div>
</div>
<div class="offence-right">
<div class="offence-delta dn">↓ {stock_metrics[0].change_pct}%</div>
<div class="offence-delta-note">Third most prevalent serious crime<br>Concentrated in rural divisions</div>
</div>
</div>

<div class="o-kpis">

<div class="o-ring-card o-ring-amber">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#FF9F43'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fed7aa']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:stock_metrics[0]?.grazing_pct??0,name:'Grazing pastures'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:stock_metrics[0]?.unemployed_pct??0,name:'Perps unemployed'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-red">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',clockwise:false,startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#DC2626'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#fee2e2']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>'↓ '+v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:Math.abs(stock_metrics[0]?.change_pct??0),name:'YoY change'}]}]}} height=180px />
</div>

<div class="o-ring-card o-ring-blue">
<ECharts config={{backgroundColor:'transparent',animationDuration:1000,animationDelay:0,series:[{type:'gauge',startAngle:90,endAngle:-270,min:0,max:100,radius:'70%',progress:{show:true,roundCap:true,width:9,itemStyle:{color:'#0042A0'}},axisLine:{roundCap:true,lineStyle:{width:9,color:[[1,'#bfdbfe']]}},axisTick:{show:false},splitLine:{show:false},axisLabel:{show:false},pointer:{show:false},detail:{valueAnimation:true,formatter:v=>v.toFixed(1)+'%',fontSize:18,fontWeight:800,color:'#0f172a',offsetCenter:[0,'-10%']},title:{show:true,offsetCenter:[0,'-120%'],fontSize:10,fontWeight:600,color:'#64748b',overflow:'break',width:80},data:[{value:34.5,name:'North Central share'}]}]}} height=180px />
</div>

<div class="o-text-card">
<div class="o-text-val">Rural</div>
<div class="o-text-lbl">Geographic concentration</div>
</div>

</div>

<div class="intel-block">
<div class="intel-light">
<div class="intel-eye">What the data tells us</div>
<div class="intel-pt">North Central Division accounts for 34.5% of all stock theft — reflecting livestock farming concentration. This is a geographically specific crime, unlike urban property crime.</div>
<div class="intel-pt">49% of incidents occur in grazing pastures — a fundamentally different location profile from all other breaking offences, which concentrate around buildings at night.</div>
<div class="intel-pt">77.3% of perpetrators are unemployed — among the highest unemployment rates of any offence category.</div>
</div>
<div class="intel-blue">
<div class="intel-eye">Key Insight</div>
<p class="intel-insight">Stock theft requires <strong>rural-specific, geographically targeted intervention</strong> — not a generalist policing approach. The concentration in North Central Division and grazing areas points to <strong>community-based livestock protection schemes, rural patrol programmes, and economic development initiatives</strong> in the dominant farming regions as the primary levers.</p>
</div>
</div>

<Grid cols=2>

  <BarChart
    data={stock_month}
    x=month_name
    y=cases
    title="Stock Theft by month — 2024"
    subtitle="2,291 cases — seasonal distribution"
    colorPalette={['#FF9F43']}
    labels=true
  />

  <BarChart
    data={stock_by_division}
    x=division
    y=cases
    title="Stock Theft by division"
    subtitle="Geographic distribution — North Central dominant"
    swapXY=true
    colorPalette={['#FF9F43']}
    labels=true
  />

</Grid>

<Grid cols=2>

  <BarChart
    data={stock_location}
    x=location_label
    y=percentage
    yFmt='0.0"%"'
    title="Location of incidents"
    subtitle="Grazing pastures and kraals dominant"
    swapXY=true
    colorPalette={['#0042A0']}
    labels=true
  />

</Grid>

<div class="policy-strip">
<div class="policy-eye">Policy Implication</div>
<p class="policy-txt">Stock theft is fundamentally a rural economic crime. <strong>Community livestock protection schemes, rural patrol reinforcement in North Central Division, and technology-based tracking solutions</strong> for livestock are the highest-impact interventions. The 17.8% decline in 2024 suggests existing rural policing programmes are effective — they should be expanded and sustained.</p>
</div>

</Tab>

</Tabs>

<!-- ═══════════════════════════════════════════════════════════
     HUMAN TRAFFICKING — SPECIAL REPORT
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Special Report — Human Trafficking</span>

{#if trafficking_metrics.ready}
<div class="trafficking-card">
<div class="tc-eyebrow">Special Report · Human Trafficking · Botswana 2024</div>
<div class="tc-stats">
  <div class="tc-stat">
    <div class="tc-num">{trafficking_metrics[0].total_cases}</div>
    <div class="tc-lbl">Reported cases</div>
    <div class="tc-sub">Down from 53 in 2023</div>
  </div>
  <div class="tc-stat">
    <div class="tc-num">{trafficking_metrics[0].total_victims}</div>
    <div class="tc-lbl">Identified victims</div>
    <div class="tc-sub">≈ 3.6 victims per case</div>
  </div>
  <div class="tc-stat">
    <div class="tc-accent-chip">Largest victim cohort</div>
    <div class="tc-num tc-num-accent">{trafficking_metrics[0].children_6_10_pct}%</div>
    <div class="tc-lbl">Children aged 6–10</div>
    <div class="tc-sub">The most exposed age group by volume</div>
  </div>
</div>
<div class="tc-caution">
  <div class="tc-caution-icon">⚠</div>
  <span><strong>Interpret with caution.</strong> Trafficking is chronically under-detected. The year-on-year decline from 53 to {trafficking_metrics[0].total_cases} cases likely reflects changes in detection capacity, not a real reduction in activity. These numbers represent a floor, not a ceiling.</span>
</div>
</div>
{/if}

<Grid cols=2>

  <BarChart
    data={trafficking_victim_age}
    x=age_group
    y=total
    title="Trafficking victim age distribution"
    subtitle="{trafficking_metrics[0].total_victims} victims identified — children 6–10 the largest group"
    colorPalette={['#9A67FD']}
    labels=true
  />

  <div class="tc-insight-card">
    <div class="tc-insight-eye">Key Insight — Perpetrator Profile</div>
    <div class="tc-insight-stat">35.7%</div>
    <div class="tc-insight-stat-lbl">of trafficking perpetrators are employed</div>
    <div class="tc-insight-body">
      Trafficking is the <strong>only serious offence where perpetrators are more likely to be employed</strong>. Every other category shows 61–91% unemployment among offenders. This outlier profile points to <strong>organised criminal networks</strong> rather than opportunistic crime — requiring intelligence-led investigation, not standard community policing.
    </div>
  </div>

</Grid>

<!-- ═══════════════════════════════════════════════════════════
     CROSS-CRIME INTELLIGENCE
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Cross-Crime Intelligence</span>

<div class="cross-hdr">
<div class="cross-title">Two drivers. Every serious offence.</div>
<div class="cross-sub">Unemployment and relationship dynamics appear consistently across all offence categories — suggesting structural causes that no single enforcement strategy can address.</div>
</div>

<Grid cols=2>

  <BarChart
    data={unemployment_cross}
    x=offence
    y=pct_unemployed
    yFmt='0.0"%"'
    title="Unemployment rate among perpetrators"
    subtitle="% recorded as unemployed at time of offence — by category"
    swapXY=true
    colorPalette={['#FF9F43']}
    labels=true
  />

  <BarChart
    data={relationship_cross}
    x=offence
    y=known_pct
    yFmt='0.0"%"'
    title="Known victim–perpetrator relationship"
    subtitle="% of cases with a prior relationship — by category"
    swapXY=true
    colorPalette={['#9A67FD']}
    labels=true
  />

</Grid>

<!-- ═══════════════════════════════════════════════════════════
     STRATEGIC TAKEAWAYS
════════════════════════════════════════════════════════════ -->
<span class="so-section-label">Strategic Takeaways</span>

<div class="takeaway">
<div class="takeaway-eye">For Policymakers · Botswana 2024</div>
<div class="takeaway-title">Five things this report establishes</div>
<div class="t-items">
<div class="t-item">
<div class="t-num">01</div>
<div class="t-txt"><strong>Murder is Botswana's most urgent unresolved serious crime trend.</strong> Four consecutive years of increase, running counter to every other serious offence category. It requires a named, targeted national strategy — not a general crime-reduction response.</div>
</div>
<div class="t-item">
<div class="t-num">02</div>
<div class="t-txt"><strong>Most serious crimes improved significantly in 2024.</strong> The 14.6% decline is the strongest single-year improvement in the reporting period. These gains are real, they are broad-based, and they should be reinforced through the strategies that produced them.</div>
</div>
<div class="t-item">
<div class="t-num">03</div>
<div class="t-txt"><strong>Unemployment is a structural driver, not a coincidence.</strong> It appears in 70%+ of perpetrator profiles across property, violent, and sexual crime. Employment and crime policy cannot be treated as separate domains if the underlying driver is to be addressed.</div>
</div>
<div class="t-item">
<div class="t-num">04</div>
<div class="t-txt"><strong>Violent crime is relationship-driven.</strong> Intimate partner, romantic, and family contexts dominate the victim–perpetrator profile for murder, threat to kill, and defilement. Prevention must reach these relationships before incidents occur — not after.</div>
</div>
<div class="t-item wide">
<div class="t-num">05</div>
<div class="t-txt"><strong>Different crimes require entirely different intervention strategies.</strong> Property crime responds to environmental design and patrol. GBV and violent crime respond to social intervention and relationship support. Stock theft responds to rural community schemes. A single-strategy approach will fail all of them simultaneously.</div>
</div>
</div>
</div>

<LastRefreshed prefix="Data last updated"/>

<Grid cols=2>
  <LinkButton url="/crime-statistics-2024/overview">← National Overview</LinkButton>
  <LinkButton url="/crime-statistics-2024/profiles">District Profiles →</LinkButton>
</Grid>
