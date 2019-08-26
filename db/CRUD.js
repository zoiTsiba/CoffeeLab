const AWS = require("aws-sdk");
const config = require('./config.js');
let isDev = true;
const uuid = require('node-uuid');
const uuid1 = uuid.v1();

module.exports = (app) => {
    // Gets all orders
    app.get('/getOrders', (req, res, next) => {
        if (isDev) {
            AWS.config.update(config.aws_local_config);
        } else {
            AWS.config.update(config.aws_remote_config);
        }
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: config.aws_table_name
        };

        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err)
                res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else {
                let { Items } = data;
                console.log(Items)
                res.send(Items);
            }
        });

    });

    // Add an order
    app.post('/putOrder', (req, res, next) => {
        if (isDev) {
            AWS.config.update(config.aws_local_config);
        } else {
            AWS.config.update(config.aws_remote_config);
        }
        let body = req.body;
        console.log(body);
        // Unique sequence
        // console.log(uuid1);
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: config.aws_table_name,
            Item: {
                orderid: uuid1,
                firstname: body.firstName,
                lastname: body.lastName,
                store: body.store,
                iban: body.iban,
                order: body.order,
                cost: body.cost,
                duration: body.duration
            }
        };
        docClient.put(params, function (err, data) {
            if (err) {
                console.log(err)
                res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else {
                console.log("Order Inserted!")
                // timer.orderTimer(uuid1, body.firstName);
                res.redirect('/');
            }
        });
    });

    // Delete an order
    app.post('/deleteOrder', (req, res, next) => {
        if (isDev) {
            AWS.config.update(config.aws_local_config);
        } else {
            AWS.config.update(config.aws_remote_config);
        }
        let body = req.body;
        console.log(body);

        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: config.aws_table_name,
            Key: {
                orderid: body.orderId,
                firstname: body.firstName
            }
        };
        docClient.delete(params, function (err, data) {
            if (err) {
                console.log(err)
                res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else {
                console.log("Order Deleted!")
                res.redirect('/');
            }
        });
    });

    // Get a single order by id
    app.get('/getOrder', (req, res, next) => {
        if (isDev) {
            AWS.config.update(config.aws_local_config);
        } else {
            AWS.config.update(config.aws_remote_config);
        }
        let firstName = req.query.firstName;
        let lastName = req.query.lastName;
        let orderId = req.query.orderId;
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: config.aws_table_name,
            KeyConditionExpression: 'firstname = :fn  and orderid = :id',
            ExpressionAttributeValues: {
                ':fn': firstName,
                ':id': orderId
            }
        };
        docClient.query(params, function (err, data) {
            if (err) {
                console.log(err)
                res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else {
                console.log('data', data);
                const { Items } = data;
                res.send({
                    success: true,
                    message: 'Loaded orders',
                    orders: Items
                });
            }
        });
    });
};


// CREATE DynamoDB Table Local
// var params = {
//     AttributeDefinitions: [
//       {
//         AttributeName: 'orderid',
//         AttributeType: 'S'
//       },
//       {
//         AttributeName: 'firstname',
//         AttributeType: 'S'
//       }
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'orderid',
//         KeyType: 'HASH'
//       },
//       {
//         AttributeName: 'firstname',
//         KeyType: 'RANGE'
//       }
//     ],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 10,
//       WriteCapacityUnits: 10
//     },
//     TableName: 'coffeeLAB',
//     StreamSpecification: {
//       StreamEnabled: false
//     }
//   };

// dyn.createTable(params, function (err, data) {
//     if (err) console.log(err); // an error occurred
//     else console.log(data); // successful response
// });


//DELETE TABLE 
// dyn.deleteTable({ TableName: "coffeeLAB" }, function (err, data) {
//     if (err) {
//         console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });