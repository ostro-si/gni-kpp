<script>
import { getContext } from 'svelte';

 import TimelineItem from './TimelineItem.svelte';
 import TimelineConnectionsExpanded from './TimelineConnectionsContainer.svelte';
 import { arrayUniqueById, getColor } from '../../utils';
 
 export let positions;
 export let hovered;
 export let refX;

//  $: console.log(positions)

 const { data, xGet, width, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let labelWidth;
 let label;
 let height = 20;
//  $: height = hovered ? 20 : 10;

//  $: tT
// $: height = 10

// let uniqueConnections;

$: {
  const uniquePositionLabels = [...new Set(positions.map(({ position_si }) => position_si ))];
  label = uniquePositionLabels.join(' / ')

  // let allConnections = []
  // positions.forEach(({ connections }) => {
  //   if (connections?.length) {
  //     allConnections = [...allConnections, ...connections]
  //   }
  // })

  // uniqueConnections = allConnections?.length ? arrayUniqueById(allConnections, 'person_id') : null
  
  // console.log(hasConnections)
  // height = uniqueConnections?.length > 0 ? 10 : 20
} 
$: startX = $xScale(positions[0].start_year)
// $: leftShift = (labelWidth && ((startX - refX) + labelWidth) > $width) ? $width - ((startX - refX) + labelWidth) : 0
$: labelLeftShift = labelWidth && ((startX + labelWidth) > $width) ? $width - (startX + labelWidth): 0
// $: connectionsLeftShift = connectionsWidth && ((startX + connectionsWidth) > $width) ? $width - (startX + connectionsWidth): 0

// $: console.log(connectionsWidth, startX, refX, connectionsLeftShift)

// $: 

// $: console.log(positions)

</script>
  <div class="label"
    bind:clientWidth={labelWidth} 
    style:left={`${startX - refX + labelLeftShift}px`}
  >
    <span>{label}</span>
  </div>
  <div class="bars" style:min-height={`${height}px`}>
    {#each positions as item, i}
      <TimelineItem {item} {hovered} {refX} {positions} index={i} />
    {/each}
  </div>
  
 
<style lang='scss'>
  .label {
    white-space: nowrap;
    margin: 0;
    padding: 2px 0;
    font-weight: normal;
    font-size: 10px;
    position: relative;
    display: table-row-group;
    color: $light-grey;
  }

  .bars {
    position: relative;
    top: 1px;
    transition: min-height 200ms ease-in;
  }

  .connections-outer-container {
    position: relative;
    display: inline-block;
  }

 .connections {
  display: flex;
  flex-wrap: nowrap;
  min-height: 26px;
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
</style>