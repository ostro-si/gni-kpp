
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
	export let allActive;
	export let hovered;
	export let selected;
	export let stroke;
	export let onMouseover;
	export let onMouseout;
	export let onClick;
	export let label;

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
	$: $tR = allActive || hovered || selected ? r : 3;
</script>

<circle
	class="Point"
 transition:fade
 cx={$tX}
 cy={$tY}
 r={$tR}
	fill={allActive || hovered ? `url(#${id})` : "#c3c3c3"}
 stroke={selected ? "#ffb700" : (allActive || hovered ? stroke : "none")}
 stroke-width='{strokeWidth}'
	on:mouseover={() => {onMouseover(id)}}
	on:mouseout={() => {onMouseout()}}
	on:click={() => {onClick(id)}}
/>


{#if hovered || selected}
	<text
		in:fade
		class="label"
		x={$tX}
		y={$tY + $tR + 12}
		fill={selected ? "#ffb700" : stroke}
	>
			{label}
	</text>
{/if}

{#if selected}
<text
		class="label link"
		x={$tX}
		y={$tY + $tR + 30}
		fill={"#ffb700"}
		on:click={() => goto(`${base}/${$locale}/people/${id}`)}
	>
		View CV
	</text>
{/if}

<style lang="scss">
	.Point {
		cursor: pointer;
	}

	.label {
		text-anchor: middle;
		font-size: 8px;
		font-weight: 600;
		background: white;
	}

	.link {
		cursor: pointer;
		transition: all 100ms ease-in-out;
		

		&:hover {
			opacity: 0.6
		}
	}


</style>