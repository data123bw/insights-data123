<script>
  import { onMount, onDestroy, tick } from 'svelte';

  export let data = [];
  export let areaCol = 'district_name';
  export let value = 'total_views';
  export let geoJsonUrl = '/maps/botswana_districts.json';
  export let height = 500;
  export let title = '';
  export let subtitle = '';
  export let roam = false;

  let container;
  let chart;

  onMount(async () => {
    const echartsModule = await import('echarts');
    const echarts = echartsModule.default ?? echartsModule;

    const geoJson = await fetch(geoJsonUrl).then(r => r.json());
    echarts.registerMap('Botswana', geoJson);

    await tick();
    chart = echarts.init(container);

    chart.setOption({
      title: {
        text: title,
        subtext: subtitle,
        left: 'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: p => `<b>${p.name}</b><br/>Crime Cases: ${p.value?.toLocaleString() ?? 'No data'}`
      },
      visualMap: {
        type: 'continuous',
        left: 'right',
        min: Math.min(...data.map(d => d[value] ?? 0)),
        max: Math.max(...data.map(d => d[value] ?? 0), 1),
        inRange: {
          color: ['#2E7D32','#66BB6A','#FDD835','#FB8C00','#C62828']
        },
        text: ['High', 'Low'],
        calculable: false
      },
      series: [{
        type: 'map',
        map: 'Botswana',
        roam,
        zoom: 1.2,
        layoutCenter: ['50%', '50%'],
        layoutSize: '90%',
        emphasis: {
          itemStyle: { areaColor: '#90CAF9' },
          label: {
            show: true,
            color: '#0f172a'
          }
        },
        data: data.map(row => ({
          name: row[areaCol],
          value: row[value]
        }))
      }]
    });

    const resize = () => chart.resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  onDestroy(() => chart?.dispose());
</script>

<div bind:this={container} style="width:100%; height:{height}px;"></div>