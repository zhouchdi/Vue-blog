import Vue from 'vue'
import Router from 'vue-router'
// import Loading from '@/common/_loading'
import Loading from '@/components/my/my'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    }
  ]
})
