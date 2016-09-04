'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('CountryOfOriginController', ['$log', '$location', 'originService', CountryOfOriginController]);

function CountryOfOriginController($log, $location, originService) {

  this.brewForm = {};
  // this.origins = {};

  // this.fetchOrigins = function() {
    originService.fetchOrigins()
    .then( (origins) => {
      this.origins = origins;
    });
  // };

  this.submitOrigin = function() {

  }
}
