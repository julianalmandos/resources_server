const Sequelize = require('sequelize');
const db = require('../config/connection');
const Category = require('./Category');

const Resource = db.define('resource',{
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: Category,
      key: 'id',
    }
  },
  deleted: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
    field: 'deleted'
  },
  favourite: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
    field: 'favourite'
  },
  workingOn: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
    field: 'working_on'
  }
});
Resource.belongsTo(Category, {foreignKey: 'categoryId', as: 'category'});

module.exports = Resource;
