const express = require('express');
const sequelize = require('./util/database');
const app = express();

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((error) => {
    console.log('Erro ao conectar: ', error);
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
