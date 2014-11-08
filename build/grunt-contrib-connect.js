'use strict';

var browserify = require('browserify-middleware');

module.exports = function(grunt) {
  grunt.config.set('connect', {
    options: {
      port: '8000',
      hostname: '*',
    },
    dev: {
      options: {
        base: ['prod', 'src', '.'],
        port: '8000',
        hostname: '*',
        middleware: function(connect, options, middlewares) {
          var bundle = browserify(__dirname + '/../src/main.js', {
            transform: ['jstify', 'debowerify'],
            external: ['lodash', 'jquery'],
            debug: true
          });

          return [['/prod/app.js', bundle]].concat(middlewares);
        }
      },
    },
    prod: {
      options: {
        base: ['prod'],
        keepalive: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
