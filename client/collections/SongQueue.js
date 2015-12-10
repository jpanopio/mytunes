// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("dequeue", this.dequeue, this);
    this.on("enqueue", this.enqueue, this);
  },

  
  playlistName: "Untitled List",

  enqueue: function(song){
    // var songClone = song.clone();
    // this.add(song.clone());
    this.add(song);
    if(this.length === 1){
      //if queue only has one song, play the song
      this.playFirst();
    }
    console.log(this);

  },

  dequeue: function(song){
    this.remove(song);
    console.log(this);
    if(this.length > 0){
      this.models[0].play();
    }

  },

  playFirst: function() {
    console.log("playFirst Called");
    this.models[0].play();
  },

  setPlaylistName: function(name){
    this.playlistName = name;
  }

});