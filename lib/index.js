'use strict';

const chalk = require('chalk');
const {register} = require('./id-generators');

const moduleName = require('../package.json').name;
const moduleConfigKey = 'unique_post_path';

function init(hexo) {
  const { config, log, extend } = hexo;
  const { filter, console } = extend;
  const moduleConfig = Object.assign({
    enable: true,
    auto: false,
    title_default: ' ',
    path_type: 'default',
    context: hexo
  }, config[moduleConfigKey]);

  if (!moduleConfig.enable) {
    return;
  }

  log.debug('=========== %s ===========', chalk.cyan(moduleName));
  log.debug('config %s', chalk.magenta(JSON.stringify(moduleConfig, function(key, value) {
    if (value === hexo) {
      return '[Object: Hexo]';
    }
    return value;
  })));

  console.register('new2', 'Create a new post with a auto generated unique filename.', {
    usage: '[layout] [title]',
    arguments: [
      {name: 'layout', desc: 'Post layout. Use post, page, draft or whatever you want.'},
      {name: 'title', desc: 'Post title. Wrap it with quotations to escape.'}
    ],
    options: [
      {name: '-r, --replace', desc: 'Replace the current post if existed.'},
      {name: '-s, --slug', desc: 'Post slug. Customize the URL of the post.'},
      {name: '-p, --path', desc: 'Post path. Customize the path of the post.'},
      {name: '-t, --type', desc: 'Algorithm type. Choose an algorithm to generate slug.'}
    ]
  }, require('./new2')(moduleConfig));

  if (moduleConfig.auto) {
    // Register a filter with highest priority.
    filter.register('new_post_path', require('./unique_post_path_filter')(moduleConfig), 1);
  }
}

module.exports = {
  init,
  register
};

// execute from hexo plugin loader
if (typeof hexo !== 'undefined') {
  init(hexo); // eslint-disable-line no-undef
}
