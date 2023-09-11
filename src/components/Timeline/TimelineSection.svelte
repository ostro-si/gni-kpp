<script>
 import { LayerCake, Svg, Html } from 'layercake';
 import TimelineRow from "./TimelineRow.svelte";
 import AxisX from '../AxisX.svelte';
 import { groupBy } from "../../utils";

 export let items;
 export let rowGroupingVar;
 export let data;
 export let getItemLink;
 export let getItemLabel;

//  console.log(items)

 const byRow = groupBy(items, rowGroupingVar)

 let w;
 let h;
//  $: console.log(w, h)

</script>

<div class='chart-container' style:height={`${h}px`}>
 <LayerCake
   {data}
   x="year"
   xDomain={[null, new Date().getFullYear()]}
   let:width
   >
   <Svg>
     <AxisX />
   </Svg>
   <Html>
    <div class="data-container" bind:clientHeight={h}>
     {#each Object.entries(byRow) as [title, positions]}
      <TimelineRow {title} {positions} {getItemLink} {getItemLabel} />
     {/each}
    </div>
   </Html>
 </LayerCake> 
</div>

<style>
.chart-container {
  width: 100%;
  margin: 5px 0;
  height: 200px;
 }

 .data-container {
  padding-top: 5px;
  margin-top: 5px;
  /* border-top: 1px solid #E6E6EB; */
 }
</style>