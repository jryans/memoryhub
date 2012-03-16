define(['backbone', 'models/member'], function(Backbone, Member) {
  return Backbone.Collection.extend({
    model: Member,
    url: function() {
      return 'https://api.github.com/orgs/nodejitsu/members';
    }
  });
});
