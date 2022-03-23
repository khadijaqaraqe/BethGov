const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema({

  creatorName: { type: String, required: true },
  IdNumber: { type: Number, required: true },
  PhoneNumber: { type: Number, required: true },
  Topic: { type: String, required: true },
  ComplaintAssociation: { type: String, required: true },
  Text: { type: String, required: true },
  date:  { type: String, default: new Date() }, // "Sun, 3PM" },
  time: { type: Date, required: true,  default: () => Date.now().getTime() }
});

module.exports = mongoose.model('Complaint', complaintSchema);
