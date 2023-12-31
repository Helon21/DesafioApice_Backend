const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const produto = sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    vr_venda: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
})

module.exports = produto;