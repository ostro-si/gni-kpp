<script>
 import { getContext } from 'svelte';

 export let item;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 $: startX = item.start_year ? $xScale(item.start_year) : $xRange[0]
 $: endX = item.end_year ? $xScale(Math.min(item.end_year, new Date().getFullYear())) : $xRange[1]

 console.log(item)
</script>

<div 
 class="container"
 style:transform={`translate(${startX}px, 0)`}
 style:width={`${endX - startX}px`}
>
 <h5 class="institution">{item.institution}</h5>
 <h6 class="position">{item.position}</h6>
 <div class="bar"></div>
 <div class="connections">
  {#each item.connections as connection}
   <div class="connection"></div>
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
</style>