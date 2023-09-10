const express = require('express');
const pessoaController = require('../controller/PessoaController');

const router = express.Router();

router.get('/pessoas/listar', pessoaController.listar);
router.post('/pessoas/cadastrar', pessoaController.cadastrar);
router.put('/pessoas/atualizar/:id', pessoaController.atualizarCadastro);
router.delete('/pessoas/deletar/:id', pessoaController.deletar);

module.exports = router;
