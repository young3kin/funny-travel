<template>
  <div class="login1">
    <div class="container">
      <div class="main">
        <div class="top">
          <span class="top-1">登录</span>
        </div>
        <div class="user">
          <input type="text" class="username" placeholder="输入用户名" v-model="username">
        </div>
        <div class="key">
          <input type="password" class="password"  placeholder="输入密码" v-model="password">
        </div>
        <div>
          <button  class="login" @click="login">登录</button>
        </div>
        <div class="container-foot">
          <span id="sp1">没有账号，立即<a class="register1" @click="go">注册</a></span>
          <span id="sp2">同意会员条款和免责声明</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'login1',
    data() {
      return {
      username: '',
      password: '',
      }
    },
    methods: {
      login() {
        var _this = this;
				this.$axios.post("http://localhost:3000/users/user/login",{
						username:this.username,
						password:this.password
				}).then(function(res){ 
					//成功
				if (res.data.code == '010') {
        _this.$alert('登录成功');
        _this.$router.push({path:'/'})
					}else{
					_this.$alert(res.data.message)
					}	
				}).catch(function (error) {
          
         _this.$alert('加载异常，请稍后重试')
				});
      },
      go() {
        this.$router.push('/register')
      }
    }
  }

</script>
<style scoped>
  .container {
    padding-top: 100px;
    width: 100%;
    height: 680px;
    background: url("../../static/images/creat-bg12.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }

  .main {
    width:360px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 5px 10px 25px 2px rgba(39, 39, 39, 0.774);
     animation:tran 2s ease;
  }
@keyframes tran{
	0%{
		opacity:0;
		transform:translateY(40%);
	  }
	30% {
		opacity:0;
		transform:translateY(20%);
		}
	100% {
		opacity:1;
	    transform:translateX(0);
		}
		}
  .main>div {
    margin: 30px;
  }

  .login-tips {
    margin: 30px;
  }

  .top {

    border-bottom: 3px solid #339933;
    margin-left: -30px;
  }

  .top-1 {
    width: 100px;
    height: 30px;
    margin-left: 135px;
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #339933;
  }

  input[type="text"] {
    height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;

  }

  input[type="password"] {
    height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;

  }


  .username {
    width: 300px;

  }

  .password {
    width: 300px;
  }

  .login {
    width: 300px;
    height: 40px;
    background-color: #339933;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .login:hover {
    background-color:  #0c6fb1e3;
    cursor: pointer;
  }

 
  #sp1 {
    margin-top: 5px;
    float: left;
    font-size: 12px;
  }

  #sp1>a {
    color: #339933
  }

  #sp1>a:hover {
    font-weight: bold;
    cursor: pointer;
  }

  #sp2 {
    margin-left: 55px;
    font-size: 12px;
  }


</style>
