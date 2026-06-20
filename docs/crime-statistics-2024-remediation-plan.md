# Crime Statistics 2024 — Remediation Plan

**Audit ref:** `crime-statistics-2024-audit-report.md`  
**Created:** 2026-06-20  
**Stages:** 0 → 1 → 2 → 3

---

## Status table

| ID | Stage | File | Status |
|----|-------|------|--------|
| C-01 | 0 | methodology.md | ⬜ TODO |
| C-02 | 0 | serious-offences.md | ⬜ TODO |
| C-03 | 0 | overview.md | ✅ N/A — schema confirmed single-year |
| H-01 | 1 | sources/insights/crime/ | ⬜ TODO |
| H-02 | 1 | BwpoliceMap.svelte | ⬜ TODO |
| H-03 | 1 | BwpoliceMap.svelte | ⬜ TODO |
| H-04 | 1 | serious-offences.md | ⬜ TODO |
| H-05 | 1 | serious-offences.md | ⬜ TODO |
| M-01 | 2 | serious-offences.md | ⬜ TODO |
| M-02 | 2 | serious-offences.md | ⬜ TODO |
| M-03 | 2 | overview.md | ⬜ TODO |
| M-04 | 2 | methodology.md | ⬜ TODO |
| M-05 | 2 | crime-profiles.md | ⬜ TODO |
| L-01 | 3 | source SQL files | ⬜ TODO |
| L-02 | 3 | serious-offences.md | ⬜ TODO |
| L-03 | 3 | all pages | ⬜ TODO |
| L-04 | 3 | GaugeKPI.svelte | ⬜ TODO |
| V-01 | 3 | overview.md + GeoJSON | ⬜ TODO |
| V-02 | 3 | all pages | ⬜ TODO |
| V-03 | 3 | serious-offences.md | ⬜ TODO |
| V-04 | 3 | AiChat.svelte | ⬜ TODO |
| V-05 | 3 | overview.md + pages | ⬜ TODO |

---

## Stage 0 — Data correctness (CRITICAL)

**Goal:** Eliminate silently wrong numbers. These fixes must land before any public data refresh.

**Schema confirmed (2026-06-20):**

`crime_totals` columns: `year`, `penal_code`, `other_statutes`, `total`, `growth_pct`  
`crime_by_district` columns: `district_number` (PK), `district_name`, `penal_code`, `other_statutes`, `total`, `relative_value_pct` — **no `year` column**

---

### C-01 · Fix `pub_facts` — source what you can from live data, document the rest

**File:** `evidence/pages/crime-statistics-2024/methodology.md`

**Schema reality:** `crime_totals` only exposes `year`, `penal_code`, `other_statutes`, `total`, `growth_pct`. The other six stats (`serious_offences`, `victims_analysed`, `perpetrators_analysed`, `police_districts`, `serious_offences_analysed`, `population_2024`) do not exist in this table and cannot be sourced from it.

**What can be live-sourced immediately:**

| Stat | Source |
|------|--------|
| `total_offences` | `insights.crime_totals.total WHERE year = 2024` |
| `police_districts` | `COUNT(*) FROM insights.district_crime` (confirmed 17 rows, no year column) |
| `serious_offences` | `SUM(cases_2024) FROM insights.serious_crime WHERE year = 2024` — verify column name |
| `growth_pct` | `insights.crime_totals.growth_pct WHERE year = 2024` — available if needed |

**What requires a new MotherDuck view or separate source:**

- `victims_analysed` (5929) — check `insights.offence_relationship` for a victim count; may need `COUNT(DISTINCT victim_id)` or a dedicated summary table
- `perpetrators_analysed` (5766) — same
- `serious_offences_analysed` (11) — this is a count of offence categories, can be hardcoded safely since it changes only when the report scope changes (not annually)
- `population_2024` (2540215) — not in any current source; either add a `population` source table or keep as a documented literal

