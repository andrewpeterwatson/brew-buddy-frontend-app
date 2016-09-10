'use strict';

require('./experience.scss');
const angular = require('angular');

angular.module('brewBuddy')
.controller('ExperienceController', ['$log', '$location', 'userSelectionsService','entryService', ExperienceController]);

function ExperienceController($log, $location, userSelectionsService, entryService){
  this.userExpDesc = '';
  this.userExpRating;

  this.submit = function(text){
    this.userExpDesc = text;
    userSelectionsService.updateUserExp(this.userExpDesc, this.userExpRating);
    console.log('userSelections', userSelectionsService.userSelections);

    entryService.createEntry(userSelectionsService.userSelections)
    .then(entry => $log.info('entry created', entry))
    .catch(err => $log.err('no entry created', err));

    $location.path('/user/finishedbrew');
  };
  this.rateExp = function(rating){
    this.userExpRating;
    this.userExpRating = rating;
  };

}
