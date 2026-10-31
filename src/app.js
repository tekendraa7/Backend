// Creating a simple Express server
const express = require('express');

const app = express();
app.use(express.json());

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).send('Note added successfully');
})

module.exports = app;