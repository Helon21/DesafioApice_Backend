const Sequelize = require('sequelize');
const sequelize = require('../util/database')


const VendaItens = sequelize.define('VendaItens', {
    id_venda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    vr_venda: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },

})

module.exports = VendaItens;