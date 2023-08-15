<script>
// import NetworkDiagram from '../../components/NetworkDiagram/NetworkDiagram.svelte'
// import NetworkDiagram from '../../components/NetworkDiagramCanvas/NetworkDiagram.svelte'
import NetworkDiagram from '../../components/NetworkDiagramSVG/NetworkDiagram.svelte'
import people from '$lib/data/people.json';
import connections from '$lib/data/links.json';
import { base } from '$app/paths';


// console.log(people)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="GNI KPP" />
</svelte:head>

<NetworkDiagram {people} {connections} />
<!-- <a href={`${base}/people/1`}>test</a>
<a href={`${base}/people/2`}>test</a>

<a href={`${base}/people/3`}>test</a> -->

<!-- {#each people as person}
	<a href={`${base}/people/${person.id}`}>{person.name}</a>
{/each} -->

<style>
	
</style>
