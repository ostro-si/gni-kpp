<!--
  @component
  Generates an SVG Beeswarm chart using a [d3-force simulation](https://github.com/d3/d3-force).
 -->
 <script>
  import { getContext } from 'svelte';
  import { forceSimulation, forceX, forceY, forceCollide, forceCenter, forceManyBody } from 'd3-force';
  import Point from './Point.svelte';

  const { data, xGet, width, height, zGet, xScale, yRange, xRange, rGet } = getContext('LayerCake');

  const nodes = $data.map((d) => ({ ...d }));

  console.log(nodes)

  /** @type {Number} [xStrength=0.95] - The value passed into the `.strength` method on `forceX`. See [the documentation](https://github.com/d3/d3-force#x_strength). */
  export let xStrength = 0.95;

  /** @type {Number} [yStrength=0.075] - The value passed into the `.strength` method on `forceY`. See [the documentation](https://github.com/d3/d3-force#y_strength). */
  export let yStrength = 0.075;

  $: simulation = forceSimulation(nodes)
    // .force('x', forceX().x(d => $xGet(d)).strength(xStrength))
    // .force('y', forceY().y($height).strength(yStrength))
    // .force("charge", forceManyBody())
    .force("center", forceCenter($width / 2, $height / 2))
    .force('collide', forceCollide().radius((d) => 5))
    // .force('boundary', () => {
    //   nodes.forEach((node) => {
    //     const radius = 5;
    //     const y = Math.max(radius, Math.min(Math.max(...$yRange) - radius * 2, node.y));
    //     node.y = y;

    //     const x = Math.min($width, node.x);
    //     node.x = x
    //   });
    // })
    .stop();

  $: {
    for ( let i = 0,
      n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
      i < n;
      ++i ) {
      simulation.tick();
    }
  }
</script>

<g class='bee-group'>
  {#each simulation.nodes() as node}
    <Point
      x='{node.x}'
      y='{node.y}'
      r='{5}'
      id={node.id}
    />
  {/each}
</g>