'use strict';

var Backbone = require('backbone');

var Photo = Backbone.Model.extend({
  urlRoot : function() {
    return 'http://localhost:8001/photos';
  }
});

module.exports = Photo;
