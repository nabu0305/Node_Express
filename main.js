var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var bodyParser = require('body-parser');
var sanitizeHtml = require('sanitize-html');
var compression = require('compression')
var template = require('./lib/template.js');
const helmet = require('helmet');
const db = require('./db.js');
const mongoose = require("mongoose");

const mdb = mongoose.connection;
db();
Client.connect('mongodb://localhost:3000/school', function(error, db){
    if(error) {
        console.log(error);
    } else {
        console.log("connected:"+db);
        db.close();
    }
});
app.use(helmet());	
var topicRouter = require('./routes/topic.js');
var indexRouter = require('./routes/index.js');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});
 
app.use('/topic', topicRouter);
app.use('/', indexRouter);

var pages = mongoose.Schema({
    title : 'string',
    description : 'string',
});

var Pages = mongoose.model('Schema', pages);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
 
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});
 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});