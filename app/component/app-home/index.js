'use strict';

require('./main.scss');

const angular = require('angular');
angular.module('brewBuddy')
.directive('appMain', function(){
  return {
    restrict: 'E',
    template: require('./main.html'),
    controller: 'AppMainController',
    controllerAs: 'appMainCtrl',
    bindToController: true
  };
});

angular.module('brewBuddy')
.controller('AppMainController', [AppMainController]);

function AppMainController(){
  this.showMain = true;
}
