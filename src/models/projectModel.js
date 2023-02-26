const mongoose = require('mongoose')
const validator = require('validator')

const projectSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    index: true,
    auto: true,
    unique: true,
  },
  tagId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Tag' },
  projectName: { type: String, required: true },
  tagName: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return validator.isURL(v)
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  altThumbnail: { type: String, required: true },
  preview: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return validator.isURL(v) || v === ''
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema)
