import Capitalise from './Capitalise'
import Title from './Title'

angular.module('app.filters', [])
  .filter('capitalise', Capitalise)
  .filter('title', Title);
