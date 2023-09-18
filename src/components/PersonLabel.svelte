<script>
	import { getColor } from "../utils";
 import Label from "./Label.svelte";
	import LocalizedLink from "./LocalizedLink.svelte";

 export let image_link;
 export let position;
	export let id;
 export let name;
	export let subheading;
	export let small
	export let clickable
	export let coloredText

 
</script>

{#if clickable}
<LocalizedLink component={"a"} href={`/people/${id}`}>
	<Label
			imageLink={image_link}
			border={getColor(position)}
			title={name}
			{subheading}
			{small}
			{coloredText}
		/>
</LocalizedLink>
{:else}
	<Label
		imageLink={image_link}
		border={getColor(position)}
		title={name}
		{subheading}
		{small}
		{coloredText}
	/>
{/if}

