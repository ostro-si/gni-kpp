<script>
 import { LayerCake, Svg, Html, Canvas } from 'layercake';
 import { fade } from 'svelte/transition';
 import IntroPoints from './IntroPoints.svelte';
 import Scrolly from '../TimelineMobile/Scrolly.svelte';
 import { colors, groupBy } from '../../utils'
 import { scaleOrdinal } from 'd3-scale'

 const defaultColor = '#E6E6F0'
 
 export let people;

 let scrollSectionIndex = 0;

 const sections = [
  {
   id: '1',
   text: 'There are 160 people currently in government.',
   domain: [undefined],
   range: [defaultColor]
  },
  {
   id: '2',
   variable: 'position',
   text: '1 prime minister, 20 ministers, 49 secretaries and 90 members of parliament.',
   domain: Object.keys(colors),
   range: Object.values(colors)
  },
  {
   id: '3',
   variable: 'is_first_time_in_office',
   text: '90 of those never held a political position before coming into office. 10 have been there since the 90s.',
   domain: ['TRUE', 'FALSE'],
   range: ['#00E63C', defaultColor]
  },
 ]

 $: activeSection = sections[scrollSectionIndex] || sections[0]

 let colorCounts;

 $: {
  const varGroupings = groupBy(people, activeSection.variable)

  colorCounts = activeSection.domain.map((key, i) => {
   const grouped = varGroupings[key]
   const color = activeSection.range[i]
   return Array(grouped.length).fill(color)
  }).flat()
 }

  // Object.entries(varGroupings).forEach(([key, values]) => {

  // }

 // $: console.log(scrollSectionIndex, activeSection, varGroupings)


</script>

<div class="scroll-tracker">
 <Scrolly bind:value={scrollSectionIndex}>
   {#each sections as section (section.id)}
     <div class="step" transition:fade>
       <div class="step__text">
        {section.text}

       </div>
     </div>
   {/each}
 </Scrolly>
</div>

<div class="chart-container">
 <LayerCake
   data={people}
 >
   <Canvas>
    <IntroPoints {colorCounts} />
   </Canvas>
 </LayerCake>
</div>

<style>
 .chart-container {
   width: 100%;
   height: 100px;
   position: fixed;
   background: #fff;
   padding: 30px;
 }

 .step {
  /* transform: translateY(90vh); */
  height: 100vh;
  text-align: center;
  font-family: Noe Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 133.333% */

  &__text {
   
  }
 }
</style>