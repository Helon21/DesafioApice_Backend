const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Pessoa = require('./pessoa');

const venda = sequelize.define('Venda', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dataFim: {
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
    
});

venda.belongTo(Pessoa, {foreignKey: 'pessoa_id'})

module.exports = venda;