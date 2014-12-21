/* global Backbone */
(function(Backbone) {

  'use strict';

  var app = window.App || {};

  app.Todo = Backbone.Model.extend({

    defaults: {
      title: '',
      completed: false
    },

    initialize: function() {
    },

    toggle: function() {
      this.save({completed: !this.get('completed')});
    }
  });

})(Backbone);
