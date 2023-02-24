const localeNameModule = require('./src/enums/localeName.js')
const path = require('path')

const locales = localeNameModule.localeName()

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: locales.en,
    locales: [locales.en, locales.vi],
    fallback: locales.en,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
}
