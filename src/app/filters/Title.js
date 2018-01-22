'use strict';

/**
 * Turn snake case to Title case
 * @returns {Function}
 */
export default function() {
  return function(str) {
    return str.split('_').join(' ');
  };
}
