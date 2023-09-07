const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = require('../configs/database');
const Pessoa = require('../models/Pessoa');


class PessoaRepository {

    async BuscarTodos(){
        try {
            const pessoas = await Pessoa.findAll();
            return pessoas;
        } catch (error) {
            throw new Error('Nenhum cadastro existente' + error.message);
        }
    }

    async BuscarPorId(id){
        try {
            const pessoa = await Pessoa.findByPk(id);
            return pessoa;
        } catch (error) {
            throw error;
        }
    }

    async Cadastrar(pessoa){
        try {
            const novaPessoa = await Pessoa.create(pessoa)
            return novaPessoa;
        } catch (error) {
            throw error;
        }
    }

    async AlterarCadastro(id, pessoaData){
        try {
            const pessoa = await Pessoa.update(id);
            if(!pessoa){
                throw new Error('Pessoa não encontrada');
            }
            await pessoa.update(pessoaData);
            return pessoa;
        } catch (error) {
            throw error;
        }
    }

    async Excluir(id){
        try {
            const pessoa = await Pessoa.findByPk(id);
            if(!pessoa){
                throw new Error('Pessoa não encontrada');
            }
            await pessoa.destroy();
            return true;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PessoaRepository;