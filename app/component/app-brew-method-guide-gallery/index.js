'use strict';

require('./brew-gallery.scss');
const angular = require('angular');

angular.module('brewBuddy')
.directive('brewGallery', function() {
  return {
    restrict: 'E',
    template: require('./brew-gallery.html'),
    controller: [BrewGalleryController],
    controllerAs: 'brewGalleryCtrl',
    scope: {}
  };

  function BrewGalleryController(){

  }
});
