<template>
  <div class="add-blog">
      <h2>写博客</h2>
      <form action="" method="post">
          <div>
              <span>主题：</span>
              <input type="text" name="subject">
          </div>
          <div>
              <span>内容：</span>
              <textarea name="content" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
              <span>分类：</span>
              <input type="checkbox" name="classify" value="vue">Vue.js
              
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
