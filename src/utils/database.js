const { Sequelize } = require('sequelize');

const db = new Sequelize({
host: "localhost",
port: 5432,
database: "entregable3_api",
username: "postgres",
password: "choco2217",
dialect: "postgres"
});

module.exports = db;