<script>
 import { t } from '$lib/translations';
 import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
 import { groupBy, colors } from '../../utils';
 import PersonLabel from '../PersonLabel.svelte';

 export let people;

 $: grouped = groupBy(people, 'position')

 $: console.log(grouped)
</script>


<div class="accordion-container">
 <Accordion multiple defaultExpanded>
   <Panel>
     <Header>{$t('Prime minister')}</Header>
     <Content>
     </Content>
   </Panel>
   <Panel>
    <Header>{$t('Ministers')}</Header>
    <Content>
     {#each grouped.minister as person}
      <PersonLabel {...person} />
     {/each}
    </Content>
   </Panel>
   <Panel>
     <Header>{$t('Secretaries')}</Header>
   </Panel>
   <Panel>
    <Header>{$t('MPs')}</Header>
  </Panel>
 </Accordion>
</div>

<style lang="scss">
 :global(.smui-paper__content) {
  padding: 0 !important;
	}
</style>