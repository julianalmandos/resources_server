const Sequelize = require('sequelize');
const db = require('../config/connection');

const Category = db.define('category',{
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
