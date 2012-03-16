define(['backbone', 'jquery', 'underscore', 'views/username'], function(Backbone, $, _, Username) {
  var usernames = [];

  return Backbone.View.extend({
    tagName: "div",

    initialize: function() {
      this.model.bind('reset', this.addAll, this);
    },

    addAll: function() {
      this.model.each(this.add);
    },

    add: function(member) {
      usernames.push(new Username({ model: member }));
    },

    render: function() {
      var that = this;
      _(usernames).each(function(username) {
        that.$el.append(username.render().el);
      });
      return this;
    }
  });
});

