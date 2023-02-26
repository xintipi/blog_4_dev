const ProjectModel = require('../models/projectModel')
const tagModel = require('../models/tagModel')
const mongooseDb = require('../lib/mongoose')

module.exports.getProjectList = async (tag) => {
  await mongooseDb.connect()
  if (tag === 'all') return await ProjectModel.find().exec()
  const tagObj = await tagModel.findOne({ name: tag })
  return await ProjectModel.find({ tagId: tagObj.tagId }).exec()
}
