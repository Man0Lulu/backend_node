class Contato {
    constructor(nome, email, telefone) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.id = null;
    }
  }
  
  function inserir(contato) {}
  
  function alterar(contato) {}
  
  function consultar(contato) {}
  
  function deletar(contato) {}
  
  module.exports = { Contato, inserir, alterar, consultar, deletar };