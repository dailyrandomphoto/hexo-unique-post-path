'use strict';

const generators = require('id-generators');

generators.register('seq', require('./seq'));
generators.register('prefix-seq', require('./prefix-seq'));
generators.register('date-seq', require('./date-seq'));

module.exports = generators;
