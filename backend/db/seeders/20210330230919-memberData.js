'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members', [
      {
      userId: 3,
      groupId: 1
    },
    {
      userId: 2,
      groupId: 1
    },
    {
      userId: 4,
      groupId: 4
    },
    {
      userId: 5,
      groupId: 5
    },
    {
      userId: 6,
      groupId: 4
    },
    {
      userId: 7,
      groupId: 5
    },
    {
      userId: 8,
      groupId: 4
    },
    {
      userId: 9,
      groupId: 5
    },
    {
      userId: 10,
      groupId: 4
    },
    {
      userId: 11,
      groupId: 5
    },
    {
      userId: 12,
      groupId: 4
    },
    {
      userId: 13,
      groupId: 5
    },
    {
      userId: 14,
      groupId: 4
    },
    {
      userId: 15,
      groupId: 5
    },
    {
      userId: 1,
      groupId: 4
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
