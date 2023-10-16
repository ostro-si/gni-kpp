<script>
 import { t } from '$lib/translations';
 import ProfileHeader from '../../../../components/ProfileHeader.svelte';
 import Timeline from '../../../../components/Timeline/Timeline.svelte';
 import TimelineMobile from '../../../../components/TimelineMobile/Person/TimelineMobile.svelte';
 import { slugify, getColor, getDateYear, getTimeSince } from '../../../../utils';
 import { platform } from '../../../../components/MediaQuerySsr.svelte';

 export let data;

 $: console.log(data)
</script>

<ProfileHeader
 title={data.name}
 subheading={data.position}
 imageLink={data.image_link}
 background={getColor(data.position)}
 details={[
  {
   label: "Party",
   value: data.party
  },
  {
   label: "Birth year",
   value: getDateYear(data.birth_date)
  },
  {
   label: "Time in office",
   value: getTimeSince(data.time_in_office)
  },
  {
   label: "Assets",
   component: data.asset_tracker_link && `<a rel="external" target="_blank" href=${data.asset_tracker_link}>${$t('Link')}</a>`
  }
 ]}
/>

{#key data.id}
  {#if data.cv}
    {#if $platform === 'mobile'}
      <TimelineMobile
        items={data.cv}
        color={getColor(data.position)}
      />
    {:else}
      <Timeline 
        items={data.cv}
        sectionGroupingVar="part_of_cv"
        rowGroupingVar="institution_si"
        getItemLink={({ institution_si }) => `/institutions/${slugify(institution_si)}`}
      />
    {/if}
  {/if}
{/key}