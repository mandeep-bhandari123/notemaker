// src/App.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Navbar from './Navbar';

export default function App() {
  return (
    <Routes>
      <Route path="/"      element={<Home   />} />
      <Route path="/login"  element={<Login  />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Navbar />
      <img className="logo" src={logo} alt="Logo" />
      <div className="button-group">
        <button className="btn login-btn"  onClick={() => navigate('/login')}> Login </button>
        <button className="btn signup-btn" onClick={() => navigate('/signup')}> Sign Up </button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="app-container">
      <Navbar />
      <h2>Login</h2>
    </div>
  );
}

function Signup() {
  return (
    <div className="app-container">
      <Navbar />
      <h2>Signup Page</h2>
    </div>
  );
}
