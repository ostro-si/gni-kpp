<script>
import { currentPage, previousPage } from '../stores';
import { translate, locale } from '$lib/translations';
import { tField } from '../utils';
import backArrowIcon from '$lib/images/arrow_back.svg';


// let showButton = false;
let buttonText = null;

$: {
 if (!!$previousPage?.url?.pathname) {
  if ($previousPage.url.pathname !== $currentPage.url.pathname) {
   if ($previousPage.data.name) {
    buttonText = $previousPage.data.name
   } else if ($previousPage.data.affiliations?.length) {
    buttonText = tField($previousPage.data.affiliations[0], 'institution', $locale)
   } else if ($previousPage.data.route === '/' || $previousPage.data.route === '') {
    buttonText = $translate("Network view")
   } else {
    buttonText = null;
   }
  }
 }
 
}

</script>

{#if buttonText}
 <div class="back-button">
  <a href={$previousPage.url.href}>
   <img src={backArrowIcon} />
   <span>{$translate("Back to")} {buttonText}</span>
  </a>
  
 </div>
{/if}

<style lang="scss">
 .back-button a {
  color: #00001E !important;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
 }
 
</style>