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
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
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
  .when('/aroma', {
    template: require('./view/aroma/aroma.html'),
    controller: 'AromaController',
    controllerAs: 'aromaCtrl'
  })
  .when('/acidity', {
    template: require('./view/acidity/acidity.html'),
    controller: 'AcidityController',
    controllerAs: 'acidityCtrl'
  })
  .otherwise({
    redirectTo: '/home'
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
require('./view/aroma');
require('./view/acidity');
// require('./view/flavor');
require('./component/app-nav');
