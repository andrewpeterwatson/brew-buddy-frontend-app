'use strict';

// require('./experience.scss');
const angular = require('angular');

angular.module('brewBuddy')
.controller('FinishedBrewController', ['$location', 'userSelectionsService', FinishedBrewController]);

function FinishedBrewController($location, userSelectionsService){}
