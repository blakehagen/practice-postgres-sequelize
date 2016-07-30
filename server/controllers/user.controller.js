const models = require('../models/index');

module.exports = {

  createUser: (req, res) => {
    models.User.create(req.body).then(function (user) {
      res.status(200).json(user);
    }).catch(function (err) {
      res.status(500).json(err);
    })
  }


};
