'use strict';

import Backbone from 'backbone';

var Photo = Backbone.Model.extend({
  urlRoot : function() {
    return 'http://localhost:8001/photos';
  }
});

export default Photo;
