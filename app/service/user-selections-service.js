'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.factory('userSelectionsService', ['$q', '$log', UserSelectionsService]);

function UserSelectionsService($q, $log) {
  let service = {};

  service.userSelections = {
    date: new Date(),
    originId: null,
    methodId: null,
    flavorId: null,
    experience: null,
    rating: null,
    aromas: null,
    acidity: null,
    acidityStrength: null,
    finish: null,
    body: null
  };

  service.updateOrigin = function(origin) {
    $log.log('UserSelectionsService.updateOrigin');
    service.userSelections.originId = origin;
  };

  service.updateBrewMethod = function(method) {
    $log.log('UserSelectionsService.updateBrewMethod');
    service.userSelections.methodId = method;
  };
  service.updateAroma = function(aroma) {
    $log.log('UserSelectionsService.updateAroma');
    service.userSelections.aromas = aroma;
    console.log('service.userSelections.aroma');
  };
  service.updateAcidity = function(desc, strength) {
    $log.log('UserSelectionsService.updateAcidity');
    service.userSelections.acidity = desc;
    service.userSelections.acidityStrength = strength;
  };
  service.updateFlavors = function(flavorArr) {
    service.userSelections.flavorId = flavorArr;
  };
  service.updateFinish = function(finishLength, finishBody) {
    $log.log('UserSelectionsService.updateFinish');
    $log.log('UserSelectionsService.updateFinishBody');
    service.userSelections.finish = finishLength;
    service.userSelections.body = finishBody;
    console.log('length', service.userSelections.finishLength, 'body', service.userSelections.finishBody);
  };
  service.updateUserExp = function(desc, rating){
    service.userSelections.experience = desc;
    service.userSelections.rating = rating;
    console.log('user exp SERVICE',service.userSelections.userExpDesc, service.userSelections.userExpRating);
  };

  return service;
}
