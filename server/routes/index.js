var express = require('express');
var router = express.Router();
const user = require('../models/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

// router.get('/', function(req, res, next) {
//   if(req.session.userInfo1){
//     res.render('index', {
//      test:req.session.userInfo1.username,
//      sessionsign:0
//   });
// }else{
//   res.render('index', {
//     test:'请您登陆',
//     sessionsign:1
//  });
// }
// });

// router.get('/register', function(req, res, next) {
//   res.render('register', );
// });
// router.get('/login', function(req, res, next) {
//   res.render('login', );
// });
// // router.get('/index', function(req, res, next) {
// //   res.render('index', );
// // });
// router.get('/city', function(req, res, next) {
//   res.render('city', );
// });
// router.get('/mate', function(req, res, next) {
//   res.render('mate', );
// });
// router.get('/mateDetail', function(req, res, next) {
//   res.render('mateDetail', );
// });
// router.get('/new-travel', function(req, res, next) {
//   res.render('new-travel', );
// });
// router.get('/pointplace', function(req, res, next) {
//   res.render('pointplace', );
// });
// router.get('/popular-travel', function(req, res, next) {
//   res.render('popular-travel', );
// });
// router.get('/travel-news', function(req, res, next) {
//   res.render('travel-news', );
// });
// router.get('/exit', function(req, res, next) {
//   req.session.userInfo1 = null; 
//   res.redirect('./');
// });
module.exports = router;
