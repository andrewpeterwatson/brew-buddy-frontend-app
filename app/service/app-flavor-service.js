'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('flavorService',[
  '$rootScope',
  flavorService
]);

function flavorService(){
  let service = {};



  // service.fruitsFloralsData = require('json!../assets/mock-data/flavor-fruitsAndFloral-data.json');
  // service.sugarSpiceData = require('json!../assets/mock-data/flavor-sugarsAndSpice-data.json');
  // service.otherData = require('json!../assets/mock-data/flavor-other-data.json');

  service.flavorTypes = [];
  service.flavorTitles = [];

  service.fetchFlavorType = function(typeData, dataCat){
    service.flavorCatSelected = dataCat;
    service.flavorTypes = [];
    angular.forEach(typeData, (type) => {
      if (!service.flavorTypes.includes(type.flavorType)) {
        service.flavorTypes.push(type.flavorType);
      }
    });
  };

  service.fetchFlavorTitle = function(dataArr, selectedType){
    service.flavorTitles = [];
    this.idx = 0;
    angular.forEach(dataArr, (type) => {
      this.idx++;
      if (type.flavorType === selectedType) {
        console.log('dataArr at selectedType', dataArr[this.idx - 1].title);
        this.flavorTitles.push(dataArr[this.idx - 1].title);
      }
    });
    console.log('flavorTitles', service.flavorTitles);
  };

  return service;
}
