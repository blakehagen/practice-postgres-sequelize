angular.module('pgPractice').service('mainService', function ($http) {

  this.addNewUser = function (newUser) {
    return $http({
      method: 'POST',
      url: '/api/v1/createUser',
      data: newUser
    }).then(function (response) {
      return response.data;
    });
  };

}); // END SERVICE //