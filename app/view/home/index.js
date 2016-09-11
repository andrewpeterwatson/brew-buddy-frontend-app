'use strict';

require('./home.scss');

const angular = require('angular');
// const brewbuddy = angular.module('brewBuddy');
angular.module('brewBuddy')
.controller('HomeController', ['$log', '$location', HomeController]);

function HomeController($log, $location){
  $log.debug('init homeCtrl');

//   this.getToken = function(){
//     authService.getToken()
//     .catch( () => $location.path('/signin'));
//   };
  this.toSignin = function(){
    $location.path('/signin');
  };

}
