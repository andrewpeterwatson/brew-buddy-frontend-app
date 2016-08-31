'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('UserController', ['$log', '$q', 'userService', UserController]);

function UserController($log, $q, userService) {

  this.user = {};

  this.getUserData = function() {
    $log.debug('UserController.getUserData');
    userService.fetchUsers()
    .then( (user) => {
      this.user = user;
    });
  };
}
