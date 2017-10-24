var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  /* Placeholder values. Assume tuftsID and email uniquely identify each item */
  var users = [
    { 
      tuftsid:    '1117788', 
      admin:      'false',
      first_name: 'Alena', 
      last_name:  'Borisenko', 
      email:      'alena.b@gmail.com', 
      password:   'penguin1'
    },

    { 
      tuftsid:    '1117789',
      admin:      'true', 
      first_name: 'Bob',   
      last_name:  'Anderson', 
      email:      'bob17@yahoo.com',
      password:   'gopats2017'       
    },

    { 
      tuftsid:    '1117790',
      first_name: 'Amber',
      last_name:  'Smith',     
      admin:      'false',
      email:      'asmith01@cs.tufts.edu', 
      password:   'gopats2017' 
    },

    { 
      tuftsid: '1116724',
      first_name: 'Alex',
      last_name: 'Smith',     
      admin:     'false',
      email: 'asmith01@cs.tufts.edu',
      password: '2scoops'
    }
  ];
  /* Placeholder values. Assume item_name uniquely identifies each item */
  var items = [
    { name: 'science kit',   count: 100, description: 'contains: A, B, C'},
    { name: 'math textbook', count: 3,   description: '3rd edition'      },
    { name: 'pipette',       count: 10,  description: 'N/A'              },
    { name: 'ruler',         count: 60,  description: 'N/A'              },
    { name: 'ipad',          count: 2,   description: 'for workshop use' }
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