var express = require('express');
var app = express();

var dogs = [{
    id: 1,
    name: 'Booboo',
    sex: 'male'
  },{
    id: 2,
    name: 'Pepper',
    sex: 'male'
  },{
    id: 3,
    name: 'Pepper',
    sex: 'female'
  }
];

app.get('/dogs', function(req, res){
  res.send({dogs: dogs});
});

app.get('/dogs/:id', function(req, res){
  res.send({dogs: dogs[req.params.id - 1]});
});

app.get('/dogs/byname/:name', function(req, res){
  var dog = []
  for (var i=0; i < dogs.length; i++){

      if (dogs[i].name == req.params.name){
        // dog = dogs[i]
        dog.push(dogs[i]);
      }
  }
  res.send({dogs: dog});
});


app.listen(3333, function(){
  console.log('listening on port 3333')
})
