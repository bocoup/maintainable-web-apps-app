'use strict';

import Backbone from 'backbone';
import template from './detail.html!tmpl';

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

export default PhotoView;
