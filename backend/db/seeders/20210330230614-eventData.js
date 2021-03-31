'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: 'DnD shenanigans',
        details: faker.lorem.sentence(),
        imageUrl: faker.internet.avatar(),
        date: faker.date.soon(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        address: faker.address.streetAddress(),
        userId: 2,
        groupId: 1
      },
      {
        name: 'MTG Nemesis Night',
        details: faker.lorem.sentence(),
        imageUrl: faker.internet.avatar(),
        date: faker.date.soon(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        address: faker.address.streetAddress(),
        userId: 3,
        groupId: 2
      }
    ], {});
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
