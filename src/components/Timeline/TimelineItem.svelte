<script>
 import { getContext } from 'svelte';

 export let item;
 export let refX;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 $: startX = item.start_year ? $xScale(item.start_year) : $xRange[0]
 $: endX = item.end_year ? $xScale(Math.min(item.end_year, new Date().getFullYear())) : $xRange[1]

 console.log(item)
</script>

<div class="item" style:left={`${startX - refX}px`}>
  <h6 class="position">{item.position}</h6>
  <div class="bar"></div>
  {#if item.connections}
    <div class="connections">
    {#each item.connections as connection}
      <div class="connection"></div>
    {/each}
    </div>
  {/if}
</div>

<style>

 .item {
  position: absolute;
  top: 0;
 }

 .bar {
  content: "";
  width: 100%;
  min-width: 10px;
  height: 8px;
  border-radius: 20px;
  background-color: #4600BE;
  border: 0.5px solid white;
 }

 .position {
  white-space: nowrap;
  margin: 0;
  padding: 2px 0;
  font-weight: normal;
  font-size: 10px;
 }

 .connections {
  display: flex;
  min-height: 15px;
 }

 .connection {
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: #3CBEAA;
  border: 0.5px solid white;
 }
</style>