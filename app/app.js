'use strict';

var app = angular.module('app', [
  'ngRoute',
  'app.services',
  'app.controllers'
]);

/**
 * Routing
 */
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/partials/people.html',
        controller: 'PeopleController'
    }).otherwise({
        redirectTo: '/'
    });
  }
]);
