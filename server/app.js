/* Require packages and setup bodyParser. */
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
var flash    = require('connect-flash');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var passport = require('passport');
//app.use(session({ secret: 'jumbocodestomp' }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
var mongoose = require('mongoose');
var mongoUri = 'mongodb://heroku_0t24wwgl:bsdde3mjeccmcd28pn0j68mmmr@ds257838.mlab.com:57838/heroku_0t24wwgl';//process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});


mongoose.connect(mongoUri); 
require('./config/passport.js')(passport); 

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send("logged in");
});

app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup' 
}));

app.post('/login',
  passport.authenticate('local-login', { successRedirect: '/',
                                   failureRedirect: '/login'
                                    })
);

app.get('/signup', function(req, res) {
	res.send(200);
});

/* Get items from the database. */
app.get('/getList', function(req, res) {
	db.collection('items', function(error, coll) {
		if (error) {
			res.send(500);
		} else {
			coll.find().toArray(function(error, results) {
				if (error) {
					res.send(500);
				} else {
					res.send(results);
				}
			});
		}
	});
});


app.get('/login', function(req, res) {
	res.send("Log in failed \nTry again");
});

/* Add an item to the database. */
app.post('/addItem', function(req, res) {
	var item = {
		"item": req.body.food
	}
	db.collection('items', function(error, coll) {
		coll.insert(item, function(error, saved) {
			if (error) {
				res.send(500);
			} else {
				res.send(200);
			}
		});
	});
});

/* Remove an item from the database. */
app.post('/removeItem', function(req, res) {
	db.collection('items', function(error, coll) {
		coll.find({name: req.body.name}, function(error, results) {
			var res = results.toArray();
			if (res.length == 0) {
				res.send();
			} else {
				/* Lower the quantity then update. */
				// lower quantity here first
				// coll.update({name: req.body.name}, res)
			}
		});
	});
});

app.listen(process.env.PORT || 3000);