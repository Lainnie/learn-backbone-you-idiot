/* global Todo, Backbone, log */
'use strict';
// extend Backbone.Collection to create a model class
var TodoCollection = Backbone.Collection.extend({

  // define the model class
  model: Todo,
  // constructor
  initialize: function() {
    log('Collection Todo initialize');
    // listen to events on the model
    this.on('change', function() {
      log('model has changed');
    });
  }

});

var TodosCollection = new TodoCollection();

TodosCollection.add([
  { id: 1, title: 'go to Jamaica.', completed: false },
  { id: 2, title: 'go to China.', completed: false },
  { id: 3, title: 'go to Disneyland.', completed: false }
]);

// we can listen for add/change/remove events
TodosCollection.on("add", function(model) {
  console.log("Added " + model.get('title'));
});

TodosCollection.on("remove", function(model) {
  console.log("Removed " + model.get('title'));
});

TodosCollection.on("change:completed", function(model) {
  console.log("Completed " + model.get('title'));
});

TodosCollection.set([
  { id: 1, title: 'go to Jamaica.', completed: true },
  { id: 2, title: 'go to China.', completed: false },
  { id: 4, title: 'go to Disney World.', completed: false }
]);

// underscore chain method
var collection = new Backbone.Collection([
    { name: 'Tim', age: 5 },
    { name: 'Ida', age: 26 },
    { name: 'Rob', age: 55 }
  ]);

// start chain, returns wrapper around collection's models
// returns wrapped array excluding Tim
// returns wrapped array containing remaining names
// terminates the chain and returns the resulting array
var filteredNames = collection.chain()
  .filter(function(item) { return item.get('age') > 10; })
  .map(function(item) { return item.get('name'); })
  .value();

  console.log(filteredNames); // logs: ['Ida', 'Rob']
