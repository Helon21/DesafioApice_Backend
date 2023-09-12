const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); 
const pessoaRoutes = require('./Rotas/PessoaRota');
const cidadeRoutes = require('./Rotas/CidadeRota');
const produtoRoutes = require('./Rotas/produtoRota')

const app = express();

app.use(bodyParser.json());
app.use('/api', pessoaRoutes, cidadeRoutes, produtoRoutes);

sequelize.sync().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});