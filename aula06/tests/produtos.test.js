//cabeçalho obrigatorio dos testes

const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('Teste da API Produtos', function(){
    test("POST / deve retornar 201 um array JSON", async function(){
        const novo = {nome: "uva", preco: 18.00}; 
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201);
        expect(response.type).toBe("application/json"); //testando se é JSON
        expect(response.body).toHaveProperty("id"); //testando se tem conteúdo 
        expect(response.body).toHaveProperty("nome", novo.nome); //testando se é o conteudo
        expect(response.body).toHaveProperty("preco", novo.preco);
    });

    test("POST / deve retornar 422 um objeto JSON", async function(){
        const response = await request.post("/produtos");
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Nome e preço são obrigatórios");
    });


    test(" GET / deve retornar 200 um array JSON", async function(){
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json"); 
        expect(Array.isArray(response.body)).toBe(true); //testando se é um array
    });
    test("GET /id deve retornar 200 um objeto JSON", async function(){
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("id"); 
        expect(response.body).toHaveProperty("nome");
        expect(response.body).toHaveProperty("preco");
    });
    test("GET /id deve retornar 201 um objeto JSON", async function(){
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Produto não encontrado");
    });
    test("PUT /id deve retornar 200 um objeto JSON", async function(){
        const atual = {nome: "uvan", preco: 2345678.00}; 
        const response = await request.put("/produtos/1").send(atual);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json"); //testando se é JSON
        expect(response.body).toHaveProperty("id"); //testando se tem conteúdo 
        expect(response.body).toHaveProperty("nome", atual.nome); //testando se é o conteudo
        expect(response.body).toHaveProperty("preco", atual.preco);
    });
    test("PUT /id deve retornar 422 um objeto JSON", async function(){
        const response = await request.post("/produtos");
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Nome e preço são obrigatórios");

    });
    test("PUT /id deve retornar 404 um objeto JSON", async function(){
        const response = await request.put("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Produto não encontrado");

    });
    test("DELETE /id deve retornar 204 e sem corpo", async function(){
        const response = await request.delete("/produtos/1");
        expect(response.status).toBe(204);
        expect(response.type).toBe(""); //testando se é JSON
        expect(response.body).toEqual({}); 


    });
    test("DELETE /id deve retornar 404 um objeto JSON", async function(){
        const response = await request.delete("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json"); 
        expect(response.body).toHaveProperty("msg", "Produto não encontrado");


    });
});