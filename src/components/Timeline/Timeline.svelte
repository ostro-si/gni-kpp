<script>
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
    <TimelineSection data={flattened} items={sectionItems} {rowGroupingVar} {getItemLink} />
  {/each}
{:else}
  <TimelineSection data={flattened} items={items} {rowGroupingVar} {getItemLink} />
{/if}

<style>
  .section-title {
    margin: 20px 0;
  }
</style>