'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const generate = require('nanoid/generate');
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

module.exports = function(option) {
  let size = option.size || 24;
  return () => generate(alphabet, size);
};
