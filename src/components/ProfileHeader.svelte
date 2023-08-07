<script>

 export let imageLink;
	export let title;
 export let subheading;
 export let details;
 
</script>

<div class="ProfileHeader">
 <div class="ProfileHeader__main">
  <div class="ProfileHeader__image">
   <img src="https://en.wikipedia.org/wiki/Robert_Golob#/media/File:Robert_Golob_-_52114942369_(cropped).jpg"/>
  </div>
  <div class="ProfileHeader__title">
   <h5>{title}</h5>
   <h5>{subheading}</h5>
  </div>
 </div>
 <div class="ProfileHeader__secondary">
  {#each details as { label, value}}
   <div class="ProfileHeader__detail">
    <div class="ProfileHeader__detail__label">
     {label}
    </div>
    <div class="ProfileHeader__detail__value">
     {value}
    </div>
   </div>
  {/each}
 </div>
</div>

<style lang="scss">
 .ProfileHeader {
  display: flex;
  justify-content: space-between;

  &__main, &__secondary {
   display: flex;
   justify-content: space-between;
  }

  &__image {
   img {
    height: 80px;
    width: 80px;
   }
  }
 }
</style>
