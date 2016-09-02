'use strict';

require('./base-flavors.scss');

const angular = require('angular');

angular.module('demoApp').directive('baseFlavors', function() {
  return {
    restrict: 'E',
    template: require('./base-flavors.html'),
    controller: ['flavorService',BaseFlavorsController],
    controllerAs: 'baseCtrl',
    bindToController: 'true',
    scope: {}
  };

  function BaseFlavorsController(flavorService) {

    this.flavorService = flavorService;

    this.fruitsFlorals = $('#layer3');
    this.sugarSpice = $('#layer2');
    this.other = $('#layer4');

    this.vanilla = $('#vanilla');


    this.currentBaseFlavor;


    this.vanilla.on( 'click', function() {
      this.currentBaseFlavor = 'vanilla';
      flavorService.currentBaseSelection(this.currentBaseFlavor);
      console.log( 'this worked', this.id);
    });

    this.fruitsFlorals.on( 'click', function() {
      this.currentBaseFlavor = 'fruitsFlorals';
      flavorService.currentBaseSelection(this.currentBaseFlavor);
      console.log( 'this worked', this.id);
    });
    this.sugarSpice.on( 'click', function() {
      this.currentBaseFlavor = 'sugarSpice';
      flavorService.currentBaseSelection(this.currentBaseFlavor);
      console.log( 'this worked', this.id);
      console.log('currentBaseFlavor', this.currentBaseFlavor);
    });
    this.other.on( 'click', function() {
      this.currentBaseFlavor = 'other';
      flavorService.currentBaseSelection(this.currentBaseFlavor);
      console.log( 'this worked', this.id);
      console.log('currentBaseFlavor', this.currentBaseFlavor);
    });
  }
});
