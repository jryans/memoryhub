define(['backbone', 'jquery', 'hbs!avatar', 'views/vent', 'jquery-ui'], function(Backbone, $, template, vent) {
  return Backbone.View.extend({
    tagName: "div",
    className: "avatar",
    template: template,
    render: function() {
      var that = this;

      $(this.el).html(this.template(this.model.toJSON()));

      this.$el.draggable({
        revert: "invalid",
        start: function() {
          vent.trigger('attempt');
        },
        stop: function() {
          vent.trigger('match', that.model.get('matched'));
        }
      });

      this.$el.data(this.model);

      return this;
    }
  });
});

