'use strict';

const prefixSeq = require('./prefix-seq');

module.exports = function(option) {
  // clone option object
  option = Object.assign({}, option);
  option.prefix = '';

  return prefixSeq(option);
};
