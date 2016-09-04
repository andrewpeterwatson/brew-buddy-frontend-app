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
  // .when('/user/account', {
  // 
  //   template: require('./view/user-account-modal/user-account-modal.html'),
  //   controller: 'UserAccountModalController',
  //   controllerAs: 'userAccountModalCtrl'
  // })
  .when('/user/countryoforigin', {
    template: require('./view/country-of-origin/country-of-origin.html'),
    controller: 'CountryOfOriginController',
    controllerAs: 'countryOfOriginCtrl'
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
require('./view/country-of-origin/country-of-origin-controller.js');
require('./view/signup');
require('./view/signin');
require('./view/home');
