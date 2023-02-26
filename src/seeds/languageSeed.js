const LanguageModel = require('../models/languageModel')
const moduleToLanguage = require('../data/language')

exports.seeder = async () => {
  await LanguageModel.deleteMany()
  await LanguageModel.insertMany(moduleToLanguage.data)
  console.log('All Language are added.')
}
