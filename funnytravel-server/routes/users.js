var express = require('express');
var router = express.Router();
var User = require('../models/User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var responseDate

router.use((req, res, next) => {
  responseDate = {
    code: "000",
    message: ""
  }
  next()
})

// 用户注册
router.post("/user/register", (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  let repassword = req.body.repassword

  if (username == '' || password == '') {
    responseDate = {
      code: '001',
      message: '用户名或者密码不能为空'
    }
    res.json(responseDate)
    return
  }
  if (password != repassword) {
    responseDate = {
      code: '002',
      message: '两次密码不一致'
    }
    res.json(responseDate)
    return
  }
  // 查询数据库是否重名
  User.findOne({
    username: username
  }).then((userInfo) => {
    if (userInfo) {
      console.log(userInfo)
      responseDate = {
        code: '003',
        message: '用户名已经被注册'
      }
      res.json(responseDate)
      return
    }
    var user = new User({
      username: username,
      password: password
    })
    return user.save()
  }).then((newUserInfo) => {
    responseDate.message = "注册成功";
    res.json(responseDate);
  })
});


// 用户登录
router.post("/user/login", (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  if (username == '' || password == '') {
    responseDate = {
      code: '001',
      message: '用户名或密码不能为空'
    }
    res.json(responseDate)
    return
  }
  // 查询数据库是否重名
  User.findOne({
    username: username,
    password: password,
  }).then((userInfo) => {
    if (!userInfo) {
       responseDate = {
        code: '004',
        message: '用户名或密码错误'
      }
      res.json(responseDate)
      return
    }  
    
    // 用户名和密码正确
    responseDate = {
      code: '010',
      message: '登录成功',
      userInfo: {
        _id: userInfo._id,
        username: userInfo.username,
        password: userInfo.password
      },
    }
    // userInfo1 = {
    //   username:userInfo.username,
    //   password:userInfo.password   
    // }
    // req.session.userInfo1 = userInfo1;
    
      res.json(responseDate);
      return
    })
    // console.log(req.session.userInfo1);
  }); 
  
module.exports = router;
