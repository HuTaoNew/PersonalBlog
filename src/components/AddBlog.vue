<template>
  <div id="add-blog">
    <h2>写博客</h2>
    <form action method="post" v-if="!submitted">
      <div>
        <label>主题：</label>
        <!-- required 属性规定必需在提交之前填写输入字段 -->
        <input type="text" name="subject" v-model="blog.subject" required>
      </div>
      <div>
        <label>内容：</label>
        <textarea name="content" id cols="30" rows="10" v-model="blog.content"></textarea>
      </div>
      <div id="checkboxes">
        <label>分类：</label>
        <input type="checkbox" name="classify" value="vue" v-model="blog.categories">Vue.js
        <input type="checkbox" name="classify" value="angular4" v-model="blog.categories">Angular4
        <input type="checkbox" name="classify" value="node" v-model="blog.categories">Node.js
        <input type="checkbox" name="classify" value="react" v-model="blog.categories">React.js
      </div>
      <div>
        <label>作者：</label>
        <select v-model="blog.author">
          <option v-for="(author, index) in authors" :key="index">{{author}}</option>
        </select>
      </div>
      <button type="button" name="btnAddBlog" @click.prevent="addBlog()">添加博客</button>
    </form>
    <hr>

    <h3 v-if="submitted">您的博客发送成功！！</h3>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.subject}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        subject: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Mike", "Roso", "Jerry", "Tom", "Jason"],
      submitted: false
    };
  },
  methods: {
    addBlog() {
      // this.$http
      //   .post("https://wd3862536764lzhyoq.wilddogio.com/post.json", {
      //     title: this.blog.subject,
      //     body: this.blog.content,
      //     userId: 1
      //   })
      //   .then(data => {
      //     console.log(data);
      //     this.submitted = true;
      //   });
      this.$axios
        .post("https://wd3862536764lzhyoq.wilddogio.com/post.json", {
          title: this.blog.subject,
          body: this.blog.content,
          userId: 1
        })
        .then(data => {
          console.log(data);
          this.submitted = true;
        });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea, select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 0px;
}

#checkboes input{
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #ffffff;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #cccccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>
