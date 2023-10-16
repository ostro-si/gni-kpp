import i18n from 'sveltekit-i18n';
import { get, derived } from 'svelte/store';



/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('../lang/en.json')
      ).default,
    },
    {
     locale: 'si',
     key: 'common',
     loader: async () => (
       await import('../lang/si.json')
     ).default,
   },
  ],
});

export const defaultLocale = 'en';

const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);

const translate = derived(t, $t => {
  return (key) => $t(`common.${key}`)
})

export { translate, locale, locales, loading, setLocale, setRoute, translations }
