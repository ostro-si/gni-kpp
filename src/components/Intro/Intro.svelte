<script>
  import { onMount } from 'svelte';
  import { LayerCake, Svg, Html, Canvas } from 'layercake';
  import { fade } from 'svelte/transition';
  // import { scrollto } from "svelte-scrollto";

  import IntroPoints from './IntroPoints.svelte';
  import Scrolly from '../TimelineMobile/Scrolly.svelte';
  import { colors, groupBy } from '../../utils'
  import Typewriter from 'svelte-typewriter'

  import { scaleOrdinal } from 'd3-scale'

  const defaultColor = '#E6E6F0'
  
  export let people;

  let scrollSectionIndex = 0;
  let sectionProgress;
  let typing = false;
  let hideIntro = false;


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
    {
      id: '4',
      text: 'Explore the project to learn about the innterconnected blah blah blah',
    }
  ]

  $: activeSection = sections[scrollSectionIndex] || sections[0]
  $: showPoints = scrollSectionIndex < sections.length - 1;
  $: scrollSectionIndex, typing = true;
  $: {
    if (scrollSectionIndex > 0 && scrollSectionIndex === sections.length) {
      hideIntro = true
    }
  }
  


  let colorCounts;
  let h;

 $: {
  const varGroupings = groupBy(people, activeSection.variable)

  colorCounts = activeSection.domain?.map((key, i) => {
   const grouped = varGroupings[key]
   const color = activeSection.range[i]
   return Array(grouped.length).fill(color)
  }).flat()
 }

 const skipAhead = () => {
  window.scrollTo({
    top: 100,
    behavior: 'smooth'
  })
 }


 $: console.log(scrollSectionIndex, sections.length, hideIntro)
 


</script>

<!-- https://svelte.dev/repl/2bdbf66371a3418e9e3eda076df6e32d?version=3.18.1 -->
<!-- <svelte:window use:wheel={{disableScroll}} /> -->
  <div class="scroll-tracker">
    <Scrolly bind:value={scrollSectionIndex} bind:progress={sectionProgress} >
      {#if !hideIntro}
        {#each sections as section (section.id)}
          <div class="step" class:active={section.id === activeSection.id}>
            <div class="step__text">
                {#if showPoints}
                  <Typewriter disabled={section.id !== activeSection.id} cursor={false} interval={30} on:done={(i) => { console.log(i, 'finished'); typing = false }}>
                    <h5>{section.text}</h5>
                  </Typewriter>
                {:else}
                  <h5>{section.text}</h5>
                {/if}
              </div>
          </div>
        {/each}
      {/if}
      <div>
        <slot />

      </div>

    </Scrolly>
  </div>

  {#if showPoints}
    <div class="chart-container" style:height={`${h}px`} in:fade>
        <LayerCake
          data={people}
        >
          <Canvas>
            <IntroPoints {colorCounts} bind:h />
          </Canvas>
        </LayerCake>
    </div>

    <div class="skip-ahead" on:click={() => skipAhead()}>Skip</div>
  {/if}

  <!-- <a use:scrollto={'#scroll-element'}> Scroll to element </a> -->


<style lang="scss">
 .chart-container {
   width: 100%;
   position: fixed;
   background: #fff;
   padding: 30px;
 }

 .step {
  position: relative;
  /* top: 60vh; */
  /* transform: translateY(90vh); */
  height: 120vh;
  text-align: center;
  font-family: Noe Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 133.333% */

  &__text {
   padding: 20px;
   position: absolute;
   bottom: 50vh;
   left: 50%;
   transform: translateX(-50%);
   opacity: 0;
   transition: opacity 800ms ease-in-out;

   .active & {
    opacity: 1;
   }
  }
 }

 .skip-ahead {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  left: 10px;
 }
</style>