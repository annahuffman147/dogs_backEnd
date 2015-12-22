
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('dogs', function(table){
      table.increments('id');
      table.string('name');
      table.string('sex');
    }),
    knex.schema.createTable('breeds', function(table){
      table.increments('id');
      table.string('breed');
      table.string('image');
    })
  ]).then(function(){
    return knex.schema.createTable('dogs_breeds', function(table){
      table.increments('id');
      table.integer('dogs_id').references('id').inTable('dogs').onDelete('cascade').unsigned();
      table.integer('breeds_id').references('id').inTable('breeds').onDelete('cascade').unsigned();
    })
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('dogs'),
    knex.schema.dropTableIfExists('breeds'),
    knex.schema.dropTableIfExists('dogdogs_breeds')
  ]);
};
