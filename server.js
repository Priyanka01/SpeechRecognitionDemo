var express = require('express');
var app = express();

var path = require('path');

// Connect to angular
app.use(express.static(path.join(__dirname, 'client/dist/client')));
app.use(express.static(__dirname + '/client/dist/client'));

var bodyParser = require('body-parser');
app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: true }));
// var mongoose = require('mongoose');
// Setting our Static Folder Directory

require('./server/config/mongoose.js')

console.log("***********MongoDB connected")

//ROUTES
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})