var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var users = [
    { tuftsid: '1117788', first_name: 'Alena', last_name: 'Borisenko', admin: 'false'},
    { tuftsid: '1117789', first_name: 'Bob', last_name: 'Exampleman', admin: 'true'},
  ];
  var items = [
    { item_name: 'science kit', item_count: 100, description: 'includes sciency thing'},
    { item_name: 'physics textbook', item_count: 3, description: '3rd edition'},
    { item_name: 'pipette', item_count: 10, description: 'N/A'}
  ];
  db.collection("users").insertMany(users, function(err, res) {
    if (err) throw err;
    console.log("User collection created with " + res.insertedCount + " users");
    db.close();
  });
  db.collection("items").insertMany(items, function(err, res) {
    if (err) throw err;
    console.log("Item collection created with " + res.insertedCount + " items");
    db.close();
  });
});