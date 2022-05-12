// process.env
'use strict';

const { Client } = require('pg');

const client = new Client({
	host:  process.env.DB_HOST,
	port:  process.env.DB_PORT,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database:  process.env.DB_DATABASE
});

client.connect().then( () => {

	console.log("Connected to Database");
	client.query("create table employees");
	console.log("table creaated");

})/*.then( () => {


})*/.catch( (err) => {

	console.log(`Failed: ${err}`);

}).finally(()=> {

	// client.end();
});
