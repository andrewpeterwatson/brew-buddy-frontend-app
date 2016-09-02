'use strict';

require('./_signup.scss');

const angular = require('angular');
// const brewBuddy = angular.module('brewBuddy');
angular.module('brewBuddy')
.controller('SignupController', ['$log', '$location','authService', SignupController]);

function SignupController($log, $location, authService){
  $log.debug('init signupCtrl');

  this.signup = function(){
    $log.debug('signupCtrl.signup');
    authService.signup(this.user)
    .then( token => {
      $log.info('token', token);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
