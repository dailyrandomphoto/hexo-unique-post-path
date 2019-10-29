'use strict';

module.exports = function(option) {
  option = option || {};
  let start = typeof option.start !== 'undefined' ? option.start : 1;
  let prefix = typeof option.prefix !== 'undefined' ? option.prefix : 'prefix-';
  return () => prefix + start++;
};
