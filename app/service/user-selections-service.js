'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', '$http', UserSelectionsService]);

function UserSelectionsService($q, $log, $http) {
  let service = {};

  service.userSelections = {
    origin: null,
    brewMethod: null,
    userFlavors: null
  };

  service.updateOrigin = function(origin) {
    $log.log('UserSelectionsService.updateOrigin');
    service.userSelections.origin = origin;
  };
  service.updateFinish = function(finish, finishBody) {
    $log.log('UserSelectionsService.updateFinish');
    $log.log('UserSelectionsService.updateFinishBody');
    service.userSelections.finish = finish;
    service.userSelections.finishBody = finishBody;

  };

  service.updateBrewMethod = function(method) {
    $log.log('UserSelectionsService.updateBrewMethod');
    service.userSelections.brewMethod = method;
  };

  service.updateFlavors = function(flavorArr) {
    service.userSelections.userFlavors = flavorArr;
    console.log('user selections service flavors', service.userSelections.userFlavors);
  };

  return service;
}
