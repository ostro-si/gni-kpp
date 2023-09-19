
 <script>
  export let sourceNode;
  export let targetNode;
  export let id;
</script>


{#if sourceNode && targetNode}
 <path
   class='link'
   d={`M${sourceNode.x} ${sourceNode.y}, L${targetNode.x} ${targetNode.y}`}
   stroke="#c3c3c3"
   id={`link-${id}`}
  />
{/if}

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


<style lang="scss">


</style>