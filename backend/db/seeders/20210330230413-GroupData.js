'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
