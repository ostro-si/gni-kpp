<script>
	import { t, setLocale, locale, setRoute } from '$lib/translations';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';  
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button'
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';
	
	import HeaderAboutMenu from './HeaderAboutMenu.svelte';
	import logo from '$lib/images/icon-network.svg';
	import languageEn from '$lib/images/language-en.svg';
	import languageSi from '$lib/images/language-si.svg';
	import LocalizedLink from './LocalizedLink.svelte';

</script>

<header class="header">
	<div class="header__left mobile-hide">
		<LocalizedLink href="/">
			<img src={logo} alt="Home" />
		</LocalizedLink>
		<HeaderAboutMenu />
		<div aria-current={$page.url.pathname === '{base}/about' ? 'page' : undefined}>
			<LocalizedLink href="/about">{$t('common.header.search')}</LocalizedLink>
		</div>
	</div>
	
	<h3 class="header__title">{$t('common.app_title')}</h3>
	<div class="header__right mobile-hide">
		<div aria-current={$page.url.pathname === '{base}/about' ? 'page' : undefined}>
			<LocalizedLink href="/about">{$t('common.header.stories')}</LocalizedLink>
		</div>
		<div aria-current={$page.url.pathname === '{base}/about' ? 'page' : undefined}>
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
	
</header>

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
		
		&__left, &__right {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__title {
			font-family: Noe Display;
		}
	}

	:global(.mdc-button__label) {
		color: #fff;
		text-transform: capitalize;
	}
</style>
