'use strict';

require('./finish.scss');
const angular = require('angular');

angular.module('brewBuddy')
.controller('FinishController', ['$log', '$location', 'userSelectionsService', FinishController]);

function FinishController($log, $location, userSelectionsService) {

  this.finishLength;
  this.finishBody;

  this.submitFinish = function(finishLength, finishBody){
    userSelectionsService.updateFinish(finishLength, finishBody);
    $location.path('/user/experience');
    console.log('finish', this.finishBody, 'length', this.finishLength);
  };
}
