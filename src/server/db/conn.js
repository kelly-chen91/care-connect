const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../config.env" });

// This is definitely bad practice right here :(
const Db = "mongodb+srv://lingzhenting:040040@cluster0.dlwbbpp.mongodb.net/";

console.log(Db)
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
