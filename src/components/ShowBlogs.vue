<template>
  <div v-theme="'wide'" class="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="(blog, index) in blogs" :key="index" class="single-blog">
      <router-link :to="'/single/' + blog.id">
        <h2 v-rainbow="">{{blog.title}}</h2>
      </router-link>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'show-blogs',
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  computed:{
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  methods:{
    fetchData(){
      axios.get("/user");
    }

  },
  created(){
    // this.$http.get("https://wd3862536764lzhyoq.wilddogio.com/post.json")
    // .then((data) => {
    //   console.log(data.json());
    //   return data.json();
    //   // this.blogs = data.body;
    //   // console.log(this.blogs);
    // }).then((data) => {
    //     let blogsArray = [];
    //     let blog = {};
    //     for (let key in data){
    //       console.log(data[key]);
    //       data[key].id = key;
    //       //blogsArray.push(data[key]);
    //     }
    //     this.blogs = blogsArray;
    //     console.log(this.blogs[0]);
    //   console.log(this.blogs[1]);
    //   })
    axios.get("https://wd3862536764lzhyoq.wilddogio.com/post.json")
      .then(response => {
        for (let key in response.data) {
          response.data[key].id = key;
        }
        console.log(response.data);
        return response.data;
      })
      .then( data => {
        this.blogs = data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eeeeee;
  border: 1px dotted #aaa;
}

  #show-blogs a{
    color: #444;
    text-decoration: none;
  }

  input[type=text]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
