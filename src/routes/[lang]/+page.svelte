<script>
// import NetworkDiagram from '../../components/NetworkDiagram/NetworkDiagram.svelte'
// import NetworkDiagram from '../../components/NetworkDiagramCanvas/NetworkDiagram.svelte'
import NetworkDiagram from '../../components/NetworkDiagramSVG/NetworkDiagram.svelte'
import Directory from '../../components/Directory/Directory.svelte';
import people from '$lib/data/people.json';
import connections from '$lib/data/links.json';
import { base } from '$app/paths';
import { groupBy } from '../../utils';




// console.log(people)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="GNI KPP" />
</svelte:head>

<!-- <NetworkDiagram {people} {connections} /> -->

<Directory {people} />

<style>
	
</style>
