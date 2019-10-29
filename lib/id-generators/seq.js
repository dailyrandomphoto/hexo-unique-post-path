'use strict';

const prefixSeq = require('./prefix-seq');

module.exports = function(option) {
  option = option || {};
  option.prefix = '';

  return prefixSeq(option);
};
