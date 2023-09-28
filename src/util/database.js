require('dotenv').config();

const { DB_DIALECT, DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT
});




module.exports = sequelize;
