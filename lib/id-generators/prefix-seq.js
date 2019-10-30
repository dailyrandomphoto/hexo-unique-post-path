'use strict';
const {join, basename} = require('path');
const chalk = require('chalk');
const {listDirSync} = require('hexo-fs');
module.exports = function(option) {
  option = option || {};
  const log = option.context ? option.context.log : console;
  const start = parseInt(option.start, 10) || 1;
  const size = parseInt(option.size, 10) || 1;
  const prefix = typeof option.prefix === 'string' ? option.prefix : '';
  const pattern = new RegExp(`^${prefix}\\d+\\.md`);
  log.debug('[hexo-unique-post-path] File name pattern: %s', chalk.magenta(pattern));
  const sourceDir = option.context ? option.context.source_dir : join(__dirname, '../../test/source');
  const postDir = join(sourceDir, '_posts');
  const draftDir = join(sourceDir, '_drafts');

  return function() {
    let files = listDirSync(postDir).concat(listDirSync(draftDir));
    files = files.map(file => basename(file))
      .filter(file => pattern.test(file))
      .map(file => parseInt(file.replace(prefix, '').replace('.md', ''), 10))
      .sort((a, b) => b - a);
    const max = Math.max((files[0] || 0) + 1, start);
    return prefix + String(max).padStart(size, '0');
  };
};
