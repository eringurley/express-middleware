const express = require('express');
const app = express();
const quoteRoutes = require('./routes/futurama');
const routes = require('./routes/routes');
const middleware = require('./middleware/quote');

app.use(express.json());
app.use('/api/quotes', middleware, routes);
app.use(quoteRoutes);

module.exports = app;
