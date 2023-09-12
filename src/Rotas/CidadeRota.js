const express = require('express');
const cidadeController = require('../controller/cidadeController');

const router = express.Router();

router.get('/cidade/listar', cidadeController.listar);
router.post('/cidade/cadastrar', cidadeController.cadastrar);
router.put('/cidade/atualizar/:id', cidadeController.atualizarCadastro);
router.delete('/cidade/deletar/:id', cidadeController.deletar);

module.exports = router;
