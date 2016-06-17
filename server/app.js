var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.set('debug', true)

// modules
var recipes = require('./routes/recipes')
var index = require('./routes/index');




// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express routes
app.use('/recipes', recipes);
app.use('/', index);

// mongoose connection
var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/mu';
}

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

// start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
