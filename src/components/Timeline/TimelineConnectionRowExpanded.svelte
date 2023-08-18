<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import { min } from 'd3-array'
	import TimelineConnectionExpanded from './TimelineConnectionExpanded.svelte';

 export let id;
 export let items;
 export let i;
 export let refX

 const { xScale, xRange } = getContext('LayerCake');


 const minStartVal = min(items, i => i.start_year);

 $: console.log(minStartVal)
 
 $: startX = minStartVal ? $xScale(minStartVal) : $xRange[0]
 // $: endX = end_year ? $xScale(Math.min(end_year, new Date().getFullYear())) : 0

 // console.log(person_id, refX)
</script>

<LocalizedLink component={"a"} href={`/people/${id}`}>
 <div
  class="item"
  style:top={`${i*12 + 2}px`}
  style:left={`${startX - refX}px`}
 >
  {#each items as item}
   <TimelineConnectionExpanded {...item} />
  {/each}
  <div class="item__label">{items[0].person_name}</div>
 </div>
</LocalizedLink>


<style lang="scss">
 .item {
  position: absolute;
  cursor: pointer;

  &:hover {
   opacity: 0.7;
  }

  &__bar {
   position: absolute;
   left: 0;
   top: 0;
   width: 10px;
   height: 10px;
   content: "";  
   background-color: #3CBEAA;
   border-radius: 20px;
  }

  &__label {
   position: absolute;
   right: 5px;
   top: 0;
   // text-align: right;
   color: #3CBEAA;
   // color: white;
   font-size: 9px;
   white-space: nowrap;
  }
 }
</style>