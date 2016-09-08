'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', UserSelectionsService]);

function UserSelectionsService($q, $log) {
  let service = {};

  service.userSelections = {
    origin: null,
    brewMethod: null,
    userFlavors: null,
    userExpDesc: null,
    userExpRating: null,
    aroma: null,
    acidityDesc: null,
  };

  service.updateOrigin = function(origin) {
    $log.log('UserSelectionsService.updateOrigin');
    service.userSelections.origin = origin;
  };
  service.updateBrewMethod = function(method) {
    $log.log('UserSelectionsService.updateBrewMethod');
    service.userSelections.brewMethod = method;
  };
  service.updateAroma = function(aroma) {
    $log.log('UserSelectionsService.updateAroma');
    service.userSelections.aroma = aroma;
    console.log('service.userSelections.aroma');
  };
  service.updateAcidity = function(desc, strength) {
    $log.log('UserSelectionsService.updateAcidity');
    service.userSelections.acidityDesc = desc;
    service.userSelections.acidityStrength = strength;
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
