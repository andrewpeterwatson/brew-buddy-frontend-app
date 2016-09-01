/* global __API_URL__ */
'use strict';

const angular = require('angular');
const authString = this.authService.getToken();

angular.module('brewBuddy').factory('methodService', ['$log', '$q', '$http', 'authService', methodService]);

function methodService($log, $q, $http, authService){
  let service = {};

  const headers = {
    'Accept':'application/json',
    'Authorization': `Bearer ${authString}`
  };
  let url = `${__API_URL__}/api/method`;

  // add functionality to the service
  service.methods = [];

  service.createMethod = function(data){

    let token = authService.getToken();
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`
    };
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.createMethod');
    return $q((resolve, reject) => {
      $http.post( url , data, headers)
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
    let token = authService.getToken();
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.fetchMethods');
    return $q((resolve, reject) => {
      $http.get(url, headers )
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
    let token = authService.getToken();
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.updateMethod');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data, headers )
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
    let token = authService.getToken();
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.deleteMethod');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${methodId}`, headers)
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
