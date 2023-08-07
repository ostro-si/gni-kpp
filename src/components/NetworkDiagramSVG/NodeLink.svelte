<script>
 import { getContext } from 'svelte';
 import {
   forceSimulation,
   forceLink,
   forceManyBody,
   forceCollide,
   forceCenter,
 } from 'd3-force';
 import { drag } from 'd3-drag'
 import { select } from 'd3-selection';
 import Point from './Point.svelte';

 const { data, width, height } = getContext('LayerCake');

 export let manyBodyStrength = -50;

 const initialNodes = $data.nodes.map((d) => ({ ...d }))
 const initialLinks = $data.links.map((d) => ({ ...d }))

 // const simulation = forceSimulation(initialNodes)
 const dragger = (el, node) => {
   const d = drag()
     .on('drag', ({x, y}) => {
       node.fx = x;
       node.fy = y;
     })
     .on('end', () => {
       node.fx = null;
       node.fy = null;
     });
   select(el).call(d);
 }

 let nodes = []
 let links = []

 $: simulation = forceSimulation(initialNodes)
    // .force('x', forceX().x(d => $xGet(d)).strength(xStrength))
    // .force('y', forceY().y($height).strength(yStrength))
    // .force("charge", forceManyBody())
    .force("center", forceCenter($width / 2, $height / 2))
    .force('charge', forceManyBody().strength(-1))

    .force('collide', forceCollide().radius((d => isNaN(d.connectionCount) ? 2 : d.connectionCount/20)))
    // .force('link', forceLink(links).id((d) => d.id))
    // .force('boundary', () => {
    //   nodes.forEach((node) => {
    //     const radius = 5;
    //     const y = Math.max(radius, Math.min(Math.max(...$yRange) - radius * 2, node.y));
    //     node.y = y;

    //     const x = Math.min($width, node.x);
    //     node.x = x
    //   });
    // })
    // .on("tick", () => {
    //   // nodes = simulation.nodes()
    //   links = initialLinks
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

 // $: console.log(links)

 // let nodes = [];
 // let links = [];

 // simulation.on("tick", () => {
 //   nodes = simulation.nodes()
 //   links = initialLinks
 // })

 // $: {
 //  console.log($width, $height)
 //   simulation
 //     .force("link", forceLink(links).id(d => d.id))
 //     // .force('collide', forceCollide().radius((d => isNaN(d.connectionCount) ? 2 : d.connectionCount/20)).strength(0.2))

 //     .force('charge', forceManyBody().strength(manyBodyStrength))
 //     .force('center', forceCenter($width / 2, $height / 2).strength(1))
 //     .alpha(0.8)
 //     .restart()
 // }

 let hovered;

 const onMouseover = id => {
  hovered = id;
 }

 const onMouseout = () => {
  hovered = null;
 }

 $: console.log('hovered', hovered, links)

 $: {
  // if (hovered) {
   links = initialLinks
    .filter(({ source, target }) => source === hovered || target === hovered)
    .map(({ source, target }) => ({
     sourceNode: simulation.nodes().find(d => d.id === source),
     targetNode: simulation.nodes().find(d => d.id === target)
    }))
  }
 // }
</script>

{#each links as link}
 {#if link.sourceNode && link.targetNode}
  <line
    class='link'
    x1='{link.sourceNode.x}'
    x2='{link.targetNode.x}'
    y1='{link.sourceNode.y}'
    y2='{link.targetNode.y}'
    stroke="black"/>
  {/if}
{/each}
{#each simulation.nodes() as point}
 <Point
   class='node'
   r={isNaN(point.connectionCount) ? 5 : point.connectionCount/20}
   x='{point.x}'
   y='{point.y}'
   id={point.id}
   {onMouseover}
   {onMouseout}
 />
{/each}