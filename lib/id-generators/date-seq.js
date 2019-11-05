'use strict';

const prefixSeq = require('./prefix-seq');

module.exports = function(option) {
  // clone option object
  option = Object.assign({}, option);
  // Date prefix sample:
  // YYYYMMDD (default)
  // YYYY-MM-DD-
  // YYMMDD-
  // YYYYMM
  // YYYY
  const pattern = typeof option.prefix === 'string' ? option.prefix : 'YYYYMMDD';
  const date = new Date();
  const prefix = pattern.replace(/YYYY/, date.getFullYear())
    .replace(/YY/, String(date.getFullYear()).slice(2))
    .replace(/MM/, ('0' + (date.getMonth() + 1)).slice(-2))
    .replace(/DD/, ('0' + date.getDate()).slice(-2));
  option.prefix = prefix;
  option.size = parseInt(option.size, 10) || 2;
  return prefixSeq(option);
};
