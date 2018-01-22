import angular from 'angular';
import angularRoute from 'angular-route';

import 'bulma/css/bulma.css';
import './../style/app.css';

import './controllers';

let app = angular.module('app', ['ngRoute', 'app.controllers'])
  .config(['$routeProvider', ($routeProvider) =>
    $routeProvider.when('/', {
      template: require('./partials/people.html'),
      controller: 'PeopleController',
      controllerAs: 'ctrl'
    }).otherwise({
      redirectTo: '/'
    })
  ]);

export default app;
