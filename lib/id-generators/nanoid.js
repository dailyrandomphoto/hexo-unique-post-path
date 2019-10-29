'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const nanoid = require('nanoid');

module.exports = function(option) {
  let size = option.size || 21;
  return () => nanoid(size);
};
