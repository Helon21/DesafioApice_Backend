const Sequelize = require('sequelize');
const sequelize = require('../util/database')
const pessoa = require('./pessoa');

const bairro = sequelize.define('Bairro', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
});




module.exports = bairro;