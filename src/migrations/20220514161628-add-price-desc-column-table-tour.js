'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Tours',
        'price',
        {
          type: Sequelize.FLOAT
        }
      ),
      queryInterface.addColumn(
        'Tours',
        'desc',
        {
          type: Sequelize.STRING
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Tous', 'price'),
      queryInterface.removeColumn('Tous', 'desc')
    ]);
  }
};
