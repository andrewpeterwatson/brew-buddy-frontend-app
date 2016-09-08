'use strict';

require('./experience.scss');
const angular = require('angular');

angular.module('brewBuddy')
.controller('ExperienceController', ['$location', 'userSelectionsService', ExperienceController]);

function ExperienceController($location, userSelectionsService){
  this.userExpDesc = '';
  this.userExpRating;

  this.submit = function(text){
    this.userExpDesc = text;
    userSelectionsService.updateUserExp(this.userExpDesc, this.userExpRating);
    console.log('user Exp controller', this.userExpDesc, this.userExpRating);
  };
  this.rateExp = function(rating){
    this.userExpRating;
    this.userExpRating = rating;
  };

}
