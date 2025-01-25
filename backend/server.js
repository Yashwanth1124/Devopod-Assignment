const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware'); // Import the middleware

require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected Route (Admin Only)
app.get('/api/protected', authMiddleware(['Admin']), (req, res) => {
    res.json({ message: 'Welcome, Admin! You have access to this protected route.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
