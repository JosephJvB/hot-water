module.exports = {

	development: {
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'josephvanbohemen',
			password: 'joe',
			database: 'boiler_base'
		},
		migrations: {
			directory: './db/migrations'
		}
	},

	staging: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './db/migrations',
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './db/migrations',
			tableName: 'knex_migrations'
		}
	}

}
