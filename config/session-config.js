const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const url = require("../data/database").url;

exports.getSessionObject = (store, rememberMe) => {
    return {
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: rememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 24,
        },
        store: store,
    };
};

exports.getStorage = () => {
    const store = new MongoDBStore({
        uri: "mongodb+srv://sucode_server:mF9Zc3FSVCd2FhKi@clustersucode.cfectdm.mongodb.net/?retryWrites=true&w=majority",
        databaseName: "authentication",
        collection: "sessions",
    });
    return store;
};
