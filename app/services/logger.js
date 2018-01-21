'use strict';

angular.module('app.services', [])
  .service('loggerService', loggerService);

/**
 * Logger service for logging Client side actions to server side
 * @param $http
 */
function loggerService($http) {
  this.log = function (data) {
    return $http.post('/api/log', data, {
      async : true
    });
  };
}

loggerService.$inject = ['$http'];
