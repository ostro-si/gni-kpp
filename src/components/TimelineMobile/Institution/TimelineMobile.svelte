<script>
  import { translate } from '$lib/translations';
  import { arrayUniqueById, getColor } from "../../../utils";
  import { slide, fly } from 'svelte/transition';
	import PersonLabel from "../../PersonLabel.svelte";
  import { min, max, range } from 'd3-array';
  import Scrolly from "../Scrolly.svelte";
  import downArrow from '$lib/images/icon-network.svg';

  export let items;

  let byYear = {};
  let currYear;
  let minYear;
  let maxYear
  let scrollSectionIndex;
  let itemHeight;
  let yearsList = []

  const scrollTo = index => {
    window.scrollTo({
      top: itemHeight * index,
      behavior: 'smooth'
    })
  }

 $: {
  items.forEach(item => {
    for (let year = +item.start_year; year <= +item.end_year; year++) {
      if (year in byYear) {
        byYear[+year].push(item)
      } else {
        byYear[+year] = [item];
      }
    }
  })
  minYear =+ min(Object.keys(byYear))
  maxYear =+ max(Object.keys(byYear))

  yearsList = range(minYear, maxYear)
 }

 $: currYear = minYear + scrollSectionIndex
 $: currYearItems = byYear[currYear]

</script>
<div class="scroll-tracker">
  <Scrolly bind:value={scrollSectionIndex}>
    {#each yearsList as year (year)}
      <div class="step" class:active={year === currYear} bind:clientHeight={itemHeight}>
      </div>
    {/each}
  </Scrolly>
</div>
<img class="icon" src={downArrow} alt="down" />

<div class="container"> 
  <div class="left-scroll">
    {#each yearsList as year, i (year)}
      <div class="year"
        class:selected={+year === currYear}
        style:top={`${(year - currYear)*10}vh`}
        style:opacity={1 - Math.abs(currYear - year)*0.2}
        on:click={() => scrollTo(i)}
      >
        {year}
      </div>
    {/each}
  </div> 
  
  <div class="right-scroll">   
    <!-- {#each Object.entries(byYear) as [year, items] (year)}
      <div class="item" style:top={`${(year - currYear)*50}vh`} class:selected={+year === currYear}>
          {#each arrayUniqueById(items, 'person_id') as { image_link, person_id, person_name, curr_position } (person_id)}
            <PersonLabel clickable position={curr_position} id={person_id} name={person_name} {image_link} small />
          {/each}
      </div>
    {/each} -->
      {#key currYear}
        <div class="item">
          {#if currYearItems}
            {#each arrayUniqueById(currYearItems, 'person_id') as { image_link, person_id, person_name, position_si, curr_position } (person_id)}
              <div class="person_label">
                <PersonLabel
                  clickable
                  position={curr_position}
                  subheading={position_si}
                  id={person_id}
                  name={person_name}
                  {image_link}
                  small
                  coloredText
                />
              </div>
            {/each}
          {:else}
            <div class="placeholder">{$translate('None')}</div>
          {/if}
        </div>
      {/key}
  </div>
</div>

<style lang="scss">
  $yearWidth: 100px;
 .container {
  // transform: translateY(-50%);
  position: fixed;
  top: 50%;
  width: 100%;
 }

 .icon {
  position: fixed;
  top: 200px;
 }

//  .inner-container {
//   display: flex;

//  }

 .left-scroll {
  // position: relative;
  top: 50vh;
 }

 .right-scroll {
  position: absolute;
  left: $yearWidth;
  width: calc(100% - #{$yearWidth})
 }

//  .scroll-spacer {
//   height: 50vh;
//  }

 .year {
  padding: 20px 10px;
  position: absolute;
  font-size: 12px;
  transition: all 70ms ease-in-out;

  &.selected {
    font-weight: bold;
    font-size: 18px;
  }
 }

 .step {
		height: 50vh;
	}

  .person_label {
    margin: 10px 0;
  }

  .placeholder {
    font-style: italic;
    font-weight: normal;

  }

  // .item {
  //   height: 100vh;
  //   position: absolute;
  //   opacity: 0;
  //   width: 100%;

  //   &.selected {
  //     opacity: 1;
  //   }
  //   // top: 0;
  // }
</style>
