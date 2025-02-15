import pgp from 'pg-promise';

const db = pgp()({
	host: 'localhost',
	port: 5432,
	database: 'catalogo',
	user: 'postgres',
	password: 'password',
});

export default db;