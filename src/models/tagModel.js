const mongoose = require('mongoose')

const languageSchema = new mongoose.Schema({
  tagId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    index: true,
    auto: true,
    unique: true,
  },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Tag || mongoose.model('Tag', languageSchema)
