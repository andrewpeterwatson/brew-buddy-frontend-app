'use strict';

require('./acidity.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('AcidityController', ['$log', '$location', AcidityController]);

function AcidityController($log, $location){

  $log.debug('AcidityController');
  this.nextPageFlavor = function(){
    $location.path('/flavor');
  };
}
