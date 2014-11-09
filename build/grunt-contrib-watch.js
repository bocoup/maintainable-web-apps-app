'use strict';

module.exports = function(grunt) {
  grunt.config.set('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['src/**/*.{js,html}', 'prod/*'],
    },
    jshintrc: {
      files: ['**/.jshintrc'],
      tasks: ['jshint'],
    },
    build: {
      files: ['<%= jshint.build.src %>'],
      tasks: ['jshint:build'],
    },
    scripts: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint:app'],
    },
    stylus: {
      files: ['src/**/*.styl'],
      tasks: ['stylus:dev'],
    },
    jade: {
      files: ['<%= jade.dev.src %>'],
      tasks: ['jade:dev'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
