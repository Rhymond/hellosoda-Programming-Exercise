import '../services'
import '../directives'
import '../filters'

import PeopleController from './PeopleController'

angular.module('app.controllers', ['app.directives', 'app.services', 'app.filters'])
  .controller('PeopleController', PeopleController);
