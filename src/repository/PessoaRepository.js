const Sequelize = require('sequelize');
const pessoa = require('../models/Pessoa');


class PessoaRepository {

    constructor(PessoaModel = pessoa){
        this.PessoaModel = PessoaModel;
    }


    async BuscarTodos(){
        try {
            const pessoas = await this.PessoaModel.findAll();
            return pessoas;
        } catch (error) {
            throw new Error('Nenhum registro foi encontrado' + error.message);
        }
    }

    async BuscarPorId(id){
        try {
            const pessoa = await this.PessoaModel.findByPk(id);
            return pessoa;
        } catch (error) {
            throw new Error('Não existe nenhum registro vinculado a esse ID' + error.message);
        }
    }

    async Cadastrar(pessoaData){
        try {
            return await this.PessoaModel.create(pessoaData)
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError'){
                throw new Error('Erro ao cadastrar pessoa: Um ou mais campos duplicados')
            }
            throw new Error('Erro ao cadastrar pessoa');
        }
    }

    async AlterarCadastro(id, pessoaData){
        try {
            const pessoa = await this.PessoaModel.findByPk(id);
            if(!pessoa){
                throw new Error('Pessoa não encontrada');
            }
            return await pessoa.update(pessoaData);
        } catch (error) {
            throw new Error('Não foi possível alterar o cadastro da pessoa, ID não encontrado');
        }
    }

    async Excluir(id){
        try {
            const pessoa = await this.PessoaModel.findByPk(id);
            if(!pessoa){
                throw new Error('Pessoa não encontrada');
            }
            await pessoa.destroy();
            return pessoa;
        } catch (error) {
            throw new Error('Não foi possível excluir a pesssoa, ID não encontrado');
        }
    }

}

module.exports = PessoaRepository;