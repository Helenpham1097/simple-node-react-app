const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {connectToServer} = require('/Users/phamtrang/Downloads/simple-node-react-app/simple-node-react-app/simple-web-page/server/dbConnection/conn.js');
const {
    createStudent,
    getStudents,
    findByName,
    update,
    deleteDocument
} = require('/Users/phamtrang/Downloads/simple-node-react-app/simple-node-react-app/simple-web-page/server/dbConnection/studentService.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.listen(4000, () => {
    console.log('listening on port 4000');
});

// defining an endpoint to get data
app.get('/students', async (req, res) => {
    res.send(await getStudents());
});

app.get('/get/:name', async (req, res) => {
    const document = {
        name: req.params.name
    };
    res.send(await findByName(document));
});

//defining an endpoint to create data
app.post('/create', async (req, res) => {
    if (!req.body) {
        res.status(400);
        res.json({message: "Bad request"});
    } else {
        const document = {
            name: req.body.name,
            email: req.body.email,
            studentID: req.body.studentID
        };
        res.send(await createStudent(document));
    }
});

//defining an endpoint to update data
app.put('/update/:name', async (req, res) => {
    if (!req.body) {
        res.status(400);
        res.json({message: "Bad request"});
    } else {

        const dataCheck = {
            name: req.params.name,

        };
        const newDocument = {$set: {"name": req.body.name, "email": req.body.email, "studentID": req.body.studentID}};

        const foundData = findByName(dataCheck);
        console.log("Get found data pending");
        console.log(foundData);
        console.log("Finish");

        foundData
            .then(value => {
                res.send(update(value[0], newDocument));
            })
            .catch(error => {
                console.log("Cannot update. Try again");
                console.log(error);
            })
    }
});

// defining delete endpoint
app.delete('/delete/:name', async (req, res) =>{

    const documentName = {
        name: req.params.name
    };

    res.send(await deleteDocument(documentName));
});

