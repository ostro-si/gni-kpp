<script>
 import { LayerCake, Svg, Html } from 'layercake';
 import AxisX from '../AxisX.svelte';
 import TimelineSection from './TimelineSection.svelte';
 import { groupBy } from '../../utils'

 export let items;
 export let sectionGroupingVar;
 export let rowGroupingVar;
 export let getItemLink;

 const sections = groupBy(items, sectionGroupingVar)
 const flattened = items
  .map(({ start_year, end_year }) => ([{ year: start_year }, { year: end_year }]))
  .flat()
  .filter(d => !!d.year)
 

 $: console.log(items)

</script>

{#if sectionGroupingVar}
  {#each Object.entries(sections) as [title, sectionItems]}
    <h5 class="section-title">{title}</h5>
    <div class='chart-container' style:height={`${[...new Set(sectionItems.map((item) => item[rowGroupingVar]))].length*45}px`}>
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
          <TimelineSection items={sectionItems} {rowGroupingVar} {getItemLink} />
        </Html>
      </LayerCake> 
    </div>
  {/each}
{:else}
  <div class='chart-container' style:height={`${[...new Set(items.map((item) => item[rowGroupingVar]))].length*45}px`}>
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
        <TimelineSection items={items} {rowGroupingVar} {getItemLink} />
      </Html>
    </LayerCake> 
  </div>
{/if}

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