const Sequelize = require('sequelize');
const db = require('../config/connection');

const Resource = db.define('resource',{
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id'
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'url'
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'title'
  },
  description: {
    type: Sequelize.STRING,
    field: 'description'
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'created_at'
  },
  category: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'category'
  },
  deleted: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
    field: 'deleted'
  },
});

module.exports = Resource;
