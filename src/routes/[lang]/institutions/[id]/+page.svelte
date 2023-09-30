<script>
 import PersonLabel from '../../../../components/PersonLabel.svelte';
import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
	import TimelineMobile from '../../../../components/TimelineMobile/Institution/TimelineMobile.svelte';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';
 export let data;


//  $: console.log(platform, platform === 'mobile')
</script>


{#key data.route}
 <ProfileHeader
  title={data.affiliations?.[0]?.institution_si}
  background='#E6E6EB'
 />

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
