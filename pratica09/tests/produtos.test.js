const request = require('supertest');
const app = require('./app');

describe('GET /api-docs', () => {
    it('deve retornar um objeto JSON 200', async () => {
      const response = await request(app).get('/api-docs');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Busca de usuario');
    });
  });