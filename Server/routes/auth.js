const User = require('../models/User.js');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');

fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password})
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

    // Create JWT if credentials are valid
    const token = jwt.sign(
      { id: user._id, email: user.email },
      'your_jwt_secret', // Use env variable!
      { expiresIn: '1h' }
    );
    res.json({ token }); // Send JWT to client
  });
  
  localStorage.setItem('token', receivedToken);
   
  fetch('/api/dashboard', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) return res.sendStatus(403); // invalid/expired token
      req.user = user; // decoded payload
      next();
    });
  };

  // Protect this route
app.get('/api/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.email}` });
});


  module.exports = router;
  