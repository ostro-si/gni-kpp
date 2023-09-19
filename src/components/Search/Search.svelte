<script>
  import { fly } from 'svelte/transition';
  import Autocomplete from '@smui-extra/autocomplete';
  import people from '$lib/data/people.json';
  import institutions from '$lib/data/institutions.json';
  import { slugify } from "../../utils";
	import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { locale } from '$lib/translations';
  import { selected } from '../../stores'

  
  let value;

  $: options = [
   ...people.map(({ name, ...rest }) => ({ type: 'person', label: name, name, ...rest })),
   ...Object.entries(institutions).map(([slug, affiliations]) => ({ slug, type: 'institution', label: affiliations[0].institution_si }))
  ]

  $: {
   if (value?.type === 'person') {
    goto(`${base}/${$locale}`)
    $selected = [value.id]
   }
   if (value?.type === 'institution') {
    goto(`${base}/${$locale}/institutions/${value.slug}`)
   }
  }

</script>
<div in:fly>
 <Autocomplete
  {options}
  textfield$variant="outlined"
  getOptionLabel={(option) =>
    option ? `${option.label}` : ''}
  bind:value
 />
</div>

<style lang="scss">
 :global(.mdc-text-field) {
  background: white;
  max-height: 40px;
  border-radius: 5px;
 }

 :global(.mdc-text-field__input), :global(.mdc-deprecated-list-item__text) {
  font-size: 12px;
  // white-space: wrap;
 }

 :global(.mdc-deprecated-list-item) {
  height: auto;

 }

 :global(.mdc-deprecated-list) {
  max-width: 300px;
 }

 
</style>