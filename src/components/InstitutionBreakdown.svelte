<script>
 import { arrayUniqueById, groupBy } from "../utils";
	import PersonLabel from "./PersonLabel.svelte";
 import { getInitials } from "../utils";

 export let affiliations;

 $: byType = groupBy(affiliations, 'affiliation_type')

</script>

<div class="institution-breakdown mobile-hide">
 <div class="outer-container">
  {#each Object.entries(byType) as [type, items]}
   {#if !!type}
    <div class="container">
     <div class="left">
      {type}
     </div>
     <div class="right">
      {#each arrayUniqueById(items, 'person_id') as person (person.id)}
       <PersonLabel 
        id={person.person_id}
        image_link={person.image_link}
        imagePlaceholder={!person.image_link ? getInitials(person.person_name) : null}
        position={person.curr_position}
        small
        clickable
       />
      {/each}
     </div>
    </div>
   {/if}
  {/each}
 </div>
</div>

<style lang="scss">
 .institution-breakdown {
  margin: 20px;
 }

 .outer-container {
  display: table;
  max-width: $max-width;
  margin: auto;
  width: 100%;
  border-collapse: collapse; 
 }

 .container {
  display: table-row;
  border-bottom: 1px solid #E6E6EB;


 }

 .left, .right {
  display: table-cell;
  vertical-align: top;
  padding: 20px;

 }

 .left {
  text-transform: capitalize;
  width: 25%;
 }

 .right {
  display: flex;
  gap: 4px;
 }
</style>