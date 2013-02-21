
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();
var logFile = fs.createWriteStream('./myLogFile.log', {flags: 'a'}); //use {flags: 'w'} to open in write mode

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
    app.use(express.logger({format: 'default',stream: logFile}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/redirect',function(req,res){

    var token = req.query.token;
    var device = req.query.device;
    var version = req.query.version;
    var redirectUrl = req.query.url;

    if(token && device && version && redirectUrl){
        res.redirect(redirectUrl);
    }
    else{
        res.send(404,{ error: "Invalid Queries" });
    }

});
app.get('/error', function(req, res){
    res.redirect('walkin://error/message:ErrorMessageHere/errorTitle:Title/');
});
app.get('/finish', function(req, res){
    res.redirect('walkin://');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
