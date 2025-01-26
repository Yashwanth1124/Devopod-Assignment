import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/api';
import './index.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Logging in with:', formData); // Debugging log
      const res = await login(formData);
      console.log('Login response:', res); // Debugging log
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error); // Debugging log
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
