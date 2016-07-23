'use strict';

angular.module('pgPractice').controller('homeCtrl', function (mainService) {
  var home = this;

  home.addUser = function () {
    console.log('home.newUser on service!', home.newUser);
    mainService.addNewUser(home.newUser);
    home.newUser = null;
  };





});