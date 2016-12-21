
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.string('username').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('timezone').notNullable()
    table.string('password_digest').notNullable()
    table.timestamps()
  }).createTable('workouts', function(table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('user_id').references('users.id')
    table.timestamps()
  }).createTable('exercises', function(table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('sets').notNullable()
    table.integer('reps').notNullable()
    table.integer('weight').notNullable()
    table.integer('workout_id').references('workouts.id')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
    .dropTable('workouts')
    .dropTable('exercises')
}
