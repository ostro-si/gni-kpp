<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';

 export let start_year;
 export let end_year;
 export let refX;
 export let person_id

 const { xScale, xRange } = getContext('LayerCake');


 $: startX = start_year ? $xScale(start_year) : $xRange[0]
 $: endX = end_year ? $xScale(Math.min(end_year, new Date().getFullYear())) : 0

 // console.log(person_id, refX)
</script>

<div
 class="item__bar"
 style:width={`${endX - startX}px`}
/>
 


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
   min-width: 10px;
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
   background: white;
  }
 }
</style>