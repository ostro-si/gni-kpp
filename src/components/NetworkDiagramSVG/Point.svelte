
 <script>
	import { fade } from "svelte/transition";
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { t, setLocale, locale, setRoute } from '$lib/translations';


	export let id;
 export let x;
 export let y;
 export let r;
	export let hovered;
	export let stroke;
	export let onMouseover;
	export let onMouseout;

 const strokeWidth = 2;
 // const stroke = '#fff';
 const tweenParameters = {
			duration: 400,
			easing: cubicOut,
	};

	const tX = tweened(x, tweenParameters);
 const tY = tweened(y, tweenParameters);
	const tR = tweened(r, tweenParameters);

	// let hovered = false;

 $: $tX = x;
 $: $tY = y;
	$: $tR = hovered ? r : 3;
</script>

<circle
	class="Point"
 transition:fade
 cx={$tX}
 cy={$tY}
 r={$tR}
	fill={hovered ? `url(#${id})` : "#c3c3c3"}
 stroke={hovered ? stroke : "none"}
 stroke-width='{strokeWidth}'
	on:mouseover={() => {onMouseover(id); hovered = true}}
	on:mouseout={() => {onMouseout(); hovered = false}}
	on:click={() => goto(`${base}/${$locale}/people/${id}`)}
/>

<style lang="scss">
	.Point {
		cursor: pointer;
	}


</style>