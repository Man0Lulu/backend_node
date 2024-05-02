const modelo = require("./modelo");

function criarContato(nome, email, telefone) {
  const contato = new modelo.Contato(nome, email, telefone);
  const { id } = modelo.inserir(contato);
  contato.id = id;
  return { ...contato };
}

function atualizarContato(nome, email, telefone) {
  const contato = consultarContato(nome);
  if (contato) {
    contato.email = email;
    contato.telefone = telefone;
    modelo.alterar(contato);
  }
  return { ...contato };
}

function consultarContato(nome) {
  const contato = new modelo.Contato(nome);
  const { id, email, telefone } = modelo.consultar(contato);
  contato.id = id;
  contato.email = email;
  contato.telefone = telefone;
  return { ...contato };
}

function removerContato(nome) {
  const contato = consultarContato(nome);
  if (contato) {
    modelo.deletar(contato);
  }
  return { ...contato };
}

module.exports = {
  criarContato,
  atualizarContato,
  consultarContato,
  removerContato,
};
