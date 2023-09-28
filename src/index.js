const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 
const pessoaRoutes = require('./Rotas/pessoaRota');
const cidadeRoutes = require('./Rotas/CidadeRota');
const produtoRoutes = require('./Rotas/produtoRota')
const vendaRoutes = require('./Rotas/vendaRota');
const bairroRoutes = require('./Rotas/bairroRota');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use('/api', pessoaRoutes, cidadeRoutes, produtoRoutes, vendaRoutes, bairroRoutes);

sequelize.sync().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});

const Bairro = require('./models/bairro');
const Cidade = require('./models/cidade');
const Pessoa = require('./models/pessoa');

Bairro.hasMany(Pessoa, { foreignKey: 'bairro_id' });
Cidade.hasMany(Pessoa, { foreignKey: 'cidade_id' });

Pessoa.belongsTo(Bairro, { foreignKey: 'bairro_id', as: 'bairroPessoa' });
Pessoa.belongsTo(Cidade, { foreignKey: 'cidade_id', as: 'cidadePessoa' });
