const mongoUtil = require('./mongoUtil');

// This is dummy data, but passing in any record of this format will do
var new_user =  { 
                    tuftsid:    '1117788', 
                    admin:      'false',
                    first_name: 'Alena', 
                    last_name:  'Borisenko', 
                    email:      'alena.b@gmail.com', 
                    password:   'penguin1'
                };

// Connect to db and then...
mongoUtil.connectToDb().then(
    function () {
        // find all the existing records and then...
        mongoUtil.findAllUsers().then(
            function (items) {
                // check all records
                for (var i = 0; i < items.length; i++) {
                    // if the email was alredy registered, print message and return
                    if (items[i].email == new_user.email) {
                        console.log("This email has already been registered");
                        mongoUtil.closeDb();
                        return;
                    }
                }

                // if the email is new, then insert it into the db
                var db = mongoUtil.getDb();
                db.collection("users").insertOne(new_user, function(err, res) {
                    if (err) throw err;
                    console.log("Successfully added new user info");
                    mongoUtil.closeDb();
                });
            }
        )
    }
);