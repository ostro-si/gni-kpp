<script>
 import TimelineItem from "./TimelineItem.svelte";
 export let title;
 export let items;

 console.log(items)



</script>

<div>
 <h5>{title}</h5>
 {#each items as item}
  <TimelineItem {item} />
 {/each}
</div>

<style>

</style>