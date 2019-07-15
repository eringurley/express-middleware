const request = require('supertest');
const app = require('../lib/app');

describe('items routes', () => {
  it('can create an item with POST', () => {
    return request(app)
      .post('/api/quotes')
      .send({
        name: 'ryan',
        favoriteCharacter: 'Fry',
        quote: ''
      })
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual({
          name: 'ryan',
          favoriteCharacter: 'Fry',
          quote: ''
        });
      });
  });

  it('can get an object with GET', () => {
    return request(app)
      .get('/api/quotes')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'ryan',
          favoriteCharacter: 'Fry',
          quote: ''
        }]);
      });
  });

  it('can get a specific object with GET', () => {
    return request(app)
      .get('/api/quotes')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'ryan',
          favoriteCharacter: 'Fry',
          quote: ''
        }]);
      });
  });

  it('can update an item with patch', () => {
    const updatedQuote = {
      name: 'erin',
      favoriteCharacter: 'Bender',
      quote: ''
    };
    return request(app)
      .patch('/api/quotes/1')
      .send(updatedQuote)
      .then(res => {
        expect(res.body).toEqual({
          name: 'erin',
          favoriteCharacter: 'Bender',
          quote: ''
        });
      });
  });

  it('can delete an item by index', () => {
    return request(app)
      .delete('/api/quotes/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'erin',
          favoriteCharacter: 'Bender',
          quote: ''
        });
      });
  });
});
