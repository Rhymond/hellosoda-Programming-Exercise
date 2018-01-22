import '../services'
import '../filters'

import PeopleController from './PeopleController'

angular.module('app.controllers', ['app.services', 'app.filters'])
  .controller('PeopleController', PeopleController);
