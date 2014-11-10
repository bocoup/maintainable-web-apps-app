'use strict';

var _ = require('lodash');

export function translate(load) {
  return 'module.exports = ' + _.template(load.source).source + ';';
}
