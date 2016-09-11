'use strict';

require('./_past-brews.scss');

const angular = require('angular');
angular.module('brewBuddy')
.controller('PastBrewsController', ['$log', '$location', 'userSelectionsService', 'entryService', PastBrewsController]);

function PastBrewsController($log, $location, userSelectionsService, entryService) {

  this.pastBrews = [];
  this.showModal = false;

  this.fetchPastBrews = function() {
    $log.debug('pastBrewsCtrl.fetchPastBrews');
    entryService.fetchEntries()
    .then( (entries) => {
      this.pastBrews = entries;
    })
    .catch( () => {
      return false;
    });
  };

  this.showBrewModal = function(brew) {
    console.log('thee brew ', brew);
    this.selectedBrew = brew;
    this.showModal = true;
  };

  this.closeModal = function() {
    this.showModal = false;
  };
}
