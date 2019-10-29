'use strict';

const generators = require('./id-generators');
const cuid = require('./cuid');

generators.register('default', cuid);
generators.register('cuid', cuid);
generators.register('cuid-slug', require('./cuid-slug'));
generators.register('nanoid', require('./nanoid'));
generators.register('nanoid-simple', require('./nanoid-simple'));
generators.register('nanoid-lowercase', require('./nanoid-lowercase'));
generators.register('seq', require('./seq'));
generators.register('prefix-seq', require('./prefix-seq'));
generators.register('date-seq', require('./date-seq'));

module.exports = generators;
