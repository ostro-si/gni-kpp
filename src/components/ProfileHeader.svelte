<script>
import { translate } from '$lib/translations';
import { platform } from "./MediaQuerySsr.svelte";
import NotesTooltip from './NotesTooltip.svelte';


 export let imageLink = undefined;
 export let title = undefined;
 export let subheading = undefined;
 export let notes = undefined;
 export let details = undefined;
 export let background = undefined;
 export let textColor = undefined;


let scrollY;
let h;

$: collapsed = scrollY !== 0;

// $: console.log($platform)
 
</script>
<svelte:window bind:scrollY={scrollY} />

<div class="ProfileHeader" style="--background-color: {background}; --text-color: {textColor}" class:collapsed={collapsed} class:mobile={$platform === 'mobile'} bind:clientHeight={h}>
 <div class="inner-container">
  <div class="ProfileHeader__main">
   {#if imageLink}
    <div class="ProfileHeader__image" style={`background-image: url('${imageLink}')`}></div>
   {/if}
   <div class="ProfileHeader__title">
    <h5 class="ProfileHeader__title__heading">
      <span>{title}</span>
      {#if notes?.length}
        <NotesTooltip {notes} />
      {/if}
    </h5>
    {#if subheading}
     <h5 class="ProfileHeader__title__subheading">{$translate(subheading)}</h5>
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
<div class="content-spacer" style:height={`${h}px`} /> 

<style lang="scss">
  $transition-duration: 50ms;

 .ProfileHeader {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  position: fixed;
  width: calc(100% - 40px);
  transition: padding $transition-duration linear;
  z-index: 15;

  &.collapsed {
    padding: 0 20px;
  }

  .inner-container {
   display: flex;
   justify-content: space-between;
   max-width: $max-width;
   margin: 0 auto;
   width: 100%;

   @media (max-width: 550px) {
    flex-direction: column;
    gap: 20px;
  }
  }

  &__main, &__secondary {
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width: 550px) {
      justify-content: flex-start;
    }
  }

  &__secondary {
   gap: 15px;
   align-items: normal;
   align-self: center;
   
   @media (max-width: 550px) {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .collapsed & {
        display: none;
      }
    }
  }

  &__image {
   // img {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-size: cover;
    background-color: #c3c3c3;
    margin-right: 20px;
    transition: all $transition-duration linear;

   // }

   .collapsed & {
    height: 35px;
    width: 35px;
    margin-right: 10px;
   }
  }

  &__title {
   margin: 15px 0;
   font-size: 20px;
   transition: font-size $transition-duration linear;
   max-width: 500px;

   .collapsed & {
    font-size: 14px;
   }

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
   transition: font-size $transition-duration linear;
   overflow-y: hidden;
  

   .collapsed & {
    font-size: 12px;
   }

   &__label {
    font-weight: 600;
    margin-bottom: 5px;
   }

   &__value {
    & > :global(a) {
      color: var(--text-color) !important;
    }
    }
  }
 }
</style>
