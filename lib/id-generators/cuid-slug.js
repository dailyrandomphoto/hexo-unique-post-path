'use strict';

const cuid = require('cuid');

module.exports = function(option) {
  return () => cuid.slug();
};
