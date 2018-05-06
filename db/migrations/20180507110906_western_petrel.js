
exports.up = (knex, Promise) => knex.schema.createTable('Birds', (table) => {
	table.increments('id').primary()
	table.string('name')
})

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('birds')
