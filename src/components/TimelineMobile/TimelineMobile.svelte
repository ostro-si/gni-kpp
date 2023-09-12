<script>
 export let items;

 console.log(items)
</script>

{#each items as item (item.id)}
 <div class="item">
  <div class="inner-container">
   <div class="years">{item.start_year} - {item.end_year}</div>
   <div class="institution">{item.institution_si}</div>
   <div class="position">{item.position_si}</div>
   {item.connections}
  </div>
 </div>
{/each}

<style lang="scss">
 .item {
  height: 100vh;
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
</style>
