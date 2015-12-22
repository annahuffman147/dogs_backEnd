var express = require('express');
var cors = require('cors');


var bodyParser = require('body-parser');

var dogsRoute = require('./routes/dogs');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/dogs', dogsRoute);

app.listen(3333, function(){
  console.log('listening on port 3333')
})
