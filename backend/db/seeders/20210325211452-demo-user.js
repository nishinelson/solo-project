'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'Lition',
        avatarUrl: faker.internet.avatar(),
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'LA',
        state: 'CA',
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatarUrl: faker.internet.avatar(),
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        city: 'San Diego',
        state: 'CA',
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatarUrl: faker.internet.avatar(),
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        city: 'Boulder',
        state: 'CO',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
