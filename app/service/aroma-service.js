'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('aromaService', ['$log', '$q', '$http', 'authService', aromaService]);

function aromaService($log, $q, $http, authService){
  let service = {};
  let token = authService.getToken();
  let url = `${__API_URL__}/api/aroma`;

  service.aromas = [];

  service.createAroma = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('aromaService.createAroma');
    return $q((resolve, reject) => {
      $http.post( url , data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.aromas.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchAromas = function(){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('aromaService.fetchAroma');
    return $q((resolve, reject) => {
      $http.get(url, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.aromas = res.data;
          console.log('hitting', this.aromas);
          resolve(this.aromas);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateAroma = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('aromaService.updateAroma');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.aromas.forEach((aroma, index) => {
            if (aroma._id === res.data._id) this.aromas[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteAroma = function(aromaId){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('aromaService.deleteAroma');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${aromaId}`, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.aromas.forEach((aroma, index) => {
            if (aroma._id === aromaId) this.aromas.splice(index, 1);
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
