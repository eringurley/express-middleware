const request = require('superagent');


const getRandomQuote = (n, characters = 'Fry') => {
  return request(`http://futuramaapi.herokuapp.com/api/characters/${characters}/${n}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};
