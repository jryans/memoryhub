define(['backbone', 'jquery', 'underscore', 'views/avatar'], function(Backbone, $, _, Avatar) {
  var avatars = [];

  return Backbone.View.extend({
    el: $('#avatars'),

    initialize: function() {
      this.model.bind('reset', this.addAll, this);
    },

    addAll: function() {
      this.model.each(this.add);
    },

    add: function(member) {
      avatars.push(new Avatar({ model: member }));
    },

    render: function() {
      var that = this;
      var randomAvatars = _(avatars).shuffle();
      _(randomAvatars).each(function(avatar) {
        that.$el.append(avatar.render().el);
      });
      return this;
    }
  });
});

