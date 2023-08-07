<script>
 import { LayerCake, Svg, Html } from 'layercake';
 import AxisX from '../AxisX.svelte';
 import TimelineSection from './TimelineSection.svelte';
 import { groupBy } from '../../utils'

 export let items;
 

 const sections = groupBy(items, 'part_of_cv')
 const flattened = items
  .map(({ start_year, end_year }) => ([{ year: start_year }, { year: end_year }]))
  .flat()
  .filter(d => !!d.year)
 

 $: console.log(flattened)

</script>

{#each Object.entries(sections) as [title, sectionItems]}
  <h5 class="section-title">{title}</h5>
  <div class='chart-container' style:height={`${[...new Set(sectionItems.map((item) => item.institution))].length*45}px`}>
    <LayerCake
      data={flattened}
      x="year"
      xDomain={[null, new Date().getFullYear()]}
      let:width
      >
      <Svg>
        <AxisX />
      </Svg>
      <Html>
        <TimelineSection items={sectionItems} />
      </Html>
    </LayerCake> 
  </div>
{/each}

<style>
  .section-title {
    margin: 20px 0;
  }
 .chart-container {
  width: 100%;
  margin: 5px 0;
  /* height: 200px; */
 }
</style>