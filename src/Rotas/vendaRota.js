const express = require('express');
const vendaController = require('../controller/vendaController');

const router = express.Router();

router.get('/venda/listar', vendaController.listar);
router.post('/venda/cadastrar', vendaController.cadastrar);
router.put('/venda/atualizar/:id', vendaController.atualizarVenda);
router.delete('/venda/deletar/:id', vendaController.deletar);

module.exports = router;