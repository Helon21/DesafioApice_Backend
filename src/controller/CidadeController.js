const Cidade = require('../models/Cidade');

module.exports = {
    async listar(req, res){
        try{
            const cidades = await Cidade.findAll();
            res.status(200).json(cidades);
        }catch(error){
            res.status(500).json({error: "Erro ao listar cidades"});
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
                return res.status(400).json({error: "Cidade já cadastrada"});
            };
            const novaCidade = await Cidade.create(req.body);
            res.status(201).json(novaCidade);
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao cadastrar a cidade"});
        }
    },

    async atualizarCadastro(req, res){
        const {id} = req.params;

        try {
            const cidade = await Cidade.findByPk(id);
            if(!cidade){
                res.status(404).json({error: "Cidade não encontrada"});
            }
            await cidade.update(req.body);
            res.status(201).json(cidade);
        } catch (error) {
            res.status(500).json({error: "Erro ao atualizar cadastro de cidade"});
        }
    },

    async deletar(req, res){
        const {id} = req.params;
        try {
            const cidade = await Cidade.findByPk(id);
            if(!cidade){
                res.status(404).json({error: "Cidade não encontrada"});
            }
            await cidade.destroy();
            res.status(200).json({message: "Cidade deletada com sucesso"});
        } catch (error) {
            res.status(500).json({error: "Erro ao deletar cidade"});
        }
    }
}