'use strict';

angular.module('pgPractice').controller('homeCtrl', function (mainService) {
  var home = this;

  home.submitted   = false;
  home.formError   = false;
  home.serverError = false;

  home.addUser = function (isValid) {
    if (!isValid) {
      home.formError = true;
      return;
    }
    home.submitted = true;
    home.formError = false;

    mainService.addNewUser(home.newUser).then(function () {
      home.serverError       = false;
      home.newUser.firstName = '';
      home.newUser.lastName  = '';
      home.newUser.email     = '';
    })
      .catch(function () {
        home.serverError = true;
      });
  };


}); // END CTRL //