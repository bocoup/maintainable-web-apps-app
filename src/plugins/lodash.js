'use strict';

import _ from 'underscore';

export function translate(load) {
  return 'module.exports = ' + _.template(load.source).source + ';';
}
