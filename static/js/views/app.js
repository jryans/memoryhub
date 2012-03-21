define(['backbone', 'underscore', 'jquery', 'views/progress', 'models/members', 'models/state', 'views/usernames', 'views/avatars', 'views/vent'],
    function(Backbone, _, $, Progress, Members, State, Usernames, Avatars, vent) {
  return Backbone.View.extend({
    initialize: function() {
      this.members = new Members();
      this.state = new State();

      this.progress = new Progress({ model: this.state });
      this.usernames = new Usernames({ model: this.members });
      this.avatars = new Avatars({ model: this.members });
      this.members.fetch();

      this.members.bind('reset', this.render, this);

      vent.on('attempt', this.attempt, this);
      vent.on('match', this.match, this);
    },
    render: function() {
      this.usernames.render();
      this.avatars.render();
      this.progress.render();
      return this;
    },
    attempt: function() {
      this.state.set('attempts', this.state.get('attempts') + 1);
    },
    match: function(success) {
      if (success) {
        this.state.set('score', this.state.get('score') + 1);
      } else { 
        this.state.set('score', this.state.get('score') - 1);
      }
    }
  });
});
