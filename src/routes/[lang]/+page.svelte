<script>
import NetworkDiagram from '../../components/NetworkDiagram/NetworkDiagram.svelte'

import people from '$lib/data/persons.json';

console.log(people)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="GNI KPP" />
</svelte:head>

<NetworkDiagram data={people} />

<style>
	
</style>
