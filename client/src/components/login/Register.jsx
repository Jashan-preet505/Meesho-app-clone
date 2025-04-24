// RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Registration successful!');
      } else {
        setMessage(data.message || 'Registration failed');
      }
    } catch (err) {
      console.log(err);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete='email'
      /><br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete='new-password'
      /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
