// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    var model = this;
    this.el.onended = this.endFunction.bind(model);
    // this.el.addEventListener("ended", this.endFunction.bind(model));
  },

  setSong: function(song) {
    this.model = song;
    console.log(this.model);
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  endFunction: function(){
    // console.log(this);
    // console.log(this.el);
    // this.el.trigger('songEnd', this);
    var song = this.model;
    console.log(this.model);
    console.log("SongEnded");
    song.ended();
    this.trigger("ended", this);
    // song.dequeue();
  }

});
