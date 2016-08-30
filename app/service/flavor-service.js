/*global __API_URL__ */
'use strict';

const angular = require('angular');

angular.module('demoApp').factory('flavorService', ['$log', '$q', '$http', flavorService]);

function flavorService($log, $q, $http){
  let service = {};

  let url = `${__API_URL__}/api/flavor`;

  // add functionality to the service
  service.flavors = [];

  service.createFlavor = function(data){
    $log.debug('flavorService.createFlavor');
    return $q((resolve, reject) => {
      $http.post( url , data )
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.flavors.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchFlavors = function(){
    $log.debug('flavorService.fetchFlavors');
    return $q((resolve, reject) => {
      $http.get(url )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.flavors = res.data;
          resolve(this.flavors);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateFlavor = function(data){
    $log.debug('flavorService.updateFlavor');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data )
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.flavors.forEach((flavor, index) => {
            if (flavor._id === res.data._id) this.flavors[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteFlavor = function(flavorId){
    $log.debug('flavorService.deleteFlavor');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${flavorId}`)
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.flavors.forEach((flavor, index) => {
            if (flavor._id === flavorId) this.flavors.splice(index, 1);
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
