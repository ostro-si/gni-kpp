<script>
	import { t } from '$lib/translations';

 export let imageLink;
 export let title;
 export let subheading;
 export let details;
 export let background;
 export let small;

 $: console.log(background, small)
 
</script>

<div class="ProfileHeader" style="--background-color: {background}">
 <div class="inner-container">
  <div class="ProfileHeader__main">
   {#if imageLink}
    <div class="ProfileHeader__image" style={`background-image: url('${imageLink}')`}></div>
   {/if}
   <div class="ProfileHeader__title">
    <h5 class="ProfileHeader__title__heading">{title}</h5>
    {#if subheading}
     <h5 class="ProfileHeader__title__subheading">{$t(subheading)}</h5>
    {/if}
   </div>
  </div>
 {#if details}
  <div class="ProfileHeader__secondary">
   {#each details as { label, value, component }}
   {#if value || component}
     <div class="ProfileHeader__detail">
      <div class="ProfileHeader__detail__label">
       {label}
      </div>
      <div class="ProfileHeader__detail__value">
       {#if value}
        {value}
       {:else if component}
        {@html component}
       {/if}
      </div>
     </div>
    {/if}
   {/each}
  </div>
 {/if}
 </div>
</div>

<style lang="scss">
 .ProfileHeader {
  background-color: var(--background-color);
  padding: 20px;

  .inner-container {
   display: flex;
   justify-content: space-between;
   max-width: $max-width;
   margin: 0 auto;
   width: 100%;
  }

  &__main, &__secondary {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }

  &__secondary {
   gap: 15px;
   align-items: normal;
   align-self: center;
  }

  &__image {
   // img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-size: cover;
    background-color: #c3c3c3;
    margin-right: 20px;
   // }
  }

  &__title {
   margin: 15px 0;
   font-size: 20px;

   &__heading {
    margin-top: 0;
    margin-bottom: 5px;
    
   }
   &__subheading {
    font-weight: normal;
    margin: 0;
   }
  }

  &__detail {
   font-size: 13px;
   flex-grow: 1;
   flex-basis: 0;
   min-width: 130px;

   &__label {
    font-weight: 600;
    margin-bottom: 5px;
   }
  }
 }
</style>
