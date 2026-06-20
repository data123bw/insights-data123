# Crime Statistics 2024 — Remediation Plan

**Audit ref:** `docs/crime-statistics-2024-audit-report.md`  
**Created:** 2026-06-20  
**Branch:** `remediation/crime-statistics-2024-architecture`  
**Evidence version:** `@evidence-dev/evidence ^40.1.8`  
**Repo root:** `evidence/` (all file paths below are relative to this root)

> Each phase is self-contained. A new AI session can pick up any single phase without reading prior phases. Start each phase by reading the full target file before making any edits.

---

## Status table

| ID | Phase | File | Status |
|----|-------|------|--------|
| C-01 | 0 | pages/crime-statistics-2024/methodology.md | ⬜ TODO |
| C-02 | 0 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| C-03 | — | pages/crime-statistics-2024/overview.md | ✅ N/A — `crime_by_district` has no year column; single-year snapshot table, 17 rows |
| H-01 | 1 | sources/insights/crime/ | ⬜ TODO |
| H-02 | 1 | components/BwpoliceMap.svelte | ⬜ TODO |
| H-03 | 1 | components/BwpoliceMap.svelte | ⬜ TODO |
| H-04 | 1 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| H-05 | 1 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| M-01 | 2 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| M-02 | 2 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| M-03 | 2 | pages/crime-statistics-2024/overview.md | ⬜ TODO |
| M-04 | 2 | pages/crime-statistics-2024/methodology.md | ⬜ TODO |
| M-05 | 2 | pages/crime-statistics-2024/crime-profiles.md | ⬜ TODO |
| L-01 | 3 | sources/insights/crime/*.sql | ⬜ TODO |
| L-02 | 3 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO (covered by H-04) |
| L-03 | 3 | pages/ (3 files) | ⬜ TODO |
| V-01 | 3 | pages/crime-statistics-2024/overview.md | ⬜ TODO |
| V-02 | 3 | pages/ (3 files) | ⬜ TODO |
| V-03 | 3 | pages/crime-statistics-2024/serious-offences.md | ⬜ TODO |
| V-04 | 3 | components/AiChat.svelte | ⬜ TODO |
| V-05 | 3 | pages/ (3 files) | ⬜ TODO |

---

## Confirmed schema (MotherDuck — verified 2026-06-20)

**`crime.crime_totals_annual`** → `insights.crime_totals`  
Columns: `year` (INTEGER PK), `penal_code` (INTEGER), `other_statutes` (INTEGER), `total` (INTEGER), `growth_pct` (DECIMAL 6,1)

**`crime.crime_by_district`** → `insights.district_crime`  
Columns: `district_number` (INTEGER PK), `district_name` (VARCHAR), `penal_code` (INTEGER), `other_statutes` (INTEGER), `total` (INTEGER), `relative_value_pct` (DECIMAL 5,2)  
**No `year` column** — single-year snapshot, 17 rows.

---

## Phase 0 — Data correctness (CRITICAL)

**Goal:** Replace silently wrong hardcoded values with live-queried data.  
**Files touched:** `methodology.md`, `serious-offences.md`  
**Commit message when done:** `fix: source pub_facts from live queries, compute trafficking change_pct — C-01, C-02`

---

### C-01 · `pub_facts` — split into live queries + documented literals

**File:** `pages/crime-statistics-2024/methodology.md`

**Context:** The `pub_facts` SQL block (lines 643–655) selects seven hardcoded integer literals and uses `FROM insights.crime_totals` only as a row generator. Schema confirms `crime_totals` only has `year`, `penal_code`, `other_statutes`, `total`, `growth_pct`. Only `total_offences` and `police_districts` can be sourced live. The other five remain as documented literals. The snapshot cards that use `pub_facts[0].*` (lines 683–717) must also be updated for the two fields that move to live queries.

**Step 1 — Replace the query block (lines 643–655)**

Find exactly:
```
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
```

Replace with:
```
```sql pub_totals
select
  total as total_offences
from insights.crime_totals
where year = 2024
limit 1
```

```sql pub_districts
select count(*) as police_districts
from insights.district_crime
```

```sql pub_facts
select
  14560   as serious_offences,
  5929    as victims_analysed,
  5766    as perpetrators_analysed,
  11      as serious_offences_analysed,
  2540215 as population_2024
from (select 1) dummy
```
```

> `pub_facts` is kept as the query name so the `{#if pub_facts.ready}` guard and all existing `.serious_offences`, `.victims_analysed`, `.perpetrators_analysed`, `.serious_offences_analysed`, `.population_2024` bindings remain unchanged. Only `total_offences` and `police_districts` move to live queries.

**Step 2 — Update the Total Offences card binding (line 689)**

Find exactly:
```
            <div class="snapshot-value">{pub_facts[0].total_offences.toLocaleString('en-US')}</div>
```

Replace with:
```
            <div class="snapshot-value">{pub_totals[0]?.total_offences.toLocaleString('en-US') ?? '—'}</div>
```

**Step 3 — Update the Districts card binding (line 713)**

Find exactly:
```
            <div class="snapshot-value">{pub_facts[0].police_districts}</div>
```

Replace with:
```
            <div class="snapshot-value">{pub_districts[0]?.police_districts ?? '—'}</div>
```

**Verify:** Run `npm run dev`. On the Methodology page, the Total Offences card should show `146,529` (from `crime_totals.total WHERE year = 2024`) and the Districts card should show `17` (count of rows in `district_crime`). The other three cards are unchanged.

---

### C-02 · `trafficking_metrics` — compute `change_pct` from data, add year filters

**File:** `pages/crime-statistics-2024/serious-offences.md`

**Context:** The `trafficking_metrics` SQL block (lines 933–949) hardcodes `change_pct` as `-58.5`. It also queries `insights.offence_month` without a year filter, summing all years. Both issues are fixed together.

**Find exactly (lines 933–949):**
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
```

Replace with:
```
```sql trafficking_metrics
select
  c.total_cases,
  round(100.0 * (c.total_cases - p.prev_cases) / nullif(p.prev_cases, 0), 1) as change_pct,
  v.total_victims,
  v.children_6_10_pct
from (
  select sum(cases) as total_cases
  from insights.offence_month where offence = 'human_trafficking' and year = 2024
) c
cross join (
  select sum(cases) as prev_cases
  from insights.offence_month where offence = 'human_trafficking' and year = 2023
) p
cross join (
  select
    sum(total)                                                                 as total_victims,
    max(case when age_group = '06-10' then percentage end)                     as children_6_10_pct
  from insights.victim_age where offence = 'human_trafficking'
) v
```
```

**Verify:** The trafficking card on the Serious Offences page should display a computed `change_pct` that matches the previously hardcoded `-58.5`. If it does not match, run `DESCRIBE insights.offence_month` in MotherDuck to confirm the year column name (may be `report_year` instead of `year`) and adjust accordingly.

---

## Phase 1 — Silent failures and misleading output (HIGH)

**Goal:** Fix issues that produce wrong or confusing UI without throwing errors.  
**Files touched:** `sources/insights/crime/victim_relo.sql`, `components/BwpoliceMap.svelte`, `pages/crime-statistics-2024/serious-offences.md`  
**Commit message when done:** `fix: remove duplicate source, add map error handling, fix delta sign display — H-01 to H-05`

---

### H-01 · Delete duplicate source `victim_relo.sql` and consolidate references

**Context:** `sources/insights/crime/victim_relo.sql` and `sources/insights/crime/offence_relationship.sql` both contain `select * from crime.victim_relationship`. This creates two identical Evidence source tables. `victim_relo` is used in `serious-offences.md` and `crime-profiles.md`; consolidate all references to `offence_relationship`.

**Step 1 — Delete the file:**
```
sources/insights/crime/victim_relo.sql
```

**Step 2 — In `pages/crime-statistics-2024/serious-offences.md`:**

Find: `from insights.victim_relo`  
Replace all: `from insights.offence_relationship`

Find: `FROM insights.victim_relo`  
Replace all: `FROM insights.offence_relationship`

**Step 3 — In `pages/crime-statistics-2024/crime-profiles.md`:**

Find: `from insights.victim_relo`  
Replace all: `from insights.offence_relationship`

Find: `FROM insights.victim_relo`  
Replace all: `FROM insights.offence_relationship`

**Step 4 — Standardise `relationship_type` case filtering.** Search both pages for filters on `relationship_type` that do not use `lower()`. Replace any bare string comparison with the `lower()` form:

Find: `relationship_type = 'stranger'`  
Replace with: `lower(relationship_type) = 'stranger'`

**Verify:** Run `npm run dev`. The Rape tab victim relationship chart and the Crime Profiles relationship tab should still populate correctly with no data errors in the browser console.

---

### H-02 · Add try/catch to GeoJSON fetch in `BwpoliceMap.svelte`

**File:** `components/BwpoliceMap.svelte`

**Context:** The `onMount` async body has no error handling. A failed fetch of `/maps/bps_district.geojson` (404, network error, malformed JSON) causes a silent unhandled rejection and an empty map div.

Read the full file. Locate `onMount(async () => {`. Wrap its entire body:

**Find:**
```
  onMount(async () => {
```
Add `try {` as the first line inside the block.

**Find the fetch line (will look like):**
```
    const geoJson = await fetch(geoJsonUrl).then(r => r.json());
```

Replace with:
```
    const res = await fetch(geoJsonUrl);
    if (!res.ok) throw new Error(`GeoJSON fetch failed: ${res.status} ${geoJsonUrl}`);
    const geoJson = await res.json();
```

**Find the closing `});` of the onMount block and insert catch before it:**
```
  });
```

Replace with:
```
    } catch (err) {
      console.error('[BwpoliceMap] failed to initialise:', err);
    }
  });
```

**Verify:** Temporarily rename `static/maps/bps_district.geojson` to `.bak`. Load the Overview page — it should not crash; the console should log `[BwpoliceMap] failed to initialise:`. Rename the file back and confirm the map renders.

---

### H-03 · Fix default `value` prop in `BwpoliceMap.svelte`

**File:** `components/BwpoliceMap.svelte`

Find exactly:
```
export let value = 'total_views';
```

Replace with:
```
export let value = 'total';
```

**Verify:** Map renders correctly. No visible change expected since all call sites already pass `value='total'` explicitly.

---

### H-04 · Fix double-negative delta display — TTK, Rape, Defilement, Stock Theft

**File:** `pages/crime-statistics-2024/serious-offences.md`

**Context:** `change_pct` is already negative for declining offences. `↓ {change_pct}%` renders as "↓ -7.5%". The arrow already conveys direction. Apply `Math.abs()` to all four declining offence delta badges. (Murder and robbery already handle this correctly.)

Four exact find/replace pairs — apply all four:

**TTK (line 1305)**  
Find: `<div class="offence-delta dn">↓ {ttk_metrics[0]?.change_pct ?? 0}%</div>`  
Replace: `<div class="offence-delta dn">↓ {Math.abs(ttk_metrics[0]?.change_pct ?? 0)}%</div>`

**Rape (line 1408)**  
Find: `<div class="offence-delta dn">↓ {rape_metrics[0]?.change_pct ?? 0}%</div>`  
Replace: `<div class="offence-delta dn">↓ {Math.abs(rape_metrics[0]?.change_pct ?? 0)}%</div>`

**Defilement (line 1510)**  
Find: `<div class="offence-delta dn">↓ {defilement_metrics[0]?.change_pct ?? 0}%</div>`  
Replace: `<div class="offence-delta dn">↓ {Math.abs(defilement_metrics[0]?.change_pct ?? 0)}%</div>`

**Stock Theft (line 1707)**  
Find: `<div class="offence-delta dn">↓ {stock_metrics[0]?.change_pct ?? 0}%</div>`  
Replace: `<div class="offence-delta dn">↓ {Math.abs(stock_metrics[0]?.change_pct ?? 0)}%</div>`

**Verify:** Each declining offence header badge reads "↓ 7.5%", "↓ 14.0%", etc. — no minus sign after the arrow.

---

### H-05 · Wrap trafficking BarChart in `{#if trafficking_metrics.ready}`

**File:** `pages/crime-statistics-2024/serious-offences.md`

**Context:** The trafficking stats card (lines 1804–1830) is correctly inside `{#if trafficking_metrics.ready}`. The `<Grid cols=2>` and `BarChart` that follow at line 1832 use `trafficking_metrics` in the chart `subtitle` but are outside any ready guard.

Find exactly (line 1832):
```
<Grid cols=2>

  <div class="chart-card">
    <BarChart
      data={trafficking_victim_age}
```

Replace with:
```
{#if trafficking_metrics.ready}
<Grid cols=2>

  <div class="chart-card">
    <BarChart
      data={trafficking_victim_age}
```

Then find the `</Grid>` that closes this 2-column block (it is the next `</Grid>` after line 1832 in the file). Add `{/if}` on the line immediately after it:

Find:
```
</Grid>
```
(the specific one closing the trafficking chart grid — check surrounding context to confirm it is the right one)

Replace with:
```
</Grid>
{/if}
```

**Verify:** The trafficking chart section loads after data is ready. No empty subtitle flash on page load.

---

## Phase 2 — Hardcoded values and UI text fixes (MEDIUM)

**Goal:** Replace hardcoded treemap HTML and GaugeKPI values with live data; fix nav labels and CSS collision.  
**Files touched:** `serious-offences.md`, `overview.md`, `methodology.md`, `crime-profiles.md`  
**Commit message when done:** `fix: data-drive treemap and gauges, fix nav labels and CSS collision — M-01 to M-05`

---

### M-01 · Replace hardcoded treemap HTML with dynamic `{#each}` render

**File:** `pages/crime-statistics-2024/serious-offences.md`

**Context:** The "Serious Crime Landscape" treemap is pure static HTML (~12 `tm-cell` divs with hardcoded counts and percentages). The page already has a `serious_2024` query. The CSS rules for `.tm-grid`, `.tm-cell`, `.tm-name`, `.tm-val` already exist in the `<style>` block — only the HTML generation changes.

**Step 1 — Confirm the case-count column name in `serious_2024`.** Find the `serious_2024` SQL block earlier in the file and note whether the case count column is named `cases_2024` or `total_2024`. Use that name in the template below (shown as `cases_2024`).

**Step 2 — Find the static treemap block.** It opens with:
```
<div class="tm-grid">
```
and contains approximately 12 children each starting with `<div class="tm-cell"`. The block ends with the closing `</div>` after the last `tm-cell`.

Replace the entire `<div class="tm-grid">...</div>` block with:

```svelte
{#if serious_2024.ready}
  {@const tm_total = serious_2024.reduce((s, r) => s + (r.cases_2024 ?? 0), 0)}
  <div class="tm-grid">
    {#each serious_2024 as row}
      {@const pct = tm_total > 0 ? (row.cases_2024 / tm_total * 100).toFixed(1) : '0.0'}
      <div
        class="tm-cell"
        style="flex:{tm_total > 0 ? Math.round(row.cases_2024 / tm_total * 100) : 1}"
        data-pct="{pct}%"
      >
        <div class="tm-name">{String(row.offence ?? '').replace(/_/g, ' ')}</div>
        <div class="tm-val">{(row.cases_2024 ?? 0).toLocaleString()}</div>
      </div>
    {/each}
  </div>
{/if}
```

> If the column is `total_2024`, replace both occurrences of `cases_2024` in the template.

**Verify:** Treemap renders 11 cells proportionally sized. Hover each cell — the `data-pct` label appears via `::after`. Sum of all displayed counts equals the national total on the Overview page.

---

### M-02 · Replace 9 hardcoded GaugeKPI values with live query fields

**File:** `pages/crime-statistics-2024/serious-offences.md`

**Context:** Nine `GaugeKPI` components have hardcoded `value={}` props. The page has queries (`murder_motive`, `murder_relationship`, `ttk_motive`, `robbery_weapon`, `unemployment_cross`) that supply most values. A few require a new cross join to be added to existing metrics query blocks. Fallback `?? hardcoded` values are retained so the gauges still display if a `.find()` returns undefined.

Apply each replacement independently:

---

**Murder — Romantic link (line 1170)**  
Source: `murder_relationship` query — columns `relationship_type` (underscores replaced by spaces), `percentage`.

Find: `<GaugeKPI value={37.1} name={'Romantic link'} color=purple />`  
Replace: `<GaugeKPI value={murder_relationship.find(r => r.relationship_type === 'romantic link')?.percentage ?? 37.1} name={'Romantic link'} color=purple />`

---

**Murder — Jealousy motive (line 1172)**  
Source: `murder_motive` query — columns `motive`, `percentage`.

Find: `<GaugeKPI value={33.8} name={'Jealousy motive'} color=red />`  
Replace: `<GaugeKPI value={murder_motive.find(r => r.motive === 'jealousy')?.percentage ?? 33.8} name={'Jealousy motive'} color=red />`

---

**Murder — Arguments motive (line 1174)**  

Find: `<GaugeKPI value={26.4} name={'Arguments motive'} color=blue />`  
Replace: `<GaugeKPI value={murder_motive.find(r => r.motive === 'arguments')?.percentage ?? 26.4} name={'Arguments motive'} color=blue />`

---

**TTK — Jealousy motive (line 1318)**  
Source: `ttk_motive` query — columns `motive`, `percentage`.

Find: `<GaugeKPI value={64.4} name={'Jealousy motive'} color=blue />`  
Replace: `<GaugeKPI value={ttk_motive.find(r => r.motive === 'jealousy')?.percentage ?? 64.4} name={'Jealousy motive'} color=blue />`

---

**Rape — Bushy area or perp home (line 1421)**  
Source: not in current queries. Add a cross join to the `rape_metrics` SQL block. Inside `rape_metrics`, after the existing cross joins and before the closing of the FROM clause, add:

```sql
cross join (
  select round(sum(percentage), 1) as location_pct
  from insights.offence_location
  where offence = 'rape'
    and lower(location_type) in ('bushy area', 'perpetrator home', 'perp home')
) loc
```

Add `loc.location_pct` to the SELECT list of `rape_metrics`.

Then:

Find: `<GaugeKPI value={40} name={'Bushy area or perp home'} color=blue />`  
Replace: `<GaugeKPI value={rape_metrics[0]?.location_pct ?? 40} name={'Bushy area or perp home'} color=blue />`

> Verify location names first: `SELECT DISTINCT location_type FROM insights.offence_location WHERE offence = 'rape'` in MotherDuck.

---

**Defilement — Male perpetrators (line 1523)**  
Source: not in current queries. Add to `defilement_metrics`:

```sql
cross join (
  select percentage as male_perp_pct
  from insights.perpetrator_gender
  where offence = 'defilement' and lower(gender) = 'male'
  limit 1
) g
```

Add `g.male_perp_pct` to the SELECT list.

Find: `<GaugeKPI value={99.8} name={'Male perpetrators'} color=purple />`  
Replace: `<GaugeKPI value={defilement_metrics[0]?.male_perp_pct ?? 99.8} name={'Male perpetrators'} color=purple />`

> Verify table name: `SHOW TABLES` on `crime` schema in MotherDuck if `perpetrator_gender` does not exist.

---

**Robbery — Knives specifically (line 1625)**  
Source: `robbery_weapon` query — columns `weapon_type` (underscores replaced by spaces), `percentage`. Verify the exact value: `SELECT DISTINCT weapon_type FROM insights.offence_weapon WHERE offence = 'robbery'` in MotherDuck.

Find: `<GaugeKPI value={44.9} name={'Knives specifically'} color=blue />`  
Replace: `<GaugeKPI value={robbery_weapon.find(r => r.weapon_type === 'knives')?.percentage ?? 44.9} name={'Knives specifically'} color=blue />`

> Adjust `'knives'` to match the actual transformed value if different.

---

**Robbery — Perps unemployed (line 1627)**  
Source: `unemployment_cross` query (already on the page) — columns `offence`, `pct_unemployed`.

Find: `<GaugeKPI value={85.7} name={'Perps unemployed'} color=purple />`  
Replace: `<GaugeKPI value={unemployment_cross.find(r => r.offence === 'robbery')?.pct_unemployed ?? 85.7} name={'Perps unemployed'} color=purple />`

---

**Stock Theft — North Central share (line 1720)**  
Source: not in current queries. Add a new SQL block in the stock theft section (after the existing `stock_metrics` block):

```sql stock_region
select
  replace(division,'_',' ') as division,
  percentage
from insights.offence_division
where offence = 'stock_theft'
order by percentage desc
```

Find: `<GaugeKPI value={34.5} name={'North Central share'} color=blue />`  
Replace: `<GaugeKPI value={stock_region.find(r => r.division === 'North Central')?.percentage ?? 34.5} name={'North Central share'} color=blue />`

> If `insights.offence_division` doesn't exist, verify the correct source by running `SHOW TABLES` on the `crime` schema in MotherDuck.

---

**Verify all M-02 changes:** Each gauge should display the same numerical value it showed before (within ±0.1 rounding). If any gauge shows `0` instead of its fallback, the `.find()` string did not match — check exact values in the source query results via browser DevTools network tab or MotherDuck.

---

### M-03 · Fix `.insight-icon` CSS class collision in overview.md

**File:** `pages/crime-statistics-2024/overview.md`

**Context:** `.insight-icon` is defined twice in the `<style>` block. The second definition (line 592) sets `font-size: 26px` and overrides the first definition's `font-size: 16px` for all usages, including the coloured icon boxes in the Key Findings grid where 16px is correct.

**Step 1 — Rename the duplicate CSS rule (lines 592–595)**

Find exactly:
```
.insight-icon {

    font-size: 26px;
}
```

Replace with:
```
.si-icon {
    font-size: 26px;
}
```

**Step 2 — Rename the three HTML usages of this class**

Find exactly (line 1794):
```
        <div class="insight-icon">
            ⚡
        </div>
```
Replace with:
```
        <div class="si-icon">
            ⚡
        </div>
```

Find exactly (line 1944):
```
            <div class="insight-icon">⚡</div>
```
Replace with:
```
            <div class="si-icon">⚡</div>
```

Find exactly (line 2050):
```
            <div class="insight-icon">⚡</div>
```
Replace with:
```
            <div class="si-icon">⚡</div>
```

**Verify:** In DevTools, inspect a coloured icon box (↘, ⚠, 📍, 👥) in the Key Findings grid — computed `font-size` should be `16px`. Inspect the ⚡ emoji icons in the structure section — computed `font-size` should be `26px`.

---

### M-04 · Fix navigation label in methodology.md footer

**File:** `pages/crime-statistics-2024/methodology.md`

Find exactly (line 1241):
```
    ← Page 3: District Profiles
```

Replace with:
```
    ← Page 3: Crime Profiles
```

**Verify:** The back-navigation button on the Methodology page reads "← Page 3: Crime Profiles".

---

### M-05 · Fix page-nav direction in crime-profiles.md

**File:** `pages/crime-statistics-2024/crime-profiles.md`

**Context:** Crime Profiles is Page 3. Its footer shows "Page 2: Serious Offences →" as a forward link from Page 3, which is incorrect. The right-hand button should point forward to Methodology (Page 4).

Find exactly (lines 2046–2052):
```
<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/overview">
    ← Page 1: National Overview
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/serious-offences">
    Page 2: Serious Offences →
  </LinkButton>
</div>
```

Replace with:
```
<div class="page-nav">
  <LinkButton url="/crime-statistics-2024/serious-offences">
    ← Page 2: Serious Offences
  </LinkButton>
  <LinkButton url="/crime-statistics-2024/methodology">
    Page 4: Methodology →
  </LinkButton>
</div>
```

**Verify:** Crime Profiles footer: left button → Serious Offences, right button → Methodology.

---

## Phase 3 — Polish and browser sign-off (LOW + VISUAL)

**Goal:** Tidy minor issues and verify in `npm run preview`.  
**Commit message when done:** `chore: strip trailing whitespace, document tab selector — L-01 to L-03`

---

### L-01 · Strip trailing whitespace from source SQL files

Open each file and remove trailing spaces/newlines after the final SQL statement:

- `sources/insights/crime/district_crime.sql`
- `sources/insights/crime/crime_totals.sql`
- `sources/insights/crime/penal_code_cat.sql`

No functional change.

---

### L-02 · Defilement double-negative

Covered by H-04. Mark complete when H-04 is done.

---

### L-03 · Document fragile Evidence Tab selector

In each of the three files below, add a comment on the line immediately above each `:global(section > nav > button.border-b-2)` occurrence:

Files: `pages/crime-statistics-2024/overview.md`, `pages/crime-statistics-2024/serious-offences.md`, `pages/crime-statistics-2024/crime-profiles.md`

Find (in each file):
```
:global(section > nav > button.border-b-2)
```

Replace with:
```
/* Evidence Tab active class — verify selector on every @evidence-dev/core-components upgrade */
:global(section > nav > button.border-b-2)
```

---

### V-01 · Verify map district names match GeoJSON

Run `npm run preview`. Navigate to Overview → choropleth map.

All 17 districts should be coloured. If any district is grey:
1. Run `SELECT DISTINCT district_name FROM insights.district_crime ORDER BY 1` in MotherDuck
2. Open `static/maps/bps_district.geojson`, check `feature.properties.name` values
3. Find the mismatch and update the `CASE WHEN` rename block in the `map_two` query in `pages/crime-statistics-2024/overview.md`

---

### V-02 · Verify Evidence Tab active styling

Run `npm run preview`. On each page with `<Tabs>`, click each tab. Active tab should render as the dark blue segmented pill. If Evidence default styling appears, inspect DevTools — if the active class is no longer `border-b-2`, update the `:global()` selector in all three pages.

---

### V-03 · Verify treemap hover labels (after M-01)

Run `npm run preview` after completing M-01. Navigate to Serious Offences → treemap. Hover each cell — the `data-pct` percentage should appear via `::after`. Test on Chrome, Firefox, Edge. Resize to 768px and 480px.

---

### V-04 · Verify AiChat FAB and tooltip

Run `npm run preview`. On any `/crime-statistics-2024/` page except `/methodology`: FAB appears bottom-right, tooltip auto-shows on load and hides after 4 seconds, FAB does not overlap key content at 480px.

---

### V-05 · Verify stat-strip overlap at 480px

Run `npm run preview` at 480px. On Overview, Serious Offences, and Methodology pages: the KPI/snapshot strip (`margin-top: -90px`) sits cleanly within the hero's lower section without clipping the hero text or overflowing the viewport.

---

## Commit strategy

All work on branch `remediation/crime-statistics-2024-architecture`. Do not merge to `staging` or `main` until all items in a phase are verified in preview.

| Phase | Commit message |
|-------|----------------|
| 0 | `fix: source pub_facts from live queries, compute trafficking change_pct — C-01, C-02` |
| 1 | `fix: remove duplicate source, add map error handling, fix delta sign display — H-01 to H-05` |
| 2 | `fix: data-drive treemap and gauges, fix nav labels and CSS collision — M-01 to M-05` |
| 3 | `chore: strip trailing whitespace, document tab selector — L-01 to L-03` |
