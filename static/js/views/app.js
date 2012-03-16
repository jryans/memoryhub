define(['backbone', 'jquery', 'hbs!app', 'models/members', 'views/usernames', 'views/avatars'], function(Backbone, $, template, Members, Usernames, Avatars) {
  return Backbone.View.extend({
    template: template,
    initialize: function() {
      this.members = new Members();
      this.usernames = new Usernames({ model: this.members });
      this.avatars = new Avatars({ model: this.members });
      this.members.fetch();

      this.members.bind('reset', this.render, this);
    },
    render: function() {
      //this.$el.append(this.usernames.render().el);
      //this.$el.append(this.avatars.render().el);
      this.usernames.render();
      this.avatars.render();
      return this;
    }
  });
});
