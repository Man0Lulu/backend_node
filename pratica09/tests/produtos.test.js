const supertest = require('supertest');
const app = require('./app');
const request = supertest(app)

let id = null
describe('GET /api-docs', () => {
    it('deve retornar um objeto JSON 200', async () => {
      const response = await request(app).get('/api-docs');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Busca de usuario');
    });
  });
describe('POST /produtos', () => {
  it('deve reotrnar um objeto JSON 201', async () => {
    const response = await request.post('/produtos')
    .send({"nome": "uva", "preco": 20.0})
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nome','uva')
    id = response.body._id.toStringfef34
  })
})