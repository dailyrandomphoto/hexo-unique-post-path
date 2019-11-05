'use strict';

const {slugify} = require('transliteration');

module.exports = function(option) {
  option = option || {};

  let separator = typeof option.separator === 'string' ? option.separator : '-';
  // transliteration.slugify do not support '' as a separator.
  // So replace '' to '#', then call slugify().
  if (separator === '') {
    separator = '#';
  }
  const lowercase = option.lowercase !== 'false' && option.lowercase !== false; // default is true
  const option2 = {separator, lowercase};
  return function(title) {
    return slugify(title, option2).replace(/#/g, '').trim();
  };
};
