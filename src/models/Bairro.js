const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Bairro = sequelize.define('Bairro', {
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
})

module.exports = Bairro;