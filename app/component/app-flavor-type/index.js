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

    this.flavorPath = 0;
    this.currentCatSelection = [];
    this.currentFlavorTitles = [];
    this.currentCatData;
    this.flavorSelected;
    this.currentTitleSelection;
    this.flavorCatView = true;
    this.flavorTypeView = false;
    this.flavorTitleView = false;
    this.flavorSelectionsView = false;


    this.callFlavor = function(typeData, dataCat){
      this.flavorPath++;
      this.currentTitleSelection;
      this.flavorCatView = false;
      this.flavorTypeView = false;
      this.flavorTitleView = false;
      this.flavorSelectionsView = false;
      flavorService.fetchFlavorType(typeData, dataCat);
      this.currentCatSelection = flavorService.flavorTypes;
      this.currentCatData = typeData;
      this.flavorTypeView = true;
    };

    this.callTitle = function(title){
      this.flavorPath++;
      this.flavorTypeView = false;
      this.flavorSelectionsView = true;
      this.currentFlavorTitles;
      this.flavorSelected;
      this.currentTitleSelection = title;
      flavorService.fetchFlavorTitle(this.currentCatData, this.currentTitleSelection);
      this.currentFlavorTitles = flavorService.flavorTitles;
    };
    this.selectFlavor = function(title){
      this.flavorSelected;
      this.flavorSelected = title;
    };
    this.backButton = function(){
      console.log('path count', this.flavorPath);
      if (this.flavorPath === 2) {
        this.flavorSelectionsView = false;
        this.flavorTitleView = false;
        this.flavorTypeView = true;
        this.flavorPath--;
        return;
      }
      if (this.flavorPath === 1) {
        this.flavorCatView = true;
        this.flavorTypeView = false;
        this.flavorPath--;
        return;
      }
    };
  }
});
