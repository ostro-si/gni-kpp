<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';

 export let title;
 export let href;
 export let startX;

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let w;

 $: console.log(w, startX, $width, leftShift)
 $: leftShift = (w && startX + w > $width) ? $width - (startX + w) : 0

</script>


<LocalizedLink component={"a"} {href}>
  <h5 class="title" bind:clientWidth={w} style:transform={`translateX(${leftShift}px)`}>{title}</h5>
</LocalizedLink>

<style>
 .title {
  display: inline-flex;
  margin: 0;
  padding: 0;
  /* max-width: 200px; */
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
 }
</style>