**Recommended split query approach:**

Replace the single `pub_facts` block with two queries:

```sql pub_totals
select
  total          as total_offences,
  growth_pct
from insights.crime_totals
where year = 2024
limit 1
```

```sql pub_districts
select count(*) as police_districts
from insights.district_crime
```

Keep the remaining four stats as documented literals in a comment block above the query explaining why they are hardcoded (sourced from BPS analytical report, not from a queryable column):

```sql pub_facts_static
select
  14560   as serious_offences,
  5929    as victims_analysed,
  5766    as perpetrators_analysed,
  11      as serious_offences_analysed,
  2540215 as population_2024
```

Then update the methodology KPI strip to read `pub_totals[0]?.total_offences` and `pub_districts[0]?.police_districts` from live queries, and the remaining four from `pub_facts_static`.

**Verify:** `total_offences` on the methodology page should match `national_kpi.total` on the overview page for 2024.

---

### C-02 · Calculate `change_pct` live in `trafficking_metrics` (serious-offences.md)

**File:** `evidence/pages/crime-statistics-2024/serious-offences.md`

Find this section in the `trafficking_metrics` SQL block:
```sql
  -58.5  as change_pct,
```

Replace by computing it from the source data. The exact fix depends on what columns `insights.serious_crime` exposes. If it has `year` + `cases` per offence:

```sql
  round(
    100.0 * (
      sum(case when year = 2024 then cases end) -
      sum(case when year = 2023 then cases end)
    ) / nullif(sum(case when year = 2023 then cases end), 0),
    1
  ) as change_pct,
```

If the `trafficking_metrics` block uses a different source table, apply the same year-over-year formula to whichever table carries prior year case counts.

**Verify:** Rendered value should equal `-58.5` for the current 2024 data. If it doesn't match, there is a discrepancy between the hardcoded figure and the actual data — investigate the source.

---

### C-03 · CANCELLED — `crime_by_district` is a single-year snapshot table

**Schema confirmed:** `crime_by_district` has no `year` column. Its primary key is `district_number` only, meaning it holds exactly one row per district (17 rows total). There is no risk of multi-year aggregation.

- `district_kpi` — `COUNT(*)` correctly returns 17 ✅
- `urban_kpi` — `MAX(relative_value_pct)` correctly returns the single value per district ✅
- `map_two` — `SUM(total)` correctly aggregates penal_code + other_statutes for each district ✅

**No changes required to overview.md for this finding.**

> Note: The `relative_value_pct` column represents each district's share of national total. Verify in MotherDuck that this is recalculated correctly when the underlying fact table is updated for a new year.

---

## Stage 1 — Silent failures and misleading output (HIGH)

**Goal:** Fix errors that produce confusing or incorrect UI without throwing. Complete after Stage 0 is verified.

---

### H-01 · Remove duplicate source — delete `victim_relo.sql`

**File:** `evidence/sources/insights/crime/victim_relo.sql`  
**Also:** `evidence/pages/crime-statistics-2024/serious-offences.md`, `evidence/pages/crime-statistics-2024/crime-profiles.md`

**Step 1:** Delete `sources/insights/crime/victim_relo.sql`.

**Step 2:** In `serious-offences.md` and `crime-profiles.md`, find all references to `insights.victim_relo` and replace with `insights.offence_relationship`.

Exact replacements in `serious-offences.md`:
```
FROM insights.victim_relo  →  FROM insights.offence_relationship
from insights.victim_relo  →  from insights.offence_relationship
```

**Step 3:** Standardise `relationship_type` case handling. All queries currently use one of:
- `relationship_type = 'stranger'`
- `lower(relationship_type) = 'stranger'`

Pick one form and apply it consistently across all queries that filter on `relationship_type`. Prefer `lower()` if the source data casing is not guaranteed.

**Verify:** Run `evidence sources` and confirm no errors. Check that rape metrics and crime-profiles relationship tab still load correctly.

