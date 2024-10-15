// backend/models/Bus.js
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  amenities: { type: [String], required: true },
  image: { type: String },
  price: { type: String, required: true },
  seats: { type: [Boolean], required: true }, // Array to keep track of seat availability
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
