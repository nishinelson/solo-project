'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: "Nerd League",
        about: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        userId: 2,
        city: "Fullerton",
        state: "CA"
      },
      {
        name: "mtg cohort",
        about: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        userId: 3,
        city: "San Diego",
        state: "CA"
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
