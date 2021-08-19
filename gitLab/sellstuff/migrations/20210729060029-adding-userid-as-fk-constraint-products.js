'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Products', {
      type: 'FOREIGN KEY',
      fields: ['userId'],
      references: {
        name: 'userid-fk-in-products',
        table: 'Users',
        field: 'id',
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Products', 'userid-fk-in-products')
  },
}
