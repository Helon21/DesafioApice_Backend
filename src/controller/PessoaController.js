const Pessoa = require('../models/Pessoa');

module.exports = {
    async listar(req, res){
        try {
            const pessoas = await Pessoa.findAll();
            res.status(200).json(pessoas);
        } catch (error) {
            res.status(500).json({error: "Erro ao listar pessoas"});
        }
    },

    async cadastrar(req, res){
        try {
            const novaPessoa = await Pessoa.create(req.body);
            res.status(201).json(novaPessoa);
        } catch (error) {
            res.status(500).json({error: "Erro ao cadastrar pessoa"});
        }
    },

    async atualizarCadastro(req, res){
        const {id} = req.params;

        try {
            const pessoa = await Pessoa.findByPk(id);
            if(!pessoa){
                res.status(404).json({error: "Pessoa não encontrada"});
            }
            await pessoa.update(req.body);
            res.status(201).json(pessoa);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar cadastro"});
        }
    },

    async deletar(req, res){
        const {id} = req.params;
        try {
            const pessoa = await Pessoa.findByPk(id);
            if(!pessoa){
                res.status(404).json({error: "Pessoa não encontrada"});
            }
            await pessoa.destroy();
            res.status(200).json({message: "Pessoa excluída com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao excluir pessoa"});
        }
    }

}