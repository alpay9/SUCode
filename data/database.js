const mongoose = require('mongoose');

let db;

const connectDb = () => {

    const url = 'mongodb+srv://sucode_server:mF9Zc3FSVCd2FhKi@clustersucode.cfectdm.mongodb.net/server?retryWrites=true&w=majority';
    return db = mongoose.connect(url);

}

const getDb = () => {
    if(db) return db;
    throw new Error("Database not connected");
}

exports.connectDb = connectDb;
exports.getDb = getDb;