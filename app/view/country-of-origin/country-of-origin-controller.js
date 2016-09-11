'use strict';

require('./_country-of-origin.scss');
const angular = require('angular');

angular.module('brewBuddy')
.controller('CountryOfOriginController', ['$log', '$location', 'originService', 'userSelectionsService', CountryOfOriginController]);

function CountryOfOriginController($log, $location, originService, userSelectionsService) {

  // originService.fetchAllOrigins()
  // .then( (origins) => {
  //   this.origins = origins;
  // });

  this.origins = [
    'Guatemala',
    'Brazil',
    'Ethiopia',
    'Kenya',
    'Columbia',
    'Indonesia'
  ];

  this.submitOrigin = function(origin) {
    userSelectionsService.updateOrigin(origin);
    console.log('origin', origin);
    $location.path('/user/method');
  };

// purely for dev purposes...
  this.dropdownSelector = function(origin) {
    console.log('selector function:', origin);
  };
}
