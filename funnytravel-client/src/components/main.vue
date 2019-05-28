<template>
  <div id="app">
    <div class="block">
      <el-carousel height="640px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="search">
      <a href>
        <span>全部</span>
      </a>
      <a href>
        <span>目的地</span>
      </a>
      <a href>
        <span>攻略</span>
      </a>
      <form action>
        <input type="text" placeholder="东京">
        <button>搜索</button>
      </form>
    </div>
    <div class="middle-container">
      <div class="wrapper">
        <div class="news">
          <div class="news-title">
            <router-link to="/news">旅游新闻</router-link>
          </div>
          <div class="cardbox">
            <div class="card">
              <div class="front"></div>
              <div class="back">
                <span>
                  <router-link to="/news"><h3>九寨沟</h3></router-link>
                  <p>九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。</p>
                </span>
              </div>
            </div>
            <div class="card">
              <div class="front"></div>
              <div class="back">
                <span>
                  <h3>九寨沟</h3>
                  <p>九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。</p>
                </span>
              </div>
            </div>
            <div class="card">
              <div class="front"></div>
              <div class="back">
                <span>
                  <h3>九寨沟</h3>
                  <p>九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。</p>
                </span>
              </div>
            </div>
            <div class="card">
              <div class="front"></div>
              <div class="back">
                <span>
                  <h3>九寨沟</h3>
                  <p>九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <button id="hot-article-btn">热门游记</button>
          <button id="new-article-btn">最新游记</button>
          <div id="hot-article">
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
          </div>
          <div id="new-article">
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
            <div class="card2">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main"
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(3) {
  background: url("../../static/images/indexbg1.jpg");
}
.el-carousel__item:nth-child(4) {
  background: url("../../static/images/indexbg2.jpg");
}
.el-carousel__item:nth-child(5) {
  background: url("../../static/images/indexbg3.jpg");
}
.el-carousel__item:nth-child(6) {
  background: url("../../static/images/indexbg4.jpg");
}
.search {
  width: 552px;
  height: 80px;
  position: relative;
  top: -360px;
  margin: auto;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
}

.search a {
  width: 184px;
  height: 20px;
  text-align: center;
  text-decoration: none;
  margin-top: 4px;
  padding: 2px 0 6px 0;
  color: white;
  float: left;
}

.search input {
  height: 34px;
  width: 448px;
  float: left;
  margin: 7px 0 0 8px;
  outline: none;
  padding-left: 5px;
  border: none;
  border-radius: 3px 0 0 3px;
}

.search button {
  height: 34px;
  width: 80px;
  margin-top: 7px;
  background: #ec414d;
  border: none;
  outline: none;
  border-radius: 0 3px 3px 0;
  font-weight: 900;
  font-size: 18px;
  color: white;
  cursor: pointer;
}

.middle-container {
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
}

.wrapper {
  width: 1200px;
  height: auto;
  margin: auto;
  position: relative;
}

.news {
  width: 1200px;
  height: 500px;
  margin-bottom: 40px;
  /* background: yellow; */
}

.news-title a {
  font-size: 20px;
  color: #929292;
}

.news-title::before {
  content: "";
  width: 536px;
  height: 1px;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  margin-right: 24px;
  margin-bottom: 8px;
}

.news-title::after {
  content: "";
  width: 536px;
  height: 1px;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  margin-left: 24px;
  margin-bottom: 8px;
}
.article {
  width: 1200px;
  height: 610px;
  /* background: lightblue; */
}

.article a {
  display: inline-block;
  width: 90px;
  text-align: center;
}

#hot-article-btn::before {
  content: "";
  width: 493px;
  height: 1px;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  margin-right: 24px;
  margin-bottom: 8px;
}

#new-article-btn::after {
  content: "";
  width: 494px;
  height: 1px;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  margin-left: 24px;
  margin-bottom: 8px;
}

.article button {
  box-sizing: border-box;
  outline: none;
  font-size: 20px;
  border: none;
  background: white;
  cursor: pointer;
}

#hot-article,
#new-article {
  width: 1200px;
  height: auto;
  position: absolute;
  display: none;
  /* background: lightgreen; */
  padding: 30px 0;
}

.article button:focus-within {
  color: #929292;
}

#hot-article,
#new-article {
  display: none;
}

.article:not(:focus-within) #hot-article-btn {
  color: #929292;
}
.article:not(:focus-within) #hot-article {
  display: block;
}

#hot-article-btn:focus-within ~ #hot-article {
  display: block;
}
#new-article-btn:focus-within ~ #new-article {
  display: block;
}

.cardbox {
  margin-top: 30px;
}
.card {
  float: left;
  height: 400px;
  width: 294px;
  perspective: 2000;
  position: relative;
}
.card div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  backface-visibility: hidden;
  transition: all 1.5s;
}
.card:nth-child(2) {
  margin: 0 8px;
}
.card:nth-child(3) {
  margin-right: 8px;
}

.card:nth-child(1) .front,
.card:nth-child(1) .back {
  background: url("../../static/images/c1.jpg");
  background-size: 294px 400px;
}
.card:nth-child(2) .front,
.card:nth-child(2) .back {
  background: url("../../static/images/c2.jpg");
  background-size: 294px 400px;
}
.card:nth-child(3) .front,
.card:nth-child(3) .back {
  background: url("../../static/images/c3.jpg");
  background-size: 294px 400px;
}
.card:nth-child(4) .front,
.card:nth-child(4) .back {
  background: url("../../static/images/c4.jpg");
  background-size: 294px 400px;
}

.card .back span {
  display: inline-block;
  padding: 5px 5px 0px;
  margin-top: 250px;
  height: 145px;
  width: 284px;
  background: white;
}

.card .back span h3 {
  text-align: center;
}
.card .back {
  transform: rotateY(180deg);
}

.card:hover .front {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(360deg);
}

.card2 {
  height: 250px;
  width: 292px;

  float: left;
  border: 1px solid lightgrey;
}
.card2:nth-child(2),
.card2:nth-child(6) {
  margin: 0 8px;
}
.card2:nth-child(3),
.card2:nth-child(7) {
  margin-right: 8px;
}
.card2:nth-child(-n + 4) {
  margin-bottom: 8px;
}
.card2 span {
  display: inline-block;
  width: 292px;
  height: 95px;
  margin-top: 155px;
  background: white;
}
#hot-article .card2:nth-child(1) {
  background: url("../../static/images/card1.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(2) {
  background: url("../../static/images/card2.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(3) {
  background: url("../../static/images/card3.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(4) {
  background: url("../../static/images/card4.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(5) {
  background: url("../../static/images/card5.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(6) {
  background: url("../../static/images/card6.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(7) {
  background: url("../../static/images/card7.jpg");
  background-size: 292px 165px;
}
#hot-article .card2:nth-child(8) {
  background: url("../../static/images/card8.jpg");
  background-size: 292px 165px;
}

#new-article .card2:nth-child(1) {
  background: url("../../static/images/card8.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(2) {
  background: url("../../static/images/card7.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(3) {
  background: url("../../static/images/card6.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(4) {
  background: url("../../static/images/card5.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(5) {
  background: url("../../static/images/card4.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(6) {
  background: url("../../static/images/card3.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(7) {
  background: url("../../static/images/card2.jpg");
  background-size: 292px 165px;
}
#new-article .card2:nth-child(8) {
  background: url("../../static/images/card1.jpg");
  background-size: 292px 165px;
}

</style>