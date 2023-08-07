<script>
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 import { slugify } from '../../../../utils';
 export let data;

 // $: console.log(data)
</script>

<ProfileHeader
 title={data.name}
 subheading={data.position}
 details={[
  {
   label: "Party",
   value: data.party
  },
  {
   label: "Institution",
   value: data.institution
  }
 ]}
/>

<Timeline 
 items={data.cv}
 sectionGroupingVar="part_of_cv"
 rowGroupingVar="institution"
 getItemLink={({ institution }) => `/institutions/${slugify(institution)}`}
/>