---

### H-02 · Add error handling to GeoJSON fetch (BwpoliceMap.svelte)

**File:** `evidence/components/BwpoliceMap.svelte`

Find the `onMount` async block. Wrap the entire body in try/catch:

```javascript
onMount(async () => {
  try {
    const echartsModule = await import('echarts');
    const echarts = echartsModule.default ?? echartsModule;

    const res = await fetch(geoJsonUrl);
    if (!res.ok) throw new Error(`GeoJSON ${res.status}: ${geoJsonUrl}`);
    const geoJson = await res.json();

    echarts.registerMap('BotswanaBPS', geoJson);
    // ... rest of chart initialisation unchanged
  } catch (err) {
    console.error('[BwpoliceMap] failed to load:', err);
    // optionally set a reactive error state to render a fallback message
  }
});
```

**Verify:** Temporarily rename `/static/maps/bps_district.geojson` to test the error path. Confirm the page does not crash and the error is logged to the console.

---

### H-03 · Fix default `value` prop in BwpoliceMap.svelte

**File:** `evidence/components/BwpoliceMap.svelte`

Find:
```javascript
export let value = 'total_views';
```
Replace:
```javascript
export let value = 'total';
```

**Verify:** Map still renders. No functional change expected since all call sites already pass `value='total'` explicitly.

---

### H-04 · Fix double-negative delta display — TTK, Rape, Defilement, Stock Theft

**File:** `evidence/pages/crime-statistics-2024/serious-offences.md`

For each declining offence delta that shows a raw negative `change_pct`, wrap with `Math.abs()`.

Find and replace each of these four patterns:

| Find | Replace |
|------|---------|
| `↓ {ttk_metrics[0]?.change_pct ?? 0}%` | `↓ {Math.abs(ttk_metrics[0]?.change_pct ?? 0)}%` |
| `↓ {rape_metrics[0]?.change_pct ?? 0}%` | `↓ {Math.abs(rape_metrics[0]?.change_pct ?? 0)}%` |
| `↓ {defilement_metrics[0]?.change_pct ?? 0}%` | `↓ {Math.abs(defilement_metrics[0]?.change_pct ?? 0)}%` |
| `↓ {stock_metrics[0]?.change_pct ?? 0}%` | `↓ {Math.abs(stock_metrics[0]?.change_pct ?? 0)}%` |

**Verify:** All four declining offence delta badges should read "↓ 7.5%", "↓ 5.0%", etc. — no minus sign.

---

### H-05 · Wrap trafficking victim chart in `{#if trafficking_metrics.ready}`

**File:** `evidence/pages/crime-statistics-2024/serious-offences.md`

Locate the `BarChart` (or other chart component) that uses `trafficking_metrics` for victim age breakdown but sits outside the existing `{#if}` guard. Wrap it:

```svelte
{#if trafficking_metrics.ready}
  <!-- chart component here -->
{/if}
```

**Verify:** Confirm the chart renders correctly and does not flash an empty subtitle on page load.

---

## Stage 2 — Code quality and maintainability (MEDIUM)

**Goal:** Eliminate hardcoded values and fix UI text/navigation errors. Complete after Stage 1 is verified in preview.

---

### M-01 · Replace hardcoded treemap HTML with data-driven component

**File:** `evidence/pages/crime-statistics-2024/serious-offences.md`

The treemap section (approximately lines 1078–1140) is fully static HTML. Replace with a dynamic render using the `serious_2024` query:

```svelte
{#if serious_2024.ready}
  {@const total = serious_2024.reduce((s, r) => s + r.cases_2024, 0)}
  <div class="tm-grid">
    {#each serious_2024 as row}
      {@const pct = (row.cases_2024 / total * 100).toFixed(1)}
      <div
        class="tm-cell"
        style="flex:{Math.round(row.cases_2024 / total * 100)}"
        data-pct="{pct}%"
      >
        <div class="tm-name">{row.offence.replace(/_/g, ' ')}</div>
        <div class="tm-val">{row.cases_2024.toLocaleString()}</div>
      </div>
    {/each}
  </div>
{/if}
```

