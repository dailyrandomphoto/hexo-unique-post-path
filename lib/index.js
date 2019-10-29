'use strict';
const generators = require('./id-generators');

if (typeof hexo !== 'undefined') {
  (function(ctx) {
    const { config, extend } = ctx;
    const { console, filter } = extend;
    const myconfig = Object.assign({
      auto: false,
      title_default: ' ',
      path_type: 'default',
      context: ctx
    }, config.unique_post_path);

    console.register('new2', 'Create a new post with a auto generated unique path.', {
      usage: '[layout] [title]',
      arguments: [
        {name: 'layout', desc: 'Post layout. Use post, page, draft or whatever you want.'},
        {name: 'title', desc: 'Post title. Wrap it with quotations to escape.'}
      ],
      options: [
        {name: '-r, --replace', desc: 'Replace the current post if existed.'},
        {name: '-s, --slug', desc: 'Post slug. Customize the URL of the post.'}
      ]
    }, require('./new2')(myconfig));

    if (myconfig.auto) {
      // register a filter with highest priority.
      filter.register('new_post_path', require('./unique_post_path_filter')(myconfig), 1);
    }

  }(hexo));
}

module.exports = {
  register: generators.register
};
