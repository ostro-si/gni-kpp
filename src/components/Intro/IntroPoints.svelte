<script>
  import { getContext } from 'svelte';
  import { scaleCanvas } from 'layercake';

  const { data, width, height, rGet, zGet, zDomain } = getContext('LayerCake');

  const { ctx } = getContext('canvas');

  export let r = 5;

  export let fill = '#0cf';

  export let stroke = '#000';

  export let strokeWidth = 1;

  export let colorCounts = [];


  $: r = $width / 70
  $: padding = r / 2

  $: acrossCount = Math.floor($width / ((r + padding)*2))
  $: downCount = Math.ceil($data.length / acrossCount);

  $: console.log(acrossCount, downCount)
  

  $: {
     if ($ctx) {
       
       scaleCanvas($ctx, $width, $height);
       $ctx.clearRect(0, 0, $width, $height);

       $data.forEach((d, i) => {
         $ctx.beginPath();
         $ctx.arc( Math.floor(i/downCount)*(r + padding)*2 + (r + padding), Math.floor(i%downCount)*(r + padding)*2 + (r + padding), r, 0, 2 * Math.PI, false);        
         $ctx.fillStyle = colorCounts[i] || "#c3c3c3";
         $ctx.fill();
       });
     }
   }

</script>





