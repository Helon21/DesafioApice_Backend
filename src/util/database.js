const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');

const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: dbName,
    host: dbHost,
    port: dbPort,
    username: dbUser,
    password: dbPass,
})

module.exports = {sequelize, port: dbPort};