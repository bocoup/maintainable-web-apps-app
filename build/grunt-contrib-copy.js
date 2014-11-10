'use strict';

module.exports = function(grunt) {
  grunt.config.set('copy', {
    prod: {
      expand: true,
      flatten: true,
      src: [
        'node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
        'node_modules/systemjs/dist/system.js.map'
      ],
      dest: 'prod/',
      filter: 'isFile'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
