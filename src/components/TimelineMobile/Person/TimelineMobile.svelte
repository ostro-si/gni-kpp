<script>
  import Scrolly from "../Scrolly.svelte";
  import { arrayUniqueById, getColor, slugify } from "../../../utils";
  import PersonLabel from "../../PersonLabel.svelte";
  import VerticalTimeBars from "./VerticalTimeBars.svelte";
	import LocalizedLink from "../../LocalizedLink.svelte";

 export let items;
 export let color;

let scrollSectionIndex;
let itemHeight;

const setSelectedIndex = (index) => {
  window.scrollTo({
    top: itemHeight * index,
    behavior: 'smooth'
  })
}

$: sorted = items
  .sort((a, b) => a.end_year < b.end_year ? -1 : 1)
  .sort((a, b) => a.start_year < b.start_year ? -1 : 1)

</script>

<div class="outer-container">
  <div class="left">
    <VerticalTimeBars {items} selectedIndex={scrollSectionIndex} {setSelectedIndex} {color} />
  </div>
  <div class="right">
    <Scrolly bind:value={scrollSectionIndex}>
      {#each sorted as item, i (item.id)}
        <section class="item" id={i} bind:clientHeight={itemHeight}>
          <div class="inner-container">
          <div class="years" style:color={color}>{item.start_year} - {item.end_year}</div>
          <LocalizedLink component={"a"} href={`/institutions/${slugify(item.institution_si)}`}>
            <div class="institution">{item.institution_si}</div>
          </LocalizedLink>
          <div class="position">{item.position_si}</div>
          <div class="connections">
            {#each arrayUniqueById(item.connections, 'person_id') as { image_link, person_id, person_name, position } (person_id)}
              <div class="connection">
              <PersonLabel clickable {position} id={person_id} {image_link} small />
              </div>
            {/each}
            </div>
          </div>
        </section>
      {/each}
    </Scrolly>
  </div>
</div>

<style lang="scss">
  .outer-container {
    display: table;
  }

  .left, .right {
    display: table-cell;
  }

  .left {
    width: 100px;
    
  }

  .right {
    border-left: 0.5px solid #aaa;
    padding-left: 15px;
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
  margin-bottom: 7px;
 }

 .institution {
  color: $black;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px; /* 136.364% */
  margin-bottom: 2px;

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
  margin-top: 7px;
 }
</style>
