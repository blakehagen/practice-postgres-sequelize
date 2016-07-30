'use strict';

module.exports = (sequelize, DataTypes) => {
  // var models;
  var User;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false
  });
  return User;
};