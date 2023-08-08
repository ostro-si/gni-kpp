<script>
	// Node-link diagram in layercake.graphics 
	// as seen on:
	// https://jandot.github.io/posts/nodelink-in-layercake/
	// https://vis.social/@jandot
	import { LayerCake, Svg } from 'layercake';
import NodeLink from './NodeLink.svelte';
import { scaleOrdinal, scaleBand } from 'd3-scale';



 export let people;
 export let connections;

	const seriesColors = ['#4600BE', '#3CBEAA', '#28A0D2', '#b2c1ff'];
</script>

<style>
	.chart-container {
		width: 100%;
		height: calc(100vh - 60px);
	}
</style>

<div class="chart-container">
	<LayerCake
			data={{ nodes: people, links: connections }}
			flatData={people}
			r="connectionCount"
			rRange={[1, 20]}
			z="position"
			zScale={scaleOrdinal()}
   zRange={seriesColors}
	>
		<Svg>
			<NodeLink/>
		</Svg>
	</LayerCake>
</div>