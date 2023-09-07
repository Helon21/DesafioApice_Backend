const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Pessoa = require('./Pessoa');

const Venda = sequelize.define('Venda', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Pessoa,
            key: 'id',
        },
    },
    
})

module.exports = Venda;