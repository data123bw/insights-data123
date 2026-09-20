<script>
	// Explicit "not applicable for this reporting period" state, shown in place of a page's
	// normal body when a non-FY2025 period is selected via a shared link (10X Strategy,
	// Governance & Risk). Reuses the dashboard's existing .bse-badge-una convention rather
	// than inventing a new visual pattern - see governance/BSE phase2 handover Section 4.
	export let period = 'FY2024';
	export let pageName = 'this page';
	export let reason = '';
</script>

<div class="bse-card bse-na">
	<span class="bse-badge bse-badge-una">Not applicable · {period}</span>
	<p class="bse-na-title">{pageName} has no {period} data</p>
	<p class="bse-na-body">{reason}</p>
	<p class="bse-na-body bse-na-sub">This is not a data gap - it is a fact about when this programme began. Switch back to FY2025 above to see this page.</p>
</div>

<style>
	.bse-na { padding: 22px; }
	.bse-na-title { font-size: 15px; font-weight: 700; margin: 12px 0 4px; color: var(--navy-1, #14110A); }
	.bse-na-body { font-size: 13px; color: var(--text-secondary, #475467); margin: 0 0 6px; line-height: 1.55; }
	.bse-na-sub { color: var(--text-tertiary, #667085); font-size: 12px; }
</style>
