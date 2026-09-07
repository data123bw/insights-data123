# Performance Audit — insights.data123.online

**Date:** 2026-08-28
**Auditor:** Claude Code (performance-optimization skill)
**Scope:** Homepage (`/`) with spot checks on `/crime-statistics-2024/overview`

> **Provenance (committed 2026-09-07):** this file sat untracked at the repo root
> from 2026-08-28. It is a Claude Code performance audit of the live Evidence
> site, produced before the BSE work and unrelated to it. It was reviewed during
> the BSE pre-GATE-B pass, confirmed not to influence any build (no page,
> source or component references it), and filed here under `docs/` alongside the
> other site audit reports. Content unchanged.

---

## 1. Executive summary

The site is an Evidence.dev / SvelteKit static export hosted on Azure Static Web
Apps. The homepage is server-rendered with real content in the HTML, which is the
right foundation for a fast LCP. The main weaknesses are all in the asset layer:

- **~210 KB of compressed JavaScript is eagerly loaded on the homepage** (≈800 KB
  uncompressed), well over the 170 KB budget. This includes an Apache Arrow / column
  type-inference chunk (70 KB br) that the homepage has no use for — it has no
  queries or charts.
- **Three render-blocking stylesheets totalling 162 KB uncompressed** (33 KB br),
  one of which is `VennDiagram.css` (62 KB raw) — the homepage contains no Venn
  diagram.
- **Un-hashed static assets are barely cached** (`Cache-Control: max-age=30,
  must-revalidate`): `logo.png` (48 KB), `icon.svg` (37 KB), `icons.svg` (5 KB).
- A full-screen splash overlay with an infinite CSS animation runs on every load.
- Minor: `<img>` tags without `width`/`height`; a `max-width:undefinedpx` template
  bug rendered into the markup.

**Biggest wins, in order:** trim the homepage's eager JS/CSS graph → add long-lived
caching for static assets → optimise `icon.svg` / `logo.png` → drop or gate the
splash animation.

---

## 2. Methodology

| Tool | Status |
|---|---|
| HTML / header inspection (curl) | ✅ done |
| Asset size + cache-header measurement (curl, brotli negotiated) | ✅ done |
| Bundle content inspection (grep over shipped JS) | ✅ done |
| Lighthouse / PageSpeed Insights | ❌ **PSI API returned HTTP 429 (rate-limited, no API key from this host)** |
| CrUX field data (real-user LCP/INP/CLS) | ❌ **not retrieved — same API limit** |
| Chrome DevTools / WebPageTest waterfall | ❌ **browser extension not connected in this session** |

Network timing from this environment is routed through a sandbox egress proxy and
is **not representative** (observed TTFB 0.9 s–4.5 s, serialised). Treat all timing
below as directional only.

---

## 3. Current state

**Cannot report Core Web Vitals, Lighthouse score, or RUM data** — see the gaps in
§2. The findings below are derived from the shipped code and assets, not from a
rendered-page measurement. To close this gap, run PageSpeed Insights against
`https://insights.data123.online` (mobile) and check the Search Console Core Web
Vitals report, or reconnect the Chrome extension for a Lighthouse pass.

**What was measured:**

| Asset (homepage) | Brotli | Uncompressed | Cache-Control |
|---|---|---|---|
| HTML document | 6.2 KB | 23.5 KB | `max-age=30, must-revalidate` |
| `assets/0.BHQxd4lt.css` | 15.7 KB | 86.6 KB | `immutable, 1yr` |
| `assets/VennDiagram.BCpuTJYF.css` | 14.8 KB | 62.4 KB | `immutable, 1yr` |
| `assets/4.zB-MbhEH.css` | 2.8 KB | 13.3 KB | `immutable, 1yr` |
| `nodes/0.BHZ-x5hA.js` (root layout, every page) | 123 KB | 473 KB | `immutable, 1yr` |
| `chunks/inferColumnTypes…js` (Apache Arrow) | 70 KB | 270 KB | `immutable, 1yr` |
| `entry/app…js` + other chunks (×~14) | ~15 KB | ~45 KB | `immutable, 1yr` |
| `logo.png` | 48 KB | 48 KB | `max-age=30, must-revalidate` |
| `icon.svg` (favicon) | 37 KB | 37 KB (not compressed) | `max-age=30, must-revalidate` |
| `icons.svg` (splash) | 5.4 KB | 5.4 KB (not compressed) | `max-age=30, must-revalidate` |

