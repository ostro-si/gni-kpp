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

<div class='chart-container'>
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
    {#each Object.entries(sections) as [title, sectionItems]}
      <TimelineSection {title} items={sectionItems} />
    {/each}
   </Html>
  </LayerCake> 

 
</div>

<style>
 .chart-container {
  width: 100%;
  height: 700px;
 }
</style>