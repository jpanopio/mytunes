// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
  },

  render: function() {
    this.$el.children().detach();
 
    var queuedSongs = this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();

    });
    console.log(this.collection);
    var name = this.collection.playlistName;
    return this.$el.html('<th>' + name + '</th>').append(queuedSongs);
  }

});
