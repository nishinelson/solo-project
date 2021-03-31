'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    details: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    const columnMappingEvents = {
      through: 'RSVPs',
      otherKey: 'userId',
      foreignKey: 'eventId'
    }

    Event.belongsToMany(models.User, columnMappingEvents);
    Event.belongsTo(models.Group, { foreignKey: 'groupId'});
  };
  return Event;
};
