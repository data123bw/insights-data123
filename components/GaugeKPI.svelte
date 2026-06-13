<script>
  import { ECharts } from '@evidence-dev/core-components';

  export let value = 0; // 0–100 percentage
  export let name = ''; // label rendered above the ring
  export let color = 'blue'; // red | amber | purple | blue | green
  export let prefix = ''; // e.g. '↓ ' for year-on-year declines
  export let invert = false; // counter-clockwise sweep, used for declines
  export let height = '180px';

  const palettes = {
    red: { main: '#DC2626', track: '#fee2e2', border: '#fecaca' },
    amber: { main: '#FF9F43', track: '#fed7aa', border: '#fed7aa' },
    purple: { main: '#9A67FD', track: '#ede9fe', border: '#ddd6fe' },
    blue: { main: '#0042A0', track: '#bfdbfe', border: '#bfdbfe' },
    green: { main: '#3EC58E', track: '#a7f3d0', border: '#a7f3d0' }
  };
  $: p = palettes[color] ?? palettes.blue;

  $: config = {
    backgroundColor: 'transparent',
    animationDuration: 1000,
    animationDelay: 0,
    series: [
      {
        type: 'gauge',
        ...(invert ? { clockwise: false } : {}),
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 100,
        radius: '70%',
        progress: { show: true, roundCap: true, width: 9, itemStyle: { color: p.main } },
        axisLine: { roundCap: true, lineStyle: { width: 9, color: [[1, p.track]] } },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        pointer: { show: false },
        detail: {
          valueAnimation: true,
          formatter: (v) => prefix + v.toFixed(1) + '%',
          fontSize: 18,
          fontWeight: 800,
          color: '#0f172a',
          offsetCenter: [0, '-10%']
        },
        title: {
          show: true,
          offsetCenter: [0, '-120%'],
          fontSize: 10,
          fontWeight: 600,
          color: '#64748b',
          overflow: 'break',
          width: 80
        },
        data: [{ value: Number(value ?? 0), name }]
      }
    ]
  };
</script>

<div class="ring-card" style="border-color: {p.border}">
  <ECharts {config} {height} />
</div>

<style>
  .ring-card {
    border-radius: 14px;
    padding: 8px 4px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    cursor: default;
  }
  .ring-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
  }
</style>
