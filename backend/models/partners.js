const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
  title: { type: String, required: true },
  pageurl: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      "alt-text": { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Partner', partnerSchema);
