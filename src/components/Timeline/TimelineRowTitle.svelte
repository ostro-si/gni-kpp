<script>

 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import PersonLabel from '../PersonLabel.svelte';

 export let title;
 export let href;
 export let startX;
 export let component;
 export let titleLeftShift

 const { data, xGet, width, height, zGet, xScale, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 let w;
 $: titleLeftShift = (w && startX + w > $width) ? $width - (startX + w) : 0

</script>


<LocalizedLink component={"a"} {href}>
  <div class="container" bind:clientWidth={w} style:transform={`translateX(${titleLeftShift}px)`}>
    {#if component}
      <PersonLabel {...component} small={true} />
    {:else}
      <h5 class="title">{title}</h5>
    {/if}
  </div>
</LocalizedLink>


<style lang="scss">
  .container {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
 .title {
  display: inline-flex;
  margin: 0;
  padding: 0;
  /* max-width: 200px; */
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  color: $grey;
 }

 .image {
  height: 24px;
  width: 24px;
  border-radius: 50px;
  background-size: cover;
  background-color: #c3c3c3;
}
</style>