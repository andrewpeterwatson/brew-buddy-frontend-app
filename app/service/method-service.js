/* global __API_URL__ */
'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('brewMethodService', ['$log', '$q', '$http', 'authService', brewMethodService]);

function brewMethodService($log, $q, $http, authService){
  let service = {};
  let token = authService.getToken();
  let url = `${__API_URL__}/api/brew-method`;

  // add functionality to the service
  service.brewMethods = [];

  service.createBrewMethod = function(data){
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('brewMethodService.createBrewMethod');
    return $q((resolve, reject) => {
      $http.post( url , data, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.brewMethod.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchAllBrewMethods = function(){
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.fetchAllMethods');
    return $q((resolve, reject) => {
      $http.get(`${url}/all`, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.brewMethods = res.data;
          resolve(this.brewMethods);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateBrewMethod = function(data){
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.updateMethod');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data,{
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.brewMethods.forEach((brewMethod, index) => {
            if (brewMethod._id === res.data._id) this.brewMethods[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteBrewMethod = function(brewMethodId){
    if(!token) return $q.reject(new Error('no token process not allowed'));
    $log.debug('methodService.deleteBrewMethod');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${brewMethodId}`, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.brewMethods.forEach((brewMethod, index) => {
            if (brewMethod._id === brewMethodId) this.brewMethods.splice(index, 1);
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
