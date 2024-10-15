const express = require('express');
const mongoose = require('mongoose');
const config = require('./Routes/config');
const authRoutes = require('./Routes/auth'); // Ensure this path is correct

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes); // Register your routes

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
