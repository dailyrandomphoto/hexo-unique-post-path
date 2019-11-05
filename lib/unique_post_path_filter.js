'use strict';

const {get} = require('id-generators');

module.exports = function(config) {
  return function(data, replace) {
    if (config.auto || data.type) {
      const generator = get(data.type || config.type || 'default');
      const generate = generator(config);
      // Generate a unique path.
      if (data.layout !== 'page') {
        data.slug = generate(data.title);
      }
      delete data.type;
    }

    return data;
  };
};
