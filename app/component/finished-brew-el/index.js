'use strict';

require('./_finished-brew-el.scss');

const angular = require('angular');
angular.module('brewBuddy')
.component('finishedBrewEl', {
  template: require('./finished-brew-el.html'),
  controller: ['userSelectionsService', FinshedBrewElController],
  controllerAs: 'finishedBrewCtrl'
});


function FinshedBrewElController(userSelectionsService){
  this.newBrew = userSelectionsService.userSelections;
}
