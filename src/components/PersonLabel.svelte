<script>
	import { getColor } from "../utils";
 import Label from "./Label.svelte";

 export let image_link;
 export let position;
 export let name;
	export let small

 
</script>


<Label
 imageLink={image_link}
 border={getColor(position)}
 title={name}
	{small}
/>

