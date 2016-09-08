'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('FinishController', ['$log', '$location', 'userSelectionsService', FinishController]);

function FinishController($log, $location, userSelectionsService) {

  this.finish = [];
  this.finishBody = [];

  this.submitFinish = function(finish, finishBody){
    userSelectionsService.updateFinish(finish, finishBody);
    $location.path('/user/finish');
  };
}
