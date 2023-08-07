<script>
 import TimelineRow from "./TimelineRow.svelte";
 import { groupBy } from "../../utils";
 export let items;

 console.log(items)

 const byInstitution = groupBy(items, 'institution')

</script>

<div>
 {#each Object.entries(byInstitution) as [institution, positions]}
  <TimelineRow {institution} {positions} />
 {/each}
</div>

<style>

</style>