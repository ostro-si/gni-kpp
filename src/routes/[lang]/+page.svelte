<script>
// import NetworkDiagram from '../../components/NetworkDiagram/NetworkDiagram.svelte'
// import NetworkDiagram from '../../components/NetworkDiagramCanvas/NetworkDiagram.svelte'
import NetworkDiagram from '../../components/NetworkDiagramSVG/NetworkDiagram.svelte'
import people from '$lib/data/people.json';
import connections from '$lib/data/links.json';

// console.log(people)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="GNI KPP" />
</svelte:head>

<NetworkDiagram {people} {connections} />

<style>
	
</style>
