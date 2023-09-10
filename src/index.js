// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); 
const pessoaRoutes = require('./Rotas/PessoaRota');

const app = express();

app.use(bodyParser.json());
app.use('/api', pessoaRoutes);

sequelize.sync().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});