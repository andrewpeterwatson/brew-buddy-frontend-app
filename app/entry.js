'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// require('./component/app-home');
require('./component/app-nav');


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
  .otherwise({
    redirectTo: '/signin'
  });
}]);

// angular services
require('./service/auth-service');
require('./service/origin-service');
require('./service/method-service');
require('./service/flavor-service');
require('./service/entry-service');

// angular controllers
require('./view/signup');
require('./view/signin');
require('./view/home');
// require('./component/app-nav');
