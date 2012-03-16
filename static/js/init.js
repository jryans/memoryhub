require({
  priority: ['jquery'],
  paths: {
    template: "../templates"
  }
}, 
['jquery', 'underscore', 'models/members'], function($, _, Members) {
  var users = new Members();

  users.fetch();

  console.log(users);
});
