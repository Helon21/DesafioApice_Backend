const express = require('express');
const bairroController = require('../controller/bairroController');

const router = express.Router();

router.get('/bairro/listar', bairroController.listar);
router.post('/bairro/cadastrar', bairroController.cadastrar);
router.put('/bairro/atualizar/:id', bairroController.atualizarCadastro);
router.delete('/bairro/deletar/:id', bairroController.deletar);

module.exports = router;
