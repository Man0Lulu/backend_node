const supertest = require('supertest');
const app = require('../app');
const request = supertest(app)

let id = null

describe('POST /produtos', () => {
  it('deve reotrnar um objeto JSON 201', async () => {
    const response = await request.post('/produtos')
    .send({"nome": "uva", "preco": 20.0})
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('nome','UVA')
    id = response.body._id.toString()
  })
})