var express = require('express');
var app = express();
var mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'resources'
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.get('/resources', function (req, res) {
    var sql = "SELECT * FROM resources res INNER JOIN categories cat ON (res.category=cat.id)";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
});

app.get('/resources/:search', function (req, res) {
    var sql = "SELECT * FROM resources res INNER JOIN categories cat ON (res.category=cat.id) WHERE res.title LIKE '%"+req.params.search+"%'";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

