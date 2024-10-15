// backend/routes/buses.js
const express = require('express');
const Bus = require('../models/Bus');
const router = express.Router();

// Get all buses
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new bus
router.post('/', async (req, res) => {
  const { name, seatingCapacity, amenities, image, price } = req.body;
  const seats = Array(seatingCapacity).fill(false); // Initialize seats to false
  const newBus = new Bus({ name, seatingCapacity, amenities, image, price, seats });
  try {
    await newBus.save();
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
