<script>
 import PersonLabel from '../../../../components/PersonLabel.svelte';
import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 export let data;

 $: console.log(data)
</script>

<ProfileHeader
 title={data.affiliations?.[0]?.institution_si}
 background='#E6E6EB'
/>

<Timeline 
 items={data.affiliations}
 rowGroupingVar="person_name"
 getItemLink={({ person_id }) => `/people/${person_id}`}
 getItemLabel={({ person_id }) => {
  const person = data.associatedPeople.find(({ id }) => id === person_id)
  return person
 }}
/>