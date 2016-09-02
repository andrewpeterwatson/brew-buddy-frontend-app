'use strict';

require('./app-flavor-page.scss');

const angular = require('angular');

angular.module('demoApp').directive('appFlavor', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-flavor-page.html'),
    controller: ['flavorService',AppFlavorController],
    controllerAs: 'flavorCtrl',
    bindToController: true,
    scope: {},
  };

  function AppFlavorController(flavorService){
    this.flavorService = flavorService;

  }
});
