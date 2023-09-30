<script>
  import Scrolly from "../Scrolly.svelte";
 import { arrayUniqueById, getColor } from "../../../utils";
 import PersonLabel from "../../PersonLabel.svelte";
 import VerticalTimeBars from "./VerticalTimeBars.svelte";

 export let items;
export let color;

//  console.log(items)

let scrollSectionIndex;


 $: sorted = items.sort((a, b) => a.start_year < b.start_year ? -1 : 1)

$: console.log(scrollSectionIndex)
</script>

<div class="flex-container">
  <div class="left">
    <VerticalTimeBars {items} selectedIndex={scrollSectionIndex} {color} />
  </div>
  <div class="right">
    <Scrolly bind:value={scrollSectionIndex}>
      {#each sorted as item (item.id)}
      <div class="item">
        <div class="inner-container">
        <div class="years">{item.start_year} - {item.end_year}</div>
        <div class="institution">{item.institution_si}</div>
        <div class="position">{item.position_si}</div>
        <div class="connections">
          {#each arrayUniqueById(item.connections, 'person_id') as { image_link, person_id, person_name, position } (person_id)}
            <div class="connection">
            <PersonLabel clickable {position} id={person_id} {image_link} small />
            </div>
          {/each}
          </div>
        </div>
      </div>
      {/each}
    </Scrolly>
  </div>
</div>

<style lang="scss">
  .flex-container {
    display: flex;
  }

  .left {
    width: 100px;


  }

 .item {
  height: 60vh;
 }

 .inner-container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
 }

 .years {
  font-family: Noe Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
 }

 .institution {
  color: $black;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px; /* 136.364% */
 }

 .position {
  color:$black;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
 }

 .connections {
  display: flex;
 }
</style>
