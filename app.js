const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

const webRoutes = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

const app = express();

/* =========================
   MongoDB Connection
========================= */
const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';

mongoose
  .connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

/* =========================
   Middleware
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   View Engine
========================= */
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

/* =========================
   Static Files
========================= */
app.use(express.static(path.join(__dirname, 'public')));

/* =========================
   Routes
========================= */
app.use('/api', apiRoutes);
app.use('/', webRoutes);

/* =========================
   404 Handler
========================= */
app.use((req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.status(404).send('Page not found');
});

/* =========================
   Server
========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

