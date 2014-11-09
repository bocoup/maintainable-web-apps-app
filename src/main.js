'use strict';

import Backbone from 'backbone';
import $ from 'jquery';
import Photo from './modules/components/photo/model';
import PhotoView from './modules/components/photo/detail';

Backbone.$ = $;

var me = new Photo({
  id : 19
});

var view = new PhotoView({
  model : me
});

view.$el.appendTo('body');

me.fetch({
  success: function() {
    view.render();
  }
});
