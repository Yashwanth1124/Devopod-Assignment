import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'
// Helper function to check if the user is logged in
const isLoggedIn = () => {
  return !!localStorage.getItem('token');  // Check if token is in localStorage
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Welcome to the App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/register" className="nav-button">Register</Link>
              </li>
              <li>
                <Link to="/login" className="nav-button">Login</Link>
              </li>
              {isLoggedIn() && (
                <li>
                  <Link to="/dashboard" className="nav-button">Dashboard</Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
