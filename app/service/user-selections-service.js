'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', '$http', UserSelectionsService]);

function UserSelectionsService($q, $log, $http) {
  let service = {};

  service.userSelections = {
    origin: null
  };

  service.updateOrigin = function(origin) {
    $log.log('UserSelectionsService.updateOrigin');
    service.userSelections.origin = origin;
  };

  return service;
}
