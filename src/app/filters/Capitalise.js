'use strict';

/**
 * Make first letter capital
 * @returns {Function}
 */
export default function() {
  return function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
