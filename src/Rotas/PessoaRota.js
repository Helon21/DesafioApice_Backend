const express = require('express');
const pessoaRouter = express.Router();
const pessoaController = require('../controller/PessoaController');

pessoaRouter.get('/pessoas/buscar', pessoaController.BuscarTodos);
pessoaRouter.get('/pessoas/buscar/:id', pessoaController.BuscarPorId);
pessoaRouter.post('/pessoas/cadastrar', pessoaController.CadastrarPessoa);
pessoaRouter.put('/alterarPessoas/:id', pessoaController.alterarCadastroPessoa);
pessoaRouter.delete('/excluirPessoas/:id', pessoaController.ExcluirPessoa);

module.exports = pessoaRouter;