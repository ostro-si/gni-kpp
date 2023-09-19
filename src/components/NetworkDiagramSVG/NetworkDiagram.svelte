<script>
	// Node-link diagram in layercake.graphics 
	// as seen on:
	// https://jandot.github.io/posts/nodelink-in-layercake/
	// https://vis.social/@jandot

	import { onDestroy } from 'svelte';
	import { LayerCake, Svg } from 'layercake';
import NodeLink from './NodeLink.svelte';
import { scaleOrdinal, scaleBand } from 'd3-scale';
import { selected } from '../../stores'



 export let people;
 export let connections;

	onDestroy(() => {
		$selected = []
	})

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
			rRange={[5, 20]}
			z="position"
			zScale={scaleOrdinal()}
   zRange={seriesColors}
	>
		<Svg>
			<svelte:fragment slot="defs">
				{#each people as { id, image_link }}
					<pattern id={id} x="0" y="0" height = "100%" width = "100%" patternContentUnits = "objectBoundingBox" xmlns="http://www.w3.org/2000/svg">
							<image x="0" y="0" preserveAspectRatio = "none" width = "1" height = "1" xlink:href={image_link}></image>
					</pattern>
				{/each} 
			</svelte:fragment>
			<NodeLink />
		</Svg>
	</LayerCake>
</div>