'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('flavorService',[
  '$rootScope',
  flavorService
]);

function flavorService($rootScope){
  let service = {};



  // service.fruitsFloralsData = require('json!../assets/mock-data/flavor-fruitsAndFloral-data.json');
  // service.sugarSpiceData = require('json!../assets/mock-data/flavor-sugarsAndSpice-data.json');
  // service.otherData = require('json!../assets/mock-data/flavor-other-data.json');

  service.flavorTypes = [];
  service.flavorTitles = [];

  service.flavorCatSelected = '';

  service.fetchFlavorType = function(typeData, dataCat){
    // $rootScope.$apply(() => {
    service.flavorCatSelected = dataCat;
    angular.forEach(typeData, (type) => {
      if (!service.flavorTypes.includes(type.flavorType)) {
        service.flavorTypes.push(type.flavorType);
      }
    });
    // });
    console.log('flavor types', service.flavorTypes);
  };
  return service;

  // service.fetchFlavorTitle = function(titleData){
  //   service.flavorTitles = [];
  //   angular.forEach(titleData, (type) => {
  //     if (!service.flavorTitles.includes(type.title)) {
  //       service.flavorTitles.push(type.title);
  //     }
  //   });
  //   console.log('flavor titles', this.flavorTitles);
  // };

}


  // service.baseFlavors = ['fruitsFlorals','sugarSpice','other', 'vanilla'];
  // service.baseFlavor = true;
  // service.fruitsFloralsSVG = false;
  //
  //
  // service.currentBaseSelection = function(baseFlavor){
  //   $rootScope.$apply(() => {
  //
  //     angular.forEach(service.baseFlavors, function(baseFlavors){
  //
  //       service.baseFlavor = false;
  //       if (baseFlavor === 'vanilla') {
  //         service.baseFlavor = true;
  //         console.log('vanilla', service.baseFlavor);
  //       }
  //       if(baseFlavor === baseFlavors) {
  //         service[(baseFlavor + 'SVG')] = true;
  //         console.log('this is base', service[baseFlavors]);
  //       }
  //     });
  //
  //     service.currentBase = baseFlavor;
  //   });
  // };
  // return service;

// }
