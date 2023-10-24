<script>
  import moment from 'moment';
 import AxisX from '../AxisX.svelte';
 import { translate } from '$lib/translations';
 import TimelineSection from './TimelineSection.svelte';
 import { fade } from 'svelte/transition';
 import { groupBy } from '../../utils'
 import { scaleTime } from 'd3-scale'
 import { min } from 'd3-array'

 export let items;
 export let sectionGroupingVar;
 export let rowGroupingVar;
 export let getItemLink;
 export let getItemLabel;

 $: sections = groupBy(items, sectionGroupingVar)
 $: flattened = items
  .map(({ startDisplayDate, endDisplayDate }) => ([{ date: new Date(startDisplayDate) }, { date: Math.min(new Date(), new Date(endDisplayDate)) }]))
  .flat()
  .filter(d => !!d.date)

$: xScale = scaleTime()
  .domain([new Date(min(items, d => d.startDisplayDate)), new Date()])
  // .nice()

$: console.log('scale', xScale.domain(), xScale.ticks(), flattened)
 
</script>
<div class="timeline-container" in:fade>
  {#if sectionGroupingVar}
    {#each Object.entries(sections) as [title, sectionItems]}
      <h5 class="section-title">{$translate(title)}</h5>
      <TimelineSection {xScale} data={flattened} items={sectionItems} {rowGroupingVar} {getItemLink} {getItemLabel} />
    {/each}
  {:else}
    <TimelineSection {xScale} data={flattened} {items} {rowGroupingVar} {getItemLink} {getItemLabel} />
  {/if}
</div>

<style lang="scss">
  .timeline-container {
    max-width: $max-width;
    width: calc(100% - 40px);
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