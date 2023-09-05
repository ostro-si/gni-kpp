<script>
 import { getContext } from 'svelte';
 import { fade } from 'svelte/transition';
 import TimelineConnectionExpanded from './TimelineConnectionExpanded.svelte';

 export let item;
 export let refX;
 export let hovered;
 export let yOffset;

 let w;

 const connectionWidth = 12;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 $: startX = item.start_year ? $xScale(item.start_year) : $xRange[0]
 $: endX = item.end_year ? $xScale(Math.min(item.end_year, new Date().getFullYear())) : 0

 $: numConnectionsToShow = w ? Math.floor(w / connectionWidth) -1 : 0

 $: uniqueConnections = item.connections ? [...new Set(item.connections.map(c => c.person_id))] : []

//  $: console.log(item)
</script>

<div class="item" style:left={`${startX - refX}px`} style:top={`${yOffset * 30}px`} bind:clientWidth={w}>
  <h6 class="position">{item.position_si}</h6>
  <div class="bar-container" style:width={`${endX - startX}px`}>
    <div class="bar"></div>
    <div class="years" class:hidden={!hovered} in:fade>
      {#if item.start_year}
        <div>{item.start_year}</div>
      {/if}
      {#if item.end_year && item.end_year !== item.start_year}
        <div>{item.end_year}</div>
      {/if}
    </div>
  </div>
  
  {#if uniqueConnections && !hovered}
    <div class="connections-outer-container">
      <div class="connections">
        {#each uniqueConnections.slice(0, numConnectionsToShow) as connection}
          <div class="connection"></div>
        {/each}
        {#if uniqueConnections.length > numConnectionsToShow}
          <div class="connection-more">{`+${uniqueConnections.length - numConnectionsToShow}`}</div>
        {/if}
      </div>
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
  min-width: 20px;
  height: 10px;
  border-radius: 20px;
  background-color: #4600BE;
  border: 0.5px solid white;
 }

 .years {
  color: #4600BE;
  font-size: 8px;
  display: flex;
  justify-content: space-between;

  &.hidden {
    display: none;
  }
 }

 .position {
  white-space: nowrap;
  margin: 0;
  padding: 2px 0;
  font-weight: normal;
  font-size: 10px;
  background: white;
 }

 .connections-outer-container {
  position: relative;
 }

 .connections {
  display: flex;
  flex-wrap: nowrap;
  min-height: 15px;
  padding: 3px 0;
  overflow: hidden;

 }

 .connection {
  content: "";
  height: 10px;
  width: 10px;
  min-width: 10px;
  border-radius: 50px;
  background-color: #3CBEAA;
  border: 0.5px solid white;
  margin-right: 1px;

  
 }
 .connection-more {
  font-size: 9px;
  color: #3CBEAA;
  font-weight: 500;
  /* padding: 1px; */
  /* border: 1px solid #3CBEAA;
  border-radius: 50px; */
}

.connections-expanded {
  /* position: absolute; */
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;

  &__item {
    /* position: absolute; */
  }
}
</style>