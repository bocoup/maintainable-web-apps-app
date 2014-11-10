'use strict';

var path = require('path');
var builder = require('systemjs-builder');
var local = path.join.bind(path, __dirname);

module.exports = function(grunt) {
  grunt.registerTask('systemjs', function() {
    var done = this.async();

    builder.build('src/main', {
      baseURL: local('../'),

      paths: {
        backbone: 'node_modules/backbone/backbone.js',
        jquery: 'node_modules/jquery/dist/jquery.js',
        underscore: 'node_modules/lodash/dist/lodash.js',
        lodash: 'node_modules/lodash/dist/lodash.js',
        tmpl: 'src/plugins/lodash-build.js'
      }
    }, local('../prod/app.js'))

    .then(done).catch(function(ex) {
      done(new Error(ex));
    });
  });
};
