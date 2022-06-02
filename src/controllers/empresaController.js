var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA empresaController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  empresaModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function entrar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    empresaModel
      .entrar(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  var razaoSocial = req.body.razaoSocialServer;
  var nomeFantasia = req.body.nomeFantasiaServer;
  var telefone = req.body.telefoneServer;
  var cnpj = req.body.cnpjServer;
  var cep = req.body.cepServer;
  var rua = req.body.ruaServer;
  var numero = req.body.numeroServer;
  var bairro = req.body.bairroServer;
  var cidade = req.body.cidadeServer;
  var estado = req.body.estadoServer;
  var nomeUsuario = req.body.nomeUsuarioServer;
  var sobrenomeUsuario = req.body.sobrenomeUsuarioServer;
  var emailUsuario = req.body.emailUsuarioServer;
  var cpf = req.body.cpfUsuarioServer;
  var telUsuario = req.body.telUsuarioServer;
  var senha = req.body.senhaServer;
  var tipo = req.body.tipoUsuarioServer;
  console.log(req, res);

  if (nomeFantasia == undefined) {
    res.status(400).send("Seu nome fantasia está undefined!");
  } else if (cnpj == undefined) {
    res.status(400).send("Seu cnpj está undefined!");
  } else if (razaoSocial == undefined) {
    res.status(400).send("Sua razao social está undefined!");
  } else if (telefone == undefined) {
    res.status(400).send("Seu telefone está undefined!");
  } else if (rua == undefined) {
    res.status(400).send("Sua rua está undefined!");
  } else if (numero == undefined) {
    res.status(400).send("Seu número está undefined!");
  } else if (bairro == undefined) {
    res.status(400).send("Sua bairro está undefined!");
  } else if (cidade == undefined) {
    res.status(400).send("Sua cidade está undefined!");
  } else if (estado == undefined) {
    res.status(400).send("Sua estado está undefined!");
  } else if (cep == undefined) {
    res.status(400).send("Sua cep está undefined!");
  } else if (nomeUsuario == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (sobrenomeUsuario == undefined) {
    res.status(400).send("Seu sobrenome está undefined!");
  } else if (emailUsuario == undefined) {
    res.status(400).send("Seu emailUsuario está undefined!");
  } else if (cpf == undefined) {
    res.status(400).send("Seu cpf está undefined!");
  } else if (telUsuario == undefined) {
    res.status(400).send("Seu telefoneUsuario está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (tipo == undefined) {
    res.status(400).send("Seu tipo está undefined!");
  } else {
    console.log("Chegou no Controller");
    empresaModel
      .cadastrar(
        nomeFantasia,
        cnpj,
        razaoSocial,
        telefone,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep
      )
      .then(function (resultado) {
        console.error("Resultado:" + resultado);
        empresaModel.selecionarFkEmpresa().then(function (resultado) {
          console.log("Chegou na função de cadastrar master");
          console.error(resultado);
          var fkEmpresa = resultado[0].idEmpresa;
          empresaModel
            .cadastrarUsuarioMaster(
              nomeUsuario,
              sobrenomeUsuario,
              emailUsuario,
              cpf,
              telUsuario,
              senha,
              tipo,
              fkEmpresa
            )
            .then((resposta) => {
              res.json(resposta);
            });
        });
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  entrar,
  cadastrar,
  listar,
  testar,
};
