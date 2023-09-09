const PessoaRepository = require("../repository/PessoaRepository");


class PessoaService{
    constructor(pessoaRepository = new PessoaRepository()){
        this.pessoaRepository = pessoaRepository;
    }

    async BuscarTodos(){
        try {
            const pessoas = await this.pessoaRepository.BuscarTodos();
            return pessoas;
        } catch (error) {
            throw new Error('Erro ao listar pessoas' + error.message);
        }
    }

    async BuscarPorId(){
        try {
            const pessoa = await this.pessoaRepository.BuscarPorId(id);
            return pessoa
        } catch (error) {
            throw new Error('Erro ao encontrar pessoa por ID' + error.message);
        }
    }

    async CadastrarPessoa(pessoa){
        try {
            const novaPessoa = await this.pessoaRepository.Cadastrar(pessoa);
            return novaPessoa;
        } catch (error) {
            throw new Error('Erro ao cadastrar pessoa: ' + error.message);
        }
    }

    async alterarCadastroPessoa(id, pessoaData){
        try {
            const pessoa = await this.pessoaRepository.AlterarCadastro(id, pessoaData);
            return pessoa;
        } catch (error) {
            throw new Error('Erro ao alterar cadastro da pessoa: ' + error.message);
        }
    }

    async ExcluirPessoa(id){
        try {
            const excluidoComSucesso = await this.pessoaRepository.Excluir(id);
            return excluidoComSucesso;
        } catch (error) {
            throw new Error('Erro ao excluir pessoa: ' + error.message);
        }
    }
}

module.exports = PessoaService;