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

  // this.fetchOrigins = function() {
    originService.fetchAllOrigins()
    .then( (origins) => {
      this.origins = origins;
    });
  // };

  this.logOrigin = function() {
    console.log('origin selected', this.origins);
  };

  this.submitOrigin = function() {
    console.log(this.origins);
    const originValue = document.getElementById('ctyoforigin').value;
    this.brewForm.origin = originValue;
  }
}
