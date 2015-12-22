var express = require('express');
var cors = require('cors');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'dogs',
    user: 'dogs_knex_lead',
    password: 'dogs_password'
  }
})
var app = express();
app.use(cors());


app.get('/dogs', function(req, res){
  knex('dogs').select().then(function(dogs){
    res.send({dogs: dogs});
  });
});

app.get('/dogs/:id', function(req, res){
  knex(dogs).select()
    .where('id', req.params.id)
    .then(function(dogs){
      res.send({dogs: dogs});
    });
});

app.get('/dogs/byname/:name', function(req, res){
  knex('dogs').select()
    .where('name', req.params.name)
    .then(function(dogs){
      var dog = []
      for (var i=0; i < dogs.length; i++){

          if (dogs[i].name == req.params.name){
            // dog = dogs[i]
            dog.push(dogs[i]);
          }
      }
      res.send({dogs: dog});
    });
});


app.listen(3333, function(){
  console.log('listening on port 3333')
})
