// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // queued: false,

  defaults: {
    count: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // queued: true;
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
    var newCount = this.get('count') + 1;
    this.set("count", newCount);
  }
});
