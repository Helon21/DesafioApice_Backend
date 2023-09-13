

const Venda = require('../models/venda');
const VendaItens = require('../models/vendaItens');
const formatarData = require('../util/formatarData');

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

    async atualizarVenda(req, res){
        const {id} = req.params;
        const { dataInicio, dataFim, pessoa_id } = req.body;

        try {
            console.log(`Tentando encontrar a venda com o ID ${id}`);
            const venda = await Venda.findByPk(id);
            if(!venda){
                console.log(`Venda com o ID ${id} não encontrada`);
                res.status(404).json({error: "Pessoa não encontrada"});
                return;
            }
            console.log(`Venda com o ID ${id} encontrada. Tentando atualizar...`);
            await venda.update({
                dataInicio: formatarData(dataInicio),
                dataFim: formatarData(dataFim),
                pessoa_id
            });
            res.status(201).json(venda);
        } catch (error) {
            console.error(`Erro ao atualizar cadastro: ${error.message}`);
            res.status(500).json({error: "Erro ao atualizar cadastro"});
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