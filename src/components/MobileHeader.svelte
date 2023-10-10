<script>
	import { t, setLocale, locale, setRoute } from '$lib/translations';
 import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let appBar;

</script>

<TopAppBar bind:this={appBar} variant="fixed">
  <Row>
   <Section>
     <Title>{$t('common.app_title')}</Title>
   </Section>
   <Section align="end" toolbar>
     <IconButton class="material-icons">menu</IconButton>
   </Section>
 </Row>
</TopAppBar>

<!-- 
<header class="header">
	<div class="header__left mobile-hide">
		<LocalizedLink href="/">
			<img src={logo} alt="Home" />
		</LocalizedLink>
		<HeaderAboutMenu />
		<div>
			{#if searchOpen}
				<Search bind:searchOpen />
			{:else}
				<Button on:click={toggleSearch}>
					<Label>{$t('common.header.search')}</Label>
				</Button>
			{/if}
		</div>
	</div>
	
	<h3 class="header__title">{$t('common.app_title')}</h3>
	<div class="header__right mobile-hide">
		<div>
			<LocalizedLink href="/about">{$t('common.header.stories')}</LocalizedLink>
		</div>
		<div>
			<LocalizedLink href="/about">{$t('common.header.asset_tracker')}</LocalizedLink>
		</div>
		{#if $locale === 'en'}
			<Button on:click={() => { setLocale('si'); goto(`${base}/si${$page.data.route}`) }}>
				<img src={languageSi} alt="Switch language" />
			</Button>
		{:else}
			<Button on:click={() => { setLocale('en'); goto(`${base}/en${$page.data.route}`) }}>
				<img src={languageEn} alt="Switch language" />
			</Button>
		{/if}
	</div>
	
</header> -->

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		background-color: #00001E;
		padding: 1px 10px;
		position: fixed;
		width: 100%;
		z-index: 100;
		color: white;
		min-height: 59px;
		
		&__left, &__right {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__title {
			font-family: Noe Display;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	:global(.mdc-button__label) {
		color: #fff;
		text-transform: capitalize;
	}
</style>
