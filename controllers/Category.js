const express = require('express');
const app = express.Router();

const Category = require('../models/Category');

app.get('/', function (req, res) {
    Category.findAll()
        .then(resources => {
            res.send(resources);
        })
        .catch(err => console.log(err));
});

app.post('/', function(req, res) {
    Category.create({
        name: req.body.data.category.name,
        color: req.body.data.category.color
    })
        .then(category => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = app;