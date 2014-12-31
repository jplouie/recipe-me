var express = require('express');
var env = require('node-env-file');
var app = express();
var port = process.env.PORT || 4567;

if(!process.env.APP_ID){
  env(__dirname + '/.env');
}
app.set('views', __dirname + '/app/views')
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

// Homepage

app.get('/', function(request, response){
  response.render('index.html');
});

var router = express.Router();

// API routes

router.get('/secrets', function(request, response){
  response.json({
    appId: process.env.APP_ID,
    appKey: process.env.APP_KEY
  });
});

// Prefix api routes with '/api'

app.use('/api', router);

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});