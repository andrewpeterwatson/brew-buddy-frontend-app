'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('RecBrewMethodController', ['$log', '$location', 'methodService', 'userSelectionsService', RecBrewMethodController]);

function RecBrewMethodController($log, $location, methodService, userSelectionsService) {

  this.methods = ['Chemex', 'French Press', 'Aeropress', 'Wave'];

  // this.fetchMethods = function() {
  //   $log.debug('RecBrewMethodController.fetchMethods');
  //   methodService.fetchMethods()
  //   .then( (methods) => {
  //     this.methods = methods;
  //   });
  //
  // };

  this.submitRecBrewMethod = function(method) {
    $log.debug('RecBrewMethodController.submitRecBrewMethod');
    userSelectionsService.updateBrewMethod(method);
    console.log('user select service brewMethod', userSelectionsService);
    $location.path('/user/recipe');
  };
}
