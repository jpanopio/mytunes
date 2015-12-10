// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // queued: false,

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log("Enqueue");
    // queued: true;
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    console.log("Dequeue");
    this.trigger('dequeue', this);
  }
});
