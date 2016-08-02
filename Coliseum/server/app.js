var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Generic Setup Stuff
app.use(bodyParser.json());

//Routers
app.use('/', require('./index/index.router.js'));

app.listen(3000, function () {
  console.log('Express started on port 3000');
});