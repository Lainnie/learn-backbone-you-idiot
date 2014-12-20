/* global Backbone, log */
'use strict';
// extend Backbone.Model to create a model class
var Todo = Backbone.Model.extend({

  // Default value for the model instance
  defaults: {
    //title: 'No task assigned',
    completed: false
  },

  // validation: when this.save
  // or this.set(..., {validate: true})
  // if validation fail this.validationError is set
    validate: function(attrs) {
      if (attrs.title === undefined) {
        return 'Title is required';
      }
    },

  // constructor
  initialize: function() {
    log('Model Todo initialize');
    // listen to events on the model
    this.on('change', function() {
      log('model has changed');
    });

    // listen on events by attributes
    this.on('change:title', function() {
      log('title model has changed');
    });
  }
});

var todo = new Todo({
  completed: true
});
