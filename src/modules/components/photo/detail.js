'use strict';

var Backbone = require('backbone');
var template = require('./detail.html');

var PhotoView = Backbone.View.extend({
  template: template,

  render: function(){
    this.$el.html(
      this.template(
        this.model.toJSON()
      )
    );

    return this;
  }
});

module.exports = PhotoView;
