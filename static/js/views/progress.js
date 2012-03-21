define(['backbone', 'jquery', 'underscore', 'views/vent', 'hbs!progress'], function(Backbone, $, _, vent, template) {
  return Backbone.View.extend({
    el: $('#sec-note'),
    template: template,

    initialize: function() {
      this.model.bind('change', this.render, this);
    },

    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
});


