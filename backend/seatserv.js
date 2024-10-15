const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (replace with your MongoDB URI if needed)
mongoose.connect('mongodb://localhost:27017/seatBooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define the Passenger Schema
const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  travelDate: { type: String, required: true },
  bookingTime: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  busId: { type: Number, required: true },
  seats: [{ type: Number, required: true }],
});

// Define the Bus Schema (if you want to store buses in DB)
const busSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  amenities: [String],
  image: { type: String },
  price: { type: String },
});

// Create Passenger and Bus Models
const Passenger = mongoose.model('Passenger', passengerSchema);
const Bus = mongoose.model('Bus', busSchema);

// API endpoint for booking a bus
app.post('/api/book', async (req, res) => {
  const { name, mobile, email, travelDate, bookingTime, paymentMethod, busId, seats } = req.body;

  // Validate required fields
  if (!name || !mobile || !email || !travelDate || !bookingTime || !paymentMethod || !busId || !seats || seats.length === 0) {
    return res.status(400).json({ message: 'Please fill in all fields and select at least one seat.' });
  }

  try {
    // Save passenger and seat information
    const newPassenger = new Passenger({
      name,
      mobile,
      email,
      travelDate,
      bookingTime,
      paymentMethod,
      busId,
      seats,
    });
    
    await newPassenger.save(); // Save passenger booking to MongoDB

    return res.status(201).json({ message: 'Booking successful!', passenger: newPassenger });
  } catch (error) {
    console.error('Error saving booking:', error);
    return res.status(500).json({ message: 'Error occurred during booking. Please try again later.' });
  }
});

// API endpoint to get bus details (optional, if buses stored in DB)
app.get('/api/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    return res.status(200).json(buses);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch buses' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
