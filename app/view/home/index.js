'use strict';

require('./home.scss');

const angular = require('angular');
// const brewbuddy = angular.module('brewBuddy');
angular.module('brewBuddy')
.controller('HomeController', ['$log', '$location', 'authService', HomeController]);

// function HomeController($log, $location, authService){
//   $log.debug('init homeCtrl');
//
//   this.getToken = function(){
//     authService.getToken()
//     .catch( () => $location.path('/signin'));
//   };
//
//   this.logout = function(){
//     authService.logout()
//     .then( () => $location.path('/signin'));
//   };
// }

function HomeController($log, $location){
  $log.debug('default page: should take to signin');

  this.toSignin = function(){
    $location.path('/signin');
  };
}
