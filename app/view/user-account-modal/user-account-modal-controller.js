'use strict';

const angular = require('angular');

angular.module('brewBuddy')
.controller('UserAccountModalController', ['$log', 'userService', UserAccountModalController]);

function UserAccountModalController($log, userService) {

  this.user = {};

  userService.fetchUser()
  .then( (user) => {
    this.user - user;
  });

  this.updateAccountInfo = function() {
    $log.debug('userAccountCtrl.updateAccountInfo');

    const docForm = document.form['update-account-info-form'];

    if (docForm.changeusername.value === null) {
      return false;
    }
    if (docForm.currentpassword.value === null) {
      return false;
    }
    if (docForm.newemail.value === null) {
      return false;
    }

    // functionality to update user object
  };
}
