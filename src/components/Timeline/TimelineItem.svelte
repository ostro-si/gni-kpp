<script>
 import { getContext } from 'svelte';
 import { fade } from 'svelte/transition';
 import { arrayUniqueById, getColor } from '../../utils'
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

//  $: numConnectionsToShow = w ? Math.floor(w / connectionWidth) -1 : 0

//  const map = new Map(item.c.map(pos => [pos.id, pos]));
// const uniques = [...map.values()];
// 

//  $: uniqueConnections = item.connections?.length ? arrayUniqueById(item.connections, 'person_id') : null
// $: uni

//  $: console.log(uniqueConnections, item.connections)
</script>

<div class="item" style:left={`${startX - refX}px`} bind:clientWidth={w}>
  <!-- <h6 class="position">{item.position_si}</h6> -->
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
  
  <!-- {#if uniqueConnections}
    <div class="connections-outer-container">
      <div class="connections">
        {#each uniqueConnections.slice(0, numConnectionsToShow) as connection (connection.person_id)}
          <div class="connection" style={`background-image: url('${connection.image_link}'); border-color: ${getColor(connection.position)}`}></div>
        {/each}
        {#if uniqueConnections.length > numConnectionsToShow}
          <div class="connection-more">{`+${uniqueConnections.length - numConnectionsToShow}`}</div>
        {/if}
      </div>
  </div>
  {/if} -->
</div>

<style lang="scss">

 .item {
  // display: inline-flex;
  position: absolute;
  top: 0;
 }

 .bar {
  content: "";
  width: 100%;
  min-width: 20px;
  height: 10px;
  border-radius: 20px;
  background-color: $black;
  border: 0.5px solid white;
 }

 .years {
  color: $black;
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
  // padding: 2px 0;
  font-weight: normal;
  font-size: 10px;
  // background: white;
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
  height: 20px;
  width: 20px;
  min-width: 20px;
  border-radius: 50px;
  // background-color: #3CBEAA;
  border: 2px solid;
  margin-right: 1px;
  background-size: cover;
  
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
  // z-index: 100;

  &__item {
    /* position: absolute; */
  }
}
</style>