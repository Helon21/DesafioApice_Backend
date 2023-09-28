const Bairro = require('../models/bairro');

module.exports = {
    async listar(req, res){
        try {
            const bairros = await Bairro.findAll();
            res.status(200).json(bairros);
        } catch (error) {
            res.status(500).json({error: "Erro ao listar pessoas"});
        }
    },

    async cadastrar(req, res){
        try {
            const bairroExistente = await Bairro.findOne({
                where: {
                    nome: req.body.nome
                }
            });

            if(bairroExistente){
                return res.status(400).json({error: "Bairro já cadastrado"});
            };
            const novoBairo = await Bairro.create(req.body);
            res.status(201).json(novoBairro);
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao cadastrar o bairro"});
        }
    },

    async atualizarCadastro(req, res){
        const {id} = req.params;
        console.log(req.body)

        try {
            const bairro = await Bairro.findByPk(id);
            if(!bairro){
                res.status(404).json({error: "Bairro não encontrada"});
            }
            await bairro.update(req.body);
            res.status(201).json(bairro);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar cadastro"});
        }
    },

    async deletar(req, res){
        const {id} = req.params;
        try {
            const bairro = await Bairro.findByPk(id);
            if(!bairro){
                res.status(404).json({error: "Bairro não encontrado"});
            }
            await bairro.destroy();
            res.status(200).json({message: "Bairro excluído com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao excluir bairro"});
        }
    },

}