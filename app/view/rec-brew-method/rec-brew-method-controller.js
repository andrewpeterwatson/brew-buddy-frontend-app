'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('RecBrewMethodController', ['$log', '$location', 'methodService', 'userSelectionsService', RecBrewMethodController]);

function RecBrewMethodController($log, $location, methodService, userSelectionsService) {

  this.brewMethods = ['Chemex', 'French Press', 'Aeropress', 'Wave'];

  this.submitRecBrewMethod = function(method) {
    $log.debug('RecBrewMethodController.submitRecBrewMethod');
    userSelectionsService.updateBrewMethod(method);
    console.log('user select service brewMethod', userSelectionsService);
    $location.path('/user/aroma');
  };
}
