'use strict';
var userCtrl = require('../controllers/user.controller');

module.exports = (app) => {

  app.route('/api/v1/createUser')
    .post(userCtrl.createUser);
};



