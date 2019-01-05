// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;



//自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    } else if (binding == 'narrow') {
      el.style.maxWidth = '560px';
    }

    if (binding.arg == 'column'){

    } else if (binding.arg == ''){

    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
