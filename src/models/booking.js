'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      booking.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      booking.belongsTo(models.Tour, {
        foreignKey: 'tourId',
        as: 'tour'
      });
    }
  };
  booking.init({
    userId: DataTypes.INTEGER,
    tourId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};