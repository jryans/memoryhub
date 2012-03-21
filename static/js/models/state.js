define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      attempts: 0,
      score: 0
    }
  });
});
