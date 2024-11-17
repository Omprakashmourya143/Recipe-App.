const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

// Initialize express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json()); // You can also use body-parser, but express has built-in JSON parser

// Connect to the database
connectDB();

// Use routes
app.use('/api', recipeRoutes);

// Default route for testing server
app.get('/', (req, res) => {
  res.send('Welcome to the Recipes API!');
});

// Set the port to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
