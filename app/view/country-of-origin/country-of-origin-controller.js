'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('CountryOfOriginController', ['$log', '$location', 'originService', 'userSelectionsService', CountryOfOriginController]);

function CountryOfOriginController($log, $location, originService, userSelectionsService) {

  // originService.fetchAllOrigins()
  // .then( (origins) => {
  //   this.origins = origins;
  // });

  this.origins = [
      {
      "country": "Guatemala",
      "reqMethod":"French Press"
    },
    {
      "country": "Brazil",
      "reqMethod":"French Press"
    },
    {
      "country": "Ethiopia",
      "reqMethod":"Chemex"
    },
    {
      "country": "Kenya",
      "reqMethod":"Chemex"
    },
    {
      "country": "Columbia",
      "reqMethod":"French Press"
    },
    {
      "country": "Indonesia",
      "reqMethod":"Siphon Pot"
  }
  ]

  this.submitOrigin = function(origin) {
    userSelectionsService.updateOrigin(origin);
    $location.path('/user/method');
  };

// purely for dev purposes...
  this.dropdownSelector = function(origin) {
    console.log('selector function:', origin);
  };
}
