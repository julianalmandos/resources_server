const express = require('express');
const app = express.Router();

const Resource = require('../models/Resource');

app.get('/', function (req, res) {
    Resource.findAll({
        include: ['category'],
        order: [
            ['created_at','DESC']
        ],
    })
        .then(resources => {
            res.send(resources);
        })
        .catch(err => console.log(err));
});

app.delete('/', function(req, res) {
    Resource.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(() => {
            res.sendStatus(200);
        });
})

app.put('/addToFavourites', function(req, res) {
    Resource.update({
        favourite: 1,
    },{
        where: {
            id: req.body.data.resourceId
        }
    })
        .then(category => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

app.put('/removeFromFavourites', function(req, res) {
    Resource.update({
        favourite: 0,
    },{
        where: {
            id: req.body.data.resourceId
        }
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