'use strict';

require('./flavor-el.scss');
const angular = require('angular');

angular.module('brewBuddy').directive('appFlavorEl', function() {
  return {
    restrict: 'E',
    template: require('./flavor-el.html'),
    controller: ['flavorService','$location','userSelectionsService', FlavorElementsController],
    controllerAs: 'flavorElCtrl',
    scope: {}
  };

  function FlavorElementsController(flavorService, $location, userSelectionsService){


    this.fruitsFloralsData = require('json!../../assets/flavor-data/flavor-fruitsAndFloral-data.json');
    this.sugarSpiceData = require('json!../../assets/flavor-data/flavor-sugarsAndSpice-data.json');
    this.otherData = require('json!../../assets/flavor-data/flavor-other-data.json');

    this.flavorPath = 0;
    this.userFlavors = [];
    this.currentCatSelection = [];
    this.currentFlavorTitles = [];
    this.currentCatData;
    this.flavorSelected;
    this.currentTitleSelection;
    this.flavorCatView = true;
    this.flavorTypeView = false;
    this.flavorTitleView = false;
    this.flavorSelectionsView = false;
    this.backButtonView = false;
    this.flavorChosen = false;
    this.anotherFlavorView = false;


    this.callFlavor = function(typeData, dataCat){
      this.flavorPath++;
      this.currentTitleSelection;
      this.backButtonView = true;
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
      this.backButtonView = true;
      this.flavorSelectionsView = true;
      this.currentFlavorTitles;
      this.flavorSelected;
      this.currentTitleSelection = title;
      flavorService.fetchFlavorTitle(this.currentCatData, this.currentTitleSelection);
      this.currentFlavorTitles = flavorService.flavorTitles;
    };
    this.selectFlavor = function(title){
      if (this.userFlavors.includes(title)) {
        console.log('already used');
        return;
      }
      this.flavorSelected;
      this.flavorSelected = title;
      this.userFlavors.push(title);
      this.flavorChosen = true;
      this.anotherFlavorView = true;
      this.backButtonView = false;
      this.flavorSelectionsView = false;
      this.flavorPath = 0;
      if (this.userFlavors.length === 3) {
        this.flavorCatView = false;
        this.flavorTypeView = false;
        this.flavorTitleView = false;
        this.flavorSelectionsView = false;
        this.anotherFlavorView = false;
        this.backButtonView = false;
      }
    };
    this.backButton = function(){
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
        this.backButtonView = false;
        this.flavorPath--;
        return;
      }
    };
    this.anotherFlavor = function(){
      this.flavorCatView = true;
      this.flavorTypeView = false;
      this.flavorTitleView = false;
      this.flavorSelectionsView = false;
      this.backButtonView = false;
      this.flavorChosen = false;
      this.anotherFlavorView = false;
    };
    this.nextPage = function(){
      userSelectionsService.updateFlavors(this.userFlavors);
      $location.path('/user/finish');
      console.log('nextPage hit');
    };
  }
});
