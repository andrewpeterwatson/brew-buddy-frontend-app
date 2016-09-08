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
    template: require('./view/user/user.html')
  })
  .when('/user/countryoforigin', {
    template: require('./view/country-of-origin/country-of-origin.html'),
    controller: 'CountryOfOriginController',
    controllerAs: 'countryOfOriginCtrl'
  })
  .when('/user/method', {
    template: require('./view/rec-brew-method/rec-brew-method.html'),
    controller: 'RecBrewMethodController',
    controllerAs: 'recBrewMethodCtrl'
  })
  .when('/user/flavor', {
    template: require('./view/flavor/flavor.html'),
    controller: 'FlavorPageController',
    controllerAs: 'flavPageCtrl'
  })
  .when('/user/finish', {
    template: require('./view/finish/finish.html'),
    controller: 'FinishController',
    controllerAs: 'finishCtrl'
  })
  .otherwise({
    redirectTo: '/signin'
  });
}]);

// angular services
// angular components
require('./component/app-flavor-el');

require('./service/auth-service');
require('./service/origin-service');
require('./service/method-service');
require('./service/flavor-service');
require('./service/entry-service');
require('./service/app-flavor-service');
require('./service/user-selections-service');

// angular controllers
require('./view/country-of-origin/country-of-origin-controller.js');
require('./view/finish/finish-controller.js');
require('./view/rec-brew-method/rec-brew-method-controller.js');
require('./view/signup');
require('./view/signin');
require('./view/home');
require('./view/flavor');
