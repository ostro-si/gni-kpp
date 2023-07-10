<script>
	import { locale } from '$lib/translations';
	import { base } from '$app/paths';

 $:console.log(locale)

 export let href;
</script>

<a href="{base}/{$locale}/{href}"><slot></slot></a>
