<script>
import { getContext } from 'svelte';

 import TimelineItem from './TimelineItem.svelte';
 
 export let positions;
 export let hovered;
 export let refX;

//  $: console.log(positions)

 const { data, xGet, width, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let labelWidth;
 let label;
 let height = 20;

$: {
  const uniquePositionLabels = [...new Set(positions.map(({ position_si }) => position_si ))];
  label = uniquePositionLabels.join(' / ')

  const hasConnections = positions.find(({ connections }) => connections && connections.length !== 0)
  // console.log(hasConnections)
  height = hasConnections ? 45 : 20
} 
$: startX = $xScale(positions[0].start_year)
// $: leftShift = (labelWidth && ((startX - refX) + labelWidth) > $width) ? $width - ((startX - refX) + labelWidth) : 0
$: leftShift = labelWidth && ((startX + labelWidth) > $width) ? $width - (startX + labelWidth): 0

// $: console.log(labelWidth, startX, refX, leftShift)



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
 
<style>
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
</style>