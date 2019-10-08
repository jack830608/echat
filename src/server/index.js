const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const routes = require('./routes');
const morgan = require('morgan');
// const database = require('../lib/database');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev , dir: './src' });
const path = require('path');
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		// database.connect()
		server.use(morgan('dev'))
		server.use(express.static(path.resolve(__dirname, '../static')));
		server.use(bodyParser.urlencoded({
			extended: false
		}))
		server.use(bodyParser.json())

		routes(server, handle, app); //route next and express

		let port = process.env.PORT || 3000
		server.listen(port, (err) => {
			if (err) throw err
			console.log(`Server is listening on ${port}`)
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})
