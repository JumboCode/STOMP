const mongoUtil = require('./mongoUtil');

// This is dummy data, but passing in any record of this format will do
var new_item =  { 
                    name:        'science kit',    
                    count:       100,  
                    description: 'contains: A, B, C'
                };

// Connect to db and then...
mongoUtil.connectToDb().then(
    function () {
        // find all the existing records and then...
        mongoUtil.findAllItems().then(
            function (items) {
                // check all records
                for (var i = 0; i < items.length; i++) {
                    // if the name was alredy used, print message and return
                    if (items[i].name == new_item.name) {
                        console.log("This item has already been recorded");
                        mongoUtil.closeDb();
                        return;
                    }
                }

                // if the name is new, then insert it into the db
                var db = mongoUtil.getDb();
                db.collection("items").insertOne(new_item, function(err, res) {
                    if (err) throw err;
                    console.log("Successfully added new item info");
                    mongoUtil.closeDb();
                });
            }
        )
    }
);