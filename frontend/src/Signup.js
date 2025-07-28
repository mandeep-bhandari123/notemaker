// src/Signup.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) throw new Error('SignUp failed');
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div style={styles.appContainer}>
      <Navbar />
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Create Account</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    flexDirection: 'column',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    marginTop: '20px',
  },
  heading: {
    marginBottom: '25px',
    color: '#333',
    fontWeight: '700',
    fontSize: '1.8rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  input: {
    padding: '14px 18px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1.8px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '14px 18px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2575fc',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
