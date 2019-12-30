const express = require('express');
const app = express();

const Resource = require('./models/Resource');
const Category = require('./models/Category');

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

app.get('/api/resources', function (req, res) {
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

app.get('/api/categories', function (req, res) {
  Category.findAll()
    .then(resources => {
      res.send(resources);
    })
    .catch(err => console.log(err));
});

app.delete('/api/resources', function(req, res) {
  Resource.destroy({
    where: {
      id: req.body.id
    }
  }).then(() => {
    res.sendStatus(200);
  });
})

/*app.get('/api/resources/:search', function (req, res) {
    var sql = "SELECT * FROM resources res INNER JOIN categories cat ON (res.category=cat.id) WHERE res.title LIKE '%"+req.params.search+"%'";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

app.get('/api/resources/category/:category', function (req, res) {
  var sql = "SELECT * FROM resources res INNER JOIN categories cat ON (res.category=cat.id) WHERE res.category="+req.params.category;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});*/

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

