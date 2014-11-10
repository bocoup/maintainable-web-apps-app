'use strict';

import _ from 'lodash';

export function translate(load) {
  return 'module.exports = ' + _.template(load.source).source + ';';
}
