<template>
  <div class="content-container">
    <h3>游记发布</h3>
    <div class="article">
      <form action method="POST">
        <div class="article-title">
          <input type="text" placeholder="标题" name="article_title">
        </div>
        <div ref="editor" style="text-align:left"></div>
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
      editorContent: ""
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
  margin-bottom: 130px;
}

.article {
  width: 1000px;
  height: auto;
  margin: auto;
}

.article input {
  width: 988px;
  height: 30px;
  border: 1px solid #dcdfe6;
  padding-left: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  outline: none;
  border-radius: 4px;
}

.article-content {
  margin-bottom: 20px;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: normal;
}

button {
  width: 100px;
  height: 40px;
  display: block;
  margin: auto;
  border: 1px solid #dcdfe6;
  outline: none;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
}

button:hover {
  color: #ec414d;
  border: 1px solid #ec414d;
}
</style>