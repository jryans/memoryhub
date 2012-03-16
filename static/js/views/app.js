define(['backbone', 'jquery', 'hbs!app', 'views/usernames', 'models/members'], function(Backbone, $, template, Usernames, Members) {
  return Backbone.View.extend({
    el: $('body'),
    template: template,
    initialize: function() {
      this.members = new Members();
      this.usernames = new Usernames({ model: this.members });
      this.members.fetch();

      this.members.bind('reset', this.render, this);
    },
    render: function() {
      this.$el.append(this.usernames.render().el);
      return this;
    }
  });
});
