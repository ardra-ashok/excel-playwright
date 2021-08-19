'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Comments', {
      type: 'FOREIGN KEY',
      fields: ['productId'],
      references: {
        name: 'postid-fk-in-comments',
        table: 'Products',
        field: 'id',
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Comments',
      'postid-fk-in-products')
  }
}

