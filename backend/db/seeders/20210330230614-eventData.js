'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: 'DnD shenanigans',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Fullerton',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 4,
        groupId: 1
      },
      {
        name: 'MTG Nemesis Night',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'San Diego',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 2,
        groupId: 2
      },
      {
        name: 'Boardgame-a-palooza',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Boulder',
        state: 'CO',
        address: faker.address.streetAddress(),
        userId: 3,
        groupId: 3
      },
      {
        name: 'Helms Deep reenactment 1',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 1,
        groupId: 4
      },
      {
        name: 'Helms Deep reenactment 2',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 1,
        groupId: 4
      },{
        name: 'Helms Deep reenactment 3',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 1,
        groupId: 4
      },{
        name: 'Helms Deep reenactment 4',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 1,
        groupId: 4
      },{
        name: 'Helms Deep reenactment 5',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 1,
        groupId: 4
      },
      {
        name: 'LAN like it\'s 2004',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 2,
        groupId: 5
      },
      {
        name: 'Smash n snack',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 2,
        groupId: 5
      },
      {
        name: 'Splatoon meetup',
        details: faker.lorem.sentence(),
        imageUrl: faker.image.imageUrl(),
        date: faker.date.soon(),
        city: 'Los Angeles',
        state: 'CA',
        address: faker.address.streetAddress(),
        userId: 2,
        groupId: 5
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
