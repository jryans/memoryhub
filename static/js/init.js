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
  new App().render();
});
