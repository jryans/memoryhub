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
          
          $drag.data().set('matched', true);
        },
        accept: _.bind(function($item) {
          return $item.data().id === this.model.id;
        }, this)
      }); 

      return this;
    }
  });
});

