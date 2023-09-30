<script>
 import { getContext } from "svelte";
 import { LayerCake, Svg } from "layercake";
 import Bar from "./Bar.svelte";

 export let selectedIndex;
 export let xOffset;
 export let color;

 const { data, xGet, width, zGet, yGet, xScale, yDomain, yRange, rGet, xDomain, xRange } = getContext('LayerCake');

 $: console.log($data, $yDomain, $yRange)
</script>

{#each $data as bar, i (bar.id)}
 <Bar index={i} {...bar} selected={selectedIndex === i} {xOffset} {color} />
{/each}

<style>

 
 
</style>