'use strict';

const tildify = require('tildify'); // eslint-disable-line node/no-missing-require,node/no-extraneous-require
const chalk = require('chalk'); // eslint-disable-line node/no-missing-require,node/no-extraneous-require
const cuid = require('cuid');

const reservedKeys = {
  _: true,
  title: true,
  layout: true,
  slug: true,
  path: true,
  replace: true,
  // Global options
  config: true,
  debug: true,
  safe: true,
  silent: true
};

module.exports = function(config) {

  return function newConsole(args) {
  // Display help message if user didn't input any arguments
  // if (!args._.length) {
  //   return this.call('help', {_: ['new2']});
  // }

    const data = {
      title: args._.pop() || config.title_default,
      layout: args._.length ? args._[0] : this.config.default_layout,
      slug: args.s || args.slug,
      path: cuid()
    };

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
