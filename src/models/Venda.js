const Sequelize = require('sequelize');
const sequelize = require('../util/database')
const formatarData = require('../util/formatarData');

const Pessoa = require('./pessoa');


const venda = sequelize.define('Venda', {
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

    dataVenda: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    
    pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Pessoa,
            key: 'id'
        },
    },
});


venda.belongsTo(Pessoa, {foreignKey: 'pessoa_id'})

module.exports = venda;