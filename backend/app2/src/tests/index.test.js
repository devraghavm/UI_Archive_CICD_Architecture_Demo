const request = require('supertest');
const app = require('../../app');

describe('Sanity test', () => {
  test('2 should equal 2', () => {
    expect(2).toBe(2);
  });
});

describe('Hello endpoint', () => {
  test('should return Hello Message', async () => {
    const res = await request(app).get('/api2/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello from backend /api2!');
  });
});
