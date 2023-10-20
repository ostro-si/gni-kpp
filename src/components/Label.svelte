<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";


 export let imageLink;
 export let imagePlaceholder;
 export let title;
 export let subheading;
 export let border;
 export let small;
 export let coloredText;
 export let size;

 const tweenParameters = {
    duration: 400,
    easing: cubicOut,
};

$: calculatedSize = !!size ? size : (small ? 20 : 50)

const tSize = tweened(calculatedSize, tweenParameters);

$: $tSize = calculatedSize


</script>


<div class="container" class:small={small} style='--size:{$tSize}; --color:{border}'>
 {#if imageLink}
  <div class="image" style={`background-image: url('${imageLink}')`}></div>
 {:else if imagePlaceholder}
  <div class="image-placeholder">
    <span>{imagePlaceholder}</span>
  </div>
 {/if}
 {#if title || subheading}
  <div class="title">
    <h5 class="title__heading" style:color={coloredText ? border : 'inherit'}>{title}</h5>
    {#if subheading}
    <h5 class="title__subheading">{subheading}</h5>
    {/if}
  </div>
  {/if}
</div>


<style lang="scss">
 .container {
  display: flex;
  align-items: center;
  gap: 10px;
  // justify-content: space-between;

  &.small {
    gap: 5px;
  }
 }

 .image, .image-placeholder {
   height: calc( var(--size) * 1px );
   width: calc( var(--size) * 1px );
   border-radius: calc( var(--size) * 1px );
   border: 2px solid var(--color);
   background-color: var(--color);
 }

 .image {
   background-size: cover;
 }

 .image-placeholder {
  position: relative;

  span {
    font-size: calc( var(--size) * 0.4px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 }

 .title {
  margin: 15px 0;
  color: $grey;

  .small & {
    font-size: 12px;
    margin: 0;
  }

  &__heading {
   margin-top: 0;
   margin-bottom: 5px;
   white-space: nowrap;

   .small & {
      margin: 0;
    }
  }
  &__subheading {
   font-weight: normal;
   margin: 0;
  }
 }
</style>
