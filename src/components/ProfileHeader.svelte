<script>

 export let imageLink;
	export let title;
 export let subheading;
 export let details;
 
</script>

<div class="ProfileHeader">
 <div class="ProfileHeader__main">
  {#if imageLink}
   <div class="ProfileHeader__image" style={`background-image: url('${imageLink}')`}></div>
  {/if}
  <div class="ProfileHeader__title">
   <h5 class="ProfileHeader__title__heading">{title}</h5>
   {#if subheading}
    <h5 class="ProfileHeader__title__subheading">{subheading}</h5>
   {/if}
  </div>
 </div>
 {#if details}
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
 {/if}
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
   // img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-size: cover;
    background-color: #c3c3c3;
   // }
  }

  &__title {
   margin: 15px 0;

   &__heading {
    margin-top: 0;
    margin-bottom: 5px;
   }
   &__subheading {
    font-weight: normal;
    margin: 0;
   }
  }

  &__details {
   
  }
 }
</style>
