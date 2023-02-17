module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    fallbackLng: 'en',
    // reloadOnPrerender option
    // next-i18next will reload our translations when we make changes to our translation files.
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
}
