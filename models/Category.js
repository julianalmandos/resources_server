const Sequelize = require('sequelize');
const db = require('../config/connection');
const Resource = require('./Resource');

const Category = db.define('category',{
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'name'
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'color'
  }
});

module.exports = Category;
