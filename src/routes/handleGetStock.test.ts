import * as request from 'supertest';
import app from '../app';

describe('GET /stock', () => {
  it('should return greeting "Hello World!"', () => {
    return request(app)
      .get('/stock')
      .expect('Content-Type', /json/)
      .expect(200, {
        outcome: 'SUCCESS',
        stock: [
          {
            quantity: 10,
            id: '1',
            type: '',
          },
        ],
      });
  });
});
