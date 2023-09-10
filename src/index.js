const express = require('express');
const sequelize = require('./util/database');
const app = express();
const cors = require('cors');
const pessoaRoute = require('./Rotas/PessoaRota');

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((error) => {
    console.log('Erro ao conectar: ', error);
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});

app.use(express.json());
app.use(cors());
app.use('/api', pessoaRoute)
