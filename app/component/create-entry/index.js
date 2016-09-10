'use strict';

require('./create-entry.scss');

const angular = require('angular');
angular.module('brewBuddy')
.component('createEntryEl', {
  template: require('./create-entry.html'),
  controller: ['$q', '$log', 'entryService','userSelectionsService',CreateEntryController],
  controllerAs: 'createEntryCtrl'
});

function CreateEntryController($q, $log, entryService, userSelectionsService){
  this.selections;
  this.submit = function(){
    this.selections = userSelectionsService.userSelections;
    entryService.createEntry(userSelectionsService.userSelections)
    .then(entry => $log.info('entry created', entry))
    .catch(err => $log.err('no entry created', err));
  };
}
