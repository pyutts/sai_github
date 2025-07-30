require('dotenv').config();
const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// Middleware
app.use(express.json()); // Parse JSON request bodies

// // API Routes
app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check / Root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API!');
});

// Start server
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "localhost";
app.listen(PORT, () => {
  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
