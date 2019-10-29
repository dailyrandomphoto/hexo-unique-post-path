'use strict';

const generators = require('./id-generators');

module.exports = function(config) {
  return function(data, replace) {
    const generator = generators.get(config.path_type || 'default');
    const generate = generator(config);
    // generate a unique path.
    if (data.layout !== 'page') {
      data.slug = generate(data.title);
    }
    return data;
  };
};
