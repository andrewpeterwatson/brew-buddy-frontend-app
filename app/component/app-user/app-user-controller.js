'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('UserController', ['$log', '$q', 'userService', UserController]);

function UserController($log, $q, userService) {

  this.user = {};

  this.getUserData = function() {
    userService.fetchUser()
    .then( (user) => {
      this.user = user;
    });
  };
}
