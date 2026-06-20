# Crime Statistics 2024 — Dashboard Audit Report

**Audited:** 2026-06-20  
**Evidence version:** `@evidence-dev/evidence ^40.1.8` (`@evidence-dev/core-components ^5.4.2`)  
**Source:** MotherDuck (`insights` database)  
**Pages audited:** index.md, overview.md, serious-offences.md, crime-profiles.md, methodology.md  
**Components audited:** GaugeKPI.svelte, BwpoliceMap.svelte, AiChat.svelte  
**Source SQL audited:** all 30 files in `sources/insights/crime/`

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| HIGH | 5 |
| MEDIUM | 5 |
| LOW | 4 |
| VISUAL | 5 |

The dashboard is structurally sound and visually accomplished. The primary risk category is **data correctness** — several queries have missing year filters against tables that are likely multi-year, and hardcoded literal values are used in at least two places where live queries should be. These will produce silently wrong numbers rather than visible errors.

---

## CRITICAL — broken or silently wrong output

---

### C-01 · Hardcoded literal values in `pub_facts` query (methodology.md)

**File:** `pages/crime-statistics-2024/methodology.md` · Lines 643–655

**What is wrong:**
The `pub_facts` SQL query selects hardcoded integer literals, not actual column values from the table:

```sql
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

The `FROM insights.crime_totals WHERE year = 2024 LIMIT 1` clause only ensures one row is returned so the literals are output once. No columns from `crime_totals` are actually read. When data is updated (e.g., after the 2025 BPS release), the methodology page KPI strip will continue to display 2024 hardcoded values while all other pages update automatically.

**Fix:** Replace literals with actual column references from `insights.crime_totals` (assuming the table has matching columns):

```sql
select
  total_offences,
  serious_offences,
  victims_analysed,
  perpetrators_analysed,
  police_districts,
  serious_offences_count   as serious_offences_analysed,
  population
from insights.crime_totals
where year = 2024
limit 1
```

If column names differ, align with whatever `crime.crime_totals_annual` actually exposes. Verify column names against the MotherDuck schema first.

---

### C-02 · `change_pct` hardcoded as `-58.5` in `trafficking_metrics` query (serious-offences.md)

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 933–948

**What is wrong:**
The trafficking query hard-wires the year-over-year percentage change:

```sql
select
  c.total_cases,
  -58.5  as change_pct,   -- HARDCODED
  v.total_victims,
  v.children_6_10_pct
from (...)
```

The `total_cases` and `total_victims` values are calculated live, but `change_pct` will always read `-58.5` regardless of the actual data. When the 2025 data is loaded, the case count will update but the displayed percentage change will remain wrong.

**Fix:** Calculate `change_pct` from the data:

```sql
select
  c.total_cases,
  p.prev_cases,
  round(100.0 * (c.total_cases - p.prev_cases) / nullif(p.prev_cases, 0), 1) as change_pct,
  v.total_victims,
  v.children_6_10_pct
from (
  select sum(cases) as total_cases
  from insights.offence_month where offence = 'human_trafficking'
    and month_number between 1 and 12  -- add year filter once schema is confirmed
) c
cross join (
  select sum(cases) as prev_cases
  from insights.offence_month where offence = 'human_trafficking'
    -- prior year
) p
cross join (...)
```

If the `offence_month` table does not carry a year column, source the 2023 value from `insights.serious_crime where offence like '%rafficking%' and year = 2023`.

---

### C-03 · Missing year filter on three `district_crime` queries in overview.md — map and KPI figures at risk of multi-year aggregation

**File:** `pages/crime-statistics-2024/overview.md` · Lines 1217–1228 (`urban_kpi`), 1267–1269 (`district_kpi`), 1584–1609 (`map_two`)

**What is wrong:**
All three queries that read `insights.district_crime` do so without a year filter:

```sql
-- urban_kpi (no WHERE year = ...)
select
  max(case when district_name = 'Mogoditshane' then relative_value_pct end) as mogoditshane_pct,
  max(case when district_name = 'Gaborone'     then relative_value_pct end) as gaborone_pct,
  round(sum(relative_value_pct), 1)                                          as combined_pct
