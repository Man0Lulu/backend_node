const produtos = [];

function listarTodos(req, res){
    res.json(produtos);
}
function exibir(req, res){
    const { produtoEncontrado } = req;
    res.json(produtoEncontrado);
}

function buscarPeloId(req, res, next){
    const { produtoId } = req.params; //{chave1: valor1, chave2: valor2}
    const produtoEncontrado = produto.find(item => item.id == produtoId);
    if(produtoEncontrado){
       req.produtoEncontrado = produtoEncontrado;
       next();
    } else{
        res.status(404).json({msg: "Produto não encontrado"});
    }
}

function criar(req, res){
    const { nome, preco } = req.body;
    const produtoNovo = { id: produtos.length+1, nome, preco }
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo);

}

function atualizar(req, res){
    const { nome, preco } = req.body;
    const { produtoEncontrado } = req;
    produtoEncontrado.nome = nome;
    produtoEncontrado.nome = preco;
    res.json(produtoEncontrado);
}

function remover(req, res){
    const { produtoId } = req.params;
    const posicao = produtos.findIndex(item => item.id == produtoId);
    if (posicao >= 0) {
        produtos.splice(posicao, 1);
        res.status(204).end();
    }
}

module.exports = {listarTodos, exibir, buscarPeloId, criar, atualizar, remover }