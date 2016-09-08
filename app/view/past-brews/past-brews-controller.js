'use strict';

const angular = require('angular');
angular.module('brewBuddy')
.controller('PastBrewsController', ['$log', '$location', 'UserSelectionsService', 'entryService', PastBrewsController]);

function PastBrewsController($log, $location, UserSelectionService, entryService) {

  this.pastBrews = {};

  // this.fetchPastBrews = function() {
  //   $log.debug('pastBrewsCtrl.fetchPastBrews');
  //   entryService.fetchEntry()
  //   .then( (entries) => {
  //     this.pastBrews = entries;
  //   });
  //   .catch( () => {
  //     return false;
  //   })
  // };

  this.fetchPastBrews = function() {
    this.pastBrews = {
      origin: 'Antarctica',
      brewMethod: 'Smash into some rocks',
      flavor: 'butts',
      date: 2016-09-08
    };
  };

}
