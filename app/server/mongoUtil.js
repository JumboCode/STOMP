var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/stompdb";
var _db;

module.exports = {
    connectToDb: function() {
        return MongoClient.connect(url).then(function(db) {
            _db = db;
        });
    },

    findAll: function () {
        var collection = _db.collection('users');
        return collection.find()
                         .toArray()
                         .then(function(items) { return items; });
    },

    getDb: function() {
        return _db;
    },

    closeDb: function() {
        _db.close();
    }
};