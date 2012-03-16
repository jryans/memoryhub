define(['backbone', 'jquery', 'hbs!username'], function(Backbone, $, template) {
  return Backbone.View.extend({
    tagName: "div",
    template: template,
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
});

