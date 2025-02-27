let mysql = require('mysql')
let bodyParser = require('body-parser')
let fs = require('fs');

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index/index')
let projectRouter = require('./routes/projects/projects')
let contactRouter = require('./routes/contact/contact')

let app = express();

app.use('/', indexRouter);
app.use('/projects', projectRouter);
app.use('/contact', contactRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(function (req, res, next) {
    res.send("four oh four")
    res.status(404);
});

module.exports = app