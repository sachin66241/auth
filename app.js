const express = require('express');
const path = require('path');


const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',loginRouter);
app.use(loginRouter);
app.use(registerRouter);


module.exports = app;
