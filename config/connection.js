const Sequelize = require('sequelize');

module.exports = new Sequelize('resources', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});