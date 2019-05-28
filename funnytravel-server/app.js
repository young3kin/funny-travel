var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var swig = require('swig')
var mongoose = require("mongoose")
// 将post发送的数据解析为json，并通过req.body来调用
var bodyParser = require("body-parser")
var session = require("express-session")
var User = require('./models/User')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

swig.setDefaults({cache: false})

// //session
// app.use(cookieParser('sessiontest'));
// app.use(session({
//   secret:'sessiontest',
//   name:'funnytraveluser',
//   resave:true,
//   saveUninitialized:true,
//   cookie:{
//     maxAge:60*1000
//   }
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 中间件 处理post提交数据为json格式，必须在路由之前
app.use(bodyParser.json({limit: '1mb'}));  
app.use(bodyParser.urlencoded({            
  extended: true
}));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
mongoose.connect("mongodb://127.0.0.1:27017/FunnyTravel", { useNewUrlParser: true },error => {
  if (error) {
    console.log("数据库连接失败：" + error)
  } else {
    console.log("------数据库连接成功！------")
    // 监听http请求
   
  }
});
module.exports = app;
