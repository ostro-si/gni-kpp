<script>
 import { t } from '$lib/translations';
 import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
 import { groupBy, getColor } from '../../utils';
 import PersonLabel from '../PersonLabel.svelte';


 export let people;

 $: grouped = groupBy(people, 'position')

 $: console.log(grouped)
</script>


<div class="accordion-container">
 <Accordion multiple>
   <Panel open>
      <Header>
        <div class="header" style="--background-color: {getColor('pm')}; color: #fff">{$t('Prime minister')}</div>
      </Header>
     <Content>
     </Content>
   </Panel>
   <Panel open>
    <Header>
      <div class="header" style="--background-color: {getColor('minister')}">{$t('Ministers')}</div>
    </Header>
    <Content>
     {#each grouped.minister as person}
      <div class="item">
        <PersonLabel {...person} clickable />
      </div>
     {/each}
    </Content>
   </Panel>
   <Panel open>
    <Header>
      <div class="header" style="--background-color: {getColor('secretary')}">{$t('Secretaries')}</div>
    </Header>
   </Panel>
   <Panel open>
    <Header>
      <div class="header" style="--background-color: {getColor('mp')}">{$t('MPs')}</div>
    </Header>
  </Panel>
 </Accordion>
</div>

<style lang="scss">
  // .accordion-container {
  //   // padding: 10px 0;
  // }
  :global(.smui-paper__content) {
    padding: 0 !important;
	}

  :global(.smui-accordion__header__title) {
    padding: 0 !important;
  }

  .header {
    padding: 15px;
    background-color: var(--background-color);
    font-family: Noe Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .item {
    padding: 10px 15px;
    border-bottom: 1px solid #E6E6EB;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
</style>