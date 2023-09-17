const { MongoClient } = require('mongodb');


let database;

async function connectDatabase() {

    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);
    await client.connect();
    const dbName = 'sucode';
    database = client.db(dbName);
   
}


function getDatabase(){
    if(database){
        return database;
    }
    throw new Error();
}

module.exports={
    connectDatabase:connectDatabase,
    getDatabase:getDatabase
}