<script>
 import TimelineRow from "./TimelineRow.svelte";
 import { groupBy } from "../../utils";
 export let items;
 export let rowGroupingVar;

 export let getItemLink;

 console.log(items)

 const byRow = groupBy(items, rowGroupingVar)

</script>

<div>
 {#each Object.entries(byRow) as [title, positions]}
  <TimelineRow {title} {positions} {getItemLink} />
 {/each}
</div>

<style>

</style>