Adjust field names (`cases_2024`, `offence`) to match the actual `serious_2024` query columns. Keep the existing CSS rules for `.tm-grid`, `.tm-cell`, `.tm-name`, `.tm-val` — only the HTML generation changes.

**Verify:** Treemap renders 11 cells. Cell sizes are proportional to case counts. Hover labels appear with correct percentages.

---

### M-02 · Replace hardcoded GaugeKPI values with live query fields

**File:** `evidence/pages/crime-statistics-2024/serious-offences.md`

For each hardcoded gauge, substitute the equivalent live query field. The source queries (`murder_relationship`, `ttk_relationship`, `murder_motive`, etc.) are already present on the page — the gauges just need to read from them.

| Gauge | Current | Replacement |
|-------|---------|-------------|
| Murder — Romantic link | `value={37.1}` | `value={murder_relationship.find(r => r.relationship_type === 'romantic_link')?.percentage ?? 0}` |
| Murder — Jealousy motive | `value={33.8}` | `value={murder_motive.find(r => r.motive === 'jealousy')?.percentage ?? 0}` |
| Murder — Arguments motive | `value={26.4}` | `value={murder_motive.find(r => r.motive === 'arguments')?.percentage ?? 0}` |
| TTK — Jealousy motive | `value={64.4}` | `value={ttk_motive.find(r => r.motive === 'jealousy')?.percentage ?? 0}` |
| Defilement — Male perpetrators | `value={99.8}` | `value={defilement_metrics[0]?.male_perp_pct ?? 0}` |
| Robbery — Knives specifically | `value={44.9}` | `value={robbery_metrics[0]?.knife_pct ?? 0}` |
| Robbery — Perps unemployed | `value={85.7}` | `value={robbery_metrics[0]?.unemployed_pct ?? 0}` |
| Stock Theft — North Central share | `value={34.5}` | `value={stock_metrics[0]?.north_central_pct ?? 0}` |
| Rape — Bushy area | `value={40}` | `value={rape_metrics[0]?.bushy_area_pct ?? 0}` |

For fields not currently in the relevant query (e.g., `knife_pct`, `unemployed_pct`), add the column to the existing SQL block — do not create new queries.

**Verify:** Each gauge should display the same value as before (within rounding). If a value differs significantly, reconcile with the data source.

---

### M-03 · Fix `.insight-icon` CSS class collision in overview.md

**File:** `evidence/pages/crime-statistics-2024/overview.md`

In the `<style>` block, find the second `.insight-icon` definition (used for the structure-insight emoji, `font-size: 26px`) and rename it to `.si-icon`:

```css
/* Before */
.insight-icon {
    font-size: 26px;
}

/* After */
.si-icon {
    font-size: 26px;
}
```

Then find the HTML element that uses this class in the structure-insight section:
```html
<div class="insight-icon">⚡</div>
```
Replace:
```html
<div class="si-icon">⚡</div>
```

**Verify:** The coloured icon boxes in the "Key Findings" grid should display at 16px font-size. The emoji icon in the structure-insight should display at 26px.

---

### M-04 · Fix navigation label in methodology.md

**File:** `evidence/pages/crime-statistics-2024/methodology.md`

Find:
```svelte
← Page 3: District Profiles
```
Replace:
```svelte
← Page 3: Crime Profiles
```

---

### M-05 · Fix page-nav direction in crime-profiles.md

**File:** `evidence/pages/crime-statistics-2024/crime-profiles.md`

Find the footer `<div class="page-nav">` block and replace both `LinkButton` calls so the left button points backward (to Serious Offences) and the right button points forward (to Methodology):

```svelte
<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious Offences
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/methodology">
    Page 4: Methodology →
  </LinkButton>
</div>
```

