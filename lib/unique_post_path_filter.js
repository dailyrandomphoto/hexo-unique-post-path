'use strict';

const cuid = require('cuid');

module.exports = function(data, replace) {
  // set path value as a value of cuid.
  data.path = cuid();
  return data;
};
