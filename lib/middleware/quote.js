const { getRandomQuote } = require('../services/futurama/Api');

module.exports = (req, res, next) => {
  return getRandomQuote(1)
    .then(([quote]) => req.quote = quote)
    .then(() => next());
};
