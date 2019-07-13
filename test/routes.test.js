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
});
