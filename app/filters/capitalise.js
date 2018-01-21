'use strict';

angular.module('app')
  .filter('capitalise', capitalise);

/**
 * Make first letter capital
 * @returns {Function}
 */
function capitalise() {
  return function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
