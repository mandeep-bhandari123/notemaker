import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/signup" element={<AnimatedPage><Signup /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}
