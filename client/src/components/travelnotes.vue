<template>
  <div>
    <div class="background">
    </div>
    <div class="select-container">
      <div class="wrapper">
        <div class="desn">
          <span>目的地</span>
          <a href class="iteam" id="HOT-btn" onmouseover="showContinent()">热门</a>
          <a href class="iteam" id="EU-btn" onmouseover="showContinent()">欧洲</a>
          <a href class="iteam" id="AS-btn" onmouseover="showContinent()">亚洲</a>
          <a href class="iteam" id="NA-btn" onmouseover="showContinent()">北美洲</a>
          <a href class="iteam" id="OA-btn" onmouseover="showContinent()">大洋洲</a>
          <a href class="iteam" id="SA-btn" onmouseover="showContinent()">南美洲</a>
          <a href class="iteam" id="AF-btn" onmouseover="showContinent()">非洲</a>
        </div>
        <div class="dstn-detail">
          <hr>
          <div id="HOT" class="continent">
            <a href class="iteam">法国</a>
            <a href class="iteam">日本</a>
            <a href class="iteam">韩国</a>
            <a href class="iteam">泰国</a>
            <a href class="iteam">马来西亚</a>
            <a href class="iteam">香港</a>
            <a href class="iteam">意大利</a>
            <a href class="iteam">越南</a>
            <a href class="iteam">澳门</a>
          </div>
          <div id="EU" class="continent">
            <a href class="iteam">法国</a>
            <a href class="iteam">英国</a>
            <a href class="iteam">瑞士</a>
            <a href class="iteam">西班牙</a>
            <a href class="iteam">荷兰</a>
            <a href class="iteam">奥地利</a>
            <a href class="iteam">意大利</a>
            <a href class="iteam">梵蒂冈</a>
            <a href class="iteam">比利时</a>
          </div>
          <div id="AS" class="continent">
            <a href class="iteam">中国</a>
            <a href class="iteam">日本</a>
            <a href class="iteam">韩国</a>
            <a href class="iteam">泰国</a>
            <a href class="iteam">马来西亚</a>
            <a href class="iteam">香港</a>
            <a href class="iteam">新加坡</a>
            <a href class="iteam">越南</a>
            <a href class="iteam">澳门</a>
          </div>
          <div id="NA" class="continent">
            <a href class="iteam">美国</a>
            <a href class="iteam">加拿大</a>
            <a href class="iteam">墨西哥</a>
            <a href class="iteam">古巴</a>
            <a href class="iteam">巴哈马</a>
            <a href class="iteam">巴拿马</a>
            <a href class="iteam">哥斯达黎加</a>
            <a href class="iteam">牙买加</a>
            <a href class="iteam">开曼群岛</a>
          </div>
          <div id="OA" class="continent">
            <a href class="iteam">澳大利亚</a>
            <a href class="iteam">新西兰</a>
            <a href class="iteam">斐济</a>
            <a href class="iteam">帕劳</a>
            <a href class="iteam">关岛</a>
            <a href class="iteam">库克群岛</a>
            <a href class="iteam">艾普罗菲尔</a>
            <a href class="iteam">瓦努阿图</a>
          </div>
          <div id="SA" class="continent">
            <a href class="iteam">巴西</a>
            <a href class="iteam">阿根廷</a>
            <a href class="iteam">智利</a>
            <a href class="iteam">玻利维亚</a>
            <a href class="iteam">哥伦比亚</a>
            <a href class="iteam">厄瓜多尔</a>
            <a href class="iteam">乌拉圭</a>
            <a href class="iteam">委内瑞拉</a>
            <a href class="iteam">巴拉圭</a>
          </div>
          <div id="AF" class="continent">
            <a href class="iteam">埃及</a>
            <a href class="iteam">摩洛哥</a>
            <a href class="iteam">南非</a>
            <a href class="iteam">肯尼亚</a>
            <a href class="iteam">毛里求斯</a>
            <a href class="iteam">津巴布韦</a>
            <a href class="iteam">突尼斯</a>
            <a href class="iteam">尼日利亚</a>
            <a href class="iteam">塞舌尔</a>
          </div>
        </div>
      </div>
    </div>
    <div class="break">
      <button class="articlebtn">
        <router-link to="/community/submit">发布游记</router-link>
      </button>
    </div>
    <div class="card-container">
      <div class="wrapper">
        <a href="mateDetail">
          <div class="card">
            <img src="../../static/images/cardbg.jpg">
            <span class="card-item" id="mate-title">大阪一日游</span>
            <span class="card-item" id="mate-time">2019.4.11</span>
            <span class="card-item" id="mate-dstn">大阪</span>
          </div>
        </a>
        <a href="mateDetail">
          <div class="card">
            <img src="../../static/images/cardbg.jpg">
            <span class="card-item" id="mate-title">东京一日游</span>
            <span class="card-item" id="mate-time">2019.4.18</span>
            <span class="card-item" id="mate-dstn">东京</span>
          </div>
        </a>
        <a href="mateDetail">
          <div class="card">
            <img src="../../static/images/cardbg.jpg">
            <span class="card-item" id="mate-title">北海道一日游</span>
            <span class="card-item" id="mate-time">2019.4.18</span>
            <span class="card-item" id="mate-dstn">北海道</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "community"
};

