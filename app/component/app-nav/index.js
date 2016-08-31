// 'use strict';
//
// const angular = require('angular');
// const brewBuddy = angular.module('brewBuddy');
//
// brewBuddy
// .directive('appNav', function(){
//   return {
//     restrict: 'E',
//     template: require('./app-nav.html'),
//     controller: 'NavController',
//     controllerAs: 'navCtrl',
//     bindToController: true
//   };
// });
//
// brewBuddy.controller('NavController', [ 'ngDialog', NavController]);
//
// function NavController(ngDialog) {
//   this.openModal = function(){
//     ngDialog.open({
//       template: require('./dialog.html'),
//       plain: true
//     });
//   };
// }
'use strict';

const angular = require('angular');
angular.module('brewBuddy')
.directive('appNavModal', function(){
  return {
    restrict: 'E',
    template: require('./app-nav.html'),
    controller: 'AppNavModalController',
    controllerAs: 'appNavModalCtrl',
    bindToController: true
  };
});

function AppNavModalController(){
  <section>
  </section>
}
