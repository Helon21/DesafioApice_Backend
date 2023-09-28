const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Bairro = require('./bairro');
const Cidade = require('./cidade');

const pessoa = sequelize.define('Pessoa', {
    
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
    },

    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    bairro_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Bairro, 
            key: 'id' 
        }
    },
    cidade_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Cidade, 
            key: 'id' 
        }
    },
   
});




module.exports = pessoa;