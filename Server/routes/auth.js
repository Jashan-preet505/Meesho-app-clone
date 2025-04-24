const User = require('../models/User.js');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const app = express();

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Step 1: Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Step 2: Create new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: hashedPassword // ideally hash this first (next step!)
      });
  
      // Step 3: Save to database
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports = router;
  