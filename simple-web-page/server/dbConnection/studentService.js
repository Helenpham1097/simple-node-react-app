const {getDb} = require("./conn");

const collectionName = 'student';

async function createStudent(document) {
    console.log(document);
    const database = await getDb();
    const {_id} = await database.collection(collectionName).insertOne(document);
    return _id;
}

async function getStudents() {
    const database = await getDb();
    return await database.collection(collectionName).find({}).toArray();
}

async function findByName(name) {
    const database =  await getDb();
    return await database.collection(collectionName).find(name).toArray();

}

async function update(name, newName) {
    const database = getDb();
    console.log(name);
    database
        .then(db => {
            db.collection(collectionName).updateOne(name, newName);
        })
        .catch(err =>{
            console.log(err);
        })
}

async function deleteDocument (doc) {
    const database =  getDb();

    database
        .then(db => {
            db.collection(collectionName).deleteOne(doc);
        })
        .catch(err =>{
            console.log(err);
        })
}

module.exports = {
    createStudent,
    getStudents,
    findByName,
    update,
    deleteDocument
};