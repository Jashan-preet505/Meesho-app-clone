const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); 

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// 👉 Import your route
const authRoutes = require('./routes/auth.js');

// 👇 Use the route
app.use('/api', authRoutes); // Now /api/register will work

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
