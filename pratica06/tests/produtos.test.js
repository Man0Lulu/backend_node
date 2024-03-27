const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
describe('Teste da API Produtos', function(){
test('POST /produtos retorna status 201 e conteúdo JSON correto', async () => {
    const response = await request.post('/produtos')
      .send({ "nome": "uva", "preco": 20.00 });
  
    expect(response.status).toBe(201);
  
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
  });
  test('GET /produtos retorna 200 e conteúdo', async () => {
    const response = await request.get('/produtos')
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  test('GET /produtos/1 e retorna status 200', async () => {
    const response = await request.get('/produtos/1')
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
  });
  test('GET /produtos/100 e retorna status 404', async () =>{
    const response = await request.get('produtos/100')
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado");
  });
  test('POST /produtos sem JSON retorna status 422 e mensagem de erro adequada', async () => {
    const response = await request.post('/produtos');
    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty({ msg: 'Nome e preço do produtos são obrigatórios' });
    });
    test('PUT /produtos/1 com um JSON nome e preço', async() => {
    const response = await  request.put('/produtos/1')
    .send({"nome": "uva verde", "preco": 18.00});
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
    });
    test('DELETE /produtos/1 com o status 204 e um conteudo JSON ', async() => {
    const response = await request.delete('/produtos/1')
    expect(response.status).toBe(204);
    expect(response.body).toHaveProperty({});
    });
    test('DELETE /produtos/100 retorna status 404 e mensagem correta', async () => {
        const response = await request.delete('/produtos/100')
        expect(response.status).toBe(404);     
        expect(response.body).toHaveProperty({ msg: 'Produto não encontrado' });
      });

});