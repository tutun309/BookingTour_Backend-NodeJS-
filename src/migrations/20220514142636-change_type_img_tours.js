'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Tours', 'img', {
        type: Sequelize.BLOB('long'),
        allowNull: true,
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Tours', 'img', {
        type: Sequelize.BLOB,
        allowNull: true,
      })
    ])
  }
};
