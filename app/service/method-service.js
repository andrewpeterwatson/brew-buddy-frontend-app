/* global __API_URL__ */
'use strict';

const angular = require('angular');

angular.module('demoApp').factory('methodService', ['$log', '$q', '$http', methodService]);

function methodService($log, $q, $http){
  let service = {};

  let url = `${__API_URL__}/api/method`;

  // add functionality to the service
  service.methods = [];

  service.createMethod = function(data){
    $log.debug('methodService.createMethod');
    return $q((resolve, reject) => {
      $http.post( url , data )
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.methods.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchMethods = function(){
    $log.debug('methodService.fetchMethods');
    return $q((resolve, reject) => {
      $http.get(url )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.methods = res.data;
          resolve(this.methods);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateMethod = function(data){
    $log.debug('methodService.updateMethod');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.methods.forEach((method, index) => {
            if (method._id === res.data._id) this.methods[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteMethod = function(methodId){
    $log.debug('methodService.deleteMethod');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${methodId}`)
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.methods.forEach((method, index) => {
            if (method._id === methodId) this.methods.splice(index, 1);
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
