define(['backbone', 'underscore', 'jquery', 'hbs!username', 'views/vent', 'jquery-ui'], 
    function(Backbone, _, $, template, vent) {
  return Backbone.View.extend({
    tagName: "div",
    className: "username",
    template: template,
    render: function() {
      var that = this;

      $(this.el).html(this.template(this.model.toJSON()));

      this.$el.droppable({
        drop: function(event, ui) {
          var $drag = ui.draggable;
          $(this).append($drag);
          $drag.attr('style', '');
          $(this).addClass('matched');
        },
        accept: _.bind(function($item) {
          var match = ($item.data().id === this.model.id);
          $item.data().set('matched', match);
          return match;
        }, this)
      }); 

      return this;
    }
  });
});

