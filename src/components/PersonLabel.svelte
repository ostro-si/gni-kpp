<script>
	import { getColor } from "../utils";
 import Label from "./Label.svelte";
	import LocalizedLink from "./LocalizedLink.svelte";

 export let image_link;
	export let imagePlaceholder;
 export let position;
	export let id;
 export let name;
	export let subheading;
	export let small
	export let clickable
	export let coloredText
	export let css;
	export let size;
 
</script>

{#if clickable}
<LocalizedLink component={"a"} href={`/people/${id}`} {css}>
	<Label
			imageLink={image_link}
			{imagePlaceholder}
			border={getColor(position)}
			title={name}
			{subheading}
			{small}
			{coloredText}
			{size}
		/>
</LocalizedLink>
{:else}
	<Label
		imageLink={image_link}
		{imagePlaceholder}
		border={getColor(position)}
		title={name}
		{subheading}
		{small}
		{coloredText}
		{size}
	/>
{/if}

