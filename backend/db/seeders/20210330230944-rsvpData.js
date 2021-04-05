'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RSVPs', [{
      userId: 3,
      eventId: 1
    },
    {
      userId: 2,
      eventId: 9
    },
    {
      userId: 4,
      eventId: 1
    },
    {
      userId: 5,
      eventId: 9
    },
    {
      userId: 6,
      eventId: 4
    },
    {
      userId: 7,
      eventId: 10
    },
    {
      userId: 8,
      eventId: 4
    },
    {
      userId: 9,
      eventId: 9
    },
    {
      userId: 10,
      eventId: 4
    },
    {
      userId: 11,
      eventId: 9
    },
    {
      userId: 12,
      eventId: 10
    },
    {
      userId: 13,
      eventId: 10
    },
    {
      userId: 14,
      eventId: 11
    },
    {
      userId: 15,
      eventId: 11
    },
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
