<script>
 import { getContext } from 'svelte';
 import LocalizedLink from '../LocalizedLink.svelte';
 import Portal from "svelte-portal";


 export let connections;
 export let refX;

 // const { xScale, xRange } = getContext('LayerCake');


 // $: startX = start_year ? $xScale(start_year) : $xRange[0]
 // $: endX = end_year ? $xScale(Math.min(end_year, new Date().getFullYear())) : 0

 console.log('portal!')
</script>


<Portal>
 <div class="toast">Entity successfully updated!</div>
</Portal>


<style lang="scss">
 
</style>