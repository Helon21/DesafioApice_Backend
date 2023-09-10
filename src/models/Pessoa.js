const {DataTypes} = require('sequelize');
const sequelize = require('../util/database')

const Pessoa = sequelize.define('Pessoa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    cidade : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Pessoa;