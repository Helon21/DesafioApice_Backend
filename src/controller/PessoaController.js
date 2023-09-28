
const Pessoa = require('../models/pessoa');

module.exports = {

    async listarComFiltro(req, res){
        try {
            const {nome, cidade, bairro} = req.query;

            const filtro = {};

            if(nome){
                filtro.nome = nome;
            }
            if(cidade){
                filtro.cidade = cidade;
            }
            if(bairro){
                filtro.bairro = bairro;
            }

            const pessoas = await Pessoa.findAll({ where: filtro,
            include: [
                {model: bairro, as: 'bairroPessoa'},
                {model: cidade, as: 'cidadePessoa'}
            ]
        });

            res.status(200).json(pessoas);

        } catch (error) {
            res.status(500).json({error: "Erro ao listar pessoas"});
        }
    },

    async listarBairro(req, res){
         try {
             const bairros = await bairro.findAll();
             res.status(200).json(bairros);
         } catch (error) {
             res.status(500).json({error: "Erro ao listar pessoas"});
         }
    },

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
            const pessoaExistente = await Pessoa.findOne({
                where: {
                    nome: req.body.nome
                }
            });
            if(pessoaExistente){
                return res.status(400).json({error: "Nome já cadastrado"});
            };
            const novaPessoa = await Pessoa.create(req.body);
            res.status(201).json(novaPessoa);
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao cadastrar a pessoa"});
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

