'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('RecBrewMethodController', ['$log', '$location', 'methodService', 'userSelectionsService', RecBrewMethodController]);

function RecBrewMethodController($log, $location, methodService, userSelectionsService) {

  this.methods = {};

  this.fetchMethods = function() {
    $log.debug('RecBrewMethodController.fetchMethods');
    methodService.fetchMethods()
    .then( (methods) => {
      this.methods = methods;
    });
  };

  this.submitRecBrewMethod = function() {
    $log.debug('RecBrewMethodController.submitRecBrewMethod');
    userSelectionsService.updateBrewMethod();
    console.log('user select service brewMethod', userSelectionsService);
    $location.path('../recipe');
  };
}
