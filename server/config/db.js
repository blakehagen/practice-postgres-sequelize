'use strict';
const pg        = require('pg');
const Sequelize = require('sequelize');

module.exports = function () {

  let sequelize = new Sequelize('postgres://ihnfgzge:XIUSxoJZ5_eWuR4x9hDsG02DpXHeRZZM@pellefant.db.elephantsql.com:5432/ihnfgzge');

  sequelize.authenticate().then(() => {
    console.log('Connection to postgres db has been established successfully.');
  })
    .catch(err => {
      console.log('Unable to connect to the database:', err);
    });


};