// /* global __API_URL__*/
//
// 'use strict';
//
// const angular = require('angular');
//
// angular.module('demoApp').factory('userService', ['$log', '$q', '$http', userService]);
//
// function userService($log, $q, $http){
//   let service = {};
//
//   let url = `${__API_URL__}/api/user`;
//
//   // add functionality to the service
//   service.users = [];
//
//   service.createUser = function(data){
//     $log.debug('userService.createUser');
//     return $q((resolve, reject) => {
//       $http.post( url , data )
//       .then( res  => {
//         $log.log(`POST ${url}:${res.status} success!`);
//         this.users.push(res.data);
//         resolve(res.data);
//       })
//       .catch( err => {
//         $log.error(`POST ${url}:${err.status} failure!`);
//         reject(err);
//       });
//     });
//   };
//
//   service.fetchUsers = function(){
//     $log.debug('userService.fetchUsers');
//     return $q((resolve, reject) => {
//       $http.get(url )
//         .then( res => {
//           $log.log(`GET ${url}:${res.status} success!`);
//           this.users = res.data;
//           resolve(this.users);
//         })
//         .catch( err => {
//           $log.error(`GET ${url}:${err.status} failure!`);
//           reject(err);
//         });
//     });
//   };
//
//   service.updateUser = function(data){
//     $log.debug('userService.updateUser');
//     return $q((resolve, reject) => {
//       $http.put(`${url}/${data._id}`, data )
//         .then( res => {
//           $log.log(`GET ${url}:${res.status} success!`);
//           this.users.forEach((user, index) => {
//             if (user._id === res.data._id) this.users[index] = res.data;
//           });
//           resolve(res.data);
//         })
//         .catch( err => {
//           $log.error(`GET ${url}:${err.status} failure!`);
//           reject(err);
//         });
//     });
//   };
//
//   service.deleteUser = function(userId){
//     $log.debug('userService.deleteUser');
//     return $q((resolve, reject) => {
//       $http.delete(`${url}/${userId}`)
//         .then((res) => {
//           $log.log(`DELETE ${url}:${res.status} success!`);
//           this.users.forEach((user, index) => {
//             if (user._id === userId) this.users.splice(index, 1);
//           });
//           resolve(res.data);
//         })
//         .catch((err) => {
//           $log.error(`DELETE ${url}:${err.status} failure!`);
//           reject(err);
//         });
//
//     });
//   };
//
//   return service;
// }
