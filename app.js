const express = require('express');
const app = express();

const Resource = require('./models/Resource');
const Category = require('./models/Category');

const ResourceController = require('./controllers/Resource');
const CategoryController = require('./controllers/Category');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

db = require('./config/connection');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use('/api/resources', ResourceController);
app.use('/api/categories', CategoryController);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