function showContinent() {
  let targId;
  let e = window.event;
  targId = e.target.id;
  switch (targId) {
    case (targId = "HOT-btn"):
      document.getElementById("HOT").style.display = "block";
      document.getElementById("EU").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "EU-btn"):
      document.getElementById("EU").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "AS-btn"):
      document.getElementById("AS").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("EU").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "NA-btn"):
      document.getElementById("NA").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("EU").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "OA-btn"):
      document.getElementById("OA").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("EU").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "SA-btn"):
      document.getElementById("SA").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("EU").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("AF").style.display = "none";
      break;
    case (targId = "AF-btn"):
      document.getElementById("AF").style.display = "block";
      document.getElementById("HOT").style.display = "none";
      document.getElementById("EU").style.display = "none";
      document.getElementById("AS").style.display = "none";
      document.getElementById("NA").style.display = "none";
      document.getElementById("OA").style.display = "none";
      document.getElementById("SA").style.display = "none";
      break;
  }
}
</script>
<style scoped>
.background {
            width:100%;
            height:500px;
            background-image: url(../../static/images/creat-bg25.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
}


.select-container {
  width: 100%;
  height: 210px;
  overflow: hidden;
}

.wrapper {
  width: 1200px;
  margin: auto;
  height: auto;
  position: relative;
}


.desn {
  padding: 20px 0;
}

.desn > :first-child {
  display: inline-block;
  width: 80px;
  border-right: 1px #ececec solid;
  margin-right: 20px;
}

hr {
  height: 0;
  border: none;
  border-top: #ececec solid 1px;
  box-sizing: border-box;
}

.desn .iteam {
  display: inline-block;
  width: 70px;
  text-align: center;
}

.desn a:hover {
  font-weight: bold;
  transition: 0.3s;
  color: black;
}

.desn span {
  float: left;
}

.continent {
  margin-left: 90px;
  position: absolute;
  display: none;
  margin-top: 20px;
}

.continent .iteam {
  display: inline-block;
  width: 100px;
  margin: 8px 0 8px 30px;
}

#HOT-btn {
  color: black;
  font-weight: bold;
}

#HOT {
  display: block;
}

.iteam:hover {
  color: #929292;
  transition: 0.3s;
}

.break {
  width: 100%;
  height: 60px;
  background: #f4f4f4;
}

.card-container {
  width: 100%;
  height: auto;
  padding-top: 20px;
  overflow: hidden;
}

.card {
  width: 270px;
  margin-left: 21px;
  margin-bottom: 20px;
  height: 380px;
  border: 1px solid #f1f1f1;
  /* box-shadow: 0 0 3px 1PX lightgrey; */
  border-radius: 5px;
  display: inline-block;
}

.card:hover {
  box-shadow: 0px 0px 10px 4px lightgrey;
  transition: 0.5s;
}

.card img {
  display: block;
  width: 270px;
  height: 270px;
  border-radius: 5px 5px 0 0;
}

.card-item {
  display: inline-block;
  width: 220px;
  height: 30px;

  margin-top: 2px;
  padding: 3px 30px 0 20px;
}

#mate-dstn,
#mate-time {
  font-weight: bold;
}


button {
  width: 100px;
  height: 40px;
  display: block;
  border: 1px solid #dcdfe6;
  outline: none;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  float: right;
  position: relative;
  top: 10px;
  right: 10%;
}
</style>
