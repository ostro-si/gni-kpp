<script>
 import AxisX from '../AxisX.svelte';
 import TimelineSection from './TimelineSection.svelte';
 import { groupBy } from '../../utils'

 export let items;
 export let sectionGroupingVar;
 export let rowGroupingVar;
 export let getItemLink;
 export let getItemLabel;

 $: sections = groupBy(items, sectionGroupingVar)
 $: flattened = items
  .map(({ start_year, end_year }) => ([{ year: start_year }, { year: end_year }]))
  .flat()
  .filter(d => !!d.year)
 

//  $: console.log(items)

</script>

<div class="timeline-container">
  {#if sectionGroupingVar}
    {#each Object.entries(sections) as [title, sectionItems]}
      <h5 class="section-title">{title}</h5>
      <TimelineSection data={flattened} items={sectionItems} {rowGroupingVar} {getItemLink} {getItemLabel} />
    {/each}
  {:else}
    <TimelineSection data={flattened} items={items} {rowGroupingVar} {getItemLink} {getItemLabel} />
  {/if}
</div>

<style lang="scss">
  .timeline-container {
    max-width: $max-width;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
  .section-title {
    margin: 20px 0;
    font-size: 12px;
    text-transform: uppercase;
    color: grey;
  }
</style>