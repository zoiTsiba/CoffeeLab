const express = require('express');
const ejs = require('ejs');
const dynamoDB = require('./models/CRUD');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();

// java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar //OPEN DB LOCAL
// const AWS = require("aws-sdk");
// AWS.config.update({
//     region: "us-west-1",
//     endpoint: "http://localhost:3000"
// });

// set the view engine to ejs
app.set("view engine", "ejs");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public'));
    //__dirname : It will resolve to your project folder.
});

router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/about.html'));
});



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CRUD Operations
dynamoDB(app);

// dyn = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

// dyn.listTables(function (err, data) {
//     console.log('listTables', err, data);
// });

app.use('/', router);
app.listen(3000);

