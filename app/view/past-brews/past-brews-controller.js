'use strict';

const angular = require('angular');
angular.module('brewBuddy')
.controller('PastBrewsController', ['$log', '$location', 'userSelectionsService', 'entryService', PastBrewsController]);

function PastBrewsController($log, $location, userSelectionsService, entryService) {

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
      userExpRating: 2,
      date: 'right now'
    };
  };

}
