'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngDialog = require('ng-dialog');
// angular modules
angular.module('brewBuddy', [ngDialog]);

// require('./component/app-main');
require('./component/app-home');
require('./component/app-nav');