from insights.district_crime
where district_name in ('Mogoditshane', 'Gaborone')

-- district_kpi (no WHERE year = ...)
select count(*) as police_districts
from insights.district_crime

-- map_two (no WHERE year = ...)
select ... sum(total) as total
from insights.district_crime
group by district_name
```

If `crime.crime_by_district` (the underlying MotherDuck view) is already filtered to 2024, these queries are correct. If it contains multiple years:

- `urban_kpi.mogoditshane_pct` and `.gaborone_pct` will be `MAX` across all years (not 2024)
- `urban_kpi.combined_pct` will sum `relative_value_pct` across all years for both districts — potentially 6× the correct value
- `district_kpi.police_districts` will return `17 × N years` instead of 17
- `map_two.total` will show summed totals across all years on the choropleth map, showing all years of crime as if it were 2024

The `national_trend`, `serious_crime`, `tndp`, and `sdg` sources all have explicit `year` columns used in WHERE clauses, suggesting multi-year data is the norm in this schema. The absence of year filters on `district_crime` is inconsistent and suspicious.

**Fix:** Add year filter to all three queries, or confirm in MotherDuck that `crime.crime_by_district` is pre-filtered to 2024. If a year column exists:

```sql
-- urban_kpi
from insights.district_crime
where district_name in ('Mogoditshane', 'Gaborone')
  and year = 2024

-- district_kpi
select count(*) as police_districts
from insights.district_crime
where year = 2024

-- map_two
from insights.district_crime
where year = 2024   -- add before GROUP BY
group by district_name
```

Also verify whether `relative_value_pct` in `district_crime` is a 2024-specific value or a cumulative one.

---

## HIGH — misleading output or silent failures

---

### H-01 · `victim_relo.sql` and `offence_relationship.sql` both select from `crime.victim_relationship` — duplicate source, confusing naming

**Files:** `sources/insights/crime/victim_relo.sql` and `sources/insights/crime/offence_relationship.sql`

**What is wrong:**
Both files contain the identical query:

```sql
-- victim_relo.sql
select * from crime.victim_relationship

