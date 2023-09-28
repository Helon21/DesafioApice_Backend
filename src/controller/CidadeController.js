const Cidade = require('../models/cidade');

module.exports = {
    async listar(req, res){
        try {
            const cidades = await Cidade.findAll();
            res.status(200).json(cidades);
        } catch (error) {
            res.status(500).json({error: "Erro ao listar pessoas"});
        }
    },

    async cadastrar(req, res){
        try {
            const cidadeExistente = await Cidade.findOne({
                where: {
                    nome: req.body.nome
                }
            });

            if(cidadeExistente){
                return res.status(400).json({error: "Nome já cadastrado"});
            };
            const novaCidade = await Cidade.create(req.body);
            res.status(201).json(novaCidade);
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao cadastrar a pessoa"});
        }
    },

    async atualizarCadastro(req, res){
        const {id} = req.params;
        console.log(req.body)

        try {
            const cidade = await Cidade.findByPk(id);
            if(!cidade){
                res.status(404).json({error: "Pessoa não encontrada"});
            }
            await cidade.update(req.body);
            res.status(201).json(cidade);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar cadastro"});
        }
    },

    async deletar(req, res){
        const {id} = req.params;
        try {
            const cidade = await Cidade.findByPk(id);
            if(!cidade){
                res.status(404).json({error: "Pessoa não encontrada"});
            }
            await cidade.destroy();
            res.status(200).json({message: "Pessoa excluída com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao excluir pessoa"});
        }
    },

}