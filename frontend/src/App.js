import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Summarize from './summarize';
import { AnimatePresence } from 'framer-motion';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return !isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/summarize"
          element={
            <PrivateRoute>
              <AnimatedPage>
                <Summarize />
              </AnimatedPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AnimatedPage>
                <Login />
              </AnimatedPage>
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <AnimatedPage>
                <Signup />
              </AnimatedPage>
            </PublicRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
