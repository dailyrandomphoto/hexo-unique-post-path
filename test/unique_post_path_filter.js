'use strict';

const unique_post_path_filter = require('../lib/unique_post_path_filter');

describe('unique_post_path_filter', () => {
  it('should set path: path_type = undefined', () => {
    const config = {};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });

  it('should set path: path_type = cuid', () => {
    const config = {path_type: 'cuid'};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });

  it('should set path: path_type = nanoid', () => {
    const config = {path_type: 'nanoid'};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });
});
