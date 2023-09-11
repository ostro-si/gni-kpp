<script>
 export let imageLink;
 export let title;
 export let subheading;
 export let border;
 export let small;
</script>


<div class="container" class:small={small}>
 {#if imageLink}
  <div class="image" style={`background-image: url('${imageLink}'); border-color: ${border}`}></div>
 {/if}
 <div class="title">
  <h5 class="title__heading">{title}</h5>
  {#if subheading}
   <h5 class="title__subheading">{subheading}</h5>
  {/if}
 </div>
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

 .image {
   height: 50px;
   width: 50px;
   border-radius: 50px;
   background-size: cover;
   background-color: #c3c3c3;
   border: 2px solid;

   .small & {
    height: 25px;
    width: 25px;
   }
 }

 .title {
  margin: 15px 0;

  .small & {
    font-size: 12px;
    margin: 0;
  }

  &__heading {
   margin-top: 0;
   margin-bottom: 5px;

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
