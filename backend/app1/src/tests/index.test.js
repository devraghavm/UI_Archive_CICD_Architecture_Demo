const request = require('supertest');
const app = require('../../app');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

describe('Hello endpoint', () => {
  test('should return Hello Message', async () => {
    const res = await request(app).get('/api1/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello from backend /api1!');
  });
});