Homepage eager JS: **18 `modulepreload` entries, ~210 KB brotli / ~800 KB raw.**
`/crime-statistics-2024/overview`: **20 `modulepreload` entries.**

Positives worth keeping:
- Homepage content is fully server-rendered (good for LCP and no-JS fallback).
- Hashed build assets carry correct `immutable` 1-year caching.
- Brotli is negotiated for HTML/CSS/JS.
- HTTPS + HSTS preload, `X-Content-Type-Options`, `Referrer-Policy` all set.
- Splash `<img>` has explicit `width`/`height`; no custom web fonts → no font CLS.

---

## 4. Critical issues (likely Core Web Vitals impact)

### 4.1 Apache Arrow / `inferColumnTypes` loaded on a page with no data (LCP / TBT)

`chunks/inferColumnTypes` (70 KB br, **270 KB uncompressed** to parse) is
`modulepreload`ed on the homepage because the root layout node (`nodes/0`) imports
it. The homepage renders no queries, tables, or charts. This is pure parse/compile
cost on the critical path.

**Fix:** move the query-runtime / column-inference imports behind a dynamic
`import()` that only fires when a component that actually needs it (`QueryViewer`,
charts, `<Value>`, etc.) mounts. In Evidence this usually means checking the
layout/`+layout.svelte` for an unconditional import of the query or profile
modules. If it's coming from Evidence core, gate it on `data.length` / presence of
`__db`.

### 4.2 `VennDiagram.css` render-blocks the homepage (LCP / render-blocking)

`VennDiagram.BCpuTJYF.css` (62 KB raw) is a `<link rel="stylesheet">` in `<head>`
on `/`. The homepage has no Venn diagram. It's being pulled because the CSS is
bundled at the layout level rather than the component level.

**Fix:** ensure `VennDiagram.svelte`'s `<style>` is only emitted for routes that
use the component (it currently has a `svelte_type_style_lang` chunk, so the
splitting exists for JS but the CSS is still hoisted). Check `vite`/`svelte`
`cssCodeSplit` is `true` (it's the default — a manual `cssCodeSplit: false` or a
global `import './VennDiagram.css'` would explain this).

### 4.3 Root-layout JS chunk is 473 KB uncompressed (TBT / INP on first load)

`nodes/0.BHZ-x5hA.js` loads on every route. 123 KB brotli is one thing; 473 KB to
parse/compile on a mid-range Android phone is 150–400 ms of main-thread block
before hydration. It does **not** appear to contain ECharts (good), so the weight
is layout + melt-ui + inline Tabler icon components + manifest logic.

**Fix:** audit with a bundle analyzer (`npx vite-bundle-visualizer` on the Evidence
build). Likely candidates: import Tabler icons individually rather than a barrel;
lazy-load the mobile-sidebar / dropdown-menu (`melt`) code; check for a
`pagesManifest` parser that could be server-only.

---

## 5. Important issues

### 5.1 Un-hashed static assets have a 30-second cache

`logo.png`, `icon.svg`, `icons.svg`, `favicon.ico`, `apple-touch-icon.png`,
`manifest.webmanifest` all return `Cache-Control: public, must-revalidate,
max-age=30`. Every repeat visit re-validates them.

**Fix:** in `staticwebapp.config.json`, add a `routes` / `headers` rule giving
`*.png`, `*.svg`, `*.ico`, `*.webmanifest` a `Cache-Control: public,
max-age=604800` (or longer, with a filename bump on change). Example:

```json
{
  "routes": [
    { "route": "/logo.png",  "headers": { "Cache-Control": "public, max-age=2592000" } },
    { "route": "/icon.svg",  "headers": { "Cache-Control": "public, max-age=2592000" } },
    { "route": "/icons.svg", "headers": { "Cache-Control": "public, max-age=2592000" } }
  ]
}
```

### 5.2 `icon.svg` is 37 KB; `logo.png` is 48 KB for a 20 px-tall logo

- `icon.svg` (37 KB) is large for an SVG favicon — likely un-minified with editor
  metadata and high-precision paths. Run through SVGO; target < 5 KB.
- `logo.png` renders at `class="h-5"` (20 px tall) but the file is 48 KB, implying a
  much larger source. Export at 2× display size (≈40–80 px tall), or convert to an
  inline/optimised SVG. The markup also loads it twice (light + dark `<img>`), both
  pointing at the same file — collapse to one `<img>` since the source is identical.
