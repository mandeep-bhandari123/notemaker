// src/Login.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css'; // or a separate Login.css if needed

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Login failed');
      alert('Login successful!');
      // You can save token here: localStorage.setItem('token', data.access_token)
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
