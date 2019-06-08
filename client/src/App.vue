<template>
  <div>
    <header class="nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/place">目的地</router-link>
        </li>
        <li>
          <router-link to="/community">社区+</router-link>
        </li>
        <li>
          <router-link to="/travelnotes">游记+</router-link>
        </li>
      </ul>
      <div>
        <span class="login">
          <router-link to="/login">登录</router-link>
        </span>
        <span class="register">
          <router-link to="/register">注册</router-link>
        </span>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div>
      <img src="../static/images/logo1.png">
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}

.nav ul li {
  float: left;
  list-style: none;
}

header ul li {
  margin: 0 2px 0 2px;
  padding: 0 15px 0 15px;
}

header ul {
  padding-left: 40px;
}

header li :hover {
  border-bottom: #ec414d 2px solid;
}

header ul li a {
  text-decoration: none;
  padding: 3px 0 3px 0;
}

header div {
  float: right;
  padding-right: 65px;
  padding-top: 3px;
}

header div a {
  text-decoration: none;
}

header {
  height: 34px;
}

header a {
  color: black;
}

header div span {
  border: #ededed solid 1px;
  padding: 4px 0 4px 0;
  border-radius: 3px;
  margin-left:10px;
}

header div span a {
  padding: 4px 15px 4px 15px;
}

.register {
  border: #ec414d solid 1px;
  background: #ec414d;
}

.login {
  background: #ededed;
}

.register a {
  color: white;
}

.login:hover {
  background: white;
}

.login a:hover {
  color: black;
}

.register:hover {
  background: red;
  border: red solid 1px;
}

.nav {
  position: relative;
  padding-top: 8px;
  width: 100%;
  background: white;
  overflow: hidden;
  border-bottom: 1px solid #ededed;
}
footer {
  width: 100%;
  background: #f2f2f2;
  text-align: center;
  height: 60px;
  padding-top: 30px;
}
footer img{
  width:130px;
  height:60px;
  margin-top:-15px;
}
</style>