-- offence_relationship.sql
select * from crime.victim_relationship
```

This creates two Evidence source tables (`insights.victim_relo` and `insights.offence_relationship`) that are byte-for-byte identical data from the same MotherDuck view. Queries across the pages use these interchangeably:

- `offence_relationship`: used by murder relationship chart, TTK metrics/relationship, defilement metrics/relationship
- `victim_relo`: used by rape metrics, crime-profiles relationship_pivot

This is at best confusing and at worst a schema design error — if the underlying table is renamed or schema changes, two separately-named sources need updating. It also loads the same data from MotherDuck twice per build.

Additionally, the rape query uses `lower(relationship_type) = 'stranger'` while other queries use unmodified `relationship_type = 'romantic_link'`. If the data has inconsistent casing, some queries would fail to match.

**Fix:** Delete `victim_relo.sql`. Update all references from `insights.victim_relo` to `insights.offence_relationship` in `serious-offences.md` and `crime-profiles.md`. Standardize all relationship_type comparisons to either all use `lower()` or all use the canonical cased values.

---

### H-02 · `BwpoliceMap.svelte` has no error handling on the GeoJSON fetch

**File:** `components/BwpoliceMap.svelte` · Lines 20–21

**What is wrong:**
```javascript
const geoJson = await fetch(geoJsonUrl).then(r => r.json());
echarts.registerMap('BotswanaBPS', geoJson);
```

If the fetch fails (404 for `/maps/bps_district.geojson`, network error, malformed JSON), the entire `onMount` async function throws an unhandled promise rejection. The map container renders as an empty `<div>` with no user-visible error. The `{#if map_two.ready}` guard on the overview page only waits for query data, not the GeoJSON load.

**Fix:** Add try/catch:

```javascript
onMount(async () => {
  try {
    const echartsModule = await import('echarts');
    const echarts = echartsModule.default ?? echartsModule;
    const geoJson = await fetch(geoJsonUrl).then(r => {
      if (!r.ok) throw new Error(`GeoJSON fetch failed: ${r.status}`);
      return r.json();
    });
    echarts.registerMap('BotswanaBPS', geoJson);
    // ... rest of setup
  } catch (err) {
    console.error('BwpoliceMap failed to initialise:', err);
    // optionally set an error state variable to show fallback UI
  }
});
```

---

### H-03 · `BwpoliceMap.svelte` default `value` prop is `'total_views'` — wrong default

**File:** `components/BwpoliceMap.svelte` · Line 7

**What is wrong:**
```javascript
export let value = 'total_views';
```

The component is only ever called with `value='total'` (overview.md line 1649). But if ever called without the `value` prop, it would silently try to access `row['total_views']` which would be `undefined` for all rows, producing a blank map with no error.

**Fix:** Change the default to `'total'` to match the actual usage, or to `null` to force an error that's visible during development:

```javascript
export let value = 'total'; // match the actual column name used
```

---

### H-04 · `trafficking_victim_age` chart subtitle uses interpolation outside `{#if}` guard

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 1840–1841

**What is wrong:**
```svelte
subtitle="{trafficking_metrics[0]?.total_victims ?? ''} victims identified ..."
```

This optional-chains `trafficking_metrics[0]?.total_victims`, which is safe. However, the chart itself (line 1835) is outside any `{#if trafficking_metrics.ready}` block — the `{#if trafficking_metrics.ready}` block only wraps the trafficking stats card above it. If `trafficking_metrics` resolves to an empty array, `trafficking_metrics[0]?.total_victims` returns `undefined`, falling back to `''`. The subtitle would read " victims identified" (blank number). Not a crash, but misleading during the loading flash.

**Fix:** Either wrap the entire trafficking section in `{#if trafficking_metrics.ready}` or confirm the `??''` fallback is acceptable.

---

### H-05 · TTK, Rape, Stock Theft offence delta shows "↓ -7.5%" — double negative

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 1305, 1407, 1707

**What is wrong:**
For declining offences, the YoY delta display uses the raw `change_pct` value which is already negative:

```svelte
<!-- TTK — line 1305 -->
<div class="offence-delta dn">↓ {ttk_metrics[0]?.change_pct ?? 0}%</div>
<!-- Renders as: ↓ -7.5% -->

<!-- Rape — line 1407 -->
<div class="offence-delta dn">↓ {rape_metrics[0]?.change_pct ?? 0}%</div>

<!-- Stock Theft — line 1707 -->
<div class="offence-delta dn">↓ {stock_metrics[0]?.change_pct ?? 0}%</div>
```

Murder correctly uses `+{murder_metrics[0]?.change_pct ?? 0}%` (hardcoded `+`). The down-arrow plus negative sign ("↓ -7.5%") is redundant and looks like a bug.

**Fix:** Wrap with `Math.abs()` as is done in the Robbery gauge and other decline metrics:

```svelte
<div class="offence-delta dn">↓ {Math.abs(ttk_metrics[0]?.change_pct ?? 0)}%</div>
```

---

## MEDIUM — code quality and maintainability issues

---

### M-01 · Hardcoded treemap values in `serious-offences.md` will not update with data

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 1078–1140

**What is wrong:**
The "Serious Crime Landscape" treemap is entirely HTML/CSS with hardcoded 2024 figures:

```html
<div class="tm-cell" style="flex:19;background:#0042A0" data-pct="19.3%">
  <div class="tm-name">House Breaking &amp; Theft</div>
  <div class="tm-val">2,816</div>
</div>
<!-- ... 11 more cells, all hardcoded -->
```

Case counts (2816, 1714, 1687, 2291, 2018, 1666, 845, 981, 337, 205, 22) and percentages (19.3%, 11.7%, etc.) are hardcoded. The `flex` values determining cell sizing are also hardcoded proportions. When 2025 data is loaded, the treemap will continue to display 2024 figures.

**Fix:** Replace the static HTML treemap with an ECharts treemap driven by the `serious_2024` query already present on the page. The `serious_2024` query returns `offence`, `cases_2024`, and `change_pct` for all 11 offences.

Alternatively, if the custom treemap design must be preserved, populate values dynamically from `serious_2024`:

```svelte
{#if serious_2024.ready}
  {#each serious_2024 as offence}
    <!-- compute flex from cases_2024 / total * 100 -->
  {/each}
{/if}
```

---

### M-02 · 8+ hardcoded GaugeKPI values in `serious-offences.md` won't update with data

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 1170–1174, 1319, 1421, 1523, 1625–1627, 1720

**What is wrong:**
Multiple `GaugeKPI` instances have hardcoded `value=` props:

| Line | Offence tab | KPI | Hardcoded value |
|------|-------------|-----|----------------|
| 1170 | Murder | Romantic link | 37.1 |
| 1172 | Murder | Jealousy motive | 33.8 |
| 1174 | Murder | Arguments motive | 26.4 |
| 1319 | TTK | Jealousy motive | 64.4 |
| 1421 | Rape | Bushy area or perp home | 40 |
| 1523 | Defilement | Male perpetrators | 99.8 |
| 1625 | Robbery | Knives specifically | 44.9 |
| 1627 | Robbery | Perps unemployed | 85.7 |
| 1720 | Stock Theft | North Central share | 34.5 |

When 2025 data is loaded, these gauges will display wrong percentages while surrounding dynamic metrics update.

**Fix:** Source each value from the relevant query already present on the page. For example:

```svelte
<!-- Murder romantic link — from murder_relationship query -->
<GaugeKPI
  value={murder_relationship.find(r => r.relationship_type === 'romantic link')?.percentage ?? 0}
  name={'Romantic link'}
  color=purple
/>

<!-- Murder jealousy motive — from murder_motive query -->
<GaugeKPI
  value={murder_motive.find(r => r.motive === 'jealousy')?.percentage ?? 0}
  name={'Jealousy motive'}
  color=red
/>
```

For the North Central share and "bushy area" values, add targeted sub-queries if not already present.

---

### M-03 · `.insight-icon` CSS class collision in overview.md — second definition overrides first

**File:** `pages/crime-statistics-2024/overview.md` · Lines 247–257 and 592–595

**What is wrong:**
`.insight-icon` is defined twice in the same `<style>` block with conflicting rules:

```css
/* First definition — lines 247–257 — for grid layout icon boxes */
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

/* Second definition — line 592–595 — for structure-insight emoji icon */
.insight-icon {
    font-size: 26px;
}
```

CSS cascade applies both rules to all `.insight-icon` elements, with the second `font-size: 26px` overriding the first's `font-size: 16px`. The insight card icons (coloured boxes) will display at 26px font-size instead of 16px. Visually this may be subtle but is technically incorrect.

**Fix:** Rename the structure-insight icon class:

```html
<!-- In structure-insight block -->
<div class="insight-icon">⚡</div>
```
→
```html
<div class="si-icon">⚡</div>
```

And add a separate CSS rule:
```css
.si-icon { font-size: 26px; }
```

Note: The `methodology.md` page correctly uses `.si-icon` with a matching CSS rule. The `overview.md` page should adopt the same pattern.

---

### M-04 · Navigation label mismatch in `methodology.md` footer

**File:** `pages/crime-statistics-2024/methodology.md` · Lines 1241–1243

**What is wrong:**
```svelte
<LinkButton url="/crime-statistics-2024/crime-profiles">
    ← Page 3: District Profiles
</LinkButton>
```

The page at `/crime-statistics-2024/crime-profiles` is titled "Crime Profiles" (its frontmatter and hero say "Who is affected, who offends, and why?"). The navigation button wrongly calls it "District Profiles". Geographic district data lives on the Overview page (Section 5), not on crime-profiles.md.

**Fix:**
```svelte
<LinkButton url="/crime-statistics-2024/crime-profiles">
    ← Page 3: Crime Profiles
</LinkButton>
```

---

### M-05 · Page nav `<LinkButton>` order on `crime-profiles.md` is backwards (Page 2 link goes to Serious Offences, but label suggests previous page)

**File:** `pages/crime-statistics-2024/crime-profiles.md` · Lines 2046–2052

**What is wrong:**
```svelte
<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/overview">
    ← Page 1: National Overview
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    Page 2: Serious Offences →
  </LinkButton>
</div>
```

Crime Profiles is `sidebar_position: 3`. Showing "Page 2: Serious Offences →" as a forward link from Page 3 is confusing — it's a backward link. The right side of the nav should point forward (to methodology) or this nav block should only show the previous page.

**Fix:**
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

## LOW — minor issues

---

### L-01 · Trailing whitespace in source SQL files

**Files:** `sources/insights/crime/district_crime.sql`, `sources/insights/crime/crime_totals.sql`, `sources/insights/crime/penal_code_cat.sql`

Trailing newlines/spaces after the SQL statement. No functional impact.

---

### L-02 · `defilement_metrics` `change_pct` delta on offence header will show "↓ -5.0%" (same double-negative issue as H-05)

**File:** `pages/crime-statistics-2024/serious-offences.md` · Line 1510

```svelte
<div class="offence-delta dn">↓ {defilement_metrics[0]?.change_pct ?? 0}%</div>
```

Same pattern as H-05. Rendered text will be "↓ -5.0%".

**Fix:** `Math.abs(defilement_metrics[0]?.change_pct ?? 0)`

---

### L-03 · `GaugeKPI` title `offsetCenter` of `[0, '-120%']` may clip on small containers

**File:** `components/GaugeKPI.svelte` · Line 49

The title is placed at `-120%` vertical offset from the gauge center. In a 180px-tall ring card, this positions the label near the very top of the container. On mobile where the o-kpis grid collapses to 2 columns, cards may be narrower and the label could overflow or wrap unexpectedly.

**Recommendation:** Visual verification at 480px breakpoint.

---

### L-04 · `map_two` query missing `'Kutlwano'` district — or named differently in source data

**File:** `pages/crime-statistics-2024/overview.md` · Line 1587

The CASE WHEN maps `'Kutlwano'` → `'No.01 Kutlwano'`. In `district_crime`, the district may be named differently (e.g., with a number prefix already, or as "North West" depending on BPS naming). If `district_name` in the source data doesn't exactly match `'Kutlwano'`, those rows would produce a NULL district_name, appearing uncoloured on the map.

**Recommendation:** Run `SELECT DISTINCT district_name FROM insights.district_crime` in MotherDuck to verify all 17 names exactly match the CASE WHEN list.

---

## VISUAL (5C) — requires `npm run preview` to verify

---

### V-01 · Map GeoJSON feature names must exactly match the `map_two` query output

**Files:** `static/maps/bps_district.geojson` + `overview.md` map_two SQL

The `map_two` query renames district names to the format `No.01 Kutlwano`, `No.02 Palapye`, etc. ECharts maps data to GeoJSON features by matching `data[].name` to `feature.properties.name`. If the GeoJSON uses different name formats (e.g., plain `Kutlwano` or `District 01 – Kutlwano`), districts will render as gray/uncoloured.

**What to verify:** Open the dashboard in preview, confirm all 17 districts are coloured on the map. If any district is grey, check the GeoJSON feature name for that district and align the CASE WHEN in `map_two`.

---

### V-02 · Tab active-state selector `:global(section > nav > button.border-b-2)` depends on Evidence internal HTML

**Files:** `overview.md`, `serious-offences.md`, `crime-profiles.md` (CSS blocks)

The custom tab segmented-control styling targets `.border-b-2` — an internal Tailwind class used by the Evidence `<Tab>` component to mark the active tab. If Evidence updates its Tab component to use a different active class, all custom tab styling across 3 pages will silently break (tabs revert to Evidence defaults).

**What to verify:** Confirm tabs render as the dark blue segmented pill on each page. Monitor Evidence release notes for Tab component changes.

---

### V-03 · Treemap hover shows `::after` text from `data-pct` attribute — verify cross-browser

**File:** `pages/crime-statistics-2024/serious-offences.md` · Lines 218–228 (CSS)

```css
.tm-cell::after {
    content: attr(data-pct);
    ...
}
```

`attr()` in CSS `content` is well-supported for `::before`/`::after`. However the entire cell hover effect (`transform: scale(1.04)` + z-index promotion + overlay darkening) should be verified at 768px and 480px where the treemap is resized to 160px/130px height.

**What to verify:** Hover each treemap cell on desktop and mobile. Confirm percentage labels appear on hover and the scaling doesn't cause layout overflow.

---

### V-04 · AiChat FAB tooltip arrow direction (CSS `::after` uses `border-left-color`)

**File:** `components/AiChat.svelte` · Lines 148–154

The tooltip arrow uses:
```css
.chat-tooltip::after {
    border-left-color: #1E3A5F;
}
```

This renders a left-pointing arrow on the right side of the tooltip, creating a visual callout pointing toward the FAB button on the right. The tooltip is `right: 90px` and the FAB is `right: 28px`, so the tooltip should appear to the left of the FAB. Visually this should be correct, but verify that on screens wider than ~500px the tooltip doesn't overlap page content.

**What to verify:** Visit any crime-statistics page, confirm the tooltip appears on first load and auto-hides after 4 seconds without obscuring dashboard content.

---

### V-05 · Stat-strip negative `margin-top` overlap with hero — verify at 480px

**Files:** `overview.md` (`margin-top: -90px`), `methodology.md` (`margin-top: -90px`), `serious-offences.md` (`.kpi-zone margin-top: -90px`)

All crime pages use a negative margin to overlap the KPI strip on top of the hero's bottom padding. At 480px, the heroes add specific `padding-bottom` overrides and the snapshot grids collapse to 2 columns. If the hero bottom padding is not sufficient to accommodate the overlap, the stat cards may appear clipped or overflow onto content above.

**What to verify:** Preview each page at 480px width. Confirm the snapshot/KPI cards sit cleanly within the hero overlap zone without clipping the hero text or the card box-shadows.

---

## Appendix — Source SQL reference

All source files (`sources/insights/crime/*.sql`) are simple `SELECT *` pass-throughs from MotherDuck views in the `crime` schema. No SQL-level bugs were found in the source files. The underlying view definitions in MotherDuck are the authoritative layer for column naming, year filtering, and data correctness. Several of the CRITICAL and HIGH findings above stem from uncertainty about whether those views pre-filter to 2024 — this should be confirmed by inspecting the MotherDuck view definitions directly.

| Source file | MotherDuck view |
|-------------|----------------|
| national_trend.sql | crime.crime_totals_annual |
| crime_totals.sql | crime.crime_totals_annual |
| serious_crime.sql | crime.serious_offences_trend |
| district_crime.sql | crime.crime_by_district |
| district_trend.sql | crime.crime_trend_by_district |
| penal_code_cat.sql | crime.penal_code_by_category |
| offence_relationship.sql | crime.victim_relationship |
| victim_relo.sql | crime.victim_relationship *(duplicate — see H-01)* |
| relationship_overall.sql | crime.relationship_overall |
| tndp.sql | crime.tndp_indicators |
| sdg.sql | crime.sdg_indicators |
