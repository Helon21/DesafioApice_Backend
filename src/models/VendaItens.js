const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Venda = require('./venda');
const Produto = require('./produto');


const vendaItens = sequelize.define('VendaItens', {
    id_venda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Venda,
            key: 'id',
        }
    },
    id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Produto,
            key: 'id',
        }
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    vr_venda: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },

});


vendaItens.belongsTo(Venda, {foreignKey: 'id_venda'});
vendaItens.belongsTo(Produto, {foreignKey: 'id_produto'});

module.exports = vendaItens;