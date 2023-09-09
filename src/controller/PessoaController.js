const PessoaService = require("../service/PessoaService");
const pessoaService = new PessoaService();

async function BuscarTodos(req, res){
    try {
        const pessoas = await pessoaService.BuscarTodos();
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar pessoas'});
    }
}

async function BuscarPorId(req, res){
    const id = req.params.id;

    try {
        const pessoa = await pessoaService.BuscarPorId(id);
        if(!pessoa){
            return res.status(404).json({message: 'Pessoa não encontrada'});
        }
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({error: 'Erro ao encontrar pessoa por ID'});
    }
}


async function CadastrarPessoa(req, res){
    const pessoaData = req.body;

    try {
        const novaPessoa = await pessoaService.CadastrarPessoa(pessoaData);
        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({error: 'Erro ao cadastrar pessoa'});
    }
}

async function alterarCadastroPessoa(req, res){
    const id = req.params.id;
    const pessoaData = req.body;

    try {
        const pessoaAtualizada = await pessoaService.alterarCadastroPessoa(id, pessoaData);
        if(!pessoaAtualizada){
            return res.status(404).json({message: 'Pessoa não encontrada'});
        }
        res.json(pessoaAtualizada)
    } catch (error) {
        res.status(500).json({error: 'Erro ao alterar cadastro da pessoa'});
    }

}

async function ExcluirPessoa(req, res){
    const id = req.params.id;

    try {
        const excluidoComSucesso = await pessoaService.ExcluirPessoa(id);
        if(!excluidoComSucesso){
            return res.status(404).json({message: 'Pessoa não encontrada'});
        }
        res.json({message: 'Pessoa excluída com sucesso'});
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir pessoa'});
    }
}

module.exports = {
    BuscarTodos,
    BuscarPorId,
    CadastrarPessoa,
    alterarCadastroPessoa,
    ExcluirPessoa,
};