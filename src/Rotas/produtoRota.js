const express = require('express');
const produtoController = require('../controller/produtoController');

const router = express.Router();

router.get('/produto/listar', produtoController.listar);
router.post('/produto/cadastrar', produtoController.cadastrar);
router.put('/produto/atualizar/:id', produtoController.atualizarProduto);
router.delete('/produto/deletar/:id', produtoController.deletar);

module.exports = router;