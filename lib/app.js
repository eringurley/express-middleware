const express = require('express');
const app = express();
const quoteRoutes = require('./routes/futurama');

app.use(express.json());
app.use('/api/quotes/', quoteRoutes);

module.exports = app;
