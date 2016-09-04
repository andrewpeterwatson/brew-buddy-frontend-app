'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('CountryOfOriginController', ['$log', '$location', 'originService', 'userSelectionsService', CountryOfOriginController]);

function CountryOfOriginController($log, $location, originService, userSelectionsService) {

  originService.fetchAllOrigins()
  .then( (origins) => {
    this.origins = origins;
  });

  this.submitOrigin = function(origin) {
    userSelectionsService.updateOrigin(origin);
    console.log('userSelectionsService', userSelectionsService);
    $location.path('/user/method');
  };

  this.dropdownSelector = function(origin) {
    console.log('selector function:', origin);
  };
}
