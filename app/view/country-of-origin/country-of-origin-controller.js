'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('CountryOfOriginController', ['$log', '$location', 'originService', CountryOfOriginController]);

function CountryOfOriginController($log, $location, originService) {

  this.brewForm = {
    origin: null,
    brewMethod: null
  };
  // this.origins = {};

  originService.fetchAllOrigins()
  .then( (origins) => {
    this.origins = origins;
  });

  this.submitOrigin = function() {
    console.log(this.origins);
    this.brewForm.origin = this.origins;
    $location.path('/user/method');
  };

  this.dropdownSelector = function(origin) {
    console.log('selector function:', origin);
  };
}
