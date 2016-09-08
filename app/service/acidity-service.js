'use strict';

const angular = require('angular');

angular.module('brewBuddy').factory('acidityService', ['$log', '$q', '$http', 'authService', acidityService]);

function acidityService($log, $q, $http, authService){
  let service = {};
  let token = authService.getToken();
  let url = `${__API_URL__}/api/acidity`;

  // add functionality to the service
  service.aciditys = [];

  service.createAcidity = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('acidityService.createAcidity');
    return $q((resolve, reject) => {
      $http.post( url , data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);
        this.aciditys.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      });
    });
  };

  service.fetchAciditys = function(){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('acidityService.fetchAciditys');
    return $q((resolve, reject) => {
      $http.get(url, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.aciditys = res.data;
          console.log('hitting', this.aciditys);
          resolve(this.aciditys);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateAcidity = function(data){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('acidityService.updateAcidity');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data , {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.aciditys.forEach((acidity, index) => {
            if (acidity._id === res.data._id) this.aciditys[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.deleteAcidity = function(acidityId){
    if(!token) return $q.reject(new Error('not token process not allowed'));
    $log.debug('acidityService.deleteAcidity');
    return $q((resolve, reject) => {
      $http.delete(`${url}/${acidityId}`, {
        headers: {
          authorization: `Bearer ${authService.getToken()}`
        }
      })
        .then((res) => {
          $log.log(`DELETE ${url}:${res.status} success!`);
          this.aciditys.forEach((acidity, index) => {
            if (acidity._id === acidityId) this.aciditys.splice(index, 1);
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
