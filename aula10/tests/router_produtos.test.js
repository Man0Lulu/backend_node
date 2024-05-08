const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

let id = null;

describe('API Loja Virtual', () => {
    test('Deve retornar 201 e um JSON no post /produtos', async() => {
        const response = await request.post('/produtos').send({nome: "banana", preco: 12.0})
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id
        console.log(id);
    });
});