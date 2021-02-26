const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pins = require('../Models/Pins');

const connection = new Sequelize(dbConfig);

Pins.init(connection);

module.exports = connection;