'use strict';

const angular = require('angular');
// const brewbuddy = angular.module('brewBuddy');
angular.module('brewBuddy')
.controller('HomeController', ['$log', '$location', 'authService', HomeController]);

function HomeController($log, $location, authService){
  $log.debug('init homeCtrl');

  this.getToken = function(){
    authService.getToken()
    .catch( () => $location.path('/login'));
  };

  this.logout = function(){
    authService.logout()
    .then( () => $location.path('/login'));
  };
}
