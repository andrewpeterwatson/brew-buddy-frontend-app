'use strict';

require('./aroma.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('AromaController', ['$log', '$location', AromaController]);

function AromaController($log, $location){
  // let dataCollected_AromaLists = {};

  $log.debug('AromaController');
  this.nextPageAcidity = function(){
    $location.path('/acidity');
  };
}
