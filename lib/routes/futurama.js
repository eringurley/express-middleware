const { Router } = require('express');
const quote = require('../middleware/qoute');

module.exports = Router()
  .get('/random', quote, (req, res) => {
    res.send(req.quote);
  });
