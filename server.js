const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
const port = 8000;

app.use(express.static('public'))

app.get('/tasks', async function(req, res) {
    const client = new MongoClient('mongodb://127.0.0.1');
    await client.connect();
    const db = client.db('todoapp');
    const collection = db.collection('tasks');
    const data = await collection.find({}).toArray();
    res.send(data);
});

app.get('/tasks/:id', function(req, res) {
});

app.post('/tasks', async function(req, res) {
    const task = {};
    const client = new MongoClient('mongodb://127.0.0.1');
    await client.connect();
    const db = client.db('todoapp');
    const collection = db.collection('tasks');
    await collection.insertOne(task);
    res.send(task);
});

app.patch('/tasks/:id', function(req, res) {
});

app.delete('/tasks/:id', function(req, res) {
});

app.listen(port, function() {
    console.log('Server is started!');
});