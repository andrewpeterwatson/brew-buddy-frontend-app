'use strict';

require('./app-nav.scss');

const angular = require('angular');
angular.module('brewBuddy')
.directive('appNav', function(){
  return {
    restrict: 'E',
    template: require('./app-nav.html'),
    controller: 'AppNavModalController',
    controllerAs: 'appNavModalCtrl',
    bindToController: true
  };
});

angular.module('brewBuddy')
.controller('AppNavModalController', ['$log','$location','authService',AppNavModalController]);

function AppNavModalController($log,$location,authService){
  this.showSection = false;
  this.name = 'tester';
  this.logout = function(){
    authService.logout()
    .then(()=> $location.path('/home'));
  };
}
