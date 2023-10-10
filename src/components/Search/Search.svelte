<script>
  import { fly } from 'svelte/transition';
  import Autocomplete from '@smui-extra/autocomplete';
  import IconButton from '@smui/icon-button';
  import { platform } from '../MediaQuerySsr.svelte';

  import people from '$lib/data/people.json';
  import institutions from '$lib/data/institutions.json';
  import { slugify } from "../../utils";
	import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { locale } from '$lib/translations';
  import { selected } from '../../stores'

  export let searchOpen = true;
  
  let value;

  $: options = [
   ...people.map(({ name, ...rest }) => ({ type: 'person', label: name, name, ...rest })),
   ...Object.entries(institutions).map(([slug, affiliations]) => ({ slug, type: 'institution', label: affiliations[0].institution_si }))
  ]

  $: {
   if (value?.type === 'person') {
    if ($platform === 'mobile') {
      goto(`${base}/${$locale}/people/${value.id}`)
    } else {
      goto(`${base}/${$locale}`)
      $selected = [value.id]
    }
   }
   if (value?.type === 'institution') {
    goto(`${base}/${$locale}/institutions/${value.slug}`)
    searchOpen = false;
   }
  }

</script>
<div class="container" in:fly>
 <Autocomplete
  {options}
  textfield$variant="outlined"
  getOptionLabel={(option) =>
    option ? `${option.label}` : ''}
  bind:value
 >
</Autocomplete>
<div class="close-icon">
  <IconButton class="material-icons" on:click={() =>{$selected = []; searchOpen = false}} size="button"
    >close</IconButton
  >
</div>

</div>

<style lang="scss">
 :global(.mdc-text-field) {
  background: white;
  max-height: 35px;
  border-radius: 5px;
 }

 :global(.mdc-text-field__input), :global(.mdc-deprecated-list-item__text) {
  font-size: 12px;
  width: 20vw;

  // @media (max-width: $mobile) {
  //   width: 100%;
  // }
  // white-space: wrap;
 }

 :global(.mdc-deprecated-list-item) {
  height: auto;

 }

 :global(.mdc-deprecated-list) {
  max-width: 300px;

  // @media (max-width: $mobile) {
  //   width: 100%;
  // }
 }

 .container {
  display: flex;
  align-items: center;

  // @media (max-width: $mobile) {
  //   width: 100%;
  // }
 }

 .close-icon {
  transform: translateX(-33px);
  color: rgb(173, 173, 173);
  background: #fff;
 }

 :global(.mdc-icon-button) {
  // padding: 3px !important;
  width: 30px !important;
  height: 30px !important;

 }

 
</style>