var AWS = require("aws-sdk");
var schema = require('../public/js/table');
AWS.config.update({
    region: "us-west-1",
    endpoint: "http://localhost:8000"
});

var client = new AWS.DynamoDB.DocumentClient();

let rec = schema.record();
console.log(rec);
var params = {
    TableName: "coffeeLab",
    Item: {
        "year": year,
        "title": title,
        "info": {
            "plot": "Nothing happens at all.",
            "rating": 0
        }
    }
};

console.log("Adding a new item...");
try {
    let res = client.put(params);
    console.log(res);
}
catch (err) {
console.log(err);
}
