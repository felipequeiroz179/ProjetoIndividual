var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM empresa;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(email, senha) {
  console.log(
    "ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE Email = '${email}' AND Senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(
  nomeFantasia,
  cnpj,
  RazaoSocial,
  telefone,
  rua,
  numero,
  bairro,
  cidade,
  estado,
  cep
) {
  console.log(
    "ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nomeFantasia
  );

  var instrucao1 = `
        INSERT INTO Empresa (NomeFantasia, CNPJ, RazaoSocial, Telefone, Rua, Numero, Bairro, Cidade, Estado, CEP) VALUES
        ('${nomeFantasia}', '${cnpj}', '${RazaoSocial}', '${telefone}', '${rua}', '${numero}', '${bairro}', '${cidade}', '${estado}', '${cep}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao1);
  return database.executar(instrucao1);
}

module.exports = {
  entrar,
  cadastrar,
  listar,
};
