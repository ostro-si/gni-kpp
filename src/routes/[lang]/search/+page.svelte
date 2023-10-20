<script>
 import Search from "../../../components/Search/Search.svelte";
 import { translate } from '$lib/translations';

</script>

<div class="title">{$translate('Search for people, political parties, or institutions')}</div>
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