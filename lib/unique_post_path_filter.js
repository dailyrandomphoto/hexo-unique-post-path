'use strict';

const generators = require('./id-generators');

module.exports = function(config) {
  const generator = generators.get(config.path_type || 'default');
  const generate = generator(config);
  return function(data, replace) {
    // generate a unique path.
    // data.path = generate(data.title);
    data.slug = generate(data.title);
    return data;
  };
};
