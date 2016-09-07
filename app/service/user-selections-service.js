'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', '$http', UserSelectionsService]);

function UserSelectionsService($q, $log, $http){
  let service = {};

  service.userSelections = {
    origin: null,
    brewMethod: null,
    aroma: null
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
  };

  service.updateAcidity = function(acidity) {
    $log.log('UserSelectionsService.updateAcidity');
    service.userSelections.acidity = acidity;
  };

  return service;
}
