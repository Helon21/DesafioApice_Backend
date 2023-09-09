const express = require('express');
const router = express.Router();
const pessoaController = require('../controller/PessoaController');

router.get('/pessoas/buscar', pessoaController.BuscarTodos);
router.get('/pessoas/buscar/:id', pessoaController.BuscarPorId);
router.post('/pessoas/cadastrar', pessoaController.CadastrarPessoa);
router.put('/alterarPessoas/:id', pessoaController.alterarCadastroPessoa);
router.delete('/excluirPessoas/:id', pessoaController.ExcluirPessoa);

module.exports = router;