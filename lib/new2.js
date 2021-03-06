'use strict';

const tildify = require('tildify');
const chalk = require('chalk');
const {get} = require('id-generators');

const reservedKeys = {
  _: true,
  title: true,
  layout: true,
  slug: true,
  s: true,
  path: true,
  p: true,
  replace: true,
  r: true,
  type: true,
  // Global options
  config: true,
  debug: true,
  safe: true,
  silent: true
};

module.exports = function(config) {
  return function newConsole(args) {
    const generator = get(args.type || config.type || 'default');
    const generate = generator(config);
    // Display help message if user didn't input any arguments
    // if (!args._.length) {
    //   return this.call('help', {_: ['new2']});
    // }

    const data = {
      title: args._.pop() || config.title_default,
      layout: args._.length ? args._[0] : this.config.default_layout,
      slug: args.s || args.slug,
      path: args.p || args.path
    };

    if (data.layout !== 'page' && (!data.slug || !data.slug.trim())) {
      data.slug = generate(data.title);
    }

    const keys = Object.keys(args);

    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (!reservedKeys[key]) data[key] = args[key];
    }

    return this.post.create(data, args.r || args.replace).then(post => {
      this.log.info('Created: %s', chalk.magenta(tildify(post.path)));
    });
  };
};
