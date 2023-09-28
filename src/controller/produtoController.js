const Produto = require('../models/produto');

module.exports = {
    async listar(req, res){
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({error: "Erro ao listar os produtos"});
        }
    },

    async cadastrar(req, res){
        try {
            const produtoExistente = await Produto.findOne({
                where: {
                    nome: req.body.nome
                }
            });
            if(produtoExistente){
                return res.status(400).json({error: "Produto já cadastrado"});
            };
            const novoProduto = await Produto.create(req.body);
            res.status(201).json(novoProduto);
        } catch (error) {
            res.status(500).json({error: "Erro ao cadastrar o produto"});
        }
    },

    async atualizarProduto(req, res){
        const {id} = req.params;

        try {
            const produto = await Produto.findByPk(id);
            if(!produto){
                res.status(404).json({error: "Produto não encontrado"});
            }
            await produto.update(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar o produto"});
        }
    },

    async deletar(req, res){
        const {id} = req.params;

        try {
            const produto = await Produto.findByPk(id);
            if(!produto){
                res.status(404).json({error: "Produto não encontrado"});
            };
            await produto.destroy();
            res.status(200).json({message: "Produto excluído com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao excluir o produto"});
        }

    }

}