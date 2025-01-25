import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import the useNavigate hook
import { login } from '../../services/api';
import './index.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log('Token:', res.data.token);
      localStorage.setItem('token', res.data.token);  // Store token in localStorage
      setMessage('Login successful!');
      navigate('/dashboard');  // Redirect to dashboard after successful login
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>{message}</p>
        <p>Don't have an account? <Link to="/register">Create one here</Link></p>
      </form>
    </div>
  );
};

export default Login;
