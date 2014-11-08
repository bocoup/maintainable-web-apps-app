'use strict';

module.exports = function(grunt) {
  grunt.config.set('browserify', {
    options: {
      transform: ['jstify', 'debowerify'],
      browserifyOptions: {
        debug: true
      }
    },

    prod: {
      files: {
        'prod/app.js': ['src/main.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
