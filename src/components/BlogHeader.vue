<template>
    <nav>
      <ul>
        <li>
          <!--<a href="/">Home</a>-->
          <router-link exact to="/">博客</router-link>
          <router-link exact to="/add">写博客</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader"
    }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }

  li{
    display: inline-block;
    margin: 0, 10px;
  }

  a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }

  nav{
    background: crimson;
    padding: 30px 0;
  }
  
  .router-link-active{
    background: #rgba(255,255,255, 0.8);
    color: #444;
  }
</style>
