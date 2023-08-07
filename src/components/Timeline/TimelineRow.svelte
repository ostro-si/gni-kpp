<script>
 import { getContext } from 'svelte';
 import TimelineItem from './TimelineItem.svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import { min } from 'd3-array'
	import { slugify } from '../../utils';

 export let institution;
 export let positions;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');


 $: startX = min(positions, d => d.start_year ? $xScale(d.start_year) : $xRange[0])

 console.log(startX)
</script>

<div 
 class="container"
 style:transform={`translate(${startX}px, 0)`}
>
 <a href={`/institutions/${slugify(institution)}`}>
  <h5 class="institution">{institution}</h5>
 </a>
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
 }
 .bar {
  content: "";
  width: 100%;
  min-width: 10px;
  height: 5px;
  border-radius: 20px;
  background-color: blue;
 }

 .institution, .position {
  white-space: nowrap;
  margin: 0;
  padding: 0;
 }

 .connections {
  display: flex;
 }

 .connection {
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: #3CBEAA;
 }

 .positions {
  position: relative;
  min-height: 30px;
  padding: 2px 0;
 }
</style>