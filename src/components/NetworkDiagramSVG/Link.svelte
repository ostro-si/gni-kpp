
 <script>
  export let sourceNode;
  export let targetNode;
  export let id;
  export let visible;
  export let showLabel

  let path;
  $: {
   if (visible && sourceNode && targetNode) {
    const flip = sourceNode.x > targetNode.x;
    const start = flip ? targetNode : sourceNode;
    const end = flip ? sourceNode : targetNode;
    path = `M${start.x} ${start.y}, L${end.x} ${end.y}`
   }
  } 

  // $: shouldSplitLabel = sourceNode?.institution_si.length > 50;
</script>


{#if visible && sourceNode && targetNode}
 <path
   class='link'
   d={path}
   stroke="#c3c3c3"
   id={`link-${id}`}
  />
  {#if showLabel}
  <text
    style="text-anchor:middle; font: 8px sans-serif;"
    dy="-3"
   >
    <textPath
      xlink:href={`#link-${id}`}
      startOffset="50%"
      class="link-label"
    >
      {sourceNode.institution_si}
    </textPath>
  </text>
 {/if}
{/if}

  


<style lang="scss">


</style>