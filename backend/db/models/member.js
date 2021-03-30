'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Member.associate = function(models) {
    Member.belongsTo(models.User, { foreignKey: 'userId' });
    Member.belongsTo(models.Group, { foreignKey: 'groupId' });
  };
  return Member;
};
