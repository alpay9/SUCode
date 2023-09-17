
const session=require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);


function getSessionObject(store,rememberMe){
    return{
        secret: 'super secret',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            maxAge: rememberMe ? (1000 * 60 * 60 * 24 * 30) : (1000 * 60 * 60 * 24),
        }
        ,
        store:store
    }
}


function getStorage(){
    const store = new MongoDBStore({
        uri: 'mongodb://127.0.0.1:27017',
        databaseName:"sucode",
        collection: 'sessions'
    });
    return store;
}


module.exports={
    getStorage:getStorage,
    getSessionObject:getSessionObject,

}