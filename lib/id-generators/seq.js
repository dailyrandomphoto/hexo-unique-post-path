'use strict';

module.exports = function(option) {
  option = option || {};
  let start = typeof option.start !== 'undefined' ? option.start : 1;
  return () => '' + start++;
};
