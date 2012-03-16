define(['backbone', 'jquery', 'hbs!avatar'], function(Backbone, $, template) {
  return Backbone.View.extend({
    tagName: "div",
    template: template,
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
});

