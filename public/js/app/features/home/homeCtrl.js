'use strict';

angular.module('pgPractice').controller('homeCtrl', function (mainService) {
  var home = this;

  home.submitted = false;
  home.formError = false;

  home.addUser = function (isValid) {
    home.submitted = true;

    if(!isValid){
      console.log('FORM ERROR');
      home.formError = true;
      return;
    }
    home.formError = false;
    console.log('home.newUser on service!', home.newUser);
    mainService.addNewUser(home.newUser);
    home.newUser.firstName = '';
    home.newUser.lastName = '';
    home.newUser.email = '';

  };





});