<script>
 import { arrayUniqueById, groupBy } from "../utils";
	import PersonLabel from "./PersonLabel.svelte";
 export let affiliations;

 $: byType = groupBy(affiliations, 'affiliation_type')

</script>

<div class="institution-breakdown">
 {#each Object.entries(byType) as [type, items]}
  {#if !!type}
   <div class="container">
    <div class="left">
     {type}
    </div>
    <div class="right">
     {#each arrayUniqueById(items, 'person_id') as person (person.id)}
      <PersonLabel {...person} id={person.person_id} position={person.curr_position} small clickable />
     {/each}
    </div>
   </div>
  {/if}
 {/each}
</div>

<style lang="scss">
 .institution-breakdown {
  margin: 20px;
 }
 .container {
  display: table;
  border-bottom: 1px solid #E6E6EB;
  max-width: $max-width;
  margin: auto;
  width: calc(100% - 40px);
  padding: 20px;

  // &:first-child {
  //  border-top: 1px solid #E6E6EB;

  // }
 }

 .left, .right {
  display: table-cell;
  vertical-align: top;

 }

 .left {
  text-transform: capitalize;
 }

 .right {
  display: flex;
  gap: 4px;
 }
</style>