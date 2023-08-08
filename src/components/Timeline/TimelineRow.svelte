<script>
 import { getContext } from 'svelte';
 import TimelineItem from './TimelineItem.svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import { min } from 'd3-array'
import { slugify } from '../../utils';

 export let title;
 export let positions;
 export let getItemLink;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');


 $: startX = min(positions, d => d.start_year ? $xScale(d.start_year) : $xRange[0])

 console.log(startX)
</script>

<div 
 class="container"
 style:transform={`translate(${startX}px, 0)`}
>
 <LocalizedLink component={"a"} href={getItemLink(positions[0])}>
  <h5 class="title">{title}</h5>
 </LocalizedLink>
 <div class="positions">
  {#each positions as item}
   <TimelineItem {item} refX={startX} />
  {/each}
</div>
 <!-- {item.start_year}
 {item.end_year} -->
</div>

<style>
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
  min-height: 30px;
  padding: 2px 0;
 }

 :global(a) {
  color: #000;
 }
</style>