<script>
 import { getContext } from 'svelte';
 import TimelinePositions from './TimelinePositions.svelte';
 import TimelineConnectionsContainer from './TimelineConnectionsContainer.svelte';
 import TimelineRowTitle from './TimelineRowTitle.svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import PersonLabel from '../PersonLabel.svelte';
 import { min } from 'd3-array'
 import { groupBy, getColor } from '../../utils';

 export let title;
 export let positions;
 export let getItemLink;
 export let getItemLabel = () => null;
 export let i;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

//  let hovered = i === 2 && title === "Univerza v Ljubljani, Fakulteta za družbene vede";
 let hovered = false;
 let hoveredConnection;
 let connections;
//  let connectionsWidth;
//  let titleLeftShift;


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
      const lastElementPlaced = lastRow[lastRow.length - 1];
      if (lastElementPlaced.start_year !== lastElementPlaced.end_year && position.start_year >= lastElementPlaced.end_year) {
        lastRow.push(position)
        return;
      }
    }
  positionRows.push([position]);
 }

 $: positions, calculatePositionOffsets()

//  $: connectionsLeftShift = connectionsWidth && ((startX + connectionsWidth) > $width) ? $width - (startX + connectionsWidth): 0


//  $: console.log(connectionsWidth, connectionsLeftShift)

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->


<div class="outer-container"
  on:mouseover={() => hovered = true}
  on:focus={() => hovered = true}
  on:mouseleave={() => hovered = false}
  style:z-index={hovered ? 10 : 1}
>
  <div class="left">
    <TimelineRowTitle {title} href={getItemLink(positions[0])} component={getItemLabel(positions[0])} />
    {#if Object.keys(connections).length}
      <div class="connections-outer-container">
        <div class="connections">
          {#each Object.entries(connections) as [id, items], i (id)}
            <div
              on:mouseover={() => hoveredConnection = id}
              on:focus={() => hoveredConnection = id}
              on:mouseleave={() => hoveredConnection = undefined}
            >
              <PersonLabel
                {id}
                image_link={items[0].image_link}
                position={items[0].position}
                small
                clickable
                size={hoveredConnection === id ? 40 : 20}
              />
            </div>
            <!-- <div 
              class="connection"
              style={`background-color: ${getColor(items[0].position)}; background-image: url('${items[0].image_link}'); border-color: ${getColor(items[0].position)};`}
            /> -->
          {/each}
        </div>
      </div>
    {/if}
  </div>
  <div 
    class="right"
    style:transform={`translate(${startX}px, 0)`}
  >
    <div class="positions">
      {#each positionRows as positions, i}
        <TimelinePositions {positions} {hovered} refX={startX} />
      {/each}
    </div>
    
    <!-- {#if Object.keys(connections).length}
      <div class="expanded-placeholder" class:expanded={hovered}></div>
    {/if} -->
    {#if hoveredConnection}
      <div id="expanded-anchor">
        <TimelineConnectionsContainer refX={startX} id={hoveredConnection} connection={connections[hoveredConnection]} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .outer-container {
    border: 0.5px solid #E6E6EB;
    border-left: none;
    border-right: none;
    position: relative;
    display: table;
    width: calc(100% + #{$timeline-title-width});
    transform: translateX(-$timeline-title-width);
  }

  .left, .right {
    display: table-cell;
    vertical-align: top;
  }

  .left {
    // position: absolute;
    // transform: translateX(-$timeline-title-width);
    width: $timeline-title-width;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 7px;
    border-right: 0.5px solid #E6E6EB;
  }

  .right {
    padding: 7px 0;
  }

//  .container {
//   overflow: visible;
//   padding: 5px 0;
//  }
 .bar {
  content: "";
  width: 100%;
  min-width: 10px;
  height: 5px;
  border-radius: 20px;
  background-color: blue;
 }

 

 .positions {
  position: relative;
  /* min-height: 35px; */
  /* padding: 2px 0; */
 }

 :global(a) {
  color: #000;
 }

 .connections-outer-container {
  // overflow-y: hidden;
  // overflow-x: visible;
  transition: max-height 200ms ease-in;
  max-height: 1000px;
  height: 25px;
  width: 100%;

  &.collapsed {
    max-height: 0;
  }
    // position: relative;
    // display: inline-block;
  }

  .expanded-placeholder {
    height: 1000px;
    max-height: 0;
    transition: max-height 200ms ease-in;

    &.expanded {
      max-height: 20px;
    }
  }

 .connections-expanded {
  position: absolute;
  left: 0;
  /* z-index: 1000; */
  /* background: white; */
  min-width: 100%;
  padding: 5px;
  /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
 }

 .connections {
  display: inline-flex;
  flex-wrap: nowrap;
  min-height: 26px;
  padding: 3px 0;
  overflow: hidden;
  gap: 2px;
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
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
 }
</style>