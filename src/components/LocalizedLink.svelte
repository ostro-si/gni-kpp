<script>
	import { locale } from '$lib/translations';
	import { base } from '$app/paths';
	import Button, { Label } from '@smui/button'

	export let onClick;
 export let href;
 export let forceLocale;
</script>

<Button href="{base}/{forceLocale || $locale}{href}" on:click={onClick}><slot></slot></Button>
