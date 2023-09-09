const PessoaRepository = require('../repository/PessoaRepository');

const mockPessoaModel = {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
};

const pessoaRepository = new PessoaRepository(mockPessoaModel);

describe('Testes unitários do PessoaRepository', () => {
    it('Buscar todos - retorna uma lista de pessoas', async() => {
        mockPessoaModel.findAll.mockResolvedValue([{id: 1, nome: 'João'}]);
        const result = await pessoaRepository.BuscarTodos();

        expect(result).toEqual([{id: 1, nome: 'João'}]);
    });

    it('Buscar todos - deve retornar uma exception, por conta da lista vazia', async() => {
        mockPessoaModel.findAll.mockResolvedValue(null);

        try {
            await pessoaRepository.BuscarTodos();
        } catch (error) {
            expect(error.message).toBe('Nenhum registro foi encontrado');
        }
    });

    it('Buscar por id deve retornar uma pessoa', async() => {
        mockPessoaModel.findByPk.mockResolvedValue({id: 1, nome: 'João'});
        const result = await pessoaRepository.BuscarPorId(1);

        expect(result).toEqual({id: 1, nome: 'João'});
        expect(mockPessoaModel.findByPk).toHaveBeenCalledWith(1);
    });

    it('Buscar por id deve retornar uma exception', async() => {
        mockPessoaModel.findByPk.mockResolvedValue(null);

        try {
            await pessoaRepository.BuscarPorId(1)
        } catch (error) {
            expect(error.message).toBe('Não existe nenhum registro vinculado a esse ID' + error.message);
        }
    });

    it('Cadastrar - retorna uma pessoa cadastrada', async() => {
        const mockPessoa = {nome: 'João'};
        mockPessoaModel.create.mockResolvedValue(mockPessoa);
    
        const pessoaCadastrada = await pessoaRepository.Cadastrar(mockPessoa);
    
        expect(pessoaCadastrada).toEqual(mockPessoa);
        expect(mockPessoaModel.create).toHaveBeenCalledWith(mockPessoa);
    });

    it('Cadastrar - deve retorna uma exception', async() => {
        mockPessoaModel.create.mockResolvedValue(null);

        try {
            await pessoaRepository.Cadastrar({nome: 'João'});
        } catch (error) {
            expect(error.message).toBe('Erro ao cadastrar pessoa');
        }
    });

    it('Alterar cadastro - retorna uma pessoa alterada', async () => {
        const mockPessoa = { id: 1, nome: 'coisa' };
        mockPessoaModel.findByPk.mockResolvedValue(mockPessoa);
        mockPessoaModel.update.mockResolvedValue([1]);
    
        const pessoaData = { nome: 'Jeca tatu' };
        const pessoaAlterada = await pessoaRepository.AlterarCadastro(1, pessoaData);
    
        expect(pessoaAlterada).toEqual({ mockPessoa, pessoaData });
        expect(mockPessoaModel.findByPk).toHaveBeenCalledWith(1);
        expect(mockPessoaModel.update).toHaveBeenCalledWith(pessoaData, { where: { id: 1 } });
    });
    

    it('Alterar cadastro - deve retornar uma exception caso a pessoa não seja encontrada', async() => {
        mockPessoaModel.findByPk.mockResolvedValue(null);

        try {
            await pessoaRepository.AlterarCadastro(1, {nome: 'Jeca tatu'});
        } catch (error) {
            expect(error.message).toBe('Não foi possível alterar o cadastro da pessoa, ID não encontrado');
        }

    });

    
    it('Excluir pessoa - deve ter sucesso na exclusão', async() => {
        const mockPessoa = {id: 1, nome: 'Jeca tatu'};
        mockPessoaModel.findByPk.mockResolvedValue(mockPessoa);
        mockPessoaModel.destroy.mockResolvedValue(true);
    
        const excluidoComSucesso = await pessoaRepository.Excluir(1);
    
        expect(excluidoComSucesso).toBe(true);
        expect(mockPessoaModel.findByPk).toHaveBeenCalledWith(1);
        expect(mockPessoaModel.destroy).toHaveBeenCalledWith({ where: { id: 1 } }); // Adicionei esta linha
    });

    it('Excluir pessoa - deve falhar e retornar uma exception', async() => {
        mockPessoaModel.findByPk.mockResolvedValue(null);

        try {
            await pessoaRepository.Excluir(1);
        } catch (error) {
            expect(error.message).toBe('Não foi possível excluir a pesssoa, ID não encontrado');
        }
    });

});