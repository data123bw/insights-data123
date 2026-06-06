<script>
  import { onMount, onDestroy } from 'svelte';

  export let data = [];
  export let areaCol = 'district_name';
  export let value = 'total_views';
  export let geoJsonUrl = '/maps/botswana_districts.json';
  export let height = 500;

  let container;
  let chart;

  onMount(async () => {
    const echartsModule = await import('echarts');
    const echarts = echartsModule.default ?? echartsModule;

    const geoJson = await fetch(geoJsonUrl).then(r => r.json());
    echarts.registerMap('Botswana', geoJson);

    chart = echarts.init(container);

    chart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: p => `<b>${p.name}</b><br/>${p.value?.toLocaleString() ?? 'No data'}`
      },
      visualMap: {
        min: 0,
        max: Math.max(...data.map(d => d[value] ?? 0)),
        inRange: {
          color: ['#EEEDFE','#AFA9EC','#7F77DD','#534AB7','#3C3489','#26215C']
        },
        text: ['High', 'Low'],
        calculable: true,
        right: 12,
        bottom: 40
      },
      series: [{
        type: 'map',
        map: 'Botswana',
        roam: true,
        zoom: 1.2,
        layoutCenter: ['50%', '50%'],
        layoutSize: '80%',
        emphasis: {
          itemStyle: { areaColor: '#EF9F27' },
          label: { show: true }
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