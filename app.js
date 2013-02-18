
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/inbi', function(req, res){
    res.redirect('walkin://inbi/amount:60/');
});
app.get('/error', function(req, res){
    res.redirect('walkin://error/message:ErrorMessageHere/errorTitle:Title/');
});
app.get('/finish', function(req, res){
    res.redirect('walkin://');
});
app.get('/badge', function(req, res){
    res.redirect('walkin://badge/imageurl:"http://badgeiamgeurl"/badgeText:text');
});
app.get('/deal', function(req, res){
    res.redirect('walkin://deal/dealId:101');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
