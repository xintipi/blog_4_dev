const localeNameModule = require('./src/enums/localeName.js')

const locales = localeNameModule.localeName()

module.exports = {
  i18n: {
    defaultLocale: locales.en,
    locales: [locales.en, locales.vi],
    fallbackLng: locales.en,
    // reloadOnPrerender option
    // next-i18next will reload our translations when we make changes to our translation files.
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    localeDetection: false,
  },
}
