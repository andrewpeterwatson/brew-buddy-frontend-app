/* global __API_URL__*/

'use strict';

const angular = require('angular');

angular.module('demoApp').factory('entryService', ['$log', '$q', '$http', entryService]);

function entryService($log, $q, $http){
  let service = {};

  let url = `${__API_URL__}/api/entry`;

  // add functionality to the service
  service.entries = [];

  service.createEntry = function(data){
    $log.debug('entryService.createEntry');
    return $q((resolve, reject) => {
      $http.post( url , data )
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.entries.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchEntries = function(){
    $log.debug('entryService.fetchEntries');
    return $q((resolve, reject) => {
      $http.get(url )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.entries = res.data;
          resolve(this.entries);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateEntry = function(data){
    $log.debug('entryService.updateEntry');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.entries.forEach((entry, index) => {
            if (entry._id === res.data._id) this.entries[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteEntry = function(entryId){
    $log.debug('entryService.deleteEntry');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${entryId}`)
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.entries.forEach((entry, index) => {
            if (entry._id === entryId) this.entries.splice(index, 1);
          });
          resolve(res.data);
        })
        .catch((err) => {
          $log.error(`DELETE ${url}:${err.status} failure!`);
          reject(err);
        });

    });
  };

  return service;
}
