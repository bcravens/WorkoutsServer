
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', function(table) {
    table.increments('id').primary()
    table.integer('sets').notNullable()
    table.integer('reps').notNullable()
    table.integer('weight').notNullable()
    table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
    table.integer('workout_id').notNullable()
      .references('id')
      .inTable('workouts')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exercises')
}
