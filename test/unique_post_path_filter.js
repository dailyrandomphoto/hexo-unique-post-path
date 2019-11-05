'use strict';
const {expect} = require('chai');
require('hexo-unique-post-path/lib/id-generators/index.js');
const unique_post_path_filter = require('hexo-unique-post-path/lib/unique_post_path_filter.js');

describe('unique_post_path_filter', () => {
  it('should not set slug if config.auto is undefined', () => {
    const config = {};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    expect(data.slug).to.be.an('undefined');
  });

  it('should not set slug if config.auto is false', () => {
    const config = {auto: false};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    expect(data.slug).to.be.an('undefined');
  });

  it('should set slug: type = undefined', () => {
    const config = {auto: true};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });

  it('should set slug: type = cuid', () => {
    const config = {auto: true, type: 'cuid'};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });

  it('should set slug: type = nanoid', () => {
    const config = {auto: true, type: 'nanoid'};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string');
  });

  it('should set slug: type = seq', () => {
    const config = {auto: true, type: 'seq'};
    const data = {title: 'title'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string').eql('19');
  });

  it('should set slug: --type = seq', () => {
    const config = {};
    const data = {title: 'title', type: 'seq'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string').eql('19');
  });

  it('should set slug: --type = seq', () => {
    const config = {auto: true, type: 'nanoid'};
    const data = {title: 'title', type: 'seq'};
    unique_post_path_filter(config)(data);
    data.slug.should.be.a('string').eql('19');
  });
});
