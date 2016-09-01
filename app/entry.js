'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('brewBuddy', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl'
  })
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .when('/user', {
    template: require('./view/user/user.html'),
    controller: 'UserController',
    controllerAs: 'userCtrl'
  })
  .when('/user/account', {
    template: require('./view/user-account-modal/user-account-modal.html'),
    controller: 'UserAccountModalController',
    controllerAs: 'userAccountModalCtrl'
  })
  .otherwise({
    redirectTo: '/signin'
  });
}]);

// angular services
require('./service/auth-service');

// angular controllers
require('./view/signup');
require('./view/signin');
require('./view/home');
