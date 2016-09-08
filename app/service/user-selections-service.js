'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', '$http', UserSelectionsService]);

function UserSelectionsService($q, $log, $http) {
  let service = {};

  service.userSelections = {
    origin: null,
    brewMethod: null,
    userFlavors: null,
    userExpDesc: null,
    userExpRating: null
  };

  service.updateOrigin = function(origin) {
    $log.log('UserSelectionsService.updateOrigin');
    service.userSelections.origin = origin;
  };

  service.updateBrewMethod = function(method) {
    $log.log('UserSelectionsService.updateBrewMethod');
    service.userSelections.brewMethod = method;
  };

  service.updateFlavors = function(flavorArr) {
    service.userSelections.userFlavors = flavorArr;
    console.log('user selections service flavors', service.userSelections.userFlavors);
  };
  service.updateUserExp = function(desc, rating){
    service.userSelections.userExpDesc = desc;
    service.userSelections.userExpRating = rating;
    console.log('user exp SERVICE',service.userSelections.userExpDesc, service.userSelections.userExpRating);
  };

  return service;
}
