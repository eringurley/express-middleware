const express = require('express');
const app = express();
const quoteRoutes = require('./routes/futurama');
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api/quotes', routes);
app.use(quoteRoutes);

module.exports = app;
