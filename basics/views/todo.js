/* global Backbone, log, _ */
'use strict';

// extend Backbone.View to create a view class
var TodoView = Backbone.View.extend({

  // if we want to set el to a existing element
  // el: '#someid'

  // use li to wrap template
  tagName: 'li',

  // define id for the wrapper (optional)
  id: 'todowithsomeNumberId',

  // define class for the wrapper (optional)
  className: 'classwithgoodstyle',

  // use underscore template to compile the todo template
  template: _.template('#item-template'),

  // bind dom events to view method
  events: {
    'dbkclick label': 'edit',
    'keypress .edit': 'updateEnter',
    'blur .edit': 'close'
  },

  // constructor
  initialize: function(options) {
    this.options = options || {};
    log('View Todo initialize');
  },

  // the render method update the dom
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {},
  updateEnter: function() {},
  close: function() {}

});

debugger;
