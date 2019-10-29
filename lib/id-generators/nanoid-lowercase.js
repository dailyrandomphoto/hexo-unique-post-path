'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const generate = require('nanoid/generate');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = function(option) {
  let size = option.size || 26;
  return () => generate(alphabet, size);
};
