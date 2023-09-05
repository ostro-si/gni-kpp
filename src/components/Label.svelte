<script>
 export let imageLink;
	export let title;
 export let subheading;
 
</script>


<div class="container">
 {#if imageLink}
  <div class="image" style={`background-image: url('${imageLink}')`}></div>
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
 }

 .image {
   height: 50px;
   width: 50px;
   border-radius: 50px;
   background-size: cover;
   background-color: #c3c3c3;
 }

 .title {
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
</style>
