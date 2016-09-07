'use strict';

const angular = require('angular');
angular.module('brewBuddy')
.controller('PastBrewsController', ['$log', '$location', 'UserSelectionsService', PastBrewsController]);

function PastBrewsController($log, $location, UserSelectionService) {

  this.fetchPastBrews = function() {
    // fetch them brewz
  };

  this.showPastBrewModal = function() {
    // show dat broo
  };
  
}
