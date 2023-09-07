const express = require('express');
const {sequelize, port} = require('./util/database');
const app = express();

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((error) => {
    console.log('Erro ao conectar: ', error);
});

app.get('/teste-conexao', (req, res) => {
    res.send('Servidor conectado com sucesso!');
})

app.listen(port, () => {
    console.log(`Servidor rodando no localhost:${port}`);
})