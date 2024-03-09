const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 no GET", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);
});

test("Deve retornar 204 no PUT", async function(){
    const response = await request.put("/");
    expect(response.status).toBe(204);
})