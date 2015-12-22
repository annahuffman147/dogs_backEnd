
exports.seed = function(knex, Promise) {
  return knex('dogs').del().then(function(){
    return Promise.all([
      knex('dogs').insert({
          name: 'Booboo',
          sex: 'male'
      }),
      knex('dogs').insert({
          name: 'Pepper',
          sex: 'male'
      }),
      knex('dogs').insert({
          name: 'Pepper',
          sex: 'female'
      }),
      knex('dogs').insert({
          name: 'Isis',
          sex: 'female'
      }),
      knex('dogs').insert({
          name: 'Beaches',
          sex: 'female'
      }),
      knex('dogs').insert({
          name: 'Butch',
          sex: 'male'
      }),
      knex('breeds').insert({
          breed: 'Cocker Spaniel',
          image: 'http://pbs.twimg.com/media/CTJNYgHWcAAjSeP.jpg:large'
      }),
      knex('breeds').insert({
          breed: 'Poodle',
          image: 'http://pbs.twimg.com/media/CWmJxl4UEAA0GUk.jpg:large'
      }),
      knex('breeds').insert({
          breed: 'Soft Coated Weaton Terrier',
          image: 'http://pbs.twimg.com/media/CKA0S6PWwAAa_-H.jpg:large'
      }),
      knex('breeds').insert({
          breed: 'Boxer',
          image: 'http://pbs.twimg.com/media/CT8QsocWoAA2UAR.jpg:large'
      }),
      knex('breeds').insert({
          breed: 'Miniture Schnauzer',
          image: 'http://pbs.twimg.com/media/CDl8nWLUUAAExhq.jpg:large'
      }),
      knex('breeds').insert({
          breed: 'German Shepherd',
          image: 'http://pbs.twimg.com/media/CLulJ8TUcAA-wcA.jpg:large'
      })
    ]);
  });
}
