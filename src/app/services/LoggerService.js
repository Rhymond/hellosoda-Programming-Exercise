'use strict'

/**
 * Logger service for logging Client side actions to server side
 * @param $http
 */
function LoggerService($http) {
  this.log = function (data) {
    return $http.post(process.env.API_URL + '/api/log', data, {
      async : true
    });
  };
}

LoggerService.$inject = ['$http'];

export default LoggerService
