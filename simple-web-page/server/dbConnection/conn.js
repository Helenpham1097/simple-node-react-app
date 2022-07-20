const {MongoClient} = require('mongodb');

let database = null;

async function connectToServer() {
    const connectionString = "mongodb://localhost:27017/admin";
    const connection = await MongoClient.connect(connectionString);
    database = connection.db();
}

async function getDb() {
    if (!database) await connectToServer();
    return database;
}

module.exports = {
    connectToServer,
    getDb,
};