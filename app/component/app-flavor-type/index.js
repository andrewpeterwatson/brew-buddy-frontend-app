'use strict';

require('./flavor-type.scss');
const angular = require('angular');

angular.module('brewBuddy').directive('appFlavorType', function() {
  return {
    restrict: 'E',
    template: require('./flavor-type.html'),
    controller: ['flavorService',FlavorTypeController],
    controllerAs: 'typeCtrl',
    scope: {}
  };

  function FlavorTypeController(flavorService){


    this.fruitsFloralsData = require('json!../../assets/mock-data/flavor-fruitsAndFloral-data.json');
    this.sugarSpiceData = require('json!../../assets/mock-data/flavor-sugarsAndSpice-data.json');
    this.otherData = require('json!../../assets/mock-data/flavor-other-data.json');


    this.callFlavor = function(typeData, dataCat){
      flavorService.fetchFlavorType(typeData, dataCat);
      this.currentCatSelection = flavorService.flavorTypes;
      console.log('service types', flavorService.flavorTypes);
      console.log('currentCatSelection', this.currentCatSelection);

    };

    // this.fruitsFloralsData = require('json!../../assets/mock-data/flavor-fruitsAndFloral-data.json');
    // this.sugarSpiceData = require('json!../../assets/mock-data/flavor-sugarsAndSpice-data.json');
    // this.otherData = require('json!../../assets/mock-data/flavor-other-data.json');
    //
    // this.flavorTypes = [];
    // this.flavorTitles = [];
    //
    // this.flavorCatSelected = '';
    //
    // this.fetchFlavorType = function(typeData, dataCat){
    //   this.flavorTypes = [];
    //   this.flavorCatSelected = dataCat;
    //   angular.forEach(typeData, (type) => {
    //     if (!this.flavorTypes.includes(type.flavorType)) {
    //       this.flavorTypes.push(type.flavorType);
    //     }
    //   });
    //   console.log('flavor types', this.flavorTypes);
    // };
    //
    // this.fetchFlavorTitle = function(titleData){
    //   this.flavorTitles = [];
    //   angular.forEach(titleData, (type) => {
    //     if (!this.flavorTitles.includes(type.title)) {
    //       this.flavorTitles.push(type.title);
    //     }
    //   });
    //   console.log('flavor titles', this.flavorTitles);
    // };

  }
});
