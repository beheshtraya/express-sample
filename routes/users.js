var express = require('express');
var router = express.Router();

const dbName = 'user-app-db'
let mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://bh-user-app-db:qDkE0nAplHp5g4bnBwAouIMA6kS2WgWUqU3kVylJ6KXkImJOBZWLG4VGgKNyWY6cKYNQlsI0qIX2vl32APbAIQ%3D%3D@bh-user-app-db.mongo.cosmos.azure.com:10255/?ssl=true&appName=@bh-user-app-db@",
    function (err, client) {
        client.close();
    });

/* GET users listing. */
router.get('/', function (req, res, next) {
    mongoClient.connect("mongodb://bh-user-app-db:qDkE0nAplHp5g4bnBwAouIMA6kS2WgWUqU3kVylJ6KXkImJOBZWLG4VGgKNyWY6cKYNQlsI0qIX2vl32APbAIQ%3D%3D@bh-user-app-db.mongo.cosmos.azure.com:10255/?ssl=true&appName=@bh-user-app-db@",
        function (err, client) {

            const db = client.db(dbName);

            db.collection('users').find({}).project({_id: false, id: true, username: true}).toArray((error, users) => {
                console.log(users);
                res.send(users);
            })
            client.close();
        });

});

router.get('/:userId', (req, res) => {
    mongoClient.connect("mongodb://bh-user-app-db:qDkE0nAplHp5g4bnBwAouIMA6kS2WgWUqU3kVylJ6KXkImJOBZWLG4VGgKNyWY6cKYNQlsI0qIX2vl32APbAIQ%3D%3D@bh-user-app-db.mongo.cosmos.azure.com:10255/?ssl=true&appName=@bh-user-app-db@",
        function (err, client) {

            const db = client.db(dbName);

            db.collection('users').findOne({id: req.params.userId}, (error, user) => {
                console.log(user);
                delete user._id;
                res.send(user);
            })
            client.close();
        });
});


module.exports = router;
