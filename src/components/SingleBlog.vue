<template>
    <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
      data(){
          return {
            id: this.$route.params.id,
            blog: {}
          }
      },
      created() {
          this.$http.get("https://wd3862536764lzhyoq.wilddogio.com/post.json")
            .then((data) => {
              return data.json();
              //this.blog = data.body;
            })
            .then((data) => {
              this.blog = data[this.id];
              console.log(this.blog);
            })

      }
    }
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>
