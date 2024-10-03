const mongoose = require('mongoose');

// Construct the MongoDB URI using environment variables
const url = `mongodb+srv://sarahqasim024740:Sarah0123@cluster0.48uvb.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));