- SVGs are served **uncompressed** (brotli size == raw size). Add `image/svg+xml` to
  the compressible MIME types if the host allows, or pre-compress.

### 5.3 Full-screen splash overlay with an infinite animation

`#__evidence_project_splash` is a `position: fixed` full-viewport overlay with
`animation: blinking-logo 2s ... infinite`. Even when hidden it's a compositor
layer; when shown it masks the (already server-rendered) content behind a spinner.

**Fix:** this is an Evidence built-in. If the homepage HTML already contains the
hero content, the splash only adds perceived latency — consider disabling it
(`splashScreen: false` style option in Evidence config, if available) or at least
making the animation `iteration-count: 3` rather than `infinite`.

### 5.4 `<img>` without `width`/`height` (CLS)

The header `logo.png` `<img>` tags have no `width`/`height`/`aspect-ratio`. Height
is pinned by `h-5` so shift is small, but set explicit dimensions to be safe.

---

## 6. Polish

- `max-width:undefinedpx` is rendered into the header and main container inline
  styles — a template passing `undefined` into a `style` string. Harmless to
  layout but sloppy; fix the component prop default.
- No `robots.txt` (returns Azure's 404 page). Out of performance scope but worth a
  one-line file.
- No service worker — for a content site with an immutable asset graph, a simple
  precache SW would make repeat navigations instant. Optional.
- Consider `<link rel="preconnect">` for `www.data123.online` if the hero CTA to it
  is commonly clicked.

---

## 7. Remediation roadmap

| # | Change | Effort | Expected impact |
|---|---|---|---|
| 1 | Gate Arrow / `inferColumnTypes` import behind dynamic `import()` (§4.1) | M | −70 KB br / −270 KB parse on every no-data page |
| 2 | Fix CSS code-splitting so `VennDiagram.css` only loads on its routes (§4.2) | S–M | −15 KB br render-blocking CSS on homepage |
| 3 | `staticwebapp.config.json` cache headers for static images/icons (§5.1) | S | Faster repeat views; fewer revalidation RTTs |
| 4 | SVGO `icon.svg`; resize/re-export `logo.png`; de-dupe logo `<img>` (§5.2) | S | −60–70 KB image weight |
| 5 | Bundle-analyze `nodes/0`; split icons + melt UI (§4.3) | M–L | −20–50 KB br, lower TBT/INP |
| 6 | Disable splash or cap the animation (§5.3) | S | Better perceived load |
| 7 | Add `width`/`height` to images; fix `undefinedpx` (§5.4, §6) | S | CLS insurance |

Do 1–4 first; they are low-risk and high-ratio. Re-measure after step 2 and again
after step 5.

---

## 8. Performance budget recommendations

| Metric | Budget |
|---|---|
| Initial JS (compressed, per route) | ≤ 170 KB |
| Per lazy chunk (compressed) | ≤ 100 KB |
| Render-blocking CSS (compressed) | ≤ 20 KB |
| Largest image on a page | ≤ 100 KB, correctly sized |
| LCP (mobile, field p75) | < 2.5 s |
| INP (field p75) | < 200 ms |
| CLS (field p75) | < 0.1 |
| TTFB (field p75) | < 800 ms |

Enforce the asset budgets in CI with `bundlesize` or a Vite build assertion.

---

## 9. Monitoring plan

1. **Field:** watch the Search Console Core Web Vitals report weekly; it's the
   source of truth for real Botswana users on real devices.
2. **Lab:** run PageSpeed Insights (mobile) on `/` and `/crime-statistics-2024/overview`
   after each of steps 1–5 above; save the JSON.
3. **CI:** add Lighthouse CI (or `unlighthouse`) against a preview deploy with the
   budgets in §8 as assertions, so regressions block the merge.
4. Re-run this audit after the roadmap is done to get the numbers §3 is missing.

---

## Data gaps (per skill protocol)

This audit is **code- and asset-level only**. The following required inputs could
not be obtained in this session and their absence affects §3 (Current state) and
any statement about actual user experience:

- **Real-user Core Web Vitals (CrUX / Search Console):** not retrieved. No verified
  LCP, INP, or CLS figures exist in this report.
- **Lighthouse / PSI lab run:** PSI API rate-limited (HTTP 429); Chrome extension
  not connected. No performance score, no waterfall, no main-thread trace.
- **TTFB:** not reliably measurable from this environment.

Every §4/§5 finding is a well-grounded hypothesis from the shipped bundle, but the
*ranking* by user impact should be confirmed against a real Lighthouse trace once
one is available.
