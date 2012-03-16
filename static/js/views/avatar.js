define(['backbone', 'jquery', 'hbs!avatar', 'jquery-ui'], function(Backbone, $, template) {
  return Backbone.View.extend({
    tagName: "div",
    className: "avatar",
    template: template,
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));

      this.$el.draggable({
        revert: "invalid"
      });

      this.$el.data(this.model);

      return this;
    }
  });
});

