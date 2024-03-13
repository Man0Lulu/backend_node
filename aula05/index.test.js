const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

describe('Teste da API /produtos', function() {
  test('Deve retornar 200 e um JSON no GET /produtos', async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 200 e um JSON no GET /produtos/id', async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 404 e um JSON no GET /produtos/id', async () => {
    const response = await request.get("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 201 e um JSON no POST /produtos', async () => {
    const response = await request.post("/produtos")
      .send({nome: "Banana", preco: 15.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 422 e um JSON no POST /produtos', async () => {
    const response = await request.post("/produtos").send({});
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 200 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put("/produtos/1")
      .send({nome: "Uva globo", preco: 21.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 404 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })

  test('Deve retornar 204 e vazio no DELETE /produtos/id', async () => {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  })

  test('Deve retornar 404 e um JSON no DELETE /produtos/id', async () => {
    const response = await request.delete("/produtos/100000");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
  })
});
