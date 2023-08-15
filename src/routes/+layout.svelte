<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import { base } from '$app/paths';
	import { page } from '$app/stores';


	let password = ''
	const hash = s =>
			s.split('').reduce((a, b) => {
					a = (a << 5) - a + b.charCodeAt(0)
					return a & a
			}, 0)

		$: passwordProtected = process.env.NODE_ENV === 'production' && hash(password) !== 3556498
			
</script>

	{#if passwordProtected}
		<div>
			<label for="password">Password:</label>
			<input id="password" bind:value={password} type="password" />
		</div>
	{:else}
		<div class="app">
			<Header />
			<main>
				<slot />
			</main>
			<footer>
			</footer>
		</div>
	{/if}
	

	

<svelte:head>
	<!-- <html lang="en" /> -->
	<!-- <link rel="stylesheet" href="fonts/material-icons.css" /> -->
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
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
</style>
