'use strict';


const unique_post_path_filter = require('../lib/unique_post_path_filter');
const register = require('../lib/id-generators').register;

describe('register', () => {

  it('should use the custom function to generate a value of path', () => {
    register('my_path_gen', function(option) {
      return (title) => title.toLowerCase().replace(/[^\w]/g, '');
    });

    const config = {path_type: 'my_path_gen'};
    const data = {title: 'Hello World!'};
    unique_post_path_filter(config)(data);
    data.slug.should.eql('helloworld');
  });

  it('should use option in the custom function', () => {
    register('my_path_gen2', function(option) {
      let size = option.size || 8;
      return (title) => title.toLowerCase().replace(/[^\w]/g, '').substring(0, size);
    });

    const config = {path_type: 'my_path_gen2', size: 6};
    const data = {title: 'Hello World!'};
    unique_post_path_filter(config)(data);
    data.slug.should.eql('hellow');
  });

});
