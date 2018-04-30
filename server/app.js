/* Require packages and setup bodyParser. */
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
var mongoose = require('mongoose');
var mongoUri = 'mongodb://heroku_0t24wwgl:bsdde3mjeccmcd28pn0j68mmmr@ds257838.mlab.com:57838/heroku_0t24wwgl' || process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
    db = databaseConnection;
});

mongoose.connect(mongoUri); 
require('./config/passport.js')(passport); 

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send("nice");
});

app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup' 
}));

const jwt = require('jsonwebtoken');

function generateToken(req, res, next) {  
  req.token = jwt.sign({
    id: req.user.id,
  }, 'server secret', {
    expiresIn: 120
  });
  console.log('generated token');
  next();
}

function respond(req, res) {  
  res.status(200).json({
    user: req.user,
    token: req.token
  });
}

app.post('/login',
  passport.authenticate('local-login', { 
                                   session: false
                                    }), generateToken, respond);

app.get('/signup', function(req, res) {
    res.send(200);
});

/* Get items from the database. */
app.get('/getList', function(req, res) {
    db.collection('items', function(error, coll) {
        if (error) {
            res.sendStatus(500);
        } else {
            coll.find().toArray(function(error, results) {
                if (error) {
                    res.sendStatus(500);
                } else {
                    var thearray = results;
                    for (var i = 0; i < thearray.length; i++) {
                        delete thearray[i].quantity;
                        delete thearray[i].reservations;
                    }
                    res.send(thearray);
                }
            });
        }
    });
});

/* Get info of a specific item from database. */
app.get('/getItem', function(req, res) {
    if (req.query.id == null) {
        res.sendStatus(500);
    } else {
        var id = require('mongodb').ObjectID(req.query.id);
        db.collection('items', function(error, coll) {
            if (error) {
                res.sendStatus(500);
            } else {
                coll.findOne({"_id": id}, function(error, results) {
                    if (error) {
                        res.sendStatus(500);
                    } else {
                        res.send(results);
                    }
                });
            }
        });
    }
});

app.get('/login', function(req, res) {
    res.send("Log in failed \nTry again");
});

/* Add an item to the database. */
app.post('/addItem', function(req, res) {
    if (req.body.name == null) {
        res.sendStatus(500);
        return;
    }
    db.collection('items', function(error, coll) {
        coll.find({name: req.body.name}).toArray(function(error, results) {
            if (results.length === 0) {
                var data = {
                    name: req.body.name,
                    quantity: 1,
                    reservations: []
                }
                coll.insert(data);
                res.sendStatus(200);
            } else {
                var num = results[0].quantity + 1;
                var reserve = results[0].reservations
                coll.update({name: req.body.name}, {name: req.body.name, quantity: num, reservations: reserve}, function(error, results) {
                    if (error) {
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });
            }
        });
    });
});

/* Remove an item from the database. */
app.post('/removeItem', function(req, res) {
    db.collection('items', function(error, coll) {
        coll.find({name: req.body.name}, function(error, results) {
            results.toArray(function(error, resultsarray) {
                if (resultsarray.length == 0) {
                    res.sendStatus(500);
                } else {
                    /* Lower the quantity then update. */
                    var num = resultsarray[0].quantity;
                    if (num === 0) {
                        res.sendStatus(200);
                    } else {
                        num--;
                        if (num === 0) {
                            coll.deleteOne({name: req.body.name}, function(error, results) {
                                if (error) {
                                    res.sendStatus(500);
                                } else {
                                    res.sendStatus(200);
                                }
                            });
                        } else {
                            coll.update({name: req.body.name}, {name: req.body.name, quantity: num, reservations: []}, function(error, results) {
                                if (error) {
                                    res.sendStatus(500);
                                } else {
                                    res.sendStatus(200);
                                }
                            });
                        }
                    }
                }
            });
        });
    });
});

/* Reserve an item in the database. */
app.post('/reserveItem', function(req, res) {
    if (req.body.name == null || req.body.date == null || req.body.email == null || req.body.quantity == null) {
        res.sendStatus(500);
    } else {
        var date = new Date(Date.parse(req.body.date));
        if (!(date instanceof Date) || date < new Date()) {
            res.sendStatus(500);
        } else {
            var reserve = {
                email: req.body.email,
                date: date,
                quantity: parseInt(req.body.quantity)
            }
            db.collection('items', function(error, collection) {
                collection.find({name: req.body.name}, function(error, results) {
                    results.toArray(function(error, array) {
                        if (array.length === 0) {
                            res.sendStatus(500);
                        } else {
                            var obj = array[0];
                            if (obj.quantity < reserve.quantity) {
                                res.sendStatus(500);
                                return;
                            }
                            /* Check that enough of that object exists on that date and is not reserved. */
                            var count = 0;
                            for (var i = 0; i < obj.reservations.length; i++) {
                                if (obj.reservations[i].date.toDateString() === date.toDateString()) {
                                    count = count + obj.reservations[i].quantity;
                                }
                            }
                            if ((obj.quantity - count) < reserve.quantity) {
                                res.sendStatus(500);
                                return;
                            }

                            /* Assign the new reservation. */
                            var objdates = obj.reservations;
                            objdates.push(reserve);
                            collection.update({name: req.body.name}, {name: req.body.name, quantity: obj.quantity, reservations: objdates}, function(error, results) {
                                if (error) {
                                    res.sendStatus(500);
                                } else {
                                    res.sendStatus(200);
                                }
                            });
                        }
                    });
                });
            });
        }
    }
});

app.listen(process.env.PORT || 3000);