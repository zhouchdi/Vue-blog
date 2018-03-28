import Vue from 'vue'
import Router from 'vue-router'
// import Loading from '@/common/_loading'
import v from '@/common/article/comment'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'v',
      component: v
    }
  ]
})
