<template>
  <div class="content-container">
    <h3>寻伴发布</h3>
    <div class="article">
      <form action method="POST">
        <input type="text" placeholder="标题" class="article-title" name="title">
        <input type="text" placeholder="目的地" class="article-title" name="place">
        <input type="text" placeholder="联系方式" class="article-title" name="tel">
        <div class="date">
          <span class="demonstration">选择日期</span>
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <input name="time" type="hidden" v-model="time">
        <div ref="editor" style="text-align:left" class="subcontent"></div>
        <button type="submit" id="btn" v-on:click="getContent">提交</button>
      </form>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "matesubmit",
  data() {
    return {
      editorContent: "",
      time: ""
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>
<style scoped>
.content-container {
  width: 100%;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;
}

.article {
  width: 1000px;
  height: auto;
  margin: auto;
}

.article-title {
  width: 988px;
  height: 40px;
  border: 1px solid #dcdfe6;
  padding-left: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  outline: none;
  border-radius: 4px;
}

.article-content {
  margin-bottom: 20px;
  position: relative;
  z-index: 0;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: normal;
}

.date {
  margin-bottom: 20px;
  height: auto;
}

#btn {
  width: 100px;
  height: 40px;
  display: block;
  margin: auto;
  margin-top: 30px;
  border: 1px solid #dcdfe6;
  outline: none;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

#btn:hover {
  color: #ec414d;
  border: 1px solid #ec414d;
}
.subcontent {
  position: relative;
  z-index: 0;
}

</style>