<script>
import { getContext } from 'svelte';

 import TimelineItem from './TimelineItem.svelte';
 import { arrayUniqueById, getColor } from '../../utils';
 
 export let positions;
 export let hovered;
 export let refX;

//  $: console.log(positions)

 const { data, xGet, width, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let labelWidth;
 let label;
//  $: height = hovered ? 20 : 10;
$: height = 20

 let uniqueConnections;

$: {
  const uniquePositionLabels = [...new Set(positions.map(({ position_si }) => position_si ))];
  label = uniquePositionLabels.join(' / ')

  let allConnections = []
  positions.forEach(({ connections }) => allConnections = [...allConnections, ...connections])

  uniqueConnections = allConnections?.length ? arrayUniqueById(allConnections, 'person_id') : null
  // console.log(hasConnections)
  // height = uniqueConnections?.length > 0 ? 45 : 20
} 
$: startX = $xScale(positions[0].start_year)
// $: leftShift = (labelWidth && ((startX - refX) + labelWidth) > $width) ? $width - ((startX - refX) + labelWidth) : 0
$: leftShift = labelWidth && ((startX + labelWidth) > $width) ? $width - (startX + labelWidth): 0

// $: console.log(labelWidth, startX, refX, leftShift)

// $: 



</script>
  <div class="label"
    bind:clientWidth={labelWidth} 
    style:left={`${startX - refX + leftShift}px`}
  >
    <span>{label}</span>
  </div>
  <div class="bars" style:min-height={`${height}px`}>
    {#each positions as item}
      <TimelineItem {item} {hovered} {refX} {positions} />
    {/each}
  </div>
  {#if uniqueConnections}
    <div class="connections-outer-container" style:left={`${startX - refX}px`}>
      <div class="connections">
        {#each uniqueConnections as connection (connection.person_id)}
          <div class="connection" style={`background-image: url('${connection.image_link}'); border-color: ${getColor(connection.position)}`}></div>
        {/each}
        <!-- {#if uniqueConnections.length > numConnectionsToShow}
          <div class="connection-more">{`+${uniqueConnections.length - numConnectionsToShow}`}</div>
        {/if} -->
      </div>
  </div>
  {/if}
 
<style lang='scss'>
  .label {
    white-space: nowrap;
    margin: 0;
    padding: 2px 0;
    font-weight: normal;
    font-size: 10px;
    position: relative;
    display: table-row-group;
  }

  .bars {
    position: relative;
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
  background-color: #3CBEAA;
  border: 2px solid;
  margin-right: 1px;
  background-size: cover;
  
 }
</style>