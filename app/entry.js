'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('demoApp', [ngRoute])
.config('$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./component/main/main.html')
  })
  .when('/home', {
    redirectTo: '/'
  })
  .when('/signin', {
    template: require('./component/signin/signin.html')
  })
  .when('/signup', {
    template: require('./component/signup/signup.html')
  })
  .when('/user', {
    template: require('./component/user/user.html')
  })
  .when('/user/brew', {
    // Not sure how /user/userthings files will be stored; below
    // are temporary routes we can change later. CD
    template: require('./component/user/brew/user-brew.html')
  })
  .when('/user/pastbrews', {
    template: require('./component/user/pastbrews/past-brews.html')
  })
  .otherwise({
    redirectTo: '/'
  });
});

// angular services

// angular components
