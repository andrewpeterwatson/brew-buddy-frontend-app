'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('appFlavorService',[
  appFlavorService
]);

function appFlavorService(){
  let service = {};


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
        this.flavorTitles.push(dataArr[this.idx - 1].title);
      }
    });
  };

  return service;
}
