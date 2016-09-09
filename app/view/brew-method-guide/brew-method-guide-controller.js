'use strict';

require('./brew-method-guide.scss');

const angular = require('angular');

angular.module('brewBuddy')
.controller('BrewMethodGuideController', ['$location', BrewMethodGuideController]);

function BrewMethodGuideController($location){
  this.brewFinished = function(){
    console.log('brew finished');
    $location.path('/user/aroma');
  };
}
