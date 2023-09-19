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
	import { getColor } from '../../utils';

 const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

//  console.log($zdata.nodes)

 export let manyBodyStrength = -15;

 const initialNodes = $data.nodes.map((d) => ({ ...d }))
 const initialLinks = $data.links.map((d) => ({ ...d }))

 console.log(initialNodes)

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
    .force('collide', forceCollide().radius(d => $rGet(d)).strength(0.2))
    .force('charge', forceManyBody().strength(manyBodyStrength))
    .alpha(0.8)
    .restart()

 let nodes = [];
 let links = []
 let hovered;
 let selected;


 simulation.on("tick", () => {
   nodes = simulation.nodes()
  //  links = initialLinks
 })

 const recenterSimulation = () => {
  console.log('recentering')
  simulation.force('center', forceCenter($width / 2, $height / 2).strength(1))
 }

 const selectItem = () => {

 }

 $: $width, $height, recenterSimulation()
 $: selected, selectItem()

//  $: {
//   console.log('running simulation')
//   simulation
//     // .force("link", forceLink(links).id(d => d.id).strength(0.2))
   
//   //  .force("boundary", () => {
//   //     nodes.forEach((node) => {
//   //       const radius = 5;
//   //       const y = Math.max(radius, Math.min(Math.max(...$yRange) - offsetY - radius * 2, node.y));
//   //       node.y = y;

//   //       const x = Math.min($width - offsetXBoundary, node.x);
//   //       node.x = x
//   //     });
//   //   })
//     .alpha(0.8)
//     .restart()
// }


 const onMouseover = id => {
  hovered = id;
 }

 const onMouseout = () => {
  hovered = null;
 }

 const onClick = id => {
  selected = id;
 }

 $: console.log(links)

 $: {
  // console.log('hovered', hovered, links, initialLinks)  // if (hovered) {
   links = initialLinks
    .filter(({ source, target }) => source === hovered || target === hovered)
    .map(({ source, target }, i) => ({
      id: i,
      sourceNode: simulation.nodes().find(d => d.id === source),
      targetNode: simulation.nodes().find(d => d.id === target)
    }))

  // console.log(links)
  }
  // simulation
  //   .force("link", forceLink(links).id(d => d.id))
 // }

//  $: console.log(links.find(({source, target}) => target === '5' || source === '5'))
</script>

{#each links as link}
 {#if link.sourceNode && link.targetNode}
  <path
    class='link'
    d={`M${link.sourceNode.x} ${link.sourceNode.y}, L${link.targetNode.x} ${link.targetNode.y}`}
    stroke="#c3c3c3"
    id={`link-${link.id}`}
  />
  <!-- <text
    style="text-anchor:middle; font: 8px sans-serif;"
    dy="-1">

    <textPath
      xlink:href={`#link-${link.id}`}
      startOffset="50%"
      class="link-label"
    >
      {link.sourceNode.institution_si}
    </textPath>
  </text> -->
  {/if}
{/each}
{#each nodes as point (point.id)}
 <Point
   class='node'
   r={$rGet(point)}
   allActive={!hovered}
   hovered={!!links.find(({sourceNode, targetNode}) => targetNode.id === point.id || sourceNode.id === point.id)}
   selected={selected === point.id}
   stroke={getColor(point.position)}
   x='{point.x}'
   y='{point.y}'
   id={point.id}
   label={point.name}
   {onMouseover}
   {onMouseout}
   {onClick}
 />
{/each}

<style>
  .link-label {
  }
</style>