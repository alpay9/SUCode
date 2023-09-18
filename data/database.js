const mongoose = require("mongoose");

let db;

exports.connectDb = () => {
    const url =
        "mongodb+srv://sucode_server:mF9Zc3FSVCd2FhKi@clustersucode.cfectdm.mongodb.net/server?retryWrites=true&w=majority";
    return (db = mongoose.connect(url));
};

exports.getDb = () => {
    if (db) return db;
    throw new Error("Database not connected");
};
