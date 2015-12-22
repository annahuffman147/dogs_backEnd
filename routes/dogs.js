var express = require('express');
var app = express();
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'dogs',
    user: 'dogs_knex_lead',
    password: 'dogs_password'
  }
});

router.get('/', function(req, res){
  knex('dogs').select().then(function(dogs){
    res.status(200).send({dogs: dogs});
  });
});

router.get('/:id', function(req, res){
  knex(dogs).select()
    .where('id', req.params.id)
    .then(function(dogs){
      res.status(201).send({dogs: dogs});
    });
});

app.get('/byname/:name', function(req, res){
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
      res.status(201).send({dogs: dog});
    });
});

module.exports = router;
