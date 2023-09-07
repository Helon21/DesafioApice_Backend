const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Pessoa = sequelize.define('Pessoa', {
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
    cidade : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Pessoa;