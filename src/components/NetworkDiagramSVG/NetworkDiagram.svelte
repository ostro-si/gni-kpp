<script>
	// Node-link diagram in layercake.graphics 
	// as seen on:
	// https://jandot.github.io/posts/nodelink-in-layercake/
	// https://vis.social/@jandot
	import { LayerCake, Svg } from 'layercake';
  import NodeLink from './NodeLink.svelte';


 export let people;
 export let connections;
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100vh;
	}
</style>

<div class="chart-container">
    <LayerCake
        data={{ nodes: people, links: connections }}
    >
        <Svg>
            <NodeLink/>
        </Svg>
    </LayerCake>
</div>