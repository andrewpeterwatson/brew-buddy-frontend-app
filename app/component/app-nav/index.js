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
.controller('AppNavModalController', [AppNavModalController]);

function AppNavModalController(){
  this.showSection = false;
  this.name = 'tester';
}
