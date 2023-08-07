<script>
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 export let data;

 $: console.log(data)
</script>

<ProfileHeader
 title={data.affiliations?.[0]?.institution}
/>

<Timeline 
 items={data.affiliations}
 rowGroupingVar="person_name"
 getItemLink={({ person_id }) => `/people/${person_id}`}
/>