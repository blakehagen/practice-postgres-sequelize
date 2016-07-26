var User = require('../models/user.model');

module.exports = {

  createUser: (req, res) => {
    console.log('req.body', req.body);

    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }).then(function (user) {
      res.status(200).json(user);
    })
  }


};
