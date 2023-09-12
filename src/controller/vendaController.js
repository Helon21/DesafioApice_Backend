const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venda = require('../models/venda');
const VendaItens = require('../models/vendaItens');

module.exports = {
    async listar(req, res) {
        try {
            const vendas = await Venda.findAll();
            res.status(200).json(vendas);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar as vendas" });
        }
    },

    async cadastrar(req, res) {
        try {
            const novaVenda = await Venda.create(req.body);
            res.status(201).json(novaVenda);
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar a venda" });
        }

    },

    async atualizarVenda(req, res) {
        const {id} = req.params;

        try {
            const venda = await Venda.findByPk(id);
            if(!venda){
                res.status(404).json({error: "Venda não encontrada"});
            }
            await venda.update(req.body);
            res.status(201).json(venda);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar a venda"});
        }
    },

    async deletar(req, res) {
        const {id} = req.params;

        try {
            const venda = await Venda.findByPk(id);
            if(!venda){
                res.status(404).json({error: "Venda não encontrada"});
            }
            await venda.destroy();
            res.status(200).json({message: "Venda excluída com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao excluir a venda"});
        }
    }


}