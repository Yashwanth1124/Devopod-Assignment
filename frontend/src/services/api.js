import axios from 'axios';

// Create an axios instance with a base URL
const API = axios.create({
  baseURL: 'https://devopod-assignment.onrender.com/api', // Replace with your backend API URL
});

// Add a token to every request if available
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    if (token) {
      req.headers.Authorization = `Bearer ${token}`; 
      console.log('Token in request:', req.headers.Authorization);// Correct format for Authorization header
    }
    return req;
  },
  (error) => {
    // Handle error in request
    return Promise.reject(error);
  }
);

// Register a new user
export const register = (data) => {
  return API.post('/auth/register', data); // Send POST request to /auth/register
};

// Login an existing user
export const login = (data) => {
  return API.post('/auth/login', data); // Send POST request to /auth/login
};

// Fetch protected data (test route in this case)
// Fetch protected data (test route in this case)
export const fetchProtected = () => {
  return API.get('/protected'); // Corrected endpoint
};

