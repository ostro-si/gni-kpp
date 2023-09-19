<script>

 import { getContext, onMount } from 'svelte';
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
	import Link from './Link.svelte';

 const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

//  console.log($zdata.nodes)

 export let manyBodyStrength = -15;

 const initialNodes = $data.nodes.map((d) => ({ ...d }))
 const initialLinks = $data.links.map((d) => ({ ...d }))
 let simulation;

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

 const runInitialSimulation = () => {
  simulation = forceSimulation(initialNodes)
    .force('collide', forceCollide().radius(d => $rGet(d)).strength(0.2))
    .force('charge', forceManyBody().strength(manyBodyStrength))
    .alpha(0.8)
    .restart()

  simulation.on("tick", () => {
    nodes = simulation.nodes()
    links = initialLinks
  })
 }

//  onMount(() => runInitialSimulation())

 

//  const boundingForce = () =>  { 
//   nodes.forEach(n => {
//     node.
//   })
//   for (let i = 0, n = nodes_data.length; i < n; ++i) {
//     curr_node = nodes_data[i];
//     curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
//     curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
//   }
// }

const selectingForce = () => {
  nodes.forEach((node) => {
    if (node.id === selected) {
      node.x = 100;
      return;
    } 
    // const isLinked = links.find(({sourceNode, targetNode}) => targetNode.id === node.id || sourceNode.id === node.id)
    
    // if (isLinked) {
    //   node.x = 200;
    //   return;
    // } 

    // node.x = 300;
  })
  // const selectedNode = nodes.find(({ id }) => {
  //   return id === selected;
  // })

  // if (selectedNode) {
  //   selectedNode.x = 100;

  // }


  // console.log(selectedNode)
}

 let nodes = [];
 let links = []
 let hovered;
 let selected;


 

 const recenterSimulation = () => {
  console.log('recentering')
  if (simulation) {
    simulation.force('center', forceCenter($width / 2, $height / 2).strength(1))

  }
 }

 const selectItem = () => {
  if (selected) {
    console.log('selecting');
    links = initialLinks
      .filter(({ source, target }) => source === selected || target === selected)

    console.log(links)

    runInitialSimulation()

    simulation
      // .force('select', selectingForce())
      .force("link", forceLink(links).id(d => d.id).strength(0.3).distance(100))
      // .force('charge', forceManyBody().strength(-20))
      .alpha(0.4)
      .restart()
    
  } else {
    runInitialSimulation()
  }
 }

//  const hoverItem = () => {
//   if (hovered) {
//     links = initialLinks
//       .filter(({ source, target }) => source === selected || target === selected)
//   } else {
//     links = initialLinks
//   }
//  }

 $: $width, $height, recenterSimulation()
 $: selected, selectItem()
//  $: hovered, hoverItem()

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

//  $: {
  // console.log('hovered', hovered, links, initialLinks)  // if (hovered) {
  //  links = initialLinks
  //   .filter(({ source, target }) => source === selected || target === selected)
    // .map(({ source, target }, i) => ({
    //   id: i,
    //   sourceNode: simulation.nodes().find(d => d.id === source),
    //   targetNode: simulation.nodes().find(d => d.id === target)
    // }))

  // console.log(links)
  // }
  // simulation
  //   .force("link", forceLink(links).id(d => d.id))
 // }

//  $: console.log(links.find(({source, target}) => target === '5' || source === '5'))
</script>

{#each links as { index, source, target }}
  <Link
    id={index}
    sourceNode={source}
    targetNode={target}
  />

 <!-- {#if link.sourceNode && link.targetNode} -->
  
{/each}
{#each nodes as point (point.id)}
 <Point
   class='node'
   r={$rGet(point)}
   allActive={!hovered}
   hovered={hovered === point.id || links.find(({ source, target }) => source === point.id || target === point.id)}
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

<!-- hovered={!!links.find(({sourceNode, targetNode}) => targetNode.id === point.id || sourceNode.id === point.id)} -->
