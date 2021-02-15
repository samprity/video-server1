const { model, Schema } = require('mongoose');

const videoSchema = new Schema({
  _id: String,
  url: String
})

module.exports = model('Video', videoSchema)