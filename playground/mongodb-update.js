const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if( err ){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5aeb80aad36a4e7666bcd946")
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5aeb7d4bc2c7463b1c6f3b90")
    }, {
        $set: {
            name: "Jefferson Pierce"
        },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result)
    });

    db.close();
});