'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular modules
angular.module('demoApp', []);

// angular services
require('./service/app-flavor-service');
// angular components
require('./component/main');
require('./component/app-flavor-page');
require('./component/app-base-flavors');
require('./component/app-flavor-fruits-floralsSVG');
