const mongoose = require('mongoose');

const directorateSchema = mongoose.Schema({

  title: { type: String, required: true },
  director: { type: String, required: true },
  pageurl: { type: String, required: true },
  location:  { type: String, required: true },
  phoneNumbers: [
    {
      number1: { type: Number, required: true },
      number2: { type: Number, required: false },
      fax: { type: Number, required: false }
    }
  ],
  socialLinks:  [
    {
      facebook: { type: String, required: false },
      instagram: { type: String, required: false },
      twitter: { type: String, required: false },
      linkedin: { type: String, required: false },
      whatsapp: { type: String, required: false },
      youtube: { type: String, required: false },
    }
  ],
  GoogleMapLocation: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      "alt-text": { type: String, required: true }
    }
  ]

});

module.exports = mongoose.model('Directorate', directorateSchema);
