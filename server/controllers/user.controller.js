const models = require('../models/index');

module.exports = {

  createUser: (req, res) => {
    models.User.isEmailUnique(req.body.email).then(() => {
      models.User.create(req.body).then(user => {
        res.status(200).json(user);
      })
    }).catch(err => {
      console.log('err', err);
      res.status(400).json({error: err});
    });
  }


};
