'use strict';

const angular = require('angular');
angular.module('brewBuddy')
.directive('appAuthModal', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-auth-modal.html'),
    scope: {
      closeModal: '&'
    }
  };
});
