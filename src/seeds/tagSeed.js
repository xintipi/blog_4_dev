const TagModel = require('../models/tagModel')

exports.seeder = async () => {
  await TagModel.deleteMany()
  await TagModel.insertMany([{ name: 'applications' }, { name: 'frameworks' }])
  console.log('All tag are added.')
}
