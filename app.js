// nodemon app.js to start express client to localhost:3000

'use strict'
require('dotenv').config();
const db = require('./db/CRUD');
// const services = require('./app/services');
const express = require('express');
const parser = require('body-parser'); // required to retrieve POST request.body
const pages = require('./app/pages');
const port = process.env.PORT;
const app = express();

// java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar //OPEN DB LOCAL
// const AWS = require("aws-sdk");
// AWS.config.update({
//     region: "us-west-1",
//     endpoint: "http://localhost:3000"
// });

// WEB SERVER -> nodemon app.js
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('views'));
app.use(express.static('utils'));
app.use(express.static('db'));
app.use(express.static('public'));
app.use(parser.urlencoded({ limit: '50mb', extended: true }));
app.use(parser.json({ limit: '50mb' }));
app.listen(port, pages.listening);

// page routes
app.get('/', pages.home);
app.get('/home', pages.home);
app.get('/about', pages.about);

// API routes
db(app);


// dyn = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

// dyn.listTables(function (err, data) {
//     console.log('listTables', err, data);
// });

