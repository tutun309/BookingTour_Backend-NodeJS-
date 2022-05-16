'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('tours', 'img', {
      type: Sequelize.BLOB('long'),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('tours', 'img', {
      type: Sequelize.BLOB,
      allowNull: true,
    });
  }
};
