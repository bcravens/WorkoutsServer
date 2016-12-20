
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workouts', function(table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workouts')
}
