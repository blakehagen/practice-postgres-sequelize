'use strict';

angular.module('pgPractice').controller('homeCtrl', function (mainService) {
  var home = this;

  home.submitted = false;
  home.formError = false;

  home.addUser = function (isValid) {

    if (!isValid) {
      console.log('FORM ERROR');
      home.formError = true;
      return;
    }
    home.submitted = true;
    home.formError = false;

    mainService.addNewUser(home.newUser);
    home.newUser.firstName = '';
    home.newUser.lastName  = '';
    home.newUser.email     = '';

  };


});