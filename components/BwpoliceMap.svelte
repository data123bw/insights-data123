<script>
  import { onMount, onDestroy, tick } from 'svelte';

  export let data = [];
  export let areaCol = 'district_name';
  export let value = 'total';
  export let geoJsonUrl = '/maps/bps_district.geojson';
  export let height = 500;
  export let title = '';
  export let subtitle = '';
  export let roam = false;

  let container;
  let chart;
  let resize;

  onMount(async () => {
    try {
      const echartsModule = await import('echarts');
      const echarts = echartsModule.default ?? echartsModule;

      const res = await fetch(geoJsonUrl);
      if (!res.ok) throw new Error(`GeoJSON fetch failed: ${res.status} ${geoJsonUrl}`);
      const geoJson = await res.json();

      echarts.registerMap('BotswanaBPS', geoJson);

      await tick();

      chart = echarts.init(container);

      const values = data
        .map(d => Number(d[value]) || 0)
        .filter(v => v >= 0);

      const minValue = values.length ? Math.min(...values) : 0;
      const maxValue = values.length ? Math.max(...values) : 1;

      chart.setOption({
        title: {
          text: title,
          subtext: subtitle,
          left: 'left'
        },

        tooltip: {
          trigger: 'item',
          formatter: (p) => {
            return `
              <div>
                <strong>${p.name}</strong><br/>
                Crime Cases: ${(p.value ?? 0).toLocaleString()}
              </div>
            `;
          }
        },

        visualMap: {
          type: 'continuous',
          left: 'right',
          min: minValue,
          max: maxValue,
          text: ['High', 'Low'],
          calculable: true,
          inRange: {
            color: [
              '#2E7D32',
              '#66BB6A',
              '#FDD835',
              '#FB8C00',
              '#C62828'
            ]
          }
        },

        series: [
          {
            type: 'map',
            map: 'BotswanaBPS',
            roam,
            zoom: 1.2,
            layoutCenter: ['50%', '50%'],
            layoutSize: '83%',

            label: {
              show: false
            },

            emphasis: {
              label: {
                show: true,
                color: '#0f172a',
                fontWeight: 'bold'
              },
              itemStyle: {
                areaColor: '#90CAF9'
              }
            },

            data: data.map(row => ({
              name: row[areaCol],
              value: Number(row[value]) || 0
            }))
          }
        ]
      });

      resize = () => chart?.resize();

      window.addEventListener('resize', resize);
    } catch (err) {
      console.error('[BwpoliceMap] failed to initialise:', err);
    }
  });

  onDestroy(() => {
    if (resize) {
      window.removeEventListener('resize', resize);
    }

    chart?.dispose();
  });
</script>

<div
  bind:this={container}
  style="width:100%; height:{height}px;"
></div>