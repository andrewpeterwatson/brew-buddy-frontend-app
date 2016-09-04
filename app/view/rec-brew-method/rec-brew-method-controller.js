'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('RecBrewMethodController', ['$log', '$location', 'methodService', RecBrewMethodController]);

function RecBrewMethodController($log, $location, methodService) {

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

    $location.path('../recipe');
  };
}
