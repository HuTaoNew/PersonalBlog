<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <router-view/>
  </div>
</template>

<script>
  import BlogHeader from "./components/BlogHeader";

export default {
  name: 'App',
  components: {BlogHeader},
  comments:{
    BlogHeader
  }
}
</script>


<style>

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
