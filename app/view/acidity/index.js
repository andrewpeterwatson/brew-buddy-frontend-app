'use strict';

require('./acidity.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('AcidityController', ['$log', '$location', 'userSelectionsService', AcidityController]);

function AcidityController($log, $location, userSelectionsService){
  $log.debug('AcidityController');


  this.acidDesc;
  this.intensityLevel;


  this.nextPageFlavor = function(){
    userSelectionsService.updateAcidity(this.acidDesc, this.intensityLevel);
    console.log(this.acidDesc, this.intensityLevel);
    $location.path('/user/flavor');
  };
}
