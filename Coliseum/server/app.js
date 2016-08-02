var express = require('express');
var app = express();

//Routers
app.use('/', require('./index/index.router.js'));

app.listen(3000, function () {
  console.log('Express started on port 3000');
});