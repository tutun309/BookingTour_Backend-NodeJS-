'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tour.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'Category'
      });
      Tour.belongsToMany(models.User, {
        foreignKey: 'tourId',
        through: 'booking',
        as: 'User'
      });
    }
  };
  Tour.init({
    name: DataTypes.STRING,
    img: DataTypes.BLOB('long'),
    price: DataTypes.FLOAT,
    desc: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};