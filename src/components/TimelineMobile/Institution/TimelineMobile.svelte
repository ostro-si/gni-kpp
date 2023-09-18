<script>
 import { arrayUniqueById, getColor } from "../../../utils";
 import { slide, fly } from 'svelte/transition';
	import PersonLabel from "../../PersonLabel.svelte";
  import { min } from 'd3-array';
  import Scrolly from "../Scrolly.svelte";
 export let items;

 const yearMax = new Date().getFullYear();

 console.log(items, yearMax)

let byYear = {};
let currYear;
let minYear;
let scrollSectionIndex;

 $: {
  // const startYear = min(items, d => d.start_year)
  // const endYear = max(items, d => d.end_year)

  items.forEach(item => {
    for (let year = +item.start_year; year <= Math.min(+item.end_year, yearMax); year++) {
      if (year in byYear) {
        byYear[+year].push(item)
      } else {
        byYear[+year] = [item];
      }
    }
  })

  console.log(byYear)

  minYear =+ min(Object.keys(byYear))

  // sorted = items.sort((a, b) => a.start_year < b.start_year ? -1 : 1)
 }

 $: currYear = minYear + scrollSectionIndex
 $: currYearItems = byYear[currYear]

 $: console.log(currYear, minYear)

</script>
<div class="scroll-tracker">
  <Scrolly bind:value={scrollSectionIndex}>
    {#each Object.keys(byYear) as year (year)}
      <div class="step" class:active={year === currYear}>
        <!-- {year} -->
      </div>
    {/each}
  </Scrolly>
</div>
<div class="container"> 
  <div class="inner-container">
    <div class="left-scroll">
      {#each Object.keys(byYear) as year, i (year)}
        <div class="year"
          class:selected={+year === currYear}
          style:top={`${(year - currYear)*40}px`}
          style:opacity={1 - Math.abs(currYear - year)*0.3}
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
      {#if currYearItems}
        {#key currYear}
          <div class="item">
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
          </div>
        {/key}
      {/if}
    </div>
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

 .year {
  padding: 20px 10px;
  position: absolute;
  transition: top 70ms ease-in-out;

  &.selected {
    font-weight: bold;
  }
 }

 .step {
		height: 50vh;
	}

  .person_label {
    margin: 5px 0;
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
