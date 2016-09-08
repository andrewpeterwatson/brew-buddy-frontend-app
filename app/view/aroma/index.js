'use strict';

require('./aroma.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('AromaController', ['$log', '$location', 'aromaService', 'userSelectionsService', AromaController]);

function AromaController($log, $location, aromaService, userSelectionsService){
  $log.debug('AromaController');
  this.nextPageAcidity = function(aroma){
    userSelectionsService.updateAroma(aroma);
    $location.path('/user/acidity');
    console.log('!!!!!!!!!!user selections service flavors', aroma);
    console.log('userSelections', userSelectionsService.userSelections);

  };
}
