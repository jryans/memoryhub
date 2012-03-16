require({
  priority: ['jquery'],
  paths: {
    template: "../templates"
  },
  hbs: {
    disableI18n: true
  }
}, 
['jquery', 'underscore', 'models/members', 'views/app'], function($, _, Members, App) {
  var users = new Members();

  users.fetch();

  console.log(users);

  window.users = users;

  //var lessUsers = users.range(10);

  //console.log(lessUsers);

  new App().render();
});
