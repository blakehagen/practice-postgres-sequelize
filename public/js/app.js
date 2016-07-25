angular.module('pgPractice', ['ui.router', 'ngMessages']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './app/features/home/homeTmpl.html',
      controller: 'homeCtrl as home'
    });

  $urlRouterProvider
    .otherwise('/');
});