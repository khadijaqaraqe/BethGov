const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const articleSchema = mongoose.Schema({

  author: { type: String, required: true },
  creator: { type: ObjectId, ref: "User" },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date:  { type: String, default: new Date() },
  time: { type: Date, required: true,  default: () => Date.now().getTime() },
  category: { type: String, required: true },
  type: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      "alt-text": { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Article', articleSchema);
