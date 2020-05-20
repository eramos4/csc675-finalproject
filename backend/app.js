var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

 var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
let recipeRouter = require('./routes/recipe')
let usersRouter = require('./routes/users')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipe', recipeRouter)

//const conn = require('./db/mysql')


// app.post('/api/register', function(req, res) {
//   console.log('this is the first thing you should test. does the endpoit run')
//    res.status(200).send("this endpoint works")
 
//    let regQuery = 'INSERT INTO cookit_db.users(`email_address`, `uuid`, `password`, `username`, `is_admin`) VALUES (?, ?, ?, ?, ?);';
 
 
//    let params = [req.body.email, req.body.uuid, req.body.password, req.body.username, '0'];
   
  
//    conn.connection.query(regQuery,params).spread(function (user) {
   
//        if (req.body.username == null && req.body.password == null) {
//            console.log("Error ocurred");
//            res.status(400).send('Error occured');  
//          }else{
//            console.log("Registration info added to database");
//            res.status(200).send('Registration successful');   
//            }
               
//        }).catch((error) =>{
//            console.log(error);
//        });
 
   
//     });
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
