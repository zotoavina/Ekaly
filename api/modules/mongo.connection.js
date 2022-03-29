var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const database = "ekaly";

const exec = function( action ) {
   var ls =  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("connected to database");
  });
  console.log(ls);
}


module.exports = exec;
