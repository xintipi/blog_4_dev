const mongoose = require('mongoose')
const validator = require('validator')

const languageSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  sourceTarget: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return validator.isURL(v)
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  pathImg: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return validator.isURL(v)
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Language || mongoose.model('Language', languageSchema)
