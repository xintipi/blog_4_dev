const TagModel = require('../models/tagModel')
const mongooseDb = require('../lib/mongoose')

module.exports.getTagList = async () => {
  await mongooseDb.connect()
  return TagModel.find().exec()
  // return LanguageModel.find().exec()
}
