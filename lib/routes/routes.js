const { Router } = require('express');

const quotes = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favoriteCharacter,
    } = req.body;
    
    const {
      quote
    } = req.quote;

    const profile = {
      name,
      favoriteCharacter,
      quote
    };

    quotes.push(profile);
    res.send(profile);
  })

  .get('/', (req, res) => {
    res.send(quotes);
  })

  .get('/:id', (req, res) => {
    res.send(quotes[req.params.id]);
  })

  .patch('/:id', (req, res) => {
    const {
      name,
      favoriteCharacter,
    } = req.body;

    const {
      quote
    } = req.quote;

    const updatedQuote = {
      name,
      favoriteCharacter,
      quote
    };
    quotes[req.params.id] = updatedQuote;
    res.send(quotes[req.params.id]);
  })

  .delete('/:id', (req, res) => {
    const deleted = quotes.splice(req.params.id, 1);
    res.send(deleted[0]);
  });
