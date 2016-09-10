'use strict';

require('./brew-gallery.scss');
const angular = require('angular');

angular.module('brewBuddy')
.directive('brewGallery', function() {
  return {
    restrict: 'E',
    template: require('./brew-gallery.html'),
    controller: ['brewMethodGalleryService','userSelectionsService', BrewGalleryController],
    controllerAs: 'brewGalleryCtrl',
    scope: {}
  };

  function BrewGalleryController(brewMethodGalleryService, userSelectionsService){

    this.brewMethods = require('json!../../assets/brew-method-data/brew-methods.json');
    this.galleryIndex = 0;
    this.currentBrewMethod = userSelectionsService.userSelections.methodId;
    console.log('currentBrewMethod', this.currentBrewMethod);

    this.stepForward = function() {
      brewMethodGalleryService.cycleForward(this.galleryIndex, this.brewMethods[userSelectionsService.userSelections.methodId].length);
      this.galleryIndex = brewMethodGalleryService.galleryIndex;
    };
    this.stepBackward = function(){
      brewMethodGalleryService.cycleBackward(this.galleryIndex);
      this.galleryIndex = brewMethodGalleryService.galleryIndex;
    };
  }
});
