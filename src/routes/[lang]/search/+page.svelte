<script>
 import Search from "../../../components/Search/Search.svelte";
 import { t } from '$lib/translations';

</script>

<div class="title">{$t('Search for people, political parties, or institutions')}</div>
<div class="search">
 <Search />
</div>

<style lang="scss">
 .title {
  margin: 20px;
 }
 .search {
  margin: 0 20px;
 }
</style>