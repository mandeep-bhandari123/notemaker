// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './logo.png';
import './App.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <Navbar />
      <img className="logo" src={logo} alt="Logo" />
      <div className="button-group">
        <button className="btn login-btn" onClick={() => navigate('/login')}> Login </button>
        <button className="btn signup-btn" onClick={() => navigate('/signup')}> Sign Up </button>
      </div>
    </div>
  );
}
