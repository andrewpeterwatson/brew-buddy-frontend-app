'use strict';

require('./acidity.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('AcidityController', ['$log', '$location', 'acidityService', 'userSelectionsService', AcidityController]);

function AcidityController($log, $location, acidityService, userSelectionsService){
  $log.debug('AcidityController');
  this.nextPageFlavor = function(acidity){
    userSelectionsService.updateAcidity(acidity);
    $location.path('/flavor');
    console.log('????????????', acidity);
    console.log('userSelections', userSelectionsService.userSelections);
  };
}
