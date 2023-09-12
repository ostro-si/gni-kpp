<script>
 import { getContext, onMount } from 'svelte';
 import { slide, fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
 import LocalizedLink from '../LocalizedLink.svelte';
 import { min, max } from 'd3-array'
	import TimelineConnectionExpanded from './TimelineConnectionExpanded.svelte';
	import PersonLabel from '../PersonLabel.svelte';

 export let id;
 export let items;
 export let i;
 export let refX
 export let xTransform
 export let xEnd;

 const { xScale, xRange } = getContext('LayerCake');

 let labelWidth;
 let loaded


 const minStartVal = min(items, i => i.start_year);
 const maxEndVal = max(items, i => i.end_year);
 
 $: startX = minStartVal ? $xScale(minStartVal) : $xRange[0]
 $: endX = maxEndVal ? $xScale(Math.min(maxEndVal, new Date().getFullYear())) : 0

 $: personDetails = items[0] || {};


 $: xTransform = startX - refX - labelWidth;
 $: xEnd = startX + (endX - startX);
 // console.log(person_id, refX)

 // onMount(() => {
  // onMount(() => loaded = true);

 //  console.log('mounted', id)
 // })
</script>

<!-- {#if loaded === true} -->
 <LocalizedLink component={"a"} href={`/people/${id}`}>
  <div
   class="item"
   style:transform={`translateX(${startX - refX - labelWidth - 4}px)`}
  >
   <div class="label" bind:clientWidth={labelWidth}>
    <PersonLabel name={personDetails.person_name} image_link={personDetails.image_link} position={personDetails.position} small />
    <!-- {items[0].start_year}
    {items[0].end_year} -->
   </div>
   <div class="bars">
    {#each items as item}
     <TimelineConnectionExpanded {...item} />
    {/each}
   </div>
  </div>
 </LocalizedLink>
<!-- {/if} -->


<style lang="scss">
 .item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;

  &:hover {
   opacity: 0.7;
  }

  &__bar {
   // position: absolute;
   left: 0;
   top: 0;
   width: 10px;
   height: 10px;
   content: "";  
   background-color: #3CBEAA;
   border-radius: 20px;
  }

  &__label {
   // position: absolute;
   right: 5px;
   top: 0;
   // text-align: right;
   color: #3CBEAA;
   // color: white;
   font-size: 9px;
   white-space: nowrap;
   background: white;
   padding: 0 1px;
  }
 }
</style>