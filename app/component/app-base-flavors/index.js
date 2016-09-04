'use strict';

require('./base-flavors.scss');

const angular = require('angular');

angular.module('brewBuddy').directive('baseFlavors', function() {
  return {
    restrict: 'E',
    template: require('./base-flavors.html'),
    controller: ['flavorService',BaseFlavorsController],
    controllerAs: 'baseCtrl',
    bindToController: 'true',
    scope: {}
  };

  function BaseFlavorsController(flavorService) {


});
