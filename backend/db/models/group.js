'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING(2)
  }, {});
  Group.associate = function(models) {
    const columnMapping = {
      through: 'Members',
      otherKey: 'userId',
      foreignKey: 'groupId'
    }
    Group.belongsToMany(models.User, columnMapping);
    Group.belongsTo(models.User, { foreignKey: 'userId'});
    Group.hasMany(models.Event, { foreignKey: 'groupId'});
  };
  return Group;
};
