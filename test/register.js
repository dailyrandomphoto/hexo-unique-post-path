'use strict';

const unique_post_path_filter = require('hexo-unique-post-path/lib/unique_post_path_filter');
const {register} = require('hexo-unique-post-path');

describe('register', () => {
  it('should use the custom function to generate a value of path', () => {
    register('my_path_gen', option => {
      return title => title.toLowerCase().replace(/[^\w]/g, '');
    });

    const config = {auto: true, type: 'my_path_gen'};
    const data = {title: 'Hello World!'};
    unique_post_path_filter(config)(data);
    data.slug.should.eql('helloworld');
  });

  it('should use option in the custom function', () => {
    register('my_custom_path', option => {
      const size = option.size || 8;
      const prefix = option.prefix || 'items-';
      return function(title) {
        return prefix + title.toLowerCase().replace(/[^\w]/g, '').substring(0, size);
      };
    });

    const config = {auto: true, type: 'my_custom_path', size: 6};
    const data = {title: 'Hello World!'};
    unique_post_path_filter(config)(data);
    data.slug.should.eql('items-hellow');
  });
});
