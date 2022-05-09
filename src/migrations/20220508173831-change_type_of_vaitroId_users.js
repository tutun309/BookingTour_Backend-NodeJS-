'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'vaitroId', {
        type: Sequelize.INTEGER,
        allowNull: true,
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'vaitroId', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    ])
  }
};