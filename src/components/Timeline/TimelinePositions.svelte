<script>
 import TimelineItem from './TimelineItem.svelte';
 
 export let positions;
 export let hovered;
 export let refX;

 $: layoutedPositions = positions.map(position => {
  const hasOverlap
 })


 $: console.log(positions)

</script>

{#each positions as item}
  <TimelineItem {item} {hovered} {refX} {positions} />
{/each}
 
<style>
 
</style>