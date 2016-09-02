'use strict';

const angular = require('angular');

angular.module('demoApp').factory('flavorService',[
  '$rootScope',
  flavorService
]);

function flavorService($rootScope){
  let service = {};


  service.baseFlavors = ['fruitsFlorals','sugarSpice','other', 'vanilla'];
  service.baseFlavor = true;
  service.fruitsFloralsSVG = false;


  service.currentBaseSelection = function(baseFlavor){
    $rootScope.$apply(() => {

      angular.forEach(service.baseFlavors, function(baseFlavors){

        service.baseFlavor = false;
        if (baseFlavor === 'vanilla') {
          service.baseFlavor = true;
          console.log('vanilla', service.baseFlavor);
        }
        if(baseFlavor === baseFlavors) {
          service[(baseFlavor + 'SVG')] = true;
          console.log('this is base', service[baseFlavors]);
        }
      });

      service.currentBase = baseFlavor;
    });
  };
  return service;

}