---

## Stage 3 — Polish and browser verification (LOW + VISUAL)

**Goal:** Tidy up minor issues and sign off visually in `npm run preview`. These are low-risk and can be batched into a single PR.

---

### L-01 · Remove trailing whitespace from source SQL files

**Files:** `sources/insights/crime/district_crime.sql`, `crime_totals.sql`, `penal_code_cat.sql`

Strip trailing spaces/newlines after the final semicolon or `limit 1` line. Use editor "trim trailing whitespace on save" for the whole `sources/` directory.

---

### L-02 · Defilement `change_pct` double-negative (same fix as H-04)

This is already covered by the H-04 fix above. Mark L-02 complete when H-04 is done.

---

### L-03 · Document fragility of `:global(section > nav > button.border-b-2)` tab selector

**Files:** `overview.md`, `serious-offences.md`, `crime-profiles.md`

Add a comment above each instance of this selector so future maintainers understand the dependency:

```css
/* Targets Evidence Tab active state — check this selector on every Evidence upgrade */
:global(section > nav > button.border-b-2) { ... }
```

No functional change. This is documentation only.

---

### L-04 · Verify GaugeKPI label rendering at narrow widths

**File:** `evidence/components/GaugeKPI.svelte`

No code change needed unless visual verification reveals clipping. Open `npm run preview`, resize to 480px, and confirm gauge labels in the KPI strip are fully visible. If clipping occurs, increase `offsetCenter` from `[0, '-120%']` or reduce font size.

---

### V-01 · Verify map district names match GeoJSON

Open `npm run preview`. Navigate to Overview → district choropleth map.

- All 17 districts should be coloured (not grey)
- If any district is grey: run `SELECT DISTINCT district_name FROM insights.district_crime ORDER BY 1` in MotherDuck (no year filter — confirmed single-year table), compare against GeoJSON feature names in `/static/maps/bps_district.geojson`, and correct the CASE WHEN renaming in `map_two`

---

### V-02 · Verify Evidence Tab active styling

Open `npm run preview`. Visit each page with tabs (Overview, Serious Offences, Crime Profiles).

- Active tab should render as the dark blue segmented pill
- If tabs appear with Evidence's default styling instead: inspect the HTML — if the active class is no longer `.border-b-2`, update the `:global()` selector on all three pages

---

### V-03 · Verify treemap hover labels

Open `npm run preview`. Navigate to Serious Offences → Treemap section.

- Hover each cell — the percentage label should appear via `::after`
- Test on Chrome, Firefox, and Edge
- Resize to 768px and 480px — cells should remain hoverable without layout overflow

---

### V-04 · Verify AiChat tooltip and FAB on mobile

Open `npm run preview`. Navigate to any crime-statistics page.

- FAB button should appear in the lower-right corner
- Tooltip ("Ask about Botswana crime data") should appear on page load and disappear after 4 seconds
- FAB should not overlap important page content at 480px

---

### V-05 · Verify stat-strip overlap at 480px

Open `npm run preview`. Resize to 480px.

- Overview, Serious Offences, and Methodology pages all use `margin-top: -90px` on the KPI/snapshot strip
- Confirm the KPI cards sit within the hero's coloured bottom section without clipping the hero heading or casting box-shadows outside the viewport

---

## Commit strategy

Each stage should land in its own commit with a brief message describing what changed. Do not combine stages.

| Stage | Suggested commit message |
|-------|--------------------------|
| 0 | `fix: split pub_facts into live queries, calculate trafficking change_pct — C-01, C-02` |
| 1 | `fix: remove duplicate source, add map error handling, fix delta display — H-01 to H-05` |
| 2 | `fix: data-drive treemap and gauges, fix nav labels and CSS collision — M-01 to M-05` |
| 3 | `chore: strip trailing whitespace, document tab selector fragility — L-01 to L-04` |
