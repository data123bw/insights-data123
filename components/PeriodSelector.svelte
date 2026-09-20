<script>
	// Global BSE reporting-period control. Replaces the static "Reporting period · FY2025"
	// pill in .bse-topbar. Drives the `inputs.period` value consumed by SQL fences on
	// Market Performance / Securities & Participation / Group Financials, and reflects
	// the choice in the URL (?period=FY2024) for shareable links. Also keeps the
	// .bse-tabs / .bse-back nav links on the page carrying the selection across pages,
	// since Evidence inputs are not URL-synced by default.
	import { getInputContext } from '@evidence-dev/sdk/utils/svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const inputs = getInputContext();

	const PERIODS = [
		{ value: 'FY2025', label: 'FY2025' },
		{ value: 'FY2024', label: 'FY2024' }
	];

	function syncNavLinks(period) {
		if (typeof document === 'undefined') return;
		const qs = period !== 'FY2025' ? `?period=${period}` : '';
		document.querySelectorAll('.bse-tabs a, .bse-back').forEach((a) => {
			const base = (a.getAttribute('href') || '').split('?')[0];
			a.setAttribute('href', base + qs);
		});
	}

	function setPeriod(value, { updateUrl = true } = {}) {
		$inputs.period = {
			value,
			label: value,
			toString() {
				return `'${value}'`;
			}
		};
		syncNavLinks(value);
		if (updateUrl) {
			const url = new URL($page.url);
			if (value === 'FY2025') url.searchParams.delete('period');
			else url.searchParams.set('period', value);
			goto(url, { replaceState: true, keepFocus: true, noScroll: true });
		}
	}

	onMount(() => {
		const urlPeriod = $page.url.searchParams.get('period');
		setPeriod(urlPeriod === 'FY2024' ? 'FY2024' : 'FY2025', { updateUrl: false });
	});

	$: current = $inputs.period?.value ?? 'FY2025';
</script>

<span class="bse-period-select" role="group" aria-label="Reporting period">
	<span class="bse-period-label">Reporting period</span>
	{#each PERIODS as p (p.value)}
		<button
			type="button"
			class="bse-period-btn {current === p.value ? 'on' : ''}"
			aria-pressed={current === p.value}
			on:click={() => setPeriod(p.value)}
		>{p.label}</button>
	{/each}
</span>

<style>
	.bse-period-select { display: inline-flex; align-items: center; gap: 4px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.12); border-radius: 999px; padding: 2px 4px 2px 10px; }
	.bse-period-label { font-size: 12px; color: #DCE4F6; margin-right: 2px; }
	.bse-period-btn { border: none; background: transparent; color: #DCE4F6; border-radius: 999px; padding: 2px 10px; font-size: 12px; cursor: pointer; font-family: inherit; }
	.bse-period-btn.on { background: #fff; color: #14110A; font-weight: 700; }
</style>
