<script>
 import { getContext } from 'svelte';
 import TimelineItem from './TimelineItem.svelte';
 import TimelineConnectionRowExpanded from './TimelineConnectionRowExpanded.svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import { min } from 'd3-array'
 import { groupBy } from '../../utils';

 export let title;
 export let positions;
 export let getItemLink;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let hovered = false;
  let connections;

 $: startX = min(positions, d => d.start_year ? $xScale(d.start_year) : $xRange[0])
 $: {
  const connectionsRaw = positions
    .map(({ connections }) => connections)
    .flat()
    .filter(c => !!c)
  
  connections = groupBy(connectionsRaw, 'person_id')
 }

//  $: console.log(connections)

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="outer-container"
    on:mouseover={() => hovered = true}
    on:focus={() => hovered = true}
    on:mouseleave={() => hovered = false}
>
  <div 
    class="container"
    style:transform={`translate(${startX}px, 0)`}
  >
  <LocalizedLink component={"a"} href={getItemLink(positions[0])}>
    <h5 class="title">{title}</h5>
  </LocalizedLink>
  <div class="positions">
    {#each positions as item}
      <TimelineItem {item} {hovered} refX={startX} />
    {/each}
  </div>
  {#if hovered}
    <div class="connections-expanded" 
      style:min-height={`${Object.values(connections).length*12}px`}
    >
      {#each Object.entries(connections) as [id, items], i}
        <TimelineConnectionRowExpanded {id} {items} refX={startX} {i} />
      {/each}
    </div>
  {/if}
</div>
</div>

<style>
  .outer-container {
    border: 0.5px solid #E6E6EB;
    border-left: none;
    border-right: none;
  }

 .container {
  overflow: visible;
  padding: 5px 0;
 }
 .bar {
  content: "";
  width: 100%;
  min-width: 10px;
  height: 5px;
  border-radius: 20px;
  background-color: blue;
 }

 .title {
  margin: 0;
  padding: 0;
  max-width: 200px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
 }

 .positions {
  position: relative;
  min-height: 35px;
  padding: 2px 0;
 }

 :global(a) {
  color: #000;
 }

 .connections-expanded {
  position: relative;
  left: 0;
  z-index: 1000;
  background: white;
  min-width: 100%;
 }
</style>