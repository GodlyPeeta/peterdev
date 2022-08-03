var mysql = require('mysql')
var bodyParser = require('body-parser')
var fs = require('fs');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  html = fs.readFileSync('index.html');
  res.writeHead(200);
  res.write(html);
  res.end();
});

app.use(function (req, res, next) {
  res.send("four oh four")
  res.status(404);
});

module.exports = app