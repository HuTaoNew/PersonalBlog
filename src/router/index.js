import Vue from 'vue'
import Router from 'vue-router'

import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/',
      name: 'showBlogs',
      component: ShowBlog
    },
    {
      path: '/single/:id',
      name: 'singleBlog',
      component: SingleBlog
    },
    {
      path: '/edit/:id',
      name: 'editBlog',
      component: EditBlog
    }
  ]
})
