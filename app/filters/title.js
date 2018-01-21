'use strict';

angular.module('app')
  .filter('title', title);

/**
 * Turn snake case to Title case
 * @returns {Function}
 */
function title() {
  return function(str) {
    return str.split('_').join(' ');
  };
}
