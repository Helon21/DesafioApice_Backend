const Sequelize = require('sequelize');
const sequelize = require('../config/database')

const Cidade = sequelize.define('Cidade', {
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
    sigla: {
        type: Sequelize.CHAR(2),
        allowNull: false,
    },
})

module.exports = Cidade;