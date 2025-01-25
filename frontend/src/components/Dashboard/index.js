import React, { useEffect, useState } from 'react';
import { fetchProtected } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProtected();
        setMessage(res.data.message);
        setLoggedIn(true);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
        if (error.response?.status === 401) {
          setMessage('Access Denied: Unauthorized');
        } else if (error.response?.status === 403) {
          setMessage('Access Denied: You do not have permission');
        } else {
          setMessage('An error occurred while fetching data.');
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>{message}</p>
      {loggedIn && <button className="logout-button" onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Dashboard;
