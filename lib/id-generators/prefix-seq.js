'use strict';
const chalk = require('chalk');
const { join, basename } = require('path');
const { listDirSync } = require('hexo-fs');
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
    files = files.map((file) => basename(file))
      .filter((file) => pattern.test(file))
      .map((file) => parseInt(file.replace(prefix, '').replace('.md', ''), 10))
      .sort(function(a, b) { return b - a; });
    let max = Math.max((files[0] || 0) + 1, start);
    return prefix + ('' + max).padStart(size, '0');
  };
};
