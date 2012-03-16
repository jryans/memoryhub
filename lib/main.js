var express = require('express');

var port = 80;

if (process.argv.length > 2) {
  port = process.argv[2];
}

var app = express.createServer();

app.register('.hbs', require('hbs'));

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.set('view options', {
    layout: false
  });

  app.use(express.static(__dirname + '/../static'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port);
