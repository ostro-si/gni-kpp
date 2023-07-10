import i18n from 'sveltekit-i18n';

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

export const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);