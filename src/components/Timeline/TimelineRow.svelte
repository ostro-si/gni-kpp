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

 let positionRows = [];

 const calculatePositionOffsets = () => {
  positions
    .sort((a, b) => a.start_year < b.start_year ? -1 : 1)
    .forEach(position => {
      placePosition(position)
    })
  positionRows = positionRows;
 }

 const placePosition = (position) => {
    if (positionRows.length > 0) {
      const lastRow = positionRows[positionRows.length - 1]
      if (position.start_year >= lastRow[lastRow.length - 1].end_year) {
        lastRow.push(position)
        return;
      }
    }
  positionRows.push([position]);
 }

 $: positions, calculatePositionOffsets()

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="outer-container"
  style:z-index={hovered ? 100 : 0}
  on:mouseover={() => hovered = true}
  on:focus={() => hovered = true}
  on:mouseleave={() => hovered = false}
  style:height={`${positionRows.length*30 + 30}px`}
>
  <div 
    class="container"
    style:transform={`translate(${startX}px, 0)`}
  >
    <LocalizedLink component={"a"} href={getItemLink(positions[0])}>
      <h5 class="title">{title}</h5>
    </LocalizedLink>
    <div class="positions">
      {#each positionRows as items, i}
        {#each items as item}
          <TimelineItem {item} {hovered} refX={startX} yOffset={i} />
        {/each}
      {/each}
    </div>
  </div>

  {#if hovered}
    <div class="connections-expanded" 
      style:min-height={`${Object.values(connections).length*12}px`}
    >
      {#each Object.entries(connections) as [id, items], i}
        <TimelineConnectionRowExpanded {id} {items} refX={0} {i} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .outer-container {
    border: 0.5px solid #E6E6EB;
    border-left: none;
    border-right: none;
    position: relative;
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
  /* max-width: 200px; */
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
  position: absolute;
  left: 0;
  z-index: 1000;
  background: white;
  min-width: 100%;
  padding: 5px;
  /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
 }
</style>