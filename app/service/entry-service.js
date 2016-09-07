/*global __API_URL__ */
'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('entryService', ['$log', '$q', '$http', 'authService', entryService]);

function entryService($log, $q, $http, authService){
  let service = {};
  let token = authService.getToken();
  let url = `${__API_URL__}/api/entry`;

  // add functionality to the service
  service.entries = [];

  service.createEntry = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('entryService.createEntry');
    return $q((resolve, reject) => {
      $http.post( url , data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
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

  service.fetchAllEntries = function(){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('entryService.fetchAllEntries');
    return $q((resolve, reject) => {
      $http.get(`${url}/all`, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.entries = res.data;
          console.log('hitting', this.entries);
          resolve(this.entries);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateEntry = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('entryService.updateEntry');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
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
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('entryService.deleteEntry');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${entryId}`, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
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
