const express = require('express');
const pessoaController = require('../controller/pessoaController');

const router = express.Router();

router.get('/pessoa/listar', pessoaController.listar);
router.post('/pessoa/cadastrar', pessoaController.cadastrar);
router.put('/pessoa/atualizar/:id', pessoaController.atualizarCadastro);
router.delete('/pessoa/deletar/:id', pessoaController.deletar);

module.exports = router;
