<script>
	import { setContext } from 'svelte';
	import '../app.scss';
	import '../app.scss';
	import Header from '../components/Header.svelte';
	import './styles.css';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { currentPage, previousPage } from '../stores'
	import MediaQuery, { platform } from '../components/MediaQuerySsr.svelte';

	const images = import.meta.glob('$lib/img/**.png', { 
  query: { w: '100', h: '100', format: 'webp', grayscale: 'true' },
		eager: true
	});

	setContext("images", images)

	let password = '';
	const hash = (s) =>
		s.split('').reduce((a, b) => {
			a = (a << 5) - a + b.charCodeAt(0);
			return a & a;
		}, 0);

	$: passwordProtected = process.env.NODE_ENV === 'production' && hash(password) !== -1258221729;

	$: {
		if ($currentPage?.data?.route !== $page.data.route) {
			$currentPage = $page
		}
	}

	$: console.log($currentPage, $previousPage)
</script>

<MediaQuery />
{#if passwordProtected}
	<div class="password-container">
		<label for="password">Password:</label>
		<input id="password" bind:value={password} type="password" />
	</div>
{:else}
	<div class="app">
		<!-- {#if $platform === 'mobile'}
			<MobileHeader />
		{:else} -->
			<Header />
		<!-- {/if} -->
		
		<main>
			<slot />
		</main>
		<!-- <footer /> -->
	</div>
{/if}

<svelte:head>
	<!-- <html lang="en" /> -->
	<link href="https://fonts.googleapis.com/css2?family=Material+Icons"
	rel="stylesheet">
		<!-- <link rel="stylesheet" href="fonts/roboto.css" />
	<link rel="stylesheet" href="fonts/roboto-mono.css" />
	<link rel="stylesheet" href="mdc.typography.14.0.0.css" /> -->
	<link rel="stylesheet" href="{base}/smui.css" />
</svelte:head>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		margin-top: 61px;
		/* margin: 60px auto 0; */
		box-sizing: border-box;
		overflow-x: hidden;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	label {
		font-weight: bold;
	}
	input[type='password'] {
		width: 200px;
	}

	.password-container {
		margin: 20px;
	}
</style>
