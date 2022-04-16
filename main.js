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
const mongoose = require('mongoose');
const url = 'mongodb+srv://nabu:kim310@cluster0.b9bou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use(helmet());	
var topicRouter = require('./routes/topic.js');
var indexRouter = require('./routes/index.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
//https://opentutorials.org/course/3370/21423
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});
 const sleep = (ms) => {
     return new Promise(resolve=>{
         setTimeout(resolve,ms)
     })
 }
const mongoConnection = async () => {
	try {
	  await mongoose.connect(url);
		console.log("connection established");
	} catch (error) {
		console.error(error);
		sleep(100)
		await mongoConnection()
	}
}

mongoConnection()



app.use('/', indexRouter);
app.use('/topic', topicRouter);
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