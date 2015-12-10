// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get("songQueue")});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      console.log("Song Changed");
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.on("ended", function(){
      console.log("PlayerView detected songEnd!");
    });

    this.newLists = [];


    this.button =  '<button>ADD PLAYLIST</button><br>';
    this.listInput = '<input type="text"></input>';
    var self = this;

    this.$el.on("click", 'button', function(){
      var value = $('input').val();
      self.model.createPlaylist(value);
      self.newListView = new SongQueueView({collection: self.model.get(value)});
      // console.log(self.newListView);
      self.newLists.push(self.newListView.$el);
      self.songQueueView.$el.remove();
      self.songQueueView = self.newListView;
      self.$el.append(self.songQueueView.$el);
      self.model.set('songQueue', self.model.get(value));
      // self.render();
    });
  },

  render: function() {
    return this.$el.html([
      this.listInput,
      this.button,
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
    ]);
    // .concat(this.newLists));
  }

});
