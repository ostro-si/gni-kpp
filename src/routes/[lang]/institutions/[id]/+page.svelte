<script>
 import PersonLabel from '../../../../components/PersonLabel.svelte';
 import { locale } from '$lib/translations';

import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
	import TimelineMobile from '../../../../components/TimelineMobile/Institution/TimelineMobile.svelte';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';
 import InstitutionBreakdown from '../../../../components/InstitutionBreakdown.svelte';
 import { tField } from '../../../../utils';

 export let data;


//  $: console.log(platform, platform === 'mobile')
</script>


{#key data.route}
 <ProfileHeader
  title={tField(data.affiliations?.[0], 'institution', $locale)}
  background='#E6E6EB'
 />
 <InstitutionBreakdown affiliations={data.affiliations} />

 {#if $platform === 'mobile'}
  <TimelineMobile
   items={data.affiliations}
  />
 {:else}
  <Timeline 
    items={data.affiliations}
    rowGroupingVar="person_name"
    getItemLink={({ person_id }) => `/people/${person_id}`}
    getItemLabel={({ person_id }) => {
      const person = data.associatedPeople.find(({ id }) => id === person_id)
      return person
    }}
    />
 {/if}
{/key}
