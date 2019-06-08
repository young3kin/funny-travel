<template>
  <div class="register1">
    <div class="container">
      <form action="" method="POST" class="main">
        <div class="top">
          <span class="top-1">注册</span>
        </div>
        <div class="user">
          <input type="text" class="username" placeholder="输入5-10位用户名，需包含字母和数字" v-model="username">
        </div>
        <div class="key1">
          <input type="password" class="password" placeholder="输入5-10位密码，需包含字母和数字" v-model="password">
        </div>
        <div class="key2">
          <input type="password" class="repassword" placeholder="确认密码" v-model="repassword">
        </div>
        <div>
          <input type="button" value="注册" class="register2" @click="register">
        </div>
        <div class="container-foot">
          <span id="sp1">已有账号，立即<a class="login1" @click="go">登录</a></span>
          <span id="sp2">同意会员条款和免责声明</span>
        </div>
      </form>
    </div>

    <router-view></router-view>
  </div>

</template>
<script>
  export default {
    name: 'register1',
    data() {
      return {
        username: '',
        password: '',
        repassword: '',

      }
    },
    methods: {
      register() {
        var _this = this;
        this.$axios.post("http://localhost:3000/users/register", {
          username: this.username,
          password: this.password,
          repassword: this.repassword
        }).then(function (res) {
          //成功
          if (res.data.code == '000') {
            _this.$message({
              showClose: true,
              message: '注册成功',
              type: 'success'
            });
            _this.$router.push({
              path: '/login'
            })
          } else {
            _this.$message({
              showClose: true,
              message: res.data.message,
              type: 'error'
            });
          }
        }).catch(function (error) {
          _this.$message({
            showClose: true,
            message: '加载异常，请稍后重试',
            type: 'error'
          });
        });
      },
      go() {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }

</script>
<style scoped>
  .register1 {
    min-width: 100%;
    margin: 0 auto;
  }

  .container {
    padding-top: 100px;
    min-width: 100%;
    height: 680px;
    background: url("../../static/images/creat-bg.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }

  .main {
    width: 360px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 12px 22px 40px 5px rgba(46, 45, 45, 0.836);
    animation: tran 2s ease;
  }

  @keyframes tran {
    0% {
      opacity: 0;
      transform: translateY(40%);
    }

    30% {
      opacity: 0;
      transform: translateY(20%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .main>div {
    margin: 30px;
  }

  .top {

    border-bottom: 3px solid#dbab61;
    margin-left: -30px;
  }

  .top-1 {
    width: 100px;
    height: 30px;
    margin-left: 135px;
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #dbab61;
  }

  input[type="text"] {
    height: 30px;
    border-radius: 3px;
    border: 1px solid rgb(219, 211, 211);

  }

  input[type="password"] {
    height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;

  }

  input[type="button"] {
    height: 40px;
    background-color: #dbab61; 
    border-radius: 3px;
    border: 1px solid rgb(219, 211, 211);
    color: white;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important;
  }

  .username {
    width: 300px;


  }

  .password {
    width: 300px;
  }

  .repassword {
    width: 300px;
  }

  .register2 {
    width: 300px;
    font-size: 16px;
    font-weight: bold;
  }

  .register2:hover {
    background-color: rgb(25, 162, 184);
    cursor: pointer;
  }

  #sp1 {
    margin-top: 5px;
    float: left;
    font-size: 12px;
  }

  #sp1>a {
    color: #dbab61
  }

  #sp1>a:hover {
    font-weight: bold;
    cursor: pointer;
  }

  #sp2 {
    margin-left: 60px;
    font-size: 12px;
  }

  .register-tips {
    margin: 30px;
  }

</style>
