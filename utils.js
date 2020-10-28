const dbName = 'user-app-db'

let mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://bh-user-app-db:qDkE0nAplHp5g4bnBwAouIMA6kS2WgWUqU3kVylJ6KXkImJOBZWLG4VGgKNyWY6cKYNQlsI0qIX2vl32APbAIQ%3D%3D@bh-user-app-db.mongo.cosmos.azure.com:10255/?ssl=true&appName=@bh-user-app-db@",
    function (err, client) {

        const db = client.db(dbName);

        // db.collection('users').insertOne(
        //     {
        //         id: '1',
        //         username: 'Robin Wieruch'
        //     }
        // );
        //
        // db.collection('users').insertOne(
        //     {
        //         id: '2',
        //         username: 'Dave Davids'
        //     }
        // )

        client.close();
    });
