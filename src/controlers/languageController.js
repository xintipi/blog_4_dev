const LanguageModel = require('../models/languageModel')
const mongooseDb = require('../lib/mongoose')

module.exports.getLanguageList = async () => {
  await mongooseDb.connect()
  return LanguageModel.find().exec()
}
