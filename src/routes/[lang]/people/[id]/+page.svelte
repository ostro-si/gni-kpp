<script>
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 export let data;
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