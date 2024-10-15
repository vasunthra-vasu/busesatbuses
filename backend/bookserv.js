const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
const PORT = 5004;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = 'mongodb://localhost:27017/busBooking'; // Replace this with your MongoDB URI if using Atlas or another service
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Booking Schema Definition
const bookingSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  busType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Booking Model
const Booking = mongoose.model('Booking', bookingSchema);

// API route for booking a bus
app.post('/api/bookings', async (req, res) => {
  const { from, to, busType } = req.body;

  // Validate the input data
  if (!from || !to || !busType) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  try {
    // Create a new booking document
    const newBooking = new Booking({ from, to, busType });
    await newBooking.save(); // Save the booking data to MongoDB

    // Send a success response
    res.status(201).json({ message: 'Booking created successfully!' });
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).json({ message: 'Failed to create booking, please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
