const supertest = require('supertest');
const app = require('./index');
const request = supertest(app);

test('GET / returns status code 200', async () => {
  const response = await request.get('/');
  expect(response.statusCode).toBe(200);
});

test('POST / returns status code 201', async () => {
  const response = await request.post('/');
  expect(response.statusCode).toBe(201);
});

test('PUT / returns status code 200', async () => {
  const response = await request.put('/');
  expect(response.statusCode).toBe(200);
});

test('DELETE / returns status code 204', async () => {
  const response = await request.delete('/');
  expect(response.statusCode).toBe(204);
});
								