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

 const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

 console.log($zDomain)

 export let manyBodyStrength = -1.5;

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

 const simulation = forceSimulation(initialNodes)

 let nodes = [];
 let links = []

 simulation.on("tick", () => {
   nodes = simulation.nodes()
  //  links = initialLinks
 })

 $: {
  console.log('running simulation')
  simulation
    // .force("link", forceLink(links).id(d => d.id).strength(0.2))
    .force('collide', forceCollide().radius(d => $rGet(d)).strength(0.2))
    .force('charge', forceManyBody().strength(manyBodyStrength))
    .force('center', forceCenter($width / 2, $height / 2).strength(1))
  //  .force("boundary", () => {
  //     nodes.forEach((node) => {
  //       const radius = 5;
  //       const y = Math.max(radius, Math.min(Math.max(...$yRange) - offsetY - radius * 2, node.y));
  //       node.y = y;

  //       const x = Math.min($width - offsetXBoundary, node.x);
  //       node.x = x
  //     });
  //   })
    .alpha(0.8)
    .restart()
}

 let hovered;

 const onMouseover = id => {
  hovered = id;
 }

 const onMouseout = () => {
  hovered = null;
 }

 $: console.log(nodes)

 $: {
  // console.log('hovered', hovered, links, initialLinks)  // if (hovered) {
   links = initialLinks
    .filter(({ source, target }) => source === hovered || target === hovered)
    .map(({ source, target }) => ({
     sourceNode: simulation.nodes().find(d => d.id === source),
     targetNode: simulation.nodes().find(d => d.id === target)
    }))

  // console.log(links)
  }
  // simulation
  //   .force("link", forceLink(links).id(d => d.id))
 // }

 $: console.log(links.find(({source, target}) => target === '5' || source === '5'))
</script>

{#each links as link}
 {#if link.sourceNode && link.targetNode}
  <line
    class='link'
    x1='{link.sourceNode.x}'
    x2='{link.targetNode.x}'
    y1='{link.sourceNode.y}'
    y2='{link.targetNode.y}'
    stroke="#c3c3c3"/>
  {/if}
{/each}
{#each nodes as point (point.id)}
 <Point
   class='node'
   r={$rGet(point)}
   fill={!hovered || !!links.find(({sourceNode, targetNode}) => targetNode.id === point.id || sourceNode.id === point.id) ? $zGet(point) : '#c3c3c3'}
   x='{point.x}'
   y='{point.y}'
   id={point.id}
   {onMouseover}
   {onMouseout}
 />
{/each}