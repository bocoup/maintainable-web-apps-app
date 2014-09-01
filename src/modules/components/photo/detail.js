define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var template = require('tmpl!./detail');

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

  return PhotoView